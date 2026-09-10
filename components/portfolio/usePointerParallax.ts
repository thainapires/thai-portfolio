import { type MouseEvent } from 'react';
import {
    useMotionValue,
    useReducedMotion,
    useSpring,
    useTransform,
} from 'motion/react';

const pointerRange: [number, number] = [-0.5, 0.5];

export function usePointerParallax() {
    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);
    const shouldReduceMotion = useReducedMotion();

    const x = useSpring(pointerX, {
        stiffness: 100,
        damping: 20,
    });

    const y = useSpring(pointerY, {
        stiffness: 100,
        damping: 20,
    });

    const photo = {
        x: useTransform(x, pointerRange, [-2, 2]),
        y: useTransform(y, pointerRange, [-2, 2]),
    };
    const background = {
        x: useTransform(x, pointerRange, [-4, 4]),
        y: useTransform(y, pointerRange, [-4, 4]),
    };
    const queer = {
        x: useTransform(x, pointerRange, [-6, 6]),
        y: useTransform(y, pointerRange, [-4, 4]),
    };
    const age = {
        x: useTransform(x, pointerRange, [5, -5]),
        y: useTransform(y, pointerRange, [-4, 4]),
    };
    const decoration = {
        x: useTransform(x, pointerRange, [-8, 8]),
        y: useTransform(y, pointerRange, [-6, 6]),
    };
    const opposite = {
        x: useTransform(x, pointerRange, [7, -7]),
        y: useTransform(y, pointerRange, [5, -5]),
    };

    function handlePointerMove(event: MouseEvent<HTMLDivElement>): void {
        if (shouldReduceMotion) {
            return;
        }

        const bounds = event.currentTarget.getBoundingClientRect();
        const nextX = (event.clientX - bounds.left) / bounds.width - 0.5;
        const nextY = (event.clientY - bounds.top) / bounds.height - 0.5;

        pointerX.set(nextX);
        pointerY.set(nextY);
    }

    function handlePointerLeave(): void {
        pointerX.set(0);
        pointerY.set(0);
    }

    return {
        containerHandlers: {
            onMouseMove: handlePointerMove,
            onMouseLeave: handlePointerLeave,
        },
        styles: shouldReduceMotion
            ? {
                  photo: undefined,
                  background: undefined,
                  queer: undefined,
                  age: undefined,
                  decoration: undefined,
                  opposite: undefined,
              }
            : {
                  photo,
                  background,
                  queer,
                  age,
                  decoration,
                  opposite,
              },
    };
}
