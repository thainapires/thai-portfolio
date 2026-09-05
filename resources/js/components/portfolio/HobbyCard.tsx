import type { Hobby } from '@/data/portfolio';

interface HobbyCardProps {
    hobby: Hobby;
}

function HobbyDoodle({ doodle }: { doodle?: Hobby['doodle'] }) {
    if (doodle === 'sun') {
        return <span className="pointer-events-none absolute right-4 bottom-7 hidden font-hand text-3xl leading-none text-text-primary/45 sm:block" aria-hidden="true">☼</span>;
    }

    if (doodle === 'star') {
        return <span className="pointer-events-none absolute right-4 bottom-6 hidden rotate-12 font-hand text-3xl leading-none text-text-primary/45 sm:block" aria-hidden="true">✧</span>;
    }

    if (doodle === 'heart') {
        return <span className="pointer-events-none absolute right-4 top-1/2 hidden -rotate-12 font-hand text-3xl leading-none text-text-primary/50 sm:block" aria-hidden="true">♡</span>;
    }

    if (doodle === 'plane') {
        return <span className="pointer-events-none absolute right-4 bottom-7 hidden rotate-12 text-2xl leading-none text-text-primary/45 sm:block" aria-hidden="true">✈</span>;
    }

    if (doodle === 'underline') {
        return <span className="pointer-events-none absolute right-5 bottom-5 hidden h-2 w-16 rotate-[-5deg] rounded-pill border-b-2 border-primary/45 sm:block" aria-hidden="true" />;
    }

    return null;
}

export function HobbyCard({ hobby }: HobbyCardProps) {
    const Icon = hobby.icon;

    return (
        <article className={`group relative overflow-visible rounded-md border border-border bg-surface/95 p-2.5 shadow-card transition-[box-shadow,transform] duration-200 hover:-translate-y-1 hover:rotate-0 hover:shadow-soft sm:p-3 ${hobby.rotationClassName} motion-reduce:transition-none motion-reduce:hover:transform-none`}>
            <span className={`pointer-events-none absolute z-3 h-7 w-20 border border-white/45 opacity-80 shadow-sm ${hobby.tapeClassName}`} aria-hidden="true" />

            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-primary-soft">
                <img className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100" src={hobby.imageSrc} alt={hobby.imageAlt} loading="lazy" />
            </div>

            <div className="relative px-1 pb-2 pt-3">
                <div className="mb-2 flex items-center gap-2 text-primary-strong">
                    <Icon className="size-4 shrink-0" aria-hidden="true" />
                    <h3 className="m-0 text-lg leading-tight font-extrabold text-text-primary xl:text-xl">{hobby.title}</h3>
                </div>
                <p className="relative z-2 m-0 max-w-[19rem] text-sm font-medium leading-6 text-text-secondary">{hobby.description}</p>
                <HobbyDoodle doodle={hobby.doodle} />
            </div>
        </article>
    );
}
