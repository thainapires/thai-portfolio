import { CalendarDays, House, Languages, MapPin } from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ViewportRoughNotation } from '@/components/ui/ViewportRoughNotation';

import { AboutPortraitCollage } from './AboutPortraitCollage';
import { Doodle } from './decorations/Doodle';
import { useDictionary } from '@/components/i18n/DictionaryProvider';
import { useLocalizedPortfolio } from '@/data/useLocalizedPortfolio';

const aboutImageSrc = '/images/me.png';

export function AboutMe() {
    const { dictionary } = useDictionary();
    const { statistics } = useLocalizedPortfolio();
    const t = dictionary.about;
    return (
        <section id="about" className="border-t border-border py-14 md:py-16 lg:py-20">
            <Container className="grid items-center gap-10 lg:grid-cols-12 xl:gap-16">
                <AboutPortraitCollage imageSrc={aboutImageSrc} />

                <div className="order-1 md:order-1 md:mx-auto md:w-full md:max-w-3xl lg:order-none lg:mx-0 lg:max-w-none lg:col-span-8 xl:col-span-7">
                    <SectionLabel>{t.label}</SectionLabel>

                    <h3 className="my-6 max-w-2xl text-3xl leading-tight font-bold sm:text-4xl md:max-w-3xl md:text-3xl lg:max-w-2xl lg:text-5xl xl:text-5xl">
                        {t.titleStart}{' '}

                        <ViewportRoughNotation
                            type="circle"
                            show
                            color="var(--color-primary-soft)"
                            strokeWidth={2}
                            padding={[0, 3, 5, 10]}
                            animationDuration={800}
                        >
                            <em className="font-serif font-bold italic text-primary">
                                {'  '}{t.titleHighlight}{'  '}
                            </em>
                        </ViewportRoughNotation>

                        {t.titleEnd}
                    </h3>

                    <p className="m-0 max-w-2xl text-lg leading-8 text-text-secondary sm:text-xl md:max-w-3xl md:text-lg lg:max-w-2xl lg:text-xl">
                        {t.descriptionStart}{' '}

                        <span className="ml-1 inline-block">
                            <ViewportRoughNotation
                                type="highlight"
                                show
                                color="var(--color-primary-soft)"
                                strokeWidth={2}
                                animationDuration={800}
                            >
                                {t.descriptionHighlight}
                            </ViewportRoughNotation>
                        </span>
                        .
                    </p>

                    <div className="mt-6 hidden max-w-2xl gap-3 text-sm font-semibold text-text-secondary sm:grid sm:text-base md:max-w-3xl md:grid-cols-2 md:gap-x-8 lg:max-w-2xl lg:grid-cols-1 lg:gap-x-0">
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 md:contents lg:flex">
                            <span className="inline-flex items-center gap-2">
                                <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
                                {t.location}
                            </span>

                            <span className="inline-flex items-center gap-2">
                                <House className="size-4 shrink-0 text-primary" aria-hidden="true" />
                                {t.remote}
                            </span>

                            <span className="inline-flex items-center gap-2">
                                <CalendarDays className="size-4 shrink-0 text-primary" aria-hidden="true" />
                                {t.timezone}
                            </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 md:contents lg:flex">
                            <span className="inline-flex items-center gap-2">
                                <Languages className="size-4 shrink-0 text-primary" aria-hidden="true" />
                                {t.portuguese} <span className="text-primary" aria-hidden="true">•</span> {t.native}
                            </span>

                            <span className="inline-flex items-center gap-2">
                                <Languages className="size-4 shrink-0 text-primary" aria-hidden="true" />
                                {t.english} <span className="text-primary" aria-hidden="true">•</span> {t.fluent}
                            </span>
                        </div>
                    </div>

                    <Doodle className="mt-7 hidden w-36 text-primary sm:block sm:w-40" />
                </div>

                <div className="order-3 grid gap-4 justify-center text-base font-semibold text-text-secondary sm:hidden">
                    <span className="inline-flex items-center gap-2">
                        <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
                        {t.location}
                    </span>

                    <span className="inline-flex items-center gap-2">
                        <House className="size-4 shrink-0 text-primary" aria-hidden="true" />
                        {t.remote}
                    </span>

                    <span className="inline-flex items-center gap-2">
                        <CalendarDays className="size-4 shrink-0 text-primary" aria-hidden="true" />
                        {t.timezone}
                    </span>

                    <span className="inline-flex items-center gap-2">
                        <Languages className="size-4 shrink-0 text-primary" aria-hidden="true" />
                        {t.portuguese} <span className="text-primary" aria-hidden="true">•</span> {t.native}
                    </span>

                    <span className="inline-flex items-center gap-2">
                        <Languages className="size-4 shrink-0 text-primary" aria-hidden="true" />
                        {t.english} <span className="text-primary" aria-hidden="true">•</span> {t.fluent}
                    </span>

                    <Doodle className="mx-auto mt-5 w-36 text-primary" />
                </div>

                <div
                    className="order-4 grid rounded-2xl border border-border bg-surface sm:order-none sm:grid-cols-3 sm:border-none sm:bg-transparent md:order-3 lg:order-none lg:col-span-full lg:border-y lg:border-border xl:col-span-2 xl:grid-cols-1"
                    aria-label={t.statisticsLabel}
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