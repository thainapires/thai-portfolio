import { mainStackSkills, otherStackSkills } from '@/data/portfolio';
import type { StackSkill, StackTool } from '@/data/portfolio';

import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';

import { motion, useReducedMotion } from 'motion/react';

import { ViewportRoughNotation } from '@/components/ui/ViewportRoughNotation';

function SkillCard({ skill }: { skill: StackSkill }) {
    const Icon = skill.icon;

    return (
        <article data-main-skill-card className={`group relative grid aspect-[4/5] min-h-40 content-center justify-items-center overflow-visible px-4 py-6 text-center transition-[filter,transform] duration-200 hover:-translate-y-1 hover:drop-shadow-xl sm:min-h-44 ${skill.cardClassName} motion-reduce:transition-none motion-reduce:hover:transform-none`}>
            <img className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-fill drop-shadow-sm" src="/images/skills/paper-card.png" alt="" aria-hidden="true" />

            <img className={`pointer-events-none absolute -top-2 z-20 w-24 max-w-[58%] opacity-85 drop-shadow-sm ${skill.tapeClassName}`} src="/images/assets/tape-skills.png" alt="" aria-hidden="true" />

            <Icon className="relative z-10 mt-3 mb-6 size-16 text-primary transition-transform duration-200 group-hover:scale-105 sm:size-20 motion-reduce:transition-none motion-reduce:group-hover:scale-100" aria-hidden="true" />

            <h3 className="relative z-10 m-0 text-base font-extrabold leading-tight sm:text-lg">{skill.name}</h3>
        </article>
    );
}

function LearningArrow() {
    const shouldReduceMotion = useReducedMotion();

    const body = 'M8 5C42 20 61 47 56 72C53 87 43 97 28 104';
    const head = 'M39 104L28 104L32 93';

    if (shouldReduceMotion) {
        return (
            <svg aria-hidden="true" className="absolute -right-14 top-14 w-20 rotate-6 text-primary-strong/75" viewBox="0 0 72 118" fill="none">
                <path d={body} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                <path d={head} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </svg>
        );
    }

    return (
        <motion.svg aria-hidden="true" className="absolute -right-14 top-14 w-20 rotate-6 text-primary-strong/75" viewBox="0 0 72 118" fill="none" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }}>
            <motion.path
                d={body}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: { pathLength: 1, opacity: 1 },
                }}
                transition={{
                    delay: 0.15,
                    duration: 0.8,
                    ease: [0.45, 0, 0.2, 1],
                }}
            />

            <motion.path
                d={head}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: { pathLength: 1, opacity: 1 },
                }}
                transition={{
                    delay: 0.82,
                    duration: 0.3,
                    ease: 'easeOut',
                }}
            />
        </motion.svg>
    );
}

function LearningNote() {
    return (
        <div className="pointer-events-none absolute right-[12%] top-24 hidden text-primary-strong/75 xl:block" aria-hidden="true">
            <span className="absolute -left-16 top-0 size-12 -rotate-12 bg-current [mask-image:url('/images/assets/handdrawn-star.svg')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] [-webkit-mask-image:url('/images/assets/handdrawn-star.svg')] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]" />

            <span className="block rotate-6 font-hand text-3xl font-semibold leading-tight">
                always learning
                <br />
                new things
            </span>

            <LearningArrow />
        </div>
    );
}

function LoveStatement() {
    return (
        <p className="relative mx-auto mt-12 mb-7 max-w-3xl text-center font-mono text-base leading-8 text-text-primary sm:text-lg">
            <span aria-hidden="true">... </span>

            and other tools and technologies I{' '}

            <ViewportRoughNotation type="underline" show color="#6049bc" strokeWidth={2} animationDuration={800}>
                <span className="relative inline-block font-hand text-3xl font-bold leading-none text-primary-strong">
                    love

                    <img src="/images/assets/heart.svg" className="absolute -right-2 -top-3 w-3 rotate-12 opacity-90 sm:w-4" alt="" aria-hidden="true" />
                </span>
            </ViewportRoughNotation>{' '}

            working with.
        </p>
    );
}

export function SkillsStack() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="stack" className="relative scroll-mt-24 overflow-hidden border-y border-border py-14 sm:py-16 lg:scroll-mt-28 lg:py-20">
            <LearningNote />

            <Container>
                <div className="max-w-2xl">
                    <SectionLabel>SKILLS</SectionLabel>

                    <h2 className="mt-3 mb-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                        My{' '}
                        <ViewportRoughNotation type="highlight" show color="#D5CBFE" strokeWidth={2} animationDuration={800}>
                            creative
                        </ViewportRoughNotation>{' '}
                        toolkit
                        <span className="text-primary">.</span>
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

                <OtherToolsMobile shouldReduceMotion={shouldReduceMotion} />

                <ul className="mx-auto hidden max-w-6xl list-none flex-wrap justify-center gap-4 p-0 lg:flex">
                    {otherStackSkills.map((skill) => (
                        <li key={skill.name}>
                            <SkillBadgeContent skill={skill} />
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}

function OtherToolsMobile({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
    if (shouldReduceMotion) {
        return (
            <ul className="mx-auto flex max-w-3xl list-none flex-wrap justify-center gap-3 p-0 sm:gap-4 lg:hidden">
                {otherStackSkills.map((skill) => (
                    <li key={skill.name}>
                        <SkillBadgeContent skill={skill} />
                    </li>
                ))}
            </ul>
        );
    }

    const rows = [
        otherStackSkills.filter((_, index) => index % 2 === 0),
        otherStackSkills.filter((_, index) => index % 2 === 1),
    ];

    return (
        <div className="relative -mx-4 flex flex-col gap-3 overflow-hidden py-1 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)] sm:-mx-6 lg:hidden [-webkit-mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
            <ul className="sr-only">
                {otherStackSkills.map((skill) => (
                    <li key={skill.name}>{skill.name}</li>
                ))}
            </ul>

            {rows.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    aria-hidden="true"
                    className={`portfolio-tools-marquee flex w-max ${rowIndex === 1 ? 'portfolio-tools-marquee--reverse' : ''}`}
                >
                    {[0, 1].map((loopIndex) => (
                        <ul key={loopIndex} className="flex list-none gap-3 p-0 pr-3 sm:gap-4 sm:pr-4">
                            {row.map((skill) => (
                                <li key={`${skill.name}-${loopIndex}`} className="shrink-0">
                                    <SkillBadgeContent skill={skill} />
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            ))}
        </div>
    );
}

function SkillBadgeContent({ skill }: { skill: StackTool }) {
    const Icon = skill.icon;

    return (
        <span className="group inline-flex items-center gap-2 rounded-pill border border-border bg-surface/80 px-4 py-2 text-sm font-bold text-text-primary shadow-card transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-primary-soft hover:bg-primary-soft/35 motion-reduce:transition-none motion-reduce:hover:transform-none">
            <Icon className="size-5 text-primary transition-transform duration-200 group-hover:-rotate-6 motion-reduce:transition-none motion-reduce:group-hover:rotate-0" aria-hidden="true" />
            {skill.name}
        </span>
    );
}