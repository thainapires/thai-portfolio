import type { Hobby } from '@/data/portfolio';
import type { CSSProperties } from 'react';

interface HobbyCardProps {
    hobby: Hobby;
}

function HobbyDoodle({ doodle }: { doodle?: Hobby['doodle'] }) {
    const maskStyle = (src: string): CSSProperties => ({
        WebkitMaskImage: "url('" + src + "')",
        WebkitMaskPosition: 'center',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        maskImage: "url('" + src + "')",
        maskPosition: 'center',
        maskRepeat: 'no-repeat',
        maskSize: 'contain',
    });

    if (doodle === 'plant') {
        return <span className="pointer-events-none absolute right-2 -bottom-4 hidden h-10 w-6 -rotate-12 bg-emerald-600 sm:block" style={maskStyle("/images/hobbies/plant.svg")} aria-hidden="true" />;
    }

    if (doodle === 'star') {
        return <span className="pointer-events-none absolute right-2 -bottom-4 hidden size-4 -rotate-12 bg-yellow-500 sm:block" style={maskStyle("/images/hobbies/star.svg")} aria-hidden="true" />;
    }

    if (doodle === 'stars') {
        return <span className="pointer-events-none absolute right-2 -bottom-4 hidden size-10 rotate-12 bg-fuchsia-800 sm:block" style={maskStyle("/images/hobbies/stars.svg")} aria-hidden="true" />;
    }

    if (doodle === 'plane') {
        return <span className="pointer-events-none absolute right-2 -bottom-1 hidden h-6 w-8 rotate-8 bg-blue-500 sm:block" style={maskStyle("/images/assets/plane.svg")} aria-hidden="true" />;
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
