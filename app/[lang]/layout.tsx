import type { Metadata } from 'next';
import Script from 'next/script';
import { notFound } from 'next/navigation';

import { defaultLocale, getPublicPath, hasLocale, locales, siteUrl } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';

import '../globals.css';

type LocalizedLayoutProps = Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}>;

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Pick<LocalizedLayoutProps, 'params'>): Promise<Metadata> {
    const { lang } = await params;
    if (!hasLocale(lang)) notFound();

    const dictionary = await getDictionary(lang);
    const canonicalPath = getPublicPath(lang);

    return {
        metadataBase: siteUrl,
        title: dictionary.metadata.title,
        description: dictionary.metadata.description,
        alternates: {
            canonical: canonicalPath,
            languages: {
                en: getPublicPath('en'),
                'pt-BR': getPublicPath('pt-BR'),
                'x-default': getPublicPath(defaultLocale),
            },
        },
        openGraph: {
            type: 'profile',
            url: canonicalPath,
            title: dictionary.metadata.title,
            description: dictionary.metadata.description,
            siteName: 'Thainá Pires',
            locale: lang === 'pt-BR' ? 'pt_BR' : 'en_US',
            alternateLocale: lang === 'pt-BR' ? ['en_US'] : ['pt_BR'],
        },
        twitter: {
            card: 'summary',
            title: dictionary.metadata.title,
            description: dictionary.metadata.description,
        },
    };
}

export default async function LocalizedLayout({ children, params }: LocalizedLayoutProps) {
    const { lang } = await params;
    if (!hasLocale(lang)) notFound();

    return (
        <html lang={lang} data-theme="light" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t!=='light'&&t!=='dark')t='light';document.documentElement.setAttribute('data-theme',t)}catch(e){}})()` }} />
            </head>
            <body>{children}</body>
            <Script defer src="https://cloud.umami.is/script.js" data-website-id="cdc53343-d004-4052-9362-3ead2bb281b7" />
            <Script type="module" src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "38af3399daee40699a804c90d7bba8ef"}' />
        </html>
    );
}
