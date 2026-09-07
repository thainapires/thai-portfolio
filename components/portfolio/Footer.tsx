import { SocialLink, socialLinks } from '@/data/portfolio';

function FooterSocialIcons({ socialLink }: { socialLink: SocialLink }) {
    const Icon = socialLink.icon;

    return (
        <a
            href={socialLink.href}
            target={socialLink.href.startsWith('http') ? '_blank' : undefined}
            rel={socialLink.href.startsWith('http') ? 'noreferrer' : undefined}
            aria-label={socialLink.label}
        >
            <Icon />
        </a>
    );
}

export function Footer() {
    return (
        <footer className="portfolio-container grid gap-6 border-t border-border py-8 text-text-secondary md:grid-cols-3 md:items-center lg:min-h-36 lg:py-0">
            <a className="whitespace-nowrap text-center text-xl font-extrabold text-text-primary sm:text-start sm:text-2xl lg:text-[1.32rem]" href="#top">
                Thainá <span className="text-primary">dev.</span>
            </a>

            {/* Default */}
            <nav className="link-hover-primary flex items-center justify-center gap-x-4 text-lg font-[850] sm:hidden" aria-label="Footer social links">
                {socialLinks.map((link) => (
                    <FooterSocialIcons key={link.label} socialLink={link} />
                ))}
            </nav>

            <p className="m-0 text-center text-sm sm:text-start sm:text-base md:text-center">
                © {new Date().getFullYear()} Thainá. All rights reserved.
            </p>

            {/* sm+ */}
            <nav className="link-hover-primary hidden flex-wrap items-center gap-x-4 gap-y-3 text-lg font-[850] sm:flex md:justify-self-end" aria-label="Footer social links">
                {socialLinks.map((link) => (
                    <FooterSocialIcons key={link.label} socialLink={link} />
                ))}

                <span className="font-medium">|</span>

                <span className="flex items-center gap-1 text-sm font-semibold">
                    Made with
                    <img src="/images/rainbow-heart.png" className="h-5 w-auto" alt="" aria-hidden="true" />
                </span>
            </nav>

            {/* Default */}
            <span className="flex items-center justify-center gap-1 text-sm font-semibold sm:hidden">
                Made with
                <img src="/images/rainbow-heart.png" className="h-5 w-auto" alt="" aria-hidden="true" />
            </span>
        </footer>
    );
}