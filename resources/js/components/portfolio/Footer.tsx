import { socialLinks } from '@/data/portfolio';

export function Footer() {
    return (
        <footer className="portfolio-container grid gap-6 border-t border-border py-8 text-text-secondary md:grid-cols-3 md:items-center lg:min-h-36 lg:py-0">
            <a className="whitespace-nowrap text-xl font-extrabold text-text-primary sm:text-2xl lg:text-[1.32rem]" href="#top">Thainá <span className="text-primary">dev.</span></a>
            <p className="m-0 text-sm md:text-center sm:text-base">© {new Date().getFullYear()} Thainá. All rights reserved.</p>
            <nav className="link-hover-primary flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-[850] md:justify-self-end" aria-label="Footer social links">
                {socialLinks.map((link) => (
                    <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>{link.label}</a>
                ))}
                <span className="flex items-center gap-1">
                    Made with 
                    <img src="/images/rainbow-heart.png" className="h-5 w-auto" alt="" aria-hidden="true" />
                </span>
            </nav>
        </footer>
    );
}
