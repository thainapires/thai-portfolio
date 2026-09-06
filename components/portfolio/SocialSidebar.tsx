import { socialLinks } from '@/data/portfolio';

export function SocialSidebar() {
    return (
        <aside className="fixed left-12 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-5 text-black/80 xl:flex" aria-label="Social links">
            <span className="text-xl leading-none text-primary" aria-hidden="true">
                ✦
            </span>

            <span className="rotate-180 text-xs font-extrabold [writing-mode:vertical-rl]">
                LET&apos;S CONNECT
            </span>

            <div className="h-24 w-px bg-border" aria-hidden="true" />

            <div className="grid gap-4">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a key={label} href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="grid size-11 place-items-center rounded-pill border border-border bg-surface/70 transition-[border-color,color,transform] duration-200 hover:-translate-y-0.5 hover:border-primary-strong/35 hover:text-primary-strong">
                        <Icon size={21} aria-hidden="true" />
                    </a>
                ))}
            </div>
        </aside>
    );
}
