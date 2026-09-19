'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { useDictionary } from './DictionaryProvider';
import { getPublicPath, type Locale } from '@/lib/i18n/config';

const languageLabels: Record<Locale, string> = {
    en: 'EN',
    'pt-BR': 'PT',
};

export function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const { dictionary, locale } = useDictionary();

    function hrefFor(targetLocale: Locale): string {
        const cleanPath = pathname.replace(/^\/(?:en|pt-BR)(?=\/|$)/, '') || '/';
        return getPublicPath(targetLocale, cleanPath);
    }

    return (
        <nav className="flex items-center rounded-pill border border-border bg-surface/90 p-1 text-xs font-extrabold shadow-card" aria-label={dictionary.languageSwitcher.label}>
            {(Object.keys(languageLabels) as Locale[]).map((language) => (
                <Link
                    className={`rounded-pill px-2.5 py-1.5 transition-colors ${language === locale ? 'bg-primary text-white' : 'text-text-secondary hover:text-primary-strong'}`}
                    href={hrefFor(language)}
                    hrefLang={language}
                    onClick={(event) => {
                        if (window.location.hash) {
                            event.preventDefault();
                            router.push(`${hrefFor(language)}${window.location.hash}`);
                        }
                    }}
                    aria-current={language === locale ? 'page' : undefined}
                    key={language}
                >
                    <span className="sr-only">{dictionary.languageSwitcher.languages[language]}</span>
                    <span aria-hidden="true">{languageLabels[language]}</span>
                </Link>
            ))}
        </nav>
    );
}
