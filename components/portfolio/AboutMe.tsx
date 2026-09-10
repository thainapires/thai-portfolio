import { statistics } from '@/data/portfolio';

import { CalendarDays, House, Languages, MapPin } from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ViewportRoughNotation } from '@/components/ui/ViewportRoughNotation';

import { AboutPortraitCollage } from './AboutPortraitCollage';
import { Doodle } from './decorations/Doodle';

const aboutImageSrc = '/images/me.png';

export function AboutMe() {
    return (
        <section id="about" className="border-t border-border py-14 md:py-16 lg:py-20">
            <Container className="grid items-center gap-10 lg:grid-cols-12 xl:gap-16">
                <AboutPortraitCollage imageSrc={aboutImageSrc} />

                <div className="order-1 md:order-1 md:mx-auto md:w-full md:max-w-3xl lg:order-none lg:mx-0 lg:max-w-none lg:col-span-8 xl:col-span-7">
                    <SectionLabel>THE PERSON BEHIND THE CODE</SectionLabel>

                    <h3 className="my-6 max-w-2xl text-3xl leading-tight font-bold sm:text-4xl md:max-w-3xl md:text-3xl lg:max-w-2xl lg:text-5xl xl:text-5xl">
                        I really like{' '}

                        <ViewportRoughNotation
                            type="circle"
                            show
                            color="#D5CBFE"
                            strokeWidth={2}
                            padding={[5, 1, 5, 1]}
                            animationDuration={800}
                        >
                            <em className="font-serif font-bold italic text-primary">
                                {'  '}making things{'  '}
                            </em>
                        </ViewportRoughNotation>

                        and making them a little better along the way.
                    </h3>

                    <p className="m-0 max-w-2xl text-lg leading-8 text-text-secondary sm:text-xl md:max-w-3xl md:text-lg lg:max-w-2xl lg:text-xl">
                        Sometimes it's a web application, sometimes a side project, sometimes something that has absolutely nothing to do with code. I just enjoy the process of turning an idea into{' '}

                        <span className="ml-1 inline-block">
                            <ViewportRoughNotation
                                type="highlight"
                                show
                                color="#D5CBFE"
                                strokeWidth={2}
                                animationDuration={800}
                            >
                                something real
                            </ViewportRoughNotation>
                        </span>
                        .
                    </p>

                    <div className="mt-6 hidden max-w-2xl gap-3 text-sm font-semibold text-text-secondary sm:grid sm:text-base md:max-w-3xl md:grid-cols-2 md:gap-x-8 lg:max-w-2xl lg:grid-cols-1 lg:gap-x-0">
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 md:contents lg:flex">
                            <span className="inline-flex items-center gap-2">
                                <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
                                Rio de Janeiro, Brazil
                            </span>

                            <span className="inline-flex items-center gap-2">
                                <House className="size-4 shrink-0 text-primary" aria-hidden="true" />
                                Working remotely
                            </span>

                            <span className="inline-flex items-center gap-2">
                                <CalendarDays className="size-4 shrink-0 text-primary" aria-hidden="true" />
                                UTC-3 (BRT)
                            </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 md:contents lg:flex">
                            <span className="inline-flex items-center gap-2">
                                <Languages className="size-4 shrink-0 text-primary" aria-hidden="true" />
                                Portuguese <span className="text-primary" aria-hidden="true">•</span> Native
                            </span>

                            <span className="inline-flex items-center gap-2">
                                <Languages className="size-4 shrink-0 text-primary" aria-hidden="true" />
                                English <span className="text-primary" aria-hidden="true">•</span> Fluent
                            </span>
                        </div>
                    </div>

                    <Doodle className="mt-7 hidden w-36 text-primary sm:block sm:w-40" />
                </div>

                <div className="order-3 grid gap-4 justify-center text-base font-semibold text-text-secondary sm:hidden">
                    <span className="inline-flex items-center gap-2">
                        <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
                        Rio de Janeiro, Brazil
                    </span>

                    <span className="inline-flex items-center gap-2">
                        <House className="size-4 shrink-0 text-primary" aria-hidden="true" />
                        Working remotely
                    </span>

                    <span className="inline-flex items-center gap-2">
                        <CalendarDays className="size-4 shrink-0 text-primary" aria-hidden="true" />
                        UTC-3 (BRT)
                    </span>

                    <span className="inline-flex items-center gap-2">
                        <Languages className="size-4 shrink-0 text-primary" aria-hidden="true" />
                        Portuguese <span className="text-primary" aria-hidden="true">•</span> Native
                    </span>

                    <span className="inline-flex items-center gap-2">
                        <Languages className="size-4 shrink-0 text-primary" aria-hidden="true" />
                        English <span className="text-primary" aria-hidden="true">•</span> Fluent
                    </span>

                    <Doodle className="mx-auto mt-5 w-36 text-primary" />
                </div>

                <div
                    className="bg-white sm:bg-transparent border-[0.120rem] sm:border-none border-gray-300 rounded-2xl order-4 grid sm:order-none sm:grid-cols-3 md:order-3 lg:order-none lg:col-span-full lg:border-y lg:border-border xl:col-span-2 xl:grid-cols-1"
                    aria-label="Portfolio statistics"
                >
                    {statistics.map((stat) => (
                        <div
                            className="py-8 text-center lg:border-border lg:[&+&]:border-l xl:[&+&]:border-l-0 xl:[&+&]:border-t"
                            key={stat.label}
                        >
                            <strong className="block text-5xl font-[850] leading-none sm:text-6xl lg:text-7xl">
                                {stat.value}{stat.subvalue}
                            </strong>

                            <span className="mt-2 block text-base font-bold leading-snug text-text-secondary">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

            </Container>
        </section>
    );
}