import { type MouseEvent, useEffect, useRef, useState } from 'react';
import { FaBars, FaMoon, FaSun, FaXmark } from 'react-icons/fa6';

import { navItems } from '@/data/portfolio';

function ActiveLinkScribble({ isActive }: { isActive: boolean }) {
    const visibilityClassName = isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100';

    return (
        <img
            aria-hidden="true"
            className={`${visibilityClassName} pointer-events-none absolute bottom-0 left-1/2 h-2.5 w-[calc(100%+0.75rem)] max-w-none -translate-x-1/2 select-none transition-opacity duration-150`}
            src="/images/header/scribble.svg"
            alt=""
        />
    );
}

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeHref, setActiveHref] = useState('');
    const clickedHref = useRef<string | null>(null);
    const clickedHrefTimeout = useRef<number | null>(null);

    useEffect(() => {
        const sections = navItems
            .map((item) => document.getElementById(item.href.slice(1)))
            .filter((section): section is HTMLElement => section !== null);

        if (sections.length === 0) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (clickedHref.current !== null) {
                    const clickedEntry = entries.find((entry) => `#${entry.target.id}` === clickedHref.current && entry.isIntersecting);

                    if (clickedEntry) {
                        clickedHref.current = null;

                        if (clickedHrefTimeout.current !== null) {
                            window.clearTimeout(clickedHrefTimeout.current);
                            clickedHrefTimeout.current = null;
                        }
                    }

                    return;
                }

                const activeEntry = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((firstEntry, secondEntry) => secondEntry.intersectionRatio - firstEntry.intersectionRatio)[0];

                if (activeEntry?.target.id) {
                    setActiveHref(`#${activeEntry.target.id}`);
                }
            },
            {
                rootMargin: '-35% 0px -50% 0px',
                threshold: [0, 0.25, 0.5, 0.75, 1],
            },
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            observer.disconnect();

            if (clickedHrefTimeout.current !== null) {
                window.clearTimeout(clickedHrefTimeout.current);
            }
        };
    }, []);

    function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string): void {
        event.preventDefault();

        clickedHref.current = href;
        setActiveHref(href);

        if (clickedHrefTimeout.current !== null) {
            window.clearTimeout(clickedHrefTimeout.current);
        }

        clickedHrefTimeout.current = window.setTimeout(() => {
            clickedHref.current = null;
            clickedHrefTimeout.current = null;
        }, 1200);

        const target = document.getElementById(href.slice(1));

        if (target === null) {
            window.location.hash = href;

            return;
        }

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        target.scrollIntoView({
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
            block: href === '#about' ? 'center' : 'start',
        });

        window.history.pushState(null, '', href);
    }

    return (
        <header className="portfolio-container fixed left-1/2 top-0 z-50 grid min-h-24 -translate-x-1/2 grid-cols-[1fr_auto] items-center gap-3 bg-background/90 py-4 backdrop-blur-md sm:gap-6 lg:min-h-28 lg:grid-cols-[1fr_auto_1fr] lg:gap-8 lg:py-0">
            <a className="whitespace-nowrap text-xl font-extrabold sm:text-2xl lg:text-[1.3rem]" href="#top" aria-label="Thainá dev. home">
                Thainá <span className="text-primary">dev.</span>
            </a>

            <nav className="hidden items-center gap-10 text-sm xl:text-base font-bold text-text-primary lg:flex xl:gap-16" aria-label="Primary navigation">
                {navItems.map((item) => (
                    <a className="link-hover-primary group relative inline-block py-2 uppercase" key={item.href} href={item.href} onClick={(event) => handleNavClick(event, item.href)}>
                        {item.label}
                        <ActiveLinkScribble isActive={activeHref === item.href} />
                    </a>
                ))}
            </nav>

            <div className="flex items-center gap-3 justify-self-end">
                <button className="grid h-10 grid-cols-[16px_28px_16px] items-center gap-1 rounded-pill border border-border bg-white/45 px-2 text-text-primary sm:grid-cols-[20px_34px_20px] sm:gap-2 sm:px-3" type="button" aria-label="Alternar tema visual">
                    <FaSun size={14} aria-hidden="true" />

                    <span className="relative h-4 w-7 rounded-pill sm:h-[18px] sm:w-[34px] bg-primary-soft after:absolute after:left-1 after:top-1/2 after:size-3 after:-translate-y-1/2 after:rounded-full after:bg-primary-strong" aria-hidden="true" />

                    <FaMoon size={14} aria-hidden="true" />
                </button>

                <button className="grid size-11 place-items-center rounded-pill border border-border bg-surface lg:hidden" type="button" aria-label="Abrir menu" aria-expanded={isOpen} onClick={() => setIsOpen((value) => !value)}>
                    {isOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
                </button>
            </div>

            {isOpen && (
                <nav className="absolute inset-x-0 top-full grid gap-1 rounded-soft border border-border bg-surface/95 p-4 shadow-soft lg:hidden" aria-label="Mobile navigation">
                    {navItems.map((item) => (
                        <a className="link-hover-primary group p-3 font-extrabold" key={item.href} href={item.href} onClick={(event) => { handleNavClick(event, item.href); setIsOpen(false); }}>
                            <span className="relative inline-block pb-2">
                                {item.label}
                                <ActiveLinkScribble isActive={activeHref === item.href} />
                            </span>
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}
