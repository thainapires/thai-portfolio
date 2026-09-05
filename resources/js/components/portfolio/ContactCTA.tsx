import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PrimaryButton } from '@/components/ui/Buttons';
import { Doodle } from './decorations/Doodle';
import { DotPattern } from './decorations/DotPattern';

export function ContactCTA() {
    return (
        <section id="contact" className="pb-12 md:pb-16 lg:pb-20">
            <Container>
                <div className="relative grid gap-8 overflow-hidden rounded-[28px] border border-border bg-surface p-6 sm:p-10 md:grid-cols-5 md:items-center md:rounded-panel lg:p-14 xl:p-16">
                    <DotPattern className="right-12 top-10 h-36 w-52 text-text-primary" />
                    <span className="absolute bottom-[-72px] right-[-58px] h-[250px] w-[300px] rounded-[52%_48%_42%_58%] bg-accent-pink" aria-hidden="true" />
                    <div className="relative z-2 grid gap-3 md:col-span-3">
                        <h2 className="m-0 max-w-2xl text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl xl:text-5xl">Let's build something <em className="block font-serif font-bold italic text-primary">amazing together!</em></h2>
                        <p className="m-0 text-sm font-semibold text-text-secondary sm:text-base">Open to new opportunities &amp; projects.</p>
                    </div>
                    <div className="relative z-3 grid gap-8 justify-self-start md:col-span-2 md:justify-self-center">
                        <Doodle className="w-36 rotate-[-8deg] text-primary sm:w-44" />
                        <PrimaryButton href="mailto:hello@thainapires.dev">GET IN TOUCH <ArrowRight size={16} /></PrimaryButton>
                    </div>
                </div>
            </Container>
        </section>
    );
}
