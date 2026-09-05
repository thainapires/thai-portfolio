import { statistics } from '@/data/portfolio';
import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Doodle } from './decorations/Doodle';
import { DotPattern } from './decorations/DotPattern';
import { Star } from './decorations/Star';

const aboutImageSrc = '/images/me.png';

export function AboutMe() {
    return (
        <section id="about" className="border-t border-border py-14 md:py-16 lg:py-20">
            <Container className="grid items-center gap-10 lg:grid-cols-12 xl:gap-16">
                <div className="relative mx-auto grid aspect-[4/5] w-full max-w-xs place-items-center sm:max-w-sm lg:col-span-4 lg:mx-0 xl:col-span-3" aria-label="Placeholder editorial para foto de Thainá">
                    <span className="absolute inset-x-4 top-6 bottom-8 rotate-[-8deg] rounded-[45%_55%_44%_56%] bg-primary-soft" />
                    <DotPattern className="bottom-12 left-0 h-32 w-40 text-text-primary" />
                    <div className="relative z-2 aspect-[33/43] w-4/5 overflow-hidden rounded-[154px_154px_28px_28px] bg-[#d8d5cf] shadow-soft sm:w-5/6">
                        <img className="h-full w-full object-cover" src={aboutImageSrc} alt="Foto de Thainá" />
                    </div>
                    <Doodle className="absolute bottom-8 left-4 z-4 w-28 rotate-[-10deg] text-text-primary" />
                    <Star className="absolute right-3 top-14 size-10 text-primary" />
                </div>
                <div className="lg:col-span-8 xl:col-span-7">
                    <SectionLabel>THE PERSON BEHIND THE CODE</SectionLabel>
                    <h3 className="my-6 max-w-2xl text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl xl:text-5xl">I really like <em className="font-serif font-bold italic text-primary">making things</em> and making them a little better along the way.</h3>
                    <p className="m-0 max-w-2xl text-lg leading-8 text-text-secondary sm:text-xl">Sometimes it's a web application, sometimes a side project, sometimes something that has absolutely nothing to do with code. I just enjoy the process of turning an idea into something real.</p>
                    <Doodle className="mt-7 w-36 text-primary sm:w-40" />
                </div>
                <div className="grid border-y border-border sm:grid-cols-3 lg:col-span-full xl:col-span-2 xl:grid-cols-1" aria-label="Portfolio statistics">
                    {statistics.map((stat) => (
                        <div className="border-border py-8 text-center sm:[&+&]:border-l xl:[&+&]:border-l-0 xl:[&+&]:border-t" key={stat.label}>
                            <strong className="block text-5xl font-[850] leading-none sm:text-6xl lg:text-7xl">{stat.value}</strong>
                            <span className="mt-2 block text-base font-bold leading-snug text-text-secondary">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
