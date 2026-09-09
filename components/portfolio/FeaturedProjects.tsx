import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

import type { Project } from '@/data/portfolio';
import { projects, socialLinks } from '@/data/portfolio';
import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ViewportRoughNotation } from '../ui/ViewportRoughNotation';
import { Hover3D } from '../ui/Hover3D';

const githubProfileHref = socialLinks.find((link) => link.label === 'GitHub')?.href ?? 'https://github.com/thainapires';

function ProjectImage({ project, isFeatured = false }: { project: Project; isFeatured?: boolean }) {
    return (
        <div className={`overflow-hidden rounded-soft border border-border bg-background/70 shadow-card ${isFeatured ? 'lg:rounded-card' : ''}`}>
            <div className="flex h-9 items-center justify-between border-b border-border bg-surface px-4">
                <div className="flex items-center gap-2" aria-hidden="true">
                    <span className="size-2 rounded-pill bg-accent-pink" />
                    <span className="size-2 rounded-pill bg-accent-yellow" />
                    <span className="size-2 rounded-pill bg-primary" />
                </div>
                <span className="max-w-32 truncate font-mono text-xs font-bold text-text-secondary sm:max-w-48">{project.id}</span>
            </div>

            <div className={`${isFeatured ? 'p-3 sm:p-4' : 'p-3'} bg-surface/70`}>
                <div className={`${isFeatured ? '' : 'aspect-video'} grid place-items-center overflow-hidden rounded-lg bg-background/70`}>
                    <img className={`${isFeatured ? 'h-auto' : 'h-full'} w-full object-contain`} src={project.imageSrc} alt={project.imageAlt} loading={isFeatured ? 'eager' : 'lazy'} />
                </div>
            </div>
        </div>
    );
}

function TechTags({ technologies }: { technologies: string[] }) {
    return (
        <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
                <span className="rounded-pill border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-text-secondary" key={technology}>{technology}</span>
            ))}
        </div>
    );
}

function ProjectLinks({ project }: { project: Project }) {
    return (
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-xs font-extrabold uppercase text-text-primary">
            {project.href && (
                <a className="group/link inline-flex items-center gap-2 text-primary-strong transition-colors hover:text-primary motion-reduce:transition-none" href={project.href} target="_blank">
                    View project
                    <ArrowUpRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover/link:translate-x-0 motion-reduce:group-hover/link:translate-y-0" aria-hidden="true" />
                </a>
            )}

            {project.githubHref && (
                <a className="group/link inline-flex items-center gap-2 transition-colors hover:text-primary motion-reduce:transition-none" href={project.githubHref} target="_blank">
                    <FaGithub className="size-4" aria-hidden="true" />
                    GitHub
                    <ArrowUpRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover/link:translate-x-0 motion-reduce:group-hover/link:translate-y-0" aria-hidden="true" />
                </a>
            )}
        </div>
    );
}

function FeaturedProject({ project }: { project: Project }) {
    return (
        <article className="group relative grid gap-6 overflow-hidden rounded-card border border-border bg-surface p-5 shadow-card transition-[box-shadow,transform] duration-200 hover:-translate-y-1 hover:shadow-soft sm:p-6 lg:grid-cols-3 lg:items-center lg:gap-8 lg:p-8 motion-reduce:transition-none motion-reduce:hover:transform-none">
            <img className="pointer-events-none absolute right-6 top-4 hidden w-24 rotate-12 opacity-70 sm:block" src="/images/assets/tape2.png" alt="" aria-hidden="true" />

            <div className="relative z-2 min-w-0 lg:col-span-1">
                <span className="mb-3 block text-6xl font-extrabold leading-none text-primary sm:text-7xl">{project.number}</span>
                <h3 className="m-0 text-3xl font-extrabold leading-tight sm:text-4xl">{project.title}</h3>
                <p className="mt-3 max-w-md text-base leading-7 text-text-secondary">{project.description}</p>
                <div className="mt-5">
                    <TechTags technologies={project.stats} />
                </div>
                <div className="mt-7">
                    <ProjectLinks project={project} />
                </div>
            </div>

            <div className="relative z-2 min-w-0 lg:col-span-2">
                <ProjectImage project={project} isFeatured />
            </div>
        </article>
    );
}

