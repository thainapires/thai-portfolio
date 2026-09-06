interface DotPatternProps {
    className?: string;
}

export function DotPattern({ className = '' }: DotPatternProps) {
    return <span aria-hidden="true" className={`dot-pattern ${className}`} />;
}
