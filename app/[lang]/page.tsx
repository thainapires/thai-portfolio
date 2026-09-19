import { notFound } from 'next/navigation';

import { HomePage } from '@/components/portfolio/HomePage';
import { getContributionCalendar } from '@/lib/contributions';
import { getPublicPath, hasLocale, siteUrl } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';

export const revalidate = 21600;

type HomeProps = { params: Promise<{ lang: string }> };

export default async function Home({ params }: HomeProps) {
    const { lang } = await params;
    if (!hasLocale(lang)) notFound();

    const [contributionCalendar, dictionary] = await Promise.all([getContributionCalendar(), getDictionary(lang)]);
    const pageUrl = new URL(getPublicPath(lang), siteUrl).toString();
    const profileSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        inLanguage: lang,
        url: pageUrl,
        name: dictionary.metadata.title,
        description: dictionary.metadata.description,
        mainEntity: {
            '@type': 'Person',
            name: 'Thainá Pires',
            url: pageUrl,
            email: 'mailto:thainapires.dev@gmail.com',
            sameAs: ['https://github.com/thainapires', 'https://www.linkedin.com/in/thainapires'],
            jobTitle: lang === 'pt-BR' ? 'Desenvolvedora Full Stack' : 'Full Stack Developer',
        },
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema).replace(/</g, '\\u003c') }} />
            <HomePage contributionCalendar={contributionCalendar} dictionary={dictionary} locale={lang} />
        </>
    );
}
