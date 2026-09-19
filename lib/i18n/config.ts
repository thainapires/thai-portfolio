export const locales = ['en', 'pt-BR'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

export function hasLocale(value: string): value is Locale {
    return locales.includes(value as Locale);
}

export function getPublicPath(locale: Locale, path = '/'): string {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    if (locale === defaultLocale) {
        return normalizedPath;
    }

    return normalizedPath === '/' ? `/${locale}` : `/${locale}${normalizedPath}`;
}

export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://thaipires.com');
