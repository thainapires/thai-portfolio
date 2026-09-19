import type { CSSProperties } from 'react';
import type { IconType } from 'react-icons';
import { SiGithub, SiGitlab } from 'react-icons/si';

import type { ContributionCalendarData, ContributionDay, ContributionWeek } from '@/lib/contributions';
import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ViewportRoughNotation } from '@/components/ui/ViewportRoughNotation';
import { useDictionary } from '@/components/i18n/DictionaryProvider';

const levelClassNames: Record<ContributionDay['level'], string> = {
    0: 'border-border/70 bg-background/80',
    1: 'border-primary-soft bg-primary-soft/45',
    2: 'border-primary-soft bg-primary-soft',
    3: 'border-primary/40 bg-primary/70',
    4: 'border-primary-strong/50 bg-primary-strong',
};

const absenceClassNames: Record<NonNullable<ContributionDay['absence']>, string> = {
    vacation: 'border-accent-yellow bg-accent-yellow/75',
    'day-off': 'border-accent-green-soft bg-accent-green-soft',
    holiday: 'border-accent-pink bg-accent-pink/75',
};

const absenceMarkerClassNames: Record<NonNullable<ContributionDay['absence']>, string> = {
    vacation: 'bg-accent-yellow',
    'day-off': 'bg-accent-green-soft',
    holiday: 'bg-accent-pink',
};

function formatNumber(value: number, locale: string): string {
    return new Intl.NumberFormat(locale).format(value);
}

function formatDate(date: string, locale: string): string {
    return new Intl.DateTimeFormat(locale, { month: 'short', day: '2-digit', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));
}

