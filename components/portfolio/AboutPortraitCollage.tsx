import { motion } from 'motion/react';

import { Doodle } from './decorations/Doodle';
import { DotPattern } from './decorations/DotPattern';
import { usePointerParallax } from './usePointerParallax';

type AboutPortraitCollageProps = {
    imageSrc: string;
};

export function AboutPortraitCollage({ imageSrc }: AboutPortraitCollageProps) {
    const { containerHandlers, styles } = usePointerParallax();

    return (
        <div
            className="relative order-2 mx-auto grid aspect-[4/5] w-full max-w-xs place-items-center sm:max-w-sm md:order-2 lg:order-none lg:col-span-4 lg:mx-0 xl:col-span-3"
            aria-label="Placeholder editorial para foto de Thainá"
            {...containerHandlers}
        >
            <motion.span
                style={styles.background}
                className="absolute inset-x-4 bottom-8 top-6 rotate-[-8deg] rounded-[45%_55%_44%_56%] bg-primary-soft"
            />

            <motion.div style={styles.opposite} className="absolute bottom-50 left-0">
                <DotPattern className="h-32 w-40 text-text-primary" />
            </motion.div>

            <motion.div
                style={styles.photo}
                className="relative z-2 aspect-[33/43] w-4/5 overflow-hidden rounded-[154px_154px_28px_28px] bg-[#d8d5cf] shadow-soft sm:w-5/6"
            >
                <img
                    className="h-full w-full object-cover"
                    src={imageSrc}
                    alt="Foto de Thainá"
                />
            </motion.div>

            <motion.span
                style={styles.queer}
                className="pointer-events-none absolute left-0 top-28 z-5 inline-flex -translate-x-1/4 -rotate-6 items-center gap-1.5 rounded-pill border border-border bg-surface/90 px-2 py-1 text-[0.68rem] font-extrabold lowercase leading-none text-text-primary shadow-card sm:left-1 sm:top-32 sm:px-2.5 sm:py-1.5 sm:text-xs"
                aria-hidden="true"
            >
                <img
                    className="h-3.5 w-auto sm:h-4"
                    src="/images/lgbt-flag.png"
                    alt=""
                />

                queer dev
            </motion.span>

            <motion.span
                style={styles.age}
                className="pointer-events-none absolute right-0 top-44 z-5 inline-flex translate-x-1/4 rotate-6 items-center rounded-pill border border-border bg-surface/90 px-2.5 py-1.5 text-xs font-extrabold leading-none text-text-primary shadow-card sm:right-1 sm:top-48"
                aria-hidden="true"
            >
                28 y.o.
            </motion.span>

            <motion.div style={styles.decoration} className="absolute bottom-8 left-4 z-4">
                <Doodle className="w-28 rotate-[-10deg] text-primary" />
            </motion.div>

            <motion.span
                style={styles.decoration}
                className="pointer-events-none absolute right-2 top-14 h-8 w-8 rotate-12 bg-primary [mask-image:url('/images/assets/plane.svg')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] [-webkit-mask-image:url('/images/assets/plane.svg')] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]"
                aria-hidden="true"
            />

            <motion.span
                style={styles.opposite}
                className="pointer-events-none absolute -bottom-2 left-5 h-7 w-10 rotate-12 bg-primary [mask-image:url('/images/assets/puzzle-piece.svg')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] [-webkit-mask-image:url('/images/assets/puzzle-piece.svg')] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]"
                aria-hidden="true"
            />

            <motion.span
                style={styles.decoration}
                className="pointer-events-none absolute left-1 top-10 h-7 w-10 -rotate-12 bg-primary [mask-image:url('/images/assets/pin-location.svg')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] [-webkit-mask-image:url('/images/assets/pin-location.svg')] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]"
                aria-hidden="true"
            />
        </div>
    );
}
