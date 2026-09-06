import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
    title: 'Portfolio - Thainá dev.',
    description: 'Portfolio de Thainá dev., desenvolvedora front-end.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pt-BR">
            <body suppressHydrationWarning>{children}</body>
        </html>
    );
}
