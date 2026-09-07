import { motion, useReducedMotion } from 'motion/react';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa6';

import { PrimaryButton, TextButton } from '@/components/ui/Buttons';
import { Container } from '@/components/ui/Container';
import { ViewportRoughNotation } from '@/components/ui/ViewportRoughNotation';

import { Doodle } from './decorations/Doodle';
import { DotPattern } from './decorations/DotPattern';

const terminalLines = [
    {
        prompt: 'thaina@portfolio',
        command: 'whoami',
        output: 'developer • curious mind • loves to learn new things • loves art',
    },
    {
        prompt: 'thaina@portfolio',
        command: 'git status',
        output: 'On branch always-learning.',
        extra: 'Your branch is up to date with curiosity.',
    },
    {
        prompt: 'thaina@portfolio',
        command: 'npm run craft',
        output: 'Building delightful experiences... done',
    },
];

function HeroTerminalArrow() {
    const shouldReduceMotion = useReducedMotion();

    const body = "M172 82C145 27 91 13 50 35C35 43 24 54 18 65";
    const head = "M34 54L18 65L22 46";

    if (shouldReduceMotion) {
        return (
            <svg
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 z-20 hidden w-36 -translate-x-2/3 -translate-y-2/3 -rotate-3 text-text-primary md:block lg:w-52 lg:-translate-x-3/4"
                viewBox="0 0 176 112"
                fill="none"
            >
                <path
                    d={body}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                />

                <path
                    d={head}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                />
            </svg>
        );
    }

    return (
        <motion.svg
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 z-20 hidden w-36 -translate-x-2/3 -translate-y-2/3 -rotate-3 text-text-primary md:block lg:w-52 lg:-translate-x-3/4"
            viewBox="0 0 176 112"
            fill="none"
        >
            <motion.g
                animate={{
                    y: [0, -2, 0],
                    rotate: [-1, 1, -1],
                }}
                transition={{
                    delay: 1.5,
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <motion.path
                    d={body}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                        delay: 0.45,
                        duration: 0.9,
                        ease: [0.45, 0, 0.2, 1],
                    }}
                />

                <motion.path
                    d={head}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                        delay: 1.18,
                        duration: 0.32,
                        ease: "easeOut",
                    }}
                />
            </motion.g>
        </motion.svg>
    );
}

