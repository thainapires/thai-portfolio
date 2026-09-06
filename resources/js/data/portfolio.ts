import type { IconType } from 'react-icons';
import type { LucideIcon } from 'lucide-react';

import {
    BadgeCheck,
    Cloud,
    GitBranch,
    Blocks,
    Braces,
    FileText,
    PanelsTopLeft,
    ShieldCheck,
    Sparkles,
    TerminalSquare,
} from 'lucide-react';

import {
    FaBookOpen,
    FaCss3,
    FaEnvelope,
    FaGithub,
    FaHtml5,
    FaInfinity,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPalette,
    FaReact,
    FaSwatchbook,
} from 'react-icons/fa';

import {
    SiCloudflare,
    SiDocker,
    SiEslint,
    SiFigma,
    SiGit,
    SiGithub,
    SiGitlab,
    SiJest,
    SiLaravel,
    SiLinux,
    SiNodedotjs,
    SiNotion,
    SiPostgresql,
    SiPostman,
    SiPrettier,
    SiPrisma,
    SiReact,
    SiReactquery,
    SiSentry,
    SiTailwindcss,
    SiTypescript,
    SiVite,
    SiGo,
    SiUbuntu,
    SiMysql,
    SiPhp,
    SiLivewire,
    SiFilament,
    SiClaudecode,
    SiRedis,
    SiJavascript,
    SiVitest,
    SiNginx,
    SiWakatime,
    SiWordpress,
    SiNestjs,
    SiFastify,
    SiVercel,
    SiTraefikproxy,
    SiMongodb
} from 'react-icons/si';

import { VscVscode } from 'react-icons/vsc';

import {
    FaBicycle,
    FaCode,
    FaGaugeHigh,
    FaLayerGroup,
    FaMountainSun,
    FaPenRuler,
} from 'react-icons/fa6';

import { MdAutoAwesome, MdOutlineIntegrationInstructions } from 'react-icons/md';
import { LuCodeXml } from 'react-icons/lu';
import { RiNextjsFill } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';

export interface SocialLink {
    label: string;
    href: string;
    icon: IconType;
}

export interface Skill {
    title: string;
    description: string;
    icon: IconType;
}

export interface StackSkill {
    name: string;
    icon: IconType;
    cardClassName: string;
    tapeClassName: string;
}

export interface StackTool {
    name: string;
    icon: IconType;
}

export interface Project {
    id: string;
    number: string;
    title: string;
    description: string;
    href: string;
    githubHref?: string;
    accent: 'violet' | 'pink' | 'yellow';
    imageSrc: string;
    imageAlt: string;
    stats: string[];
}

export interface ProfessionalHighlight {
    number: string;
    title: string;
    description: string;
    tags: string[];
    icon: LucideIcon;
    paper: 'plain' | 'grid' | 'lined' | 'violet';
    decoration?: 'beige-tape' | 'violet-tape' | 'clip' | 'sticker';
    rotationClassName: string;
}

export interface Statistic {
    value: string;
    label: string;
}

export interface JourneyEntry {
    period: string;
    title: string;
    company: string;
    location: string;
    description: string;
    tags: string[];
}

export interface EducationEntry {
    period: string;
    title: string;
    institution: string;
    degree: string;
    location: string;
    description: string;
    note?: string;
}

export interface Hobby {
    title: string;
    description: string;
    icon: IconType;
    imageSrc: string;
    imageAlt: string;
    rotationClassName: string;
    tapeClassName: string;
    doodle?: 'heart' | 'plane' | 'star' | 'sun' | 'underline';
}

