import type { ProfessionalHighlight } from '@/data/portfolio';

const paperClassNames: Record<ProfessionalHighlight['paper'], string> = {
    plain: 'bg-surface',
    grid: 'paper-grid bg-surface',
    lined: 'paper-lined bg-surface',
    violet: 'bg-primary-soft/75',
};

function CardDecoration({ decoration }: { decoration?: ProfessionalHighlight['decoration'] }) {
    if (decoration === 'beige-tape') {
        return <img className="pointer-events-none absolute -top-5 left-8 hidden sm:block z-3 w-24 -rotate-12 opacity-75 drop-shadow-sm" src="/images/assets/tape.png" alt="" aria-hidden="true" />;
    }

    if (decoration === 'violet-tape') {
        return <img className="pointer-events-none absolute -right-5 -top-4 hidden sm:block z-3 w-24 rotate-12 opacity-80 drop-shadow-sm" src="/images/assets/tape3.png" alt="" aria-hidden="true" />;
    }

    if (decoration === 'clip') {
        return <span className="paper-clip pointer-events-none absolute -right-2 -top-3 hidden h-14 w-7 rotate-6 sm:block" aria-hidden="true" />;
    }

    if (decoration === 'sticker') {
        return (
            <span className="pointer-events-none absolute -left-5 -top-4 hidden sm:grid size-12 rotate-[-14deg] place-items-center rounded-pill bg-primary text-2xl font-extrabold text-surface shadow-floating" aria-hidden="true">
                :)
            </span>
        );
    }

    return null;
}

export function ProfessionalHighlightCard({ highlight }: { highlight: ProfessionalHighlight }) {
    const Icon = highlight.icon;

    return (
        <article className={`group relative flex min-h-72 flex-col overflow-visible border border-border p-5 shadow-card transition-[box-shadow,transform] duration-200 hover:-translate-y-1 hover:rotate-0 hover:shadow-soft sm:min-h-76 sm:p-6 ${paperClassNames[highlight.paper]} ${highlight.rotationClassName} motion-reduce:transition-none motion-reduce:hover:transform-none`}>
            <CardDecoration decoration={highlight.decoration} />
            <span className="paper-torn-edge pointer-events-none absolute inset-x-0 -bottom-px h-5 text-background" aria-hidden="true" />

            <div className="relative z-2 flex items-start justify-between gap-4">
                <span className="text-4xl font-extrabold leading-none text-primary sm:text-5xl">{highlight.number}</span>
                <span className="grid size-11 shrink-0 place-items-center rounded-pill bg-primary-soft/70 text-primary">
                    <Icon className="size-6" aria-hidden="true" />
                </span>
            </div>

            <h3 className="relative z-2 mt-6 mb-0 text-xl font-extrabold leading-tight text-text-primary sm:text-2xl">{highlight.title}</h3>
            <p className="relative z-2 mt-4 line-clamp-3 text-sm font-medium leading-6 text-text-secondary">{highlight.description}</p>

            <div className="relative z-2 mt-auto flex flex-wrap gap-2 pt-6">
                {highlight.tags.map((tag) => (
                    <span className="rounded-pill border border-primary/60 bg-surface/50 px-3 py-1 text-xs font-extrabold text-primary-strong" key={tag}>{tag}</span>
                ))}
            </div>
        </article>
    );
}
