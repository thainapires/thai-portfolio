interface DoodleProps {
    className?: string;
}

export function Doodle({ className = '' }: DoodleProps) {
    return (
        <svg className={className} aria-hidden="true" width="130" height="40" viewBox="0 0 130 40" fill="none">
            <path d="M3 25c18-18 28 13 45-2 14-12 20-25 33-14 10 9 1 22-10 17-9-4-5-18 8-16 17 2 24 18 48 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
    );
}
