import { useLocalizedPortfolio } from '@/data/useLocalizedPortfolio';
import { useDictionary } from '@/components/i18n/DictionaryProvider';
import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { HobbyCard } from './HobbyCard';

function HobbyExtraBadges() {
    const { dictionary } = useDictionary();
    const { hobbyExtras } = useLocalizedPortfolio();
    return (
        <ul className="mx-auto mt-9 flex max-w-5xl list-none flex-wrap justify-center gap-3 p-0 sm:mt-10 sm:gap-4" aria-label={dictionary.hobbies.extrasLabel}>
            {hobbyExtras.map((item, index) => (
                <li key={item.label}>
                    {item.label != 'places I\'ve been' ? (
                        <span className={`inline-flex items-center gap-2 rounded-pill border border-border bg-surface/90 px-3 py-2 text-xs font-extrabold lowercase leading-none text-text-primary shadow-card ${item.rotationClassName}`}>
                            {item.emoji}{' '}
                            {item.label}
                        </span>
                    ) : (
                        <span
                            className={`flex flex-col sm:inline-flex sm:flex-row items-center justify-center gap-1 rounded-pill border border-border bg-surface/90 px-3 py-2 text-center text-xs font-extrabold lowercase leading-none text-text-primary shadow-card ${item.rotationClassName}`}
                        >
                            {item.emoji}
                            <span>{item.label}</span>
                        </span>
                    )}
                </li>
            ))}
        </ul>
    );
}

export function Hobbies() {
    const { dictionary } = useDictionary();
    const { hobbies } = useLocalizedPortfolio();
    const t = dictionary.hobbies;
    return (
        <section id="more" className="scroll-mt-24 pb-14 pt-8 sm:pb-16 md:pt-12 lg:scroll-mt-28 lg:pb-20">
            <Container>
                <div className="max-w-5xl">
                    <SectionLabel>{t.label}</SectionLabel>
                    <h2 className="mt-3 mb-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:whitespace-nowrap lg:text-6xl">
                        {t.titleStart} <em className="font-serif font-bold italic text-primary">{t.titleHighlight}</em>.
                    </h2>
                    <p className="m-0 max-w-lg text-base leading-7 text-text-secondary sm:text-lg">
                        {t.description}
                    </p>
                </div>
                <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5 xl:gap-7">
                    {hobbies.map((hobby) => <HobbyCard key={hobby.title} hobby={hobby} />)}
                </div>

                <HobbyExtraBadges />
            </Container>
        </section>
    );
}
