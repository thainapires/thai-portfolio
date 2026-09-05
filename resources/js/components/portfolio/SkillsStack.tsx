import { mainStackSkills, otherStackSkills } from '@/data/portfolio';
import type { StackSkill, StackTool } from '@/data/portfolio';
import { Star } from '@/components/portfolio/decorations/Star';
import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';

function SkillCard({ skill }: { skill: StackSkill }) {
    const Icon = skill.icon;

    return (
        <article data-main-skill-card className={`group relative grid aspect-[4/5] min-h-40 content-center justify-items-center overflow-visible rounded-soft border border-border bg-surface px-4 py-6 text-center shadow-card transition-[box-shadow,transform] duration-200 hover:-translate-y-1 hover:shadow-soft sm:min-h-44 ${skill.cardClassName} motion-reduce:transition-none motion-reduce:hover:transform-none`}>
            <img className={`pointer-events-none absolute -top-5 w-24 max-w-[58%] opacity-85 drop-shadow-sm ${skill.tapeClassName}`} src="/images/assets/tape-skills.png" alt="" aria-hidden="true" />

            <span className="pointer-events-none absolute inset-x-4 bottom-2 h-px bg-border/70" aria-hidden="true" />

            <Icon className="mb-6 size-16 text-primary transition-transform duration-200 group-hover:scale-105 sm:size-20 motion-reduce:transition-none motion-reduce:group-hover:scale-100" aria-hidden="true" />
            <h3 className="m-0 text-base font-extrabold leading-tight sm:text-lg">{skill.name}</h3>
        </article>
    );
}

function SkillBadge({ skill }: { skill: StackTool }) {
    const Icon = skill.icon;

    return (
        <li>
            <span className="group inline-flex items-center gap-2 rounded-pill border border-border bg-surface/80 px-4 py-2 text-sm font-bold text-text-primary shadow-card transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-primary-soft hover:bg-primary-soft/35 motion-reduce:transition-none motion-reduce:hover:transform-none">
                <Icon className="size-5 text-primary transition-transform duration-200 group-hover:-rotate-6 motion-reduce:transition-none motion-reduce:group-hover:rotate-0" aria-hidden="true" />
                {skill.name}
            </span>
        </li>
    );
}

function LoveStatement() {
    return (
        <p className="relative mx-auto mt-12 mb-7 max-w-3xl text-center font-mono text-base leading-8 text-text-primary sm:text-lg">
            <span aria-hidden="true">... </span>
            and other tools and technologies I{' '}
            <span className="relative inline-block font-hand text-3xl font-bold leading-none text-primary-strong">
                love
                <span className="absolute -bottom-1 left-0 h-1 w-full -rotate-2 rounded-pill bg-primary" aria-hidden="true" />
                <span className="absolute -right-5 -top-3 text-xl text-primary" aria-hidden="true">♡</span>
            </span>{' '}
            working with.
        </p>
    );
}

export function SkillsStack() {
    return (
        <section id="stack" className="relative scroll-mt-24 overflow-hidden border-y border-border py-14 sm:py-16 lg:scroll-mt-28 lg:py-20">
            <Star className="pointer-events-none absolute left-[7%] top-24 hidden size-5 text-primary sm:block" />
            <Star className="pointer-events-none absolute bottom-28 right-[9%] hidden size-6 rotate-12 text-primary/60 lg:block" />
            <span className="pointer-events-none absolute right-[14%] top-24 hidden font-hand text-2xl leading-tight text-primary-strong/75 rotate-6 xl:block" aria-hidden="true">
                always learning<br />new things
            </span>

            <Container>
                <div className="max-w-2xl">
                    <SectionLabel>SKILLS</SectionLabel>
                    <h2 className="mt-3 mb-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                        My creative toolkit<span className="text-primary">.</span>
                    </h2>
                    <p className="m-0 max-w-xl text-base leading-7 text-text-secondary sm:text-lg">
                        Languages, frameworks and tools I use to turn ideas into working things.
                    </p>
                </div>

                <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 xl:max-w-none xl:grid-cols-6 xl:gap-x-7">
                    {mainStackSkills.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </div>

                <LoveStatement />

                <ul className="mx-auto flex max-w-6xl list-none flex-wrap justify-center gap-3 p-0 sm:gap-4">
                    {otherStackSkills.map((skill) => (
                        <SkillBadge key={skill.name} skill={skill} />
                    ))}
                </ul>
            </Container>
        </section>
    );
}