function ProjectBadge() {
    return (
        <svg className="pointer-events-none absolute -right-3 top-16 z-3 size-12 rotate-6 opacity-80" viewBox="0 0 358 354" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M177 354C274.754 354 354 274.754 354 177L177 0C79.2456 0 0 79.2456 0 177C0 274.754 79.2456 354 177 354Z" fill="#A16CE6" />
            <g filter="url(#filter0_d_3009_53)">
                <path d="M354 177C256.246 177 177 97.7544 177 0L354 177Z" fill="#8156B7" />
            </g>
            <g clipPath="url(#clip0_3009_53)">
                <path d="M102.51 262.934C103.085 262.926 103.65 262.786 104.162 262.522C105.002 262.119 105.795 261.624 106.526 261.046C107.903 259.931 109.249 258.743 110.55 257.594L119.02 250.12C128.92 241.387 139.156 232.356 149.199 223.445C149.782 222.926 150.378 222.423 150.976 221.917C153.144 220.081 155.378 218.19 157.061 215.622C157.838 216.626 158.604 217.624 159.36 218.613C161.492 221.401 163.502 224.036 165.724 226.573C168.822 230.114 172.138 233.559 175.344 236.89C176.234 237.814 177.123 238.739 178.01 239.666C179.582 241.311 181.592 241.551 183.67 240.344L183.849 240.24C184.601 239.833 185.316 239.36 185.985 238.827C199.081 227.775 204.304 214.529 201.931 198.35C203.671 197.972 205.397 197.6 207.109 197.233C211.532 196.282 215.71 195.383 219.969 194.434C227.833 192.683 237.134 190.597 246.492 188.417C248.171 188.047 249.791 187.447 251.306 186.635C254.716 184.748 255.846 180.777 253.993 177.194C248.944 167.425 242.458 157.881 233.589 147.159C229.116 141.751 224.455 136.352 219.948 131.129C217.796 128.636 215.648 126.14 213.505 123.64C212.404 122.352 211.315 121.051 210.229 119.749C208.008 117.09 205.713 114.346 203.325 111.755C201.278 109.532 199.217 108.483 197.192 108.642C195.12 108.802 193.167 110.222 191.397 112.863C185.162 122.164 180.243 132.027 174.774 143.973C173.091 147.645 171.442 151.377 169.847 154.986C169.176 156.499 168.509 158.005 167.844 159.502C166.138 159.655 164.414 159.783 162.744 159.907C158.749 160.203 154.618 160.511 150.615 161.167C141.97 162.644 133.801 166.165 126.785 171.438C124.308 173.26 123.966 175.029 125.563 177.746C125.924 178.35 126.336 178.921 126.793 179.454C132.86 186.66 138.932 193.86 145.012 201.055C146.711 203.065 148.418 205.076 150.149 207.109L152.104 209.408C151.638 209.76 151.18 210.101 150.729 210.435C149.392 211.427 148.128 212.365 146.945 213.418L146.876 213.479C140.06 219.548 133.013 225.824 126.198 232.129C119.79 238.06 113.347 244.169 107.117 250.077L101.992 254.933C101.118 255.708 100.354 256.6 99.721 257.584C99.2939 258.216 99.0934 258.975 99.1521 259.737C99.2109 260.499 99.5256 261.218 100.045 261.778C100.35 262.134 100.728 262.422 101.153 262.622C101.579 262.821 102.041 262.927 102.51 262.934ZM189.497 216.209C188.598 220.803 185.21 226.874 180.987 231.507C172.207 222.222 164.211 212.082 156.475 202.271C149.515 193.445 142.324 184.326 134.536 175.785C138.199 173.519 142.266 171.987 146.511 171.276C150.954 170.597 155.517 170.143 159.929 169.703C161.82 169.514 163.711 169.326 165.6 169.12C165.805 169.097 165.968 169.114 166.26 169.101C173.391 168.772 173.686 168.577 176.788 162.139C178.691 158.19 180.579 154.234 182.455 150.271C185.509 143.842 188.669 137.195 191.868 130.706C193.292 127.822 194.916 125.079 196.636 122.173C197.266 121.11 197.902 120.032 198.536 118.942C212.172 135.638 224.237 152.597 237 170.538C239.135 173.538 241.278 176.545 243.428 179.56C242.372 179.827 241.34 180.091 240.327 180.35C237.534 181.064 234.895 181.741 232.236 182.357L228.753 183.163C218.562 185.524 208.024 187.962 197.631 190.224C194.365 190.937 192.557 192.871 192.104 196.145C191.889 197.702 191.723 199.285 191.563 200.815C191.428 202.103 191.289 203.436 191.121 204.738C191.01 205.603 190.904 206.468 190.798 207.333C190.439 210.257 190.068 213.284 189.497 216.206V216.209Z" fill="white" />
            </g>
            <defs>
                <filter id="filter0_d_3009_53" x="173" y="0" width="185" height="185" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3009_53" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3009_53" result="shape" />
                </filter>
                <clipPath id="clip0_3009_53">
                    <rect width="156" height="155" fill="white" transform="translate(99 108)" />
                </clipPath>
            </defs>
        </svg>
    );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const rotationClassName = index % 2 === 0 ? 'lg:hover:rotate-1' : 'lg:hover:-rotate-1';

    return (
        <Hover3D className="h-full">
            <article className={`group relative flex h-full min-w-0 flex-col rounded-card border border-border bg-surface p-4 shadow-card transition-[box-shadow,transform] duration-200 hover:-translate-y-1 hover:shadow-soft ${rotationClassName} motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:rotate-0`} style={{ transformStyle: 'preserve-3d' }}>
                {index === 0 && <img className="pointer-events-none absolute -left-5 top-2 z-3 w-22 -rotate-30 opacity-70" src="/images/assets/tape.png" alt="" aria-hidden="true" style={{ transform: 'translateZ(34px)' }} />}
                {index === 1 && (
                    <div style={{ transform: 'translateZ(34px)' }}>
                        <ProjectBadge />
                    </div>
                )}

                <div style={{ transform: 'translateZ(30px)' }}>
                    <ProjectImage project={project} />
                </div>

                <div className="flex flex-1 flex-col pt-5" style={{ transform: 'translateZ(18px)' }}>
                    <div className="flex items-baseline gap-4" style={{ transform: 'translateZ(10px)' }}>
                        <span className="text-3xl font-extrabold leading-none text-primary sm:text-4xl">{project.number}</span>
                        <h3 className="m-0 text-xl font-extrabold leading-tight sm:text-2xl">{project.title}</h3>
                    </div>

                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-text-secondary">{project.description}</p>

                    <div className="mt-4" style={{ transform: 'translateZ(8px)' }}>
                        <TechTags technologies={project.stats} />
                    </div>

                    <div className="mt-6" style={{ transform: 'translateZ(12px)' }}>
                        <ProjectLinks project={project} />
                    </div>
                </div>
            </article>
        </Hover3D>
    );
}

