import type { MetadataRoute } from 'next';
import { getPublicPath, siteUrl } from '@/lib/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
    return [{
        url: new URL(getPublicPath('en'), siteUrl).toString(),
        alternates: { languages: {
            en: new URL(getPublicPath('en'), siteUrl).toString(),
            'pt-BR': new URL(getPublicPath('pt-BR'), siteUrl).toString(),
            'x-default': new URL(getPublicPath('en'), siteUrl).toString(),
        } },
    }];
}
