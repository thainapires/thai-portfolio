const CONTRIBUTION_REVALIDATE_SECONDS = 60 * 60 * 6;
const DEFAULT_GITHUB_USERNAME = 'thainapires';
const DEFAULT_GITLAB_USERNAME = 'thainapires';
const DEFAULT_GITLAB_BASE_URL = 'https://gitlab.com';

export interface ContributionDay {
    date: string;
    github: number;
    gitlab: number;
    total: number;
    level: 0 | 1 | 2 | 3 | 4;
    absence: 'vacation' | 'day-off' | 'holiday' | null;
}

export interface ContributionWeek {
    firstDate: string;
    days: ContributionDay[];
}

export interface ContributionCalendarData {
    weeks: ContributionWeek[];
    total: number;
    githubTotal: number;
    gitlabTotal: number;
    configuredSources: string[];
    unavailableSources: string[];
    generatedAt: string;
}

interface GitHubContributionResponse {
    data?: {
        user?: {
            contributionsCollection?: {
                contributionCalendar?: {
                    weeks?: Array<{
                        contributionDays?: Array<{
                            date: string;
                            contributionCount: number;
                        }>;
                    }>;
                };
            };
        } | null;
    };
    errors?: Array<{ message: string }>;
}

type GitLabCalendarResponse = Record<string, number | string>;

const personalAbsences: Array<{ start: string; end: string; type: NonNullable<ContributionDay['absence']> }> = [
    { start: '2025-09-29', end: '2025-10-03', type: 'vacation' },
    { start: '2025-10-06', end: '2025-10-10', type: 'vacation' },
    { start: '2025-12-29', end: '2025-12-30', type: 'day-off' },
    { start: '2026-01-02', end: '2026-01-02', type: 'day-off' },
    { start: '2026-08-03', end: '2026-08-07', type: 'vacation' },
    { start: '2026-06-26', end: '2026-06-26', type: 'day-off' },
    { start: '2025-12-24', end: '2025-12-25', type: 'holiday' },
    { start: '2025-12-31', end: '2026-01-01', type: 'holiday' },
    { start: '2026-02-16', end: '2026-02-18', type: 'holiday' },
    { start: '2026-04-03', end: '2026-04-03', type: 'holiday' },
    { start: '2026-04-21', end: '2026-04-21', type: 'holiday' },
    { start: '2026-05-01', end: '2026-05-01', type: 'holiday' },
    { start: '2026-06-04', end: '2026-06-04', type: 'holiday' },
    { start: '2026-09-07', end: '2026-09-07', type: 'holiday' },
];

function toDateKey(date: Date): string {
    return date.toISOString().slice(0, 10);
}

function addDays(date: Date, amount: number): Date {
    const nextDate = new Date(date);
    nextDate.setUTCDate(nextDate.getUTCDate() + amount);

    return nextDate;
}

function getCalendarRange(): { startDate: Date; endDate: Date; from: string; to: string } {
    const now = new Date();
    const endDate = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
    const firstVisibleDate = addDays(endDate, -364);
    const startDate = addDays(firstVisibleDate, -firstVisibleDate.getUTCDay());
    const toDate = addDays(endDate, 1);

    return {
        startDate,
        endDate,
        from: `${toDateKey(startDate)}T00:00:00Z`,
        to: `${toDateKey(toDate)}T00:00:00Z`,
    };
}

function getContributionLevel(total: number): ContributionDay['level'] {
    if (total === 0) {
        return 0;
    }

    if (total <= 2) {
        return 1;
    }

    if (total <= 5) {
        return 2;
    }

    if (total <= 9) {
        return 3;
    }

    return 4;
}

function createEmptyContributionMap(startDate: Date, endDate: Date): Map<string, ContributionDay> {
    const days = new Map<string, ContributionDay>();

    for (let date = startDate; date <= endDate; date = addDays(date, 1)) {
        const dateKey = toDateKey(date);

        days.set(dateKey, {
            date: dateKey,
            github: 0,
            gitlab: 0,
            total: 0,
            level: 0,
            absence: null,
        });
    }

    return days;
}

function applyPersonalAbsences(days: Map<string, ContributionDay>): void {
    personalAbsences.forEach((absence) => {
        days.forEach((day) => {
            if (day.date >= absence.start && day.date <= absence.end) {
                day.absence = absence.type;
            }
        });
    });
}

