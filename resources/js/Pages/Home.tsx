import { AboutMe } from '@/components/portfolio/AboutMe';
import { ContactCTA } from '@/components/portfolio/ContactCTA';
import { FeaturedProjects } from '@/components/portfolio/FeaturedProjects';
import { Footer } from '@/components/portfolio/Footer';
import { Header } from '@/components/portfolio/Header';
import { Hero } from '@/components/portfolio/Hero';
import { Hobbies } from '@/components/portfolio/Hobbies';
import { ProfessionalHighlights } from '@/components/portfolio/ProfessionalHighlights';
import { SocialSidebar } from '@/components/portfolio/SocialSidebar';
import { SkillsStack } from '@/components/portfolio/SkillsStack';
import ClickSpark from '@/components/ui/ClickSpark';

export default function Home() {
    return (
        <>
            <ClickSpark sparkColor="#8d75df" sparkSize={16} sparkRadius={24} sparkCount={8} duration={420}>
                <div className="relative flex min-h-svh flex-col overflow-x-hidden pt-24 lg:pt-28">
                    <img
                        aria-hidden="true"
                        className="opacity-60 pointer-events-none absolute -left-2 top-0 z-[60] hidden h-auto w-32 max-w-none select-none lg:block lg:w-56 xl:w-64"
                        src="/images/hero/left-superior-paper.png"
                        alt=""
                    />

                    <Header />
                    <SocialSidebar />
                    <Hero />
                </div>

                <main>
                    <AboutMe />
                    <SkillsStack />
                    {/* <ProfessionalHighlights /> */}
                    <FeaturedProjects />
                    <Hobbies />
                    <ContactCTA />
                </main>

                <Footer />
            </ClickSpark>
        </>
    );
}
