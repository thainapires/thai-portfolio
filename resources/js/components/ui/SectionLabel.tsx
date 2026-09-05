import type { PropsWithChildren } from 'react';

interface SectionLabelProps extends PropsWithChildren {
    className?: string;
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
    return <h2 className={`section-label ${className}`}>✦ {children}</h2>;
}
