import { professionalHighlights } from '@/data/portfolio';
import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ProfessionalHighlightCard } from './ProfessionalHighlightCard';
import { Star } from './decorations/Star';

export function ProfessionalHighlights() {
    return (
        <section id="work" className="section-y relative scroll-mt-24 overflow-hidden lg:scroll-mt-28">
            <Star className="pointer-events-none absolute right-[8%] top-20 hidden size-6 rotate-12 text-primary/70 lg:block" />

            <Container>
                <div className="relative mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-2xl">
                        <SectionLabel>PROFESSIONAL JOURNEY</SectionLabel>
                        <h2 className="mt-3 mb-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                            Things I've <em className="font-serif font-bold italic text-primary">helped</em> build<span className="text-primary">.</span>
                        </h2>
                        <p className="m-0 max-w-lg text-base leading-7 text-text-secondary sm:text-lg">
                            A few things I've worked on professionally.<br className="hidden sm:block" />
                            Different problems, real impact.
                        </p>
                    </div>

                    <p className="hidden max-w-xs rotate-[-7deg] pt-4 font-hand text-3xl font-bold leading-none text-primary-strong lg:block" aria-hidden="true">
                        Building real things<br />
                        with real impact. ✦
                        <span className="mt-1 block h-1 w-32 rotate-[-2deg] rounded-pill bg-primary" />
                    </p>
                </div>

                <div className="relative">
                    <span className="pointer-events-none absolute -left-4 top-1/2 hidden w-20 -translate-y-1/2 rotate-[-12deg] font-hand text-4xl font-bold text-primary/80 lg:block" aria-hidden="true">↜</span>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {professionalHighlights.map((highlight) => (
                            <ProfessionalHighlightCard key={highlight.number} highlight={highlight} />
                        ))}
                    </div>
                </div>

                <p className="mt-8 text-center font-hand text-3xl font-bold leading-none text-primary-strong" aria-hidden="true">
                    and many more...
                    <span className="ml-2 inline-block rotate-12 text-primary">↝</span>
                </p>
            </Container>
        </section>
    );
}