export const navItems = [
    {label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#stack' },
    { label: 'Work', href: '#work' },
    { label: 'Projects', href: '#projects' },
    { label: 'More', href: '#more' },
    { label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
    {
        label: 'GitHub',
        href: 'https://github.com/thainapires',
        icon: FaGithub,
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/thainapires',
        icon: FaLinkedinIn,
    },
    {
        label: 'Email',
        href: 'mailto:thainapiresdev@gmail.com',
        icon: FaEnvelope,
    },
];

export const skills: Skill[] = [
    {
        title: 'Web Development',
        description: 'I build fast, responsive and accessible web applications.',
        icon: FaCode,
    },
    {
        title: 'UI/UX Focused',
        description: 'I care about clean interfaces and great user experience.',
        icon: FaPenRuler,
    },
    {
        title: 'Performance',
        description: 'I write optimized code and ship products that perform.',
        icon: FaGaugeHigh,
    },
];

export const mainStackSkills: StackSkill[] = [
    {
        name: 'React',
        icon: SiReact,
        cardClassName: '-rotate-1',
        tapeClassName: 'left-1/2 -translate-x-1/2 -rotate-2',
    },
    {
        name: 'TypeScript',
        icon: SiTypescript,
        cardClassName: 'rotate-1',
        tapeClassName: 'left-[48%] -translate-x-1/2 rotate-2',
    },
    {
        name: 'Laravel',
        icon: SiLaravel,
        cardClassName: 'rotate-[-0.5deg]',
        tapeClassName: 'left-[52%] -translate-x-1/2 -rotate-1',
    },
    {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        cardClassName: 'rotate-[0.75deg]',
        tapeClassName: 'left-1/2 -translate-x-1/2 rotate-1',
    },
    {
        name: 'Node.js',
        icon: SiNodedotjs,
        cardClassName: '-rotate-1',
        tapeClassName: 'left-[46%] -translate-x-1/2 -rotate-3',
    },
    {
        name: 'Docker',
        icon: SiDocker,
        cardClassName: 'rotate-1',
        tapeClassName: 'left-[54%] -translate-x-1/2 rotate-2',
    },
];

export const otherStackSkills: StackTool[] = [
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: SiGithub },
    { name: 'GitLab', icon: SiGitlab },
    { name: 'MySQL', icon: SiMysql},
    { name: 'Go', icon: SiGo },
    { name: 'Linux', icon: SiLinux },
    { name: 'Ubuntu', icon: SiUbuntu },
    { name: 'VS Code', icon: VscVscode },
    { name: 'Postman', icon: SiPostman },
    { name: 'Jest', icon: SiJest },
    { name: 'ESLint', icon: SiEslint },
    { name: 'Prettier', icon: SiPrettier },
    { name: 'Vite', icon: SiVite },
    { name: 'Prisma', icon: SiPrisma },
    { name: 'Sentry', icon: SiSentry },
    { name: 'VSCode', icon: VscVscode },
    { name: 'CSS3', icon: FaCss3 },
    { name: 'HTML5', icon: FaHtml5},
    { name: 'PHP', icon: SiPhp },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Livewire', icon: SiLivewire },
    { name: 'Filament', icon: SiFilament },
    { name: 'Claude Code', icon: SiClaudecode },
    { name: 'Codex', icon: LuCodeXml },
    { name: 'Redis', icon: SiRedis },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Vitest', icon: SiVitest },
    { name: 'Nginx', icon: SiNginx },
    { name: 'Notion', icon: SiNotion },
    { name: 'Wakatime', icon: SiWakatime },
    { name: 'Wordpress', icon: SiWordpress },
    { name: 'Traefik', icon: SiTraefikproxy },
    { name: 'NestJS', icon: SiNestjs },
    { name: 'Fastify', icon: SiFastify },
    { name: 'Vercel', icon: SiVercel },
    { name: 'Next.js', icon: RiNextjsFill },
    { name: 'MongoDB', icon: SiMongodb },
];

export const projects: Project[] = [
    {
        id: 'bomdiadev',
        number: '01',
        title: 'Bom dia Dev',
        description: 'A personal dev dashboard that surfaces GitLab MR status, code review load, and daily coding activity in one glanceable view.',
        href: '',
        githubHref: 'https://github.com/thainapires/bom-dia-dev',
        accent: 'violet',
        imageSrc: '/images/projects/bom-dia-dev-dashboard.png',
        imageAlt: 'Bom dia Dev project screenshot placeholder',
        stats: ['Dashboard', 'GitLab', 'Productivity', 'TypeScript'],
    },
    {
        id: 'gifusion',
        number: '02',
        title: 'Git Fusion',
        description: 'Git Fusion is a tool that seamlessly combines contribution data from GitHub and GitLab into a unified, interactive graph.',
        href: 'https://gitfusion.vercel.app',
        githubHref: 'https://github.com/thainapires/gitfusion',
        accent: 'pink',
        imageSrc: '/images/projects/gitfusion.png',
        imageAlt: 'Git Fusion project screenshot placeholder',
        stats: ['Contribution Tracking', 'API Integration', 'Next.js'],
    },
    {
        id: 'schedulynx',
        number: '03',
        title: 'Schedulynx',
        description: 'Schedulynx is a scheduling application that syncs with your Google Calendar, allowing others to book time directly into your calendar with ease.',
        href: 'https://schedulynx.vercel.app',
        githubHref: 'https://github.com/thainapires/schedulynx',
        accent: 'yellow',
        imageSrc: '/images/projects/schedulynx.png',
        imageAlt: 'Schedulynx project screenshot placeholder',
        stats: ['Scheduling', 'Calendar Integration', 'OAuth'],
    },
];

export const professionalHighlights: ProfessionalHighlight[] = [
    {
        number: '01',
        title: 'New partner integration flow',
        description: 'Designed and implemented a new integration flow for custom partners.',
        tags: ['Laravel', 'APIs', 'Integration'],
        icon: Blocks,
        paper: 'grid',
        decoration: 'beige-tape',
        rotationClassName: 'lg:-rotate-1',
    },
    {
        number: '02',
        title: 'Digital card experience',
        description: 'Built backend and frontend flows for a digital card experience.',
        tags: ['Laravel', 'React', 'UX'],
        icon: PanelsTopLeft,
        paper: 'lined',
        rotationClassName: 'lg:rotate-1',
    },
    {
        number: '03',
        title: 'Reusable integration model',
        description: 'Created a flexible integration structure that made future integrations easier to evolve.',
        tags: ['Architecture', 'PHP', 'APIs'],
        icon: Braces,
        paper: 'violet',
        decoration: 'beige-tape',
        rotationClassName: 'lg:-rotate-1',
    },
    {
        number: '04',
        title: 'Improved internal product flows',
        description: 'Helped simplify complex product flows and improve usability.',
        tags: ['React', 'TypeScript', 'UX'],
        icon: Sparkles,
        paper: 'plain',
        decoration: 'clip',
        rotationClassName: 'lg:rotate-1',
    },
    {
        number: '05',
        title: 'Developer experience improvements',
        description: 'Improved local setup, scripts and internal tools to make development easier.',
        tags: ['Tools', 'Scripts', 'DX'],
        icon: TerminalSquare,
        paper: 'violet',
        decoration: 'sticker',
        rotationClassName: 'lg:rotate-1',
    },
    {
        number: '06',
        title: 'Testing & safer releases',
        description: 'Added tests and improved quality checks to reduce regressions.',
        tags: ['PHPUnit', 'Pest', 'QA'],
        icon: ShieldCheck,
        paper: 'lined',
        decoration: 'beige-tape',
        rotationClassName: 'lg:-rotate-1',
    },
    {
        number: '07',
        title: 'UI consistency & design system',
        description: 'Worked on reusable components and more consistent UI patterns.',
        tags: ['Design System', 'React', 'UI'],
        icon: BadgeCheck,
        paper: 'plain',
        rotationClassName: 'lg:rotate-1',
    },
    {
        number: '08',
        title: 'Documentation that helps',
        description: 'Improved technical documentation to make development and onboarding easier.',
        tags: ['Docs', 'Guides', 'DX'],
        icon: FileText,
        paper: 'grid',
        decoration: 'violet-tape',
        rotationClassName: 'lg:-rotate-1',
    },
];

export const statistics: Statistic[] = [
    {
        value: '5+',
        label: 'Years of experience',
    },
    {
        value: '1',
        label: 'Computer Science degree',
    },
    {
        value: '∞',
        label: 'Things left to explore',
    },
];

export const education: EducationEntry[] = [
    { period: '2016 — 2021', title: 'Computer Science', institution: 'Federal Center for Technological Education Celso Suckow da Fonseca (CEFET/RJ)', degree: "Bachelor's Degree", location: 'Rio de Janeiro, Brazil', description: 'A solid foundation in software engineering, algorithms, data structures and problem solving.', note: 'CEFET/RJ' },
    { period: '2019 — 2020', title: 'International Academic Exchange', institution: 'Polytechnic Institute of Santarém', degree: '1 semester of Bachelor\'s Degree', location: 'Santarém, Portugal', description: 'Academic exchange of 1 semester in Portugal, where I took courses in the Informatics course at IPSantarém.', note: 'International Exchange 🇵🇹' },
];

 export interface CertificationEntry {
    title: string;
    issuer: string;
    year: string;
    icon: IconType;
    color: string;
    backgroundColor?: string;
}

export const certifications: CertificationEntry[] = [
    { title: 'Clean Code', issuer: 'Rocketseat', year: 'apr 2025', icon: FaCode, color: '#475569', backgroundColor: '#E2E8F0' },
    { title: 'Diving deeper into Next.js', issuer: 'Rocketseat', year: 'apr 2025', icon: TbBrandNextjs, color: 'white', backgroundColor: 'black' },
    { title: 'ReactJS Development Program', issuer: 'Rocketseat', year: 'apr 2025', icon: FaReact, color: '#00D8FF', backgroundColor: '#222222' },
    { title: 'Devops Culture Fundamentals', issuer: 'Rocketseat', year: 'oct 2024', icon: FaInfinity, color: '#7C3AED', backgroundColor: '#EDE9FE' },
    { title: 'Design System', issuer: 'Rocketseat', year: 'oct 2024', icon: FaSwatchbook, color: '#0F766E', backgroundColor: '#CCFBF1' },
];

export const journey: JourneyEntry[] = [
    { period: '2026 — Now', title: 'Mid-level Full Stack Developer', company: 'Rede Parcerias', location: 'Remote · Rio de Janeiro, Brazil', description: 'Building and evolving complex features for a multi-tenant SaaS platform, working across frontend, backend, APIs and integrations. Focused on scalable architecture, performance, maintainability and user experience, while contributing to technical decisions, code reviews and continuous improvements.', tags: ['Laravel', 'React', 'TypeScript', 'Go', 'MySQL', 'Docker'] },
    { period: '2021 — 2025', title: 'Junior Full Stack Developer', company: 'Rede Parcerias', location: 'Remote · Rio de Janeiro, Brazil', description: 'Developed and maintained features across a multi-tenant SaaS platform, working with frontend and backend applications, corporate APIs and third-party integrations. Contributed to the modernization of legacy systems, microservices, authentication flows and continuous improvements to the platform.', tags: ['Laravel', 'PHP', 'Vue.js', 'React', 'Go', 'APIs'] },
    { period: '2021', title: 'Software Development Intern', company: 'Rede Parcerias', location: 'Remote · Rio de Janeiro, Brazil', description: 'Started my software development career building web features, maintaining existing applications and integrating corporate APIs. Worked closely with an international team, gaining hands-on experience with production systems, debugging and collaborative development.', tags: ['PHP', 'Laravel', 'JavaScript', 'APIs', 'Git'] },
    { period: '2020 — 2021', title: 'Co-founder & Developer', company: 'Duki.app', location: 'Remote · Rio de Janeiro, Brazil', description: 'Co-founded a social-impact education project, building digital tools and helping shape the product from idea to implementation.', tags: ['React', 'Node.js', 'Product', 'Social Impact'] },
    { period: '2018 — 2019', title: 'Marketing & Audiovisual', company: 'Enactus CEFET/RJ', location: 'Rio de Janeiro, Brazil', description: 'Worked with communication, marketing and audiovisual production for social entrepreneurship projects and national events.', tags: ['Marketing', 'Audiovisual', 'Communication'] },
    { period: '2018 — 2019', title: 'Marketing & Branding', company: 'Toti', location: 'Rio de Janeiro, Brazil', description: 'Worked with branding, visual identity and digital content for a social-impact startup focused on education and technology.', tags: ['Branding', 'Design', 'Social Impact'] },
];

export const hobbies: Hobby[] = [
    {
        title: 'Cycling',
        description: 'Freedom on two wheels. It keeps me present and challenges me to go further.',
        icon: FaBicycle,
        imageSrc: '/images/hobbies/bike.png',
        imageAlt: 'Cycling hobby photo placeholder',
        rotationClassName: 'sm:-rotate-1',
        tapeClassName: '-top-3 left-9 -rotate-6 bg-primary-soft/75',
        doodle: 'underline',
    },
    {
        title: 'Nature',
        description: 'Being outdoors recharges my energy and reminds me of what really matters.',
        icon: FaMountainSun,
        imageSrc: '/images/hobbies/nature.png',
        imageAlt: 'Nature hobby photo placeholder',
        rotationClassName: 'sm:rotate-1',
        tapeClassName: '-top-3 left-1/2 -translate-x-1/2 rotate-6 bg-accent-yellow-soft/75',
        doodle: 'sun',
    },
    {
        title: 'Art',
        description: 'I love exploring creativity through illustrations, paintings and small visual projects.',
        icon: FaPalette,
        imageSrc: '/images/hobbies/art.png',
        imageAlt: 'Art hobby photo placeholder',
        rotationClassName: '',
        tapeClassName: '-top-3 left-1/2 -translate-x-1/2 rotate-3 bg-accent-yellow-soft/70',
        doodle: 'star',
    },
    {
        title: 'Reading',
        description: 'Books inspire me, teach me and transport me to new worlds.',
        icon: FaBookOpen,
        imageSrc: '/images/hobbies/read.png',
        imageAlt: 'Reading hobby photo placeholder',
        rotationClassName: 'sm:rotate-1',
        tapeClassName: '-top-3 left-1/2 -translate-x-1/2 -rotate-3 bg-surface/85',
        doodle: 'heart',
    },
    {
        title: 'Travelling',
        description: 'Exploring new places and cultures broadens my perspective and enriches my understanding of the world.',
        icon: FaMapMarkerAlt,
        imageSrc: '/images/hobbies/travel.png',
        imageAlt: 'Travelling hobby photo placeholder',
        rotationClassName: 'sm:-rotate-1',
        tapeClassName: '-top-3 right-8 rotate-6 bg-primary-soft/75',
        doodle: 'plane',
    },
];

export const heroDecorations = {
    featureIcons: [
        MdAutoAwesome,
        FaLayerGroup,
        FaCode,
    ],
};