async function getGitHubContributions(from: string, to: string): Promise<Map<string, number>> {
    const token = process.env.GITHUB_TOKEN;
    const username = process.env.GITHUB_USERNAME ?? DEFAULT_GITHUB_USERNAME;

    if (!token || !username) {
        throw new Error('GitHub credentials are not configured.');
    }

    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `query UserContributions($login: String!, $from: DateTime!, $to: DateTime!) {
                user(login: $login) {
                    contributionsCollection(from: $from, to: $to) {
                        contributionCalendar {
                            weeks {
                                contributionDays {
                                    date
                                    contributionCount
                                }
                            }
                        }
                    }
                }
            }`,
            variables: {
                login: username,
                from,
                to,
            },
        }),
        next: {
            revalidate: CONTRIBUTION_REVALIDATE_SECONDS,
            tags: ['contribution-calendar'],
        },
    });

    if (!response.ok) {
        throw new Error(`GitHub returned ${response.status}.`);
    }

    const payload = (await response.json()) as GitHubContributionResponse;

    if (payload.errors?.length) {
        throw new Error(payload.errors.map((error) => error.message).join(', '));
    }

    const contributionDays = payload.data?.user?.contributionsCollection?.contributionCalendar?.weeks
        ?.flatMap((week) => week.contributionDays ?? []) ?? [];

    return new Map(contributionDays.map((day) => [day.date, day.contributionCount]));
}

async function getGitLabContributions(): Promise<Map<string, number>> {
    const username = process.env.GITLAB_USERNAME ?? DEFAULT_GITLAB_USERNAME;
    const baseUrl = process.env.GITLAB_BASE_URL ?? DEFAULT_GITLAB_BASE_URL;
    const url = new URL(`/users/${encodeURIComponent(username)}/calendar.json`, baseUrl);

    const response = await fetch(url, {
        next: {
            revalidate: CONTRIBUTION_REVALIDATE_SECONDS,
            tags: ['contribution-calendar'],
        },
    });

    if (!response.ok) {
        throw new Error(`GitLab returned ${response.status}.`);
    }

    const payload = (await response.json()) as GitLabCalendarResponse;

    return new Map(
        Object.entries(payload).map(([date, count]) => [date, Number(count)]),
    );
}

function applySourceContributions(days: Map<string, ContributionDay>, source: 'github' | 'gitlab', contributions: Map<string, number>): void {
    contributions.forEach((count, date) => {
        const day = days.get(date);

        if (!day) {
            return;
        }

        day[source] = count;
    });
}

function finalizeCalendar(days: Map<string, ContributionDay>, startDate: Date): ContributionWeek[] {
    const orderedDays = Array.from(days.values()).map((day) => {
        const total = day.github + day.gitlab;

        return {
            ...day,
            total,
            level: getContributionLevel(total),
        } satisfies ContributionDay;
    });

    const weeks: ContributionWeek[] = [];

    for (let index = 0; index < orderedDays.length; index += 7) {
        weeks.push({
            firstDate: toDateKey(addDays(startDate, index)),
            days: orderedDays.slice(index, index + 7),
        });
    }

    return weeks;
}

export async function getContributionCalendar(): Promise<ContributionCalendarData> {
    const { startDate, endDate, from, to } = getCalendarRange();
    const days = createEmptyContributionMap(startDate, endDate);
    const configuredSources: string[] = [];
    const unavailableSources: string[] = [];

    if (process.env.GITHUB_TOKEN) {
        configuredSources.push('GitHub');

        try {
            applySourceContributions(days, 'github', await getGitHubContributions(from, to));
        } catch (error) {
            console.error('Failed to load GitHub contributions.', error);
            unavailableSources.push('GitHub');
        }
    } else {
        unavailableSources.push('GitHub');
    }

    configuredSources.push('GitLab');

    try {
        applySourceContributions(days, 'gitlab', await getGitLabContributions());
    } catch (error) {
        console.error('Failed to load GitLab contributions.', error);
        unavailableSources.push('GitLab');
    }

    applyPersonalAbsences(days);

    const weeks = finalizeCalendar(days, startDate);
    const allDays = weeks.flatMap((week) => week.days);

    return {
        weeks,
        total: allDays.reduce((sum, day) => sum + day.total, 0),
        githubTotal: allDays.reduce((sum, day) => sum + day.github, 0),
        gitlabTotal: allDays.reduce((sum, day) => sum + day.gitlab, 0),
        configuredSources,
        unavailableSources,
        generatedAt: new Date().toISOString(),
    };
}
