import { statistics } from '@/data/portfolio';
import { CalendarDays, House, Languages, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ViewportRoughNotation } from '@/components/ui/ViewportRoughNotation';
import { Doodle } from './decorations/Doodle';
import { DotPattern } from './decorations/DotPattern';

const aboutImageSrc = '/images/me.png';

export function AboutMe() {
    return (
        <section id="about" className="border-t border-border py-14 md:py-16 lg:py-20">
            <Container className="grid items-center gap-10 lg:grid-cols-12 xl:gap-16">
                <div className="relative mx-auto grid aspect-[4/5] w-full max-w-xs place-items-center sm:max-w-sm lg:col-span-4 lg:mx-0 xl:col-span-3" aria-label="Placeholder editorial para foto de Thainá">
                    <span className="absolute inset-x-4 top-6 bottom-8 rotate-[-8deg] rounded-[45%_55%_44%_56%] bg-primary-soft" />
                    <DotPattern className="bottom-12 left-0 h-32 w-40 text-text-primary" />
                    <div className="relative z-2 aspect-[33/43] w-4/5 overflow-hidden rounded-[154px_154px_28px_28px] bg-[#d8d5cf] shadow-soft sm:w-5/6">
                        <img className="h-full w-full object-cover" src={aboutImageSrc} alt="Foto de Thainá" />
                    </div>
                    <span className="pointer-events-none absolute left-0 top-28 z-5 inline-flex -translate-x-1/4 -rotate-6 items-center gap-1.5 rounded-pill border border-border bg-surface/90 px-2 py-1 text-[0.68rem] font-extrabold lowercase leading-none text-text-primary shadow-card sm:left-1 sm:top-32 sm:px-2.5 sm:py-1.5 sm:text-xs" aria-hidden="true">
                        <img className="h-3.5 w-auto sm:h-4" src="/images/lgbt-flag.png" alt="" />
                        queer dev
                    </span>
                    <span className="pointer-events-none absolute right-0 top-44 z-5 inline-flex translate-x-1/4 rotate-6 items-center rounded-pill border border-border bg-surface/90 px-2.5 py-1.5 text-xs font-extrabold leading-none text-text-primary shadow-card sm:right-1 sm:top-48" aria-hidden="true">
                        28 y.o.
                    </span>
                    <Doodle className="absolute bottom-8 left-4 z-4 w-28 rotate-[-10deg] text-primary" />
                    <span className="pointer-events-none absolute right-2 top-14 h-8 w-8 rotate-12 bg-primary [mask-image:url('/images/assets/plane.svg')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] [-webkit-mask-image:url('/images/assets/plane.svg')] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]" aria-hidden="true" />
                    <span className="pointer-events-none absolute left-5 -bottom-2 h-7 w-10 rotate-12 bg-primary [mask-image:url('/images/assets/puzzle-piece.svg')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] [-webkit-mask-image:url('/images/assets/puzzle-piece.svg')] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]" aria-hidden="true" />
                    <span className="pointer-events-none absolute left-1 top-10 h-7 w-10 -rotate-12 bg-primary [mask-image:url('/images/assets/pin-location.svg')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] [-webkit-mask-image:url('/images/assets/pin-location.svg')] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]" aria-hidden="true" />
                </div>
                <div className="lg:col-span-8 xl:col-span-7">
                    <SectionLabel>THE PERSON BEHIND THE CODE</SectionLabel>
                    <h3 className="my-6 max-w-2xl text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl xl:text-5xl">I really like 
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
                    <p className="m-0 max-w-2xl text-lg leading-8 text-text-secondary sm:text-xl">
                        Sometimes it's a web application, sometimes a side project, sometimes something that has absolutely nothing to do with code. I just enjoy the process of turning an idea into 
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
                    <div className="mt-6 grid max-w-2xl gap-3 text-sm font-semibold text-text-secondary sm:text-base">
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
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
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                            <span className="inline-flex items-center gap-2">
                                <Languages className="size-4 shrink-0 text-primary" aria-hidden="true" />
                                Portuguese <span className="text-primary" aria-hidden="true">•</span> native
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <Languages className="size-4 shrink-0 text-primary" aria-hidden="true" />
                                English <span className="text-primary" aria-hidden="true">•</span> Fluent
                            </span>
                        </div>
                    </div>
                    <Doodle className="mt-7 w-36 text-primary sm:w-40" />
                </div>
                <div className="grid border-y border-border sm:grid-cols-3 lg:col-span-full xl:col-span-2 xl:grid-cols-1" aria-label="Portfolio statistics">
                    {statistics.map((stat) => (
                        <div className="border-border py-8 text-center sm:[&+&]:border-l xl:[&+&]:border-l-0 xl:[&+&]:border-t" key={stat.label}>
                            <strong className="block text-5xl font-[850] leading-none sm:text-6xl lg:text-7xl">{stat.value}</strong>
                            <span className="mt-2 block text-base font-bold leading-snug text-text-secondary">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
