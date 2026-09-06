import { ArrowRight } from 'lucide-react';
import type { Project } from '@/data/portfolio';
import { TextButton } from '@/components/ui/Buttons';
import { DotPattern } from './decorations/DotPattern';
import { Star } from './decorations/Star';

interface ProjectItemProps {
    project: Project;
}

const mockupBackground = {
    violet: 'bg-[linear-gradient(135deg,rgb(221_213_251_/_0.78),rgb(255_253_249_/_0)_66%)]',
    pink: 'bg-[linear-gradient(135deg,rgb(248_216_223_/_0.9),rgb(255_253_249_/_0)_66%)]',
    yellow: 'bg-[linear-gradient(135deg,rgb(248_226_166_/_0.86),rgb(255_253_249_/_0)_66%)]',
} satisfies Record<Project['accent'], string>;

const imageTint = {
    violet: 'bg-primary-soft/45',
    pink: 'bg-accent-pink-soft/55',
    yellow: 'bg-accent-yellow-soft/55',
} satisfies Record<Project['accent'], string>;

function ProjectPreview({ project }: { project: Project }) {
    return (
        <div className="relative z-2 w-full max-w-5xl overflow-hidden rounded-card border border-text-primary/8 bg-surface shadow-soft lg:rounded-[31px]">
            <div className="flex h-12 items-center justify-between gap-4 border-b border-border px-5 sm:h-14 sm:px-8">
                <div className="flex items-center gap-2.5" aria-hidden="true">
                    <span className="size-3 rounded-pill bg-accent-pink" />
                    <span className="size-3 rounded-pill bg-accent-yellow" />
                    <span className="size-3 rounded-pill bg-primary" />
                </div>
                <span className="hidden truncate font-mono text-xs font-bold text-text-secondary sm:block">{project.title.toLowerCase()}.app</span>
            </div>

            <div className={`p-3 sm:p-5 lg:p-6 ${imageTint[project.accent]}`}>
                <div className="overflow-hidden rounded-soft border border-white/70 bg-surface shadow-card">
                    <img className="aspect-[16/10] h-full w-full object-cover" src={project.imageSrc} alt={project.imageAlt} loading="lazy" />
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-xs font-[850] uppercase text-text-secondary sm:gap-3">
                    {project.stats.map((stat) => (
                        <span className="rounded-pill border border-border bg-surface/85 px-3 py-1.5" key={stat}>{stat}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function ProjectItem({ project }: ProjectItemProps) {
    return (
        <article className="grid items-center gap-6 py-3 lg:grid-cols-4 lg:gap-12 xl:gap-16">
            <div className="lg:col-span-1">
                <div className="mb-5 flex items-center gap-5 text-primary-strong">
                    <span className="text-6xl font-[850] leading-none sm:text-7xl lg:text-8xl">{project.number}</span>
                    <i className="h-px w-20 bg-text-primary/60 sm:w-28" aria-hidden="true" />
                </div>
                <h3 className="m-0 mb-4 text-3xl leading-none font-bold sm:text-4xl lg:text-5xl">{project.title}</h3>
                <p className="m-0 mb-7 max-w-2xl text-lg leading-8 text-text-secondary lg:max-w-sm">{project.description}</p>
                <TextButton className="text-button font-[850]" href={project.href}>VIEW PROJECT <ArrowRight size={16} /></TextButton>
            </div>
            <div className={`relative grid min-h-80 place-items-center rounded-[30px] p-4 sm:min-h-96 sm:p-6 lg:col-span-3 lg:min-h-[490px] lg:rounded-large xl:min-h-[570px] ${mockupBackground[project.accent]}`}>
                <DotPattern className="bottom-[3%] left-[4%] h-36 w-52 text-text-primary" />
                <Star className="absolute right-[6%] top-[6%] size-10 text-primary" />
                <ProjectPreview project={project} />
            </div>
        </article>
    );
}
