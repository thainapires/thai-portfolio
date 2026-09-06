import { useEffect, useRef, useState } from 'react';
import {
    RoughNotation,
    type RoughNotationProps,
} from 'react-rough-notation';

type ViewportRoughNotationProps = RoughNotationProps & {
    rootMargin?: string;
    threshold?: number;
};

export function ViewportRoughNotation({
    rootMargin = '0px 0px -10% 0px',
    show = true,
    threshold = 0.1,
    ...props
}: ViewportRoughNotationProps) {
    const elementRef = useRef<HTMLSpanElement>(null);
    const [hasEnteredViewport, setHasEnteredViewport] = useState(false);

    useEffect(() => {
        const element = elementRef.current;

        if (element === null) {
            return;
        }

        if (!('IntersectionObserver' in window)) {
            setHasEnteredViewport(true);

            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    setHasEnteredViewport(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin,
                threshold,
            },
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [rootMargin, threshold]);

    return (
        <span ref={elementRef}>
            <RoughNotation {...props} show={show && hasEnteredViewport} />
        </span>
    );
}
