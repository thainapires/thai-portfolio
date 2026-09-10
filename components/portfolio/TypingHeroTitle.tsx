import { useEffect, useMemo, useState } from 'react';
import { useReducedMotion } from 'motion/react';

const titles = [
    'Full Stack Developer',
    'Creative Coder',
    'Cycling Enthusiast',
    'Traveler at heart',
    'Lifelong Learner',
];

const typingSpeed = 60;
const deletingSpeed = 35;
const pauseDuration = 1600;

export function TypingHeroTitle() {
    const shouldReduceMotion = useReducedMotion();
    const [titleIndex, setTitleIndex] = useState(0);
    const [characterIndex, setCharacterIndex] = useState(titles[0].length);
    const [isDeleting, setIsDeleting] = useState(false);
    const currentTitle = titles[titleIndex];
    const longestTitle = useMemo(
        () => titles.reduce((longest, title) => (title.length > longest.length ? title : longest)),
        [],
    );

    useEffect(() => {
        if (shouldReduceMotion) {
            setTitleIndex(0);
            setCharacterIndex(titles[0].length);
            setIsDeleting(false);

            return;
        }

        const isComplete = characterIndex === currentTitle.length;
        const isEmpty = characterIndex === 0;
        const delay = isComplete && !isDeleting
            ? pauseDuration
            : isDeleting
                ? deletingSpeed
                : typingSpeed;

        const timeout = window.setTimeout(() => {
            if (isComplete && !isDeleting) {
                setIsDeleting(true);

                return;
            }

            if (isEmpty && isDeleting) {
                setTitleIndex((index) => (index + 1) % titles.length);
                setIsDeleting(false);

                return;
            }

            setCharacterIndex((index) => index + (isDeleting ? -1 : 1));
        }, delay);

        return () => window.clearTimeout(timeout);
    }, [characterIndex, currentTitle.length, isDeleting, shouldReduceMotion]);

    return (
        <strong
            className="mx-auto mt-2 grid w-fit -rotate-3 font-hand text-4xl font-bold text-primary sm:text-6xl md:mx-0 md:ml-16 lg:text-5xl"
            aria-label="Full Stack Developer"
        >
            <span className="col-start-1 row-start-1 whitespace-nowrap" aria-hidden="true">
                {currentTitle.slice(0, characterIndex)}
                {!shouldReduceMotion && <span className="ml-1 inline-block animate-pulse">|</span>}
            </span>

            <span className="pointer-events-none invisible col-start-1 row-start-1 whitespace-nowrap" aria-hidden="true">
                {longestTitle}|
            </span>
        </strong>
    );
}
