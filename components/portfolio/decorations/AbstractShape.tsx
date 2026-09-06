interface AbstractShapeProps {
    variant?: 'pink' | 'yellow' | 'violet';
    className?: string;
}

export function AbstractShape({ variant = 'violet', className = '' }: AbstractShapeProps) {
    return <span aria-hidden="true" className={`abstract-shape abstract-shape--${variant} ${className}`} />;
}
