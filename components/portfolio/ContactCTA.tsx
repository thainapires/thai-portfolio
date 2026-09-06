import { ArrowRight } from 'lucide-react';
import { contactFacts } from '@/data/portfolio';
import { Container } from '@/components/ui/Container';
import { PrimaryButton } from '@/components/ui/Buttons';
import { Doodle } from './decorations/Doodle';
import { DotPattern } from './decorations/DotPattern';

function ContactFacts() {
    return (
        <ul className="m-0 grid list-none gap-2.5 p-0">
            {contactFacts.map((fact) => {
                const Icon = fact.icon;

                return (
                    <li className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-text-secondary" key={fact.label}>
                        <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                        {fact.label}
                    </li>
                );
            })}
        </ul>
    );
}

export function ContactCTA() {
    return (
        <section id="contact" className="pb-12 md:pb-16 lg:pb-20">
            <Container>
                <div className="relative grid gap-8 overflow-hidden rounded-[28px] border border-border bg-surface p-6 sm:p-10 md:grid-cols-12 md:items-center md:rounded-panel lg:p-14 xl:p-16">
                    <DotPattern className="right-6 top-6 hidden h-20 w-28 text-text-primary lg:block" />

                    <span
                        className="absolute bottom-[-72px] right-[-58px] h-[250px] w-[300px] rounded-[52%_48%_42%_58%] bg-accent-pink"
                        aria-hidden="true"
                    />

                    <div className="relative z-2 grid gap-3 md:col-span-5">
                        <h2 className="m-0 max-w-2xl text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl xl:text-5xl">
                            Let's build something
                            <em className="block font-serif font-bold italic text-primary">
                                amazing together!
                            </em>
                        </h2>

                        <p className="m-0 text-sm font-semibold text-text-secondary sm:text-base">
                            Open to new opportunities &amp; projects.
                        </p>
                    </div>

                    <div className="relative z-3 md:col-span-3 md:self-start md:pt-1 lg:pt-2">
                        <ContactFacts />
                    </div>

                    <div className="relative z-3 grid gap-5 justify-self-start md:col-span-4 md:justify-self-end">
                        <Doodle className="w-36 rotate-[-8deg] text-primary sm:w-44" />

                        <PrimaryButton href="mailto:hello@thainapires.dev">
                            GET IN TOUCH
                            <ArrowRight size={16} />
                        </PrimaryButton>
                    </div>
                </div>
            </Container>
        </section>
    );
}