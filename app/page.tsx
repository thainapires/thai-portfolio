import { HomePage } from '@/components/portfolio/HomePage';
import { getContributionCalendar } from '@/lib/contributions';

export const revalidate = 21600;

export default async function Home() {
    const contributionCalendar = await getContributionCalendar();

    return <HomePage contributionCalendar={contributionCalendar} />;
}
