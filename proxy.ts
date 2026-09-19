import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { defaultLocale, hasLocale } from '@/lib/i18n/config';

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const segments = pathname.split('/').filter(Boolean);
    const firstSegment = segments[0];

    if (firstSegment === defaultLocale) {
        const url = request.nextUrl.clone();
        url.pathname = `/${segments.slice(1).join('/')}`;
        return NextResponse.redirect(url);
    }

    if (firstSegment && hasLocale(firstSegment)) return NextResponse.next();

    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
    return NextResponse.rewrite(url);
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)'],
};
