import type { PropsWithChildren } from 'react';

interface ContainerProps extends PropsWithChildren {
    className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
    return <div className={`portfolio-container ${className}`}>{children}</div>;
}