export function Hero() {
    return (
        <section id="top" className="relative grid flex-1 overflow-x-hidden overflow-y-visible lg:min-h-svh lg:-mt-28">
            <div className="pointer-events-none absolute inset-0 overflow-x-hidden overflow-y-visible" aria-hidden="true">
                <img
                    className="absolute z-0 hidden h-auto max-w-none select-none lg:block lg:-bottom-0 lg:-right-0 lg:w-100 opacity-50"
                    src="/images/hero/right-inferior-paper.png"
                    alt=""
                />
            </div>

            <Container className="relative z-10 grid items-center justify-center gap-6 py-8 sm:gap-7 sm:py-10 lg:min-h-full md:grid-cols-[minmax(0,22rem)_minmax(0,28rem)] md:gap-4 lg:grid-cols-[minmax(0,28rem)_minmax(0,36rem)] lg:gap-8 lg:py-16 xl:py-20">
                <div className="reveal-on-load relative z-10 mx-auto w-full max-w-md min-w-0 text-center sm:max-w-lg md:mx-0 md:text-left md:justify-self-end lg:max-w-md xl:max-w-lg">
                    <p className="mb-2 text-lg font-medium sm:mb-3 sm:text-2xl">
                        <span className="relative inline-block">
                            <img
                                aria-hidden="true"
                                className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[calc(100%+2rem)] max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-2 select-none sm:w-[calc(100%+2.5rem)]"
                                src="/images/assets/tape2.png"
                                alt=""
                            />
                            <span className="relative z-10">Hey, I'm</span>
                        </span>
                    </p>
                    
                    <h1 className="leading-none mb-4">
                        <span className="block text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
                            <span className="relative inline-block">
                                Thainá
                            </span>
                        </span>
                            <strong className="mx-auto mt-2 block w-fit -rotate-3 font-hand text-4xl font-bold text-primary sm:text-6xl md:mx-0 md:ml-16 lg:text-5xl">
                                Full Stack Developer!
                            </strong>
                    </h1>

                    <p className="mx-auto mb-5 max-w-sm text-base font-medium leading-relaxed text-text-primary sm:mb-8 sm:text-xl md:mx-0">
                        Somewhere between code & creativity. I build digital things with
                         <span className="mx-2 inline-block"><ViewportRoughNotation
                            type="circle"
                            show
                            color="#8B6FF7"
                            strokeWidth={2}
                            animationDuration={800}
                        > curiosity</ViewportRoughNotation></span>, thoughtful code and a little personality.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:justify-start">
                        <PrimaryButton className="min-h-11 px-5 text-xs sm:px-6" href="#about">
                            ABOUT ME
                            <FaArrowRight size={14} />
                        </PrimaryButton>

                        <TextButton className="text-xs" href="#work">
                            VIEW MY WORK
                            <FaArrowDown size={14} />
                        </TextButton>
                    </div>
                </div>

                <div className="relative mx-auto grid w-full max-w-sm min-w-0 place-items-center px-2 pt-0 pb-4 sm:max-w-lg sm:px-4 sm:py-0 md:mx-0 md:max-w-md md:justify-self-start md:px-0 md:py-0 lg:max-w-xl">                   
                    
                    <span aria-hidden="true" className="absolute right-4 top-0 aspect-square w-20 rotate-12 rounded-[42%_58%_48%_52%] bg-accent-pink-soft sm:w-32" />

                    <span aria-hidden="true" className="absolute bottom-0 left-0 aspect-square w-24 -rotate-12 rounded-[58%_42%_54%_46%] bg-accent-yellow-soft sm:w-40" />

                    <DotPattern className="absolute right-0 top-1/4 w-24 text-text-primary sm:w-40" />

                    <Doodle className="absolute bottom-4 right-4 z-10 w-20 -rotate-6 text-primary sm:w-32" />

                    <div className="reveal-on-load relative z-10 w-full rounded-2xl border border-text-primary bg-[#1b191f] p-2 shadow-floating transition duration-500 ease-out hover:-translate-y-1 hover:shadow-xl sm:-rotate-2 sm:p-3 motion-reduce:transition-none motion-reduce:hover:transform-none">
                        <HeroTerminalArrow />
                        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#211f27]">
                            <div className="flex items-center justify-between border-b border-white/10 bg-[#2c2934] px-3 py-2 sm:px-4 sm:py-3">
                                <div className="flex items-center gap-2" aria-hidden="true">
                                    <span className="size-3 rounded-full bg-accent-pink" />
                                    <span className="size-3 rounded-full bg-accent-yellow" />
                                    <span className="size-3 rounded-full bg-primary" />
                                </div>

                                <span className="hidden font-mono text-xs font-bold text-white/60 sm:block">
                                    ~/thainapires/home
                                </span>
                            </div>

                            <div className="space-y-4 p-3 font-mono text-xs leading-relaxed text-white sm:space-y-6 sm:p-6 sm:text-base">
                                <div className="space-y-3 sm:space-y-4">
                                    {terminalLines.map(({ prompt, command, output, extra }) => (
                                        <div key={command}>
                                            <p className="break-words">
                                                <span className="text-primary">{prompt}</span>
                                                <span className="text-white/45">:${' '}</span>
                                                <span className="text-accent-yellow">{command}</span>
                                            </p>

                                            <p className="mt-1 max-w-sm text-white/70">{output}</p>
                                            {extra && (
                                                <p className="mt-1 max-w-sm text-white/70">{extra}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap items-center gap-2 border-t border-white/10 pt-3 text-xs font-bold uppercase text-white/50 sm:pt-4">
                                    <span className="rounded-full bg-white/10 px-3 py-1.5">React</span>
                                    <span className="rounded-full bg-white/10 px-3 py-1.5">Laravel</span>
                                    <span className="rounded-full bg-white/10 px-3 py-1.5">Design</span>
                                    <span className="inline-flex items-center gap-2 text-primary">
                                        <span className="size-2 animate-pulse rounded-full bg-primary" />
                                        ready
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
