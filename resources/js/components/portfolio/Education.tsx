import { ArrowRight, ExternalLink, GraduationCap, MapPin, Medal } from 'lucide-react';

import { certifications, education } from '@/data/portfolio';
import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ViewportRoughNotation } from '../ui/ViewportRoughNotation';
import { Doodle } from './decorations/Doodle';
import { Star } from './decorations/Star';
import { LiaLinkedin } from 'react-icons/lia';

const certificationsHref = 'https://www.linkedin.com/in/thainapires/details/certifications/';
const educationHref = 'https://www.linkedin.com/in/thainapires/details/education/';

function EducationNote({ label, className = '' }: { label: string; className?: string }) {
    return (
        <div className={`pointer-events-none absolute hidden lg:block ${className}`} aria-hidden="true">
            <div className="relative rounded-sm border border-border bg-background px-4 py-2 shadow-card">
                <img className="absolute -top-3 left-1/2 w-12 -translate-x-1/2 -rotate-2 opacity-80" src="/images/assets/tape.png" alt="" />
                <span className="font-hand text-xl font-semibold leading-none text-text-primary">{label}</span>
            </div>
        </div>
    );
}

const educationNotePositions = ['-right-2 top-2 rotate-6', '-right-2 top-12 -rotate-4'];

export function Education() {
    return (
        <section id="education" className="relative scroll-mt-24 border-y border-border py-14 sm:py-16 lg:scroll-mt-28 lg:py-20">
            <Container>
                <div className="max-w-3xl">
                    <SectionLabel>EDUCATION &amp; LEARNING</SectionLabel>
                    <h2 className="mt-3 mb-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                        Still learning, <em className="font-serif font-bold italic text-primary">always</em><span className="text-primary">.</span>
                    </h2>
                    <p className="m-0 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
                        Formal education gave me a solid foundation. Certifications and continuous learning keep me moving forward.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-2">
                    <article className="relative rounded-soft border border-border bg-surface/80 p-5 shadow-card sm:p-8 lg:p-10">
                        <div className="mb-7 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <span className="grid size-14 shrink-0 rotate-3 place-items-center bg-primary-soft text-text-primary shadow-card">
                                    <GraduationCap className="size-8" aria-hidden="true" />
                                </span>
                                <h3 className="m-0 text-2xl font-extrabold sm:text-3xl">Education</h3>
                            </div>

                            <a
                                className="group/link hidden shrink-0 items-center gap-2 rounded-pill border border-border bg-surface/85 px-4 py-2 text-[0.65rem] font-extrabold uppercase tracking-wide text-text-primary shadow-card transition-[background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary-soft hover:bg-primary-soft/20 hover:shadow-soft motion-reduce:transition-none motion-reduce:hover:transform-none sm:inline-flex"
                                href={educationHref}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <LiaLinkedin size={20}/>
                                View more details
                                <ArrowRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover/link:translate-x-0" aria-hidden="true" />
                            </a>
                        </div>

                        <ol className="relative list-none space-y-10 p-0 sm:space-y-12">
                            <span className="absolute bottom-5 left-2.5 top-5 w-px bg-border sm:left-[7.5rem]" aria-hidden="true" />
                            {education.map((entry, index) => (
                                <li className="relative grid gap-4 sm:grid-cols-[7rem_1rem_1fr] sm:gap-5" key={entry.period}>
                                    <time className="relative z-1 text-sm font-bold text-text-secondary sm:pt-1 sm:text-right">{entry.period}</time>
                                    <span className="absolute left-0 top-1.5 z-2 size-5 rounded-full border-4 border-surface bg-primary sm:static sm:mt-1 sm:size-4 sm:border-2" aria-hidden="true" />
                                    <div className="relative pl-8 sm:pl-0">
                                        <div className="lg:max-w-[75%]">
                                            <h4 className="m-0 text-lg font-extrabold leading-tight sm:text-xl">{entry.title}</h4>
                                            <p className="mt-1 mb-0 text-sm font-medium text-text-secondary">{entry.institution}</p>
                                            <p className="mt-1 mb-0 text-sm font-medium text-text-secondary">{entry.degree}</p>
                                            <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-text-secondary">
                                                <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
                                                {entry.location}
                                            </span>
                                            <p className="mt-3 mb-0 text-sm leading-6 text-text-secondary">{entry.description}</p>
                                        </div>
                                        {entry.note && <EducationNote label={entry.note} className={educationNotePositions[index % educationNotePositions.length]} />}
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </article>

                    <article className="relative rounded-soft border border-border bg-surface/80 p-5 shadow-card sm:p-8 lg:p-10">
                        <div className="mb-7 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <span className="grid size-14 shrink-0 rotate-3 place-items-center bg-primary-soft text-text-primary shadow-card">
                                    <Medal className="size-8" aria-hidden="true" />
                                </span>
                                <h3 className="m-0 text-2xl font-extrabold sm:text-3xl">Certifications</h3>
                            </div>

                            <a
                                className="group/link hidden shrink-0 items-center gap-2 rounded-pill border border-border bg-surface/85 px-4 py-2 text-[0.65rem] font-extrabold uppercase tracking-wide text-text-primary shadow-card transition-[background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary-soft hover:bg-primary-soft/20 hover:shadow-soft motion-reduce:transition-none motion-reduce:hover:transform-none sm:inline-flex"
                                href={certificationsHref}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <LiaLinkedin size={20}/>
                                View all certificates
                                <ArrowRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover/link:translate-x-0" aria-hidden="true" />
                            </a>
                        </div>

                        <ul className="m-0 list-none divide-y divide-border p-0">
                            {certifications.map((certification) => {
                                const Icon = certification.icon;

                                return (
                                    <li className="flex items-center gap-4 py-4 first:pt-0 last:pb-0" key={certification.title}>
                                        <span className="grid size-12 shrink-0 place-items-center rounded-soft text-surface" style={{ backgroundColor: certification.backgroundColor }}>
                                            <Icon color={certification.color} className="size-6" aria-hidden="true" />
                                        </span>
                                        
                                        <div className="min-w-0 flex-1">
                                            <h4 className="m-0 text-base font-extrabold leading-tight">{certification.title}</h4>
                                            <p className="mt-1 mb-0 text-sm text-text-secondary">{certification.issuer} <span aria-hidden="true">·</span> {certification.year}</p>
                                        </div>
                                        <ExternalLink className="size-5 shrink-0 text-text-primary" aria-hidden="true" />
                                    </li>
                                );
                            })}
                        </ul>
                    </article>
                </div>
            </Container>
        </section>
    );
}