function getMonthLabel(week: ContributionWeek, locale: string): string {
    const firstOfMonth = week.days.find((day) => day.date.endsWith('-01'));
    if (!firstOfMonth) return '';
    return new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${firstOfMonth.date}T00:00:00Z`));
}

function StatCard({ label, value, icon: Icon, tone = 'primary' }: { label: string; value: number; icon?: IconType; tone?: 'primary' | 'pink' | 'orange' }) {
    const { locale } = useDictionary();
    return (
        <div className="rounded-soft border border-border bg-surface/75 px-4 py-3 shadow-card sm:px-5 sm:py-4">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase text-text-secondary">
                {Icon && <Icon className={`size-4 ${tone === 'pink' ? 'text-accent-pink' : tone === 'orange' ? 'text-accent-orange' : 'text-primary'}`} aria-hidden="true" />}
                {label}
            </div>
            <p className={`mt-1 mb-0 text-2xl font-extrabold leading-none sm:text-3xl ${tone === 'pink' ? 'text-accent-pink' : tone === 'orange' ? 'text-accent-orange' : 'text-primary-strong'}`}>
                {formatNumber(value, locale)}
            </p>
        </div>
    );
}

function ContributionCell({ day }: { day: ContributionDay }) {
    const { dictionary, locale } = useDictionary();
    const t = dictionary.contributions;
    const absenceLabels = { vacation: t.vacation, 'day-off': t.dayOff, holiday: t.holiday };
    const cellClassName = day.absence ? absenceClassNames[day.absence] : levelClassNames[day.level];
    const absenceLabel = day.absence ? ', ' + absenceLabels[day.absence] : '';

    return (
        <div className="group relative aspect-square w-full min-w-0 max-w-3 rounded-[3px] sm:max-w-3.5">
            <span
                className={`block size-full rounded-[3px] border transition-transform duration-150 group-hover:scale-125 motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${cellClassName}`}
                aria-label={`${formatDate(day.date, locale)}: ${day.total} ${day.total === 1 ? t.contributionOne : t.contributionOther}, ${day.github} GitHub ${t.and} ${day.gitlab} GitLab${absenceLabel}`}
            />

            <div className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 hidden w-44 -translate-x-1/2 rounded-soft border border-border bg-surface px-4 py-3 text-left text-xs shadow-floating group-hover:block group-focus-within:block">
                <p className="m-0 font-mono font-extrabold text-text-primary">{formatDate(day.date, locale)}</p>
                <div className="mt-3 grid gap-2 text-text-secondary">
                    <span className="flex items-center justify-between gap-3"><span className="inline-flex items-center gap-2"><span className="size-2 rounded-pill bg-primary" />GitHub</span><strong className="text-text-primary">{day.github}</strong></span>
                    <span className="flex items-center justify-between gap-3"><span className="inline-flex items-center gap-2"><span className="size-2 rounded-pill bg-accent-orange" />GitLab</span><strong className="text-text-primary">{day.gitlab}</strong></span>
                    {day.absence && <span className="flex items-center justify-between gap-3"><span className="inline-flex items-center gap-2"><span className={"size-2 rounded-pill " + absenceMarkerClassNames[day.absence]} />{absenceLabels[day.absence]}</span></span>}
                    <span className="mt-1 flex items-center justify-between gap-3 border-t border-border pt-2 font-extrabold text-text-primary"><span>Total</span><span>{day.total}</span></span>
                </div>
                <span className="absolute left-1/2 top-full -translate-x-1/2 border-6 border-transparent border-t-surface" aria-hidden="true" />
            </div>
        </div>
    );
}

function ContributionGrid({ calendar }: { calendar: ContributionCalendarData }) {
    const { dictionary, locale } = useDictionary();
    const t = dictionary.contributions;
    const weekGridStyle: CSSProperties = {
        gridTemplateColumns: `repeat(${calendar.weeks.length}, minmax(0, 1fr))`,
    };

    return (
        <div className="w-full">
            <div className="min-w-0">
                <div className="ml-8 grid gap-0.5 text-[10px] font-semibold text-text-secondary sm:ml-10 sm:gap-1.5 sm:text-xs" style={weekGridStyle}>
                    {calendar.weeks.map((week) => (
                        <span className="relative z-10 min-w-0 overflow-visible whitespace-nowrap" key={week.firstDate}>
                            {getMonthLabel(week, locale)}
                        </span>
                    ))}
                </div>

                <div className="mt-5 grid grid-cols-[1.75rem_1fr] gap-1.5 sm:grid-cols-[2rem_1fr] sm:gap-2">
                    <div className="grid grid-rows-7 gap-0.5 text-[10px] font-semibold text-text-secondary sm:gap-1.5 sm:text-xs">
                        <span className="row-start-2">{t.weekdays[0]}</span>
                        <span className="row-start-4">{t.weekdays[1]}</span>
                        <span className="row-start-6">{t.weekdays[2]}</span>
                    </div>

                    <div className="grid gap-0.5 sm:gap-1.5" style={weekGridStyle}>
                        {calendar.weeks.map((week) => (
                            <div className="grid grid-rows-7 justify-items-center gap-0.5 sm:gap-1.5" key={week.firstDate}>
                                {week.days.map((day) => <ContributionCell day={day} key={day.date} />)}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-end gap-x-2 gap-y-1 text-xs font-bold text-text-secondary">
                    <span>{t.less}</span>
                    {([0, 1, 2, 3, 4] as const).map((level) => (
                        <span className={`size-3.5 rounded-[3px] border ${levelClassNames[level]}`} key={level} aria-hidden="true" />
                    ))}
                    <span>{t.more}</span>
                    <span className="ml-3 size-3.5 rounded-[3px] border border-accent-yellow bg-accent-yellow/75" aria-hidden="true" />
                    <span>{t.vacation}</span>
                    <span className="size-3.5 rounded-[3px] border border-accent-green-soft bg-accent-green-soft" aria-hidden="true" />
                    <span>{t.dayOff}</span>
                    <span className="size-3.5 rounded-[3px] border border-accent-pink bg-accent-pink/75" aria-hidden="true" />
                    <span>{t.holiday}</span>
                </div>
            </div>
        </div>
    );
}

export function ContributionActivity({ calendar }: { calendar: ContributionCalendarData }) {
    const { dictionary } = useDictionary();
    const t = dictionary.contributions;
    const isConfigured = calendar.configuredSources.length > 0;

    return (
        <section id="contributions" className="relative scroll-mt-24 border-b border-border py-14 sm:py-16 lg:scroll-mt-28 lg:py-20">
            <Container>
                <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
                    <div className="max-w-2xl">
                        <SectionLabel>GITHUB + GITLAB</SectionLabel>
                        <h2 className="mt-3 mb-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                            {t.titleStart}{' '}
                            <ViewportRoughNotation
                                type="highlight"
                                show
                                color="#D5CBFE"
                                strokeWidth={2}
                                animationDuration={800}
                            >
                                {t.titleHighlight}
                            </ViewportRoughNotation>
                            <span className="text-primary">.</span>
                        </h2>
                        <p className="m-0 max-w-xl text-base leading-7 text-text-secondary sm:text-lg">
                            {t.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-3 sm:min-w-[30rem]">
                        <StatCard label={t.total} value={calendar.total} />
                        <StatCard label="GitHub" value={calendar.githubTotal} icon={SiGithub} />
                        <StatCard label="GitLab" value={calendar.gitlabTotal} icon={SiGitlab} tone="orange" />
                    </div>
                </div>

                <div className="hidden md:block mt-10 rounded-card border border-border bg-surface/85 p-4 shadow-card sm:p-6 lg:p-8">
                    <ContributionGrid calendar={calendar} />

                    {!isConfigured && (
                        <p className="mt-6 mb-0 rounded-soft border border-primary-soft bg-primary-soft/25 px-4 py-3 text-sm font-semibold text-text-secondary">
                            {t.notConfigured}
                        </p>
                    )}

                    {isConfigured && calendar.unavailableSources.length > 0 && (
                        <p className="mt-6 mb-0 text-sm font-semibold text-text-secondary">
                            {t.unavailable.replace('{sources}', calendar.unavailableSources.join(', '))}
                        </p>
                    )}
                </div>
            </Container>
        </section>
    );
}
