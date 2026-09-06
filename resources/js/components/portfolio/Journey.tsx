import { ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { journey } from '@/data/portfolio';
import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Star } from './decorations/Star';
import { IoDocument } from 'react-icons/io5';

function DownloadCvButton() {
    const [showTooltip, setShowTooltip] = useState(false);
    const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    useEffect(() => () => clearTimeout(hideTimeoutRef.current), []);

    const revealTooltip = () => {
        setShowTooltip(true);
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = setTimeout(() => setShowTooltip(false), 2000);
    };

    return (
        <div className="relative" onMouseLeave={() => setShowTooltip(false)}>
            <button
                type="button"
                aria-disabled="true"
                aria-describedby="download-cv-tooltip"
                className="inline-flex cursor-help items-center gap-2 rounded-pill border border-border bg-surface px-5 py-3 text-xs font-extrabold uppercase tracking-wide text-text-primary/50 opacity-70 shadow-card"
                onClick={revealTooltip}
                onMouseEnter={revealTooltip}
            >
                <IoDocument className="size-4 text-primary/50" aria-hidden="true" />
                Download CV
            </button>

            <span
                id="download-cv-tooltip"
                role="tooltip"
                className={`pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-pill bg-text-primary px-3 py-1.5 text-xs font-bold text-white shadow-floating transition-opacity duration-150 ${showTooltip ? 'opacity-100' : 'opacity-0'}`}
            >
                Soon
                <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-text-primary" aria-hidden="true" />
            </span>
        </div>
    );
}

export function Journey() {
    const [isExpanded, setIsExpanded] = useState(false);
    const visibleJourney = isExpanded ? journey : journey.slice(0, 2);

    return (
        <section id="journey" className="relative scroll-mt-24 border-y border-border py-14 sm:py-16 lg:scroll-mt-28 lg:py-20">
            <Star className="pointer-events-none absolute right-[10%] top-20 hidden size-6 rotate-12 text-primary/70 lg:block" />
            <Container>
                <div className="max-w-2xl">
                    <SectionLabel>MY JOURNEY</SectionLabel>
                    <h2 className="mt-3 mb-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                        Where I've been &amp; what I've learned<span className="text-primary">.</span>
                    </h2>
                    <p className="m-0 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
                        Every experience has shaped the way I think, build and solve problems today.
                    </p>
                </div>
                <ol id="journey-timeline" className="relative mt-12 list-none space-y-10 p-0 sm:mt-14 sm:space-y-12">
                    <span className="absolute bottom-5 left-2.5 top-5 w-px bg-border sm:left-[8.5rem]" aria-hidden="true" />
                    {visibleJourney.map((entry) => (
                        <li className="relative grid gap-4 sm:grid-cols-[8rem_1rem_1fr] sm:gap-5" key={`${entry.period}-${entry.title}`}>
                            <time className="relative z-1 text-sm font-bold text-text-secondary sm:pt-1 sm:text-right">{entry.period}</time>
                            <span className="absolute left-0 top-1.5 z-2 size-5 rounded-full border-4 border-background bg-primary sm:static sm:mt-1 sm:size-4 sm:border-2" aria-hidden="true" />
                            <div className="pl-8 sm:pl-0">
                                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start sm:gap-6">
                                    <div>
                                        <h3 className="m-0 text-lg font-extrabold leading-tight sm:text-xl">{entry.title}</h3>
                                        <p className="mt-1 mb-0 text-sm font-medium text-text-secondary">{entry.company}</p>
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-secondary"><MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />{entry.location}</span>
                                </div>
                                <p className="mt-3 mb-0 max-w-2xl text-sm leading-6 text-text-secondary sm:text-base">{entry.description}</p>
                                <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
                                    {entry.tags.map((tag) => <li className="rounded-pill bg-primary-soft/60 px-3 py-1 text-xs font-bold text-primary-strong" key={tag}>{tag}</li>)}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ol>
                <div className="mt-10 flex w-fit flex-wrap gap-2">
                    {journey.length > 2 && (
                        <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-pill border border-border bg-surface px-5 py-3 text-xs font-extrabold uppercase tracking-wide text-text-primary shadow-card transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary hover:shadow-soft motion-reduce:transition-none motion-reduce:hover:transform-none"
                            aria-expanded={isExpanded}
                            aria-controls="journey-timeline"
                            onClick={() => setIsExpanded((expanded) => !expanded)}
                        >
                            {isExpanded ? "Show less" : "View all experiences"}
                            {isExpanded ? <ChevronUp className="size-4 text-primary" aria-hidden="true" /> : <ChevronDown className="size-4 text-primary" aria-hidden="true" />}
                        </button>
                    )}
                    <DownloadCvButton />
                </div>
            </Container>
        </section>
    );
}
