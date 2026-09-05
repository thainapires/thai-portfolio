import { hobbies } from '@/data/portfolio';
import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { HobbyCard } from './HobbyCard';

export function Hobbies() {
    return (
        <section id="more" className="scroll-mt-24 pb-14 pt-8 sm:pb-16 md:pt-12 lg:scroll-mt-28 lg:pb-20">
            <Container>
                <div className="max-w-5xl">
                    <SectionLabel>MY HOBBIES</SectionLabel>
                    <h2 className="mt-3 mb-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:whitespace-nowrap lg:text-6xl">
                        Life outside the <em className="font-serif font-bold italic text-primary">terminal</em>.
                    </h2>
                    <p className="m-0 max-w-lg text-base leading-7 text-text-secondary sm:text-lg">
                        A few things I've worked on professionally.<br className="hidden sm:block" />
                        Different problems, real impact.
                    </p>
                </div>
                <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5 xl:gap-7">
                    {hobbies.map((hobby) => <HobbyCard key={hobby.title} hobby={hobby} />)}
                </div>
            </Container>
        </section>
    );
}
