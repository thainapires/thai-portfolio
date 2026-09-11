import type { Metadata } from 'next';
import Script from 'next/script';

import './globals.css';

export const metadata: Metadata = {
    title: 'Portfolio - Thainá dev.',
    description: 'Portfolio de Thainá dev., desenvolvedora front-end.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pt-BR">
            <body suppressHydrationWarning>{children}</body>
            <Script defer src="https://cloud.umami.is/script.js" data-website-id="cdc53343-d004-4052-9362-3ead2bb281b7" />
            <Script type='module' src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "38af3399daee40699a804c90d7bba8ef"}' />
        </html>
    );
}