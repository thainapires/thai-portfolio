import { skills } from '@/data/portfolio';
import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function WhatIDo() {
    return (
        <section id="stack" className="border-y border-border py-12 sm:py-14 lg:py-16">
            <Container>
                <SectionLabel>WHAT I DO</SectionLabel>
                <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-0">
                    {skills.map(({ title, description, icon: Icon }) => (
                        <article key={title} className="grid content-start gap-4 border-border md:px-8 md:first:pl-0 md:last:pr-0 md:[&+&]:border-l">
                            <Icon className="size-8 text-primary" aria-hidden="true" />
                            <h3 className="m-0 text-2xl leading-tight font-bold lg:text-3xl">{title}</h3>
                            <p className="m-0 max-w-sm text-base leading-7 text-text-secondary sm:text-lg">{description}</p>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
