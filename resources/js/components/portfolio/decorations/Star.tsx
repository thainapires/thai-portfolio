interface StarProps {
    className?: string;
}

export function Star({ className = '' }: StarProps) {
    return (
        <svg className={className} aria-hidden="true" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M15 1.5l2.7 9.8 9.8 2.7-9.8 2.7L15 26.5l-2.7-9.8-9.8-2.7 9.8-2.7L15 1.5z" fill="currentColor" />
        </svg>
    );
}