export function FeaturedProjects() {
    // const [featuredProject, ...moreProjects] = projects;

    return (
        <section id="projects" className="section-y scroll-mt-24 border-b border-border lg:scroll-mt-28">
            <Container>
                <div className="mb-8 max-w-xl sm:mb-10">
                    <SectionLabel>SELECTED WORK</SectionLabel>
                    <h2 className="mt-3 mb-3 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                        Things I've {' '}
                        <ViewportRoughNotation
                            type="highlight" 
                            show 
                            color="#D5CBFE"
                            strokeWidth={2}
                            animationDuration={800}
                        >
                            built
                        </ViewportRoughNotation>.
                    </h2>
                    <p className="m-0 text-base leading-7 text-text-secondary sm:text-lg">A collection of things I've imagined, explored, designed and turned into working software.</p>
                </div>
                                                                                           
                {/* {featuredProject && <FeaturedProject project={featuredProject} />} */}

                {projects.length > 0 && (
                    <div className="mt-10 sm:mt-12">
                        <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {projects.map((project, index) => (
                                <ProjectCard key={`${project.id}-${project.number}`} project={project} index={index} />
                            ))}
                        </div>

                        <div className="mt-8 flex justify-center sm:mt-10">
                            <a
                                className="group/link inline-flex min-h-12 items-center justify-center gap-3 rounded-pill border border-border bg-surface/85 px-6 text-xs font-extrabold uppercase text-text-primary shadow-card transition-[background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary-soft hover:bg-primary-soft/20 hover:shadow-soft motion-reduce:transition-none motion-reduce:hover:transform-none sm:px-7"
                                href={githubProfileHref}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub className="size-4" aria-hidden="true" />
                                View more on GitHub
                                <ArrowUpRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover/link:translate-x-0 motion-reduce:group-hover/link:translate-y-0" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                )}
            </Container>
        </section>
    );
}
