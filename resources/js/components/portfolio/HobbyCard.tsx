import type { Hobby } from '@/data/portfolio';

interface HobbyCardProps {
    hobby: Hobby;
}

export function HobbyCard({ hobby }: HobbyCardProps) {
    const Icon = hobby.icon;

    return (
        <article className="overflow-hidden rounded-card border border-border bg-surface shadow-card transition-[box-shadow,transform] duration-200 hover:-translate-y-1 hover:shadow-soft">
            <div className="relative aspect-[4/3] overflow-hidden rounded-t-card bg-primary-soft">
                <img className="h-full w-full object-cover" src={hobby.imageSrc} alt={hobby.imageAlt} loading="lazy" />
            </div>
            <div className="px-5 pb-7 xl:px-7 xl:pb-8">
                <span className="relative z-2 -mt-7 mb-5 grid size-14 place-items-center rounded-pill border border-border bg-surface text-primary-strong shadow-[0_14px_30px_rgb(21_19_19_/_0.09)]">
                    <Icon size={23} aria-hidden="true" />
                </span>
                <h3 className="m-0 mb-3 text-2xl leading-tight font-bold">{hobby.title}</h3>
                <p className="m-0 text-sm leading-7 text-text-secondary">{hobby.description}</p>
            </div>
        </article>
    );
}
