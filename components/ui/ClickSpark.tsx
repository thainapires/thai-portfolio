import { type MouseEvent, type PropsWithChildren, useCallback, useEffect, useRef } from 'react';

type ClickSparkProps = PropsWithChildren<{
    sparkColor?: string;
    sparkSize?: number;
    sparkRadius?: number;
    sparkCount?: number;
    duration?: number;
    easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out' | string;
    extraScale?: number;
}>;

type Spark = {
    x: number;
    y: number;
    angle: number;
    startTime: number;
};

export default function ClickSpark({
    sparkColor = '#fff',
    sparkSize = 10,
    sparkRadius = 15,
    sparkCount = 8,
    duration = 400,
    easing = 'ease-out',
    extraScale = 1.0,
    children,
}: ClickSparkProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const sparksRef = useRef<Spark[]>([]);
    const startTimeRef = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (canvas === null) {
            return;
        }

        const parent = canvas.parentElement;

        if (parent === null) {
            return;
        }

        let resizeTimeout: number | undefined;

        const resizeCanvas = () => {
            const { width, height } = parent.getBoundingClientRect();

            if (canvas.width !== width || canvas.height !== height) {
                canvas.width = width;
                canvas.height = height;
            }
        };

        const handleResize = () => {
            window.clearTimeout(resizeTimeout);
            resizeTimeout = window.setTimeout(resizeCanvas, 100);
        };

        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(parent);

        resizeCanvas();

        return () => {
            resizeObserver.disconnect();
            window.clearTimeout(resizeTimeout);
        };
    }, []);

    const easeFunc = useCallback(
        (time: number): number => {
            switch (easing) {
                case 'linear':
                    return time;
                case 'ease-in':
                    return time * time;
                case 'ease-in-out':
                    return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
                default:
                    return time * (2 - time);
            }
        },
        [easing],
    );

    useEffect(() => {
        const canvas = canvasRef.current;

        if (canvas === null) {
            return;
        }

        const context = canvas.getContext('2d');

        if (context === null) {
            return;
        }

        let animationId: number;

        const draw = (timestamp: number) => {
            if (startTimeRef.current === null) {
                startTimeRef.current = timestamp;
            }

            context.clearRect(0, 0, canvas.width, canvas.height);

            sparksRef.current = sparksRef.current.filter((spark) => {
                const elapsed = timestamp - spark.startTime;

                if (elapsed >= duration) {
                    return false;
                }

                const progress = elapsed / duration;
                const eased = easeFunc(progress);
                const distance = eased * sparkRadius * extraScale;
                const lineLength = sparkSize * (1 - eased);
                const x1 = spark.x + distance * Math.cos(spark.angle);
                const y1 = spark.y + distance * Math.sin(spark.angle);
                const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
                const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

                context.strokeStyle = sparkColor;
                context.lineWidth = 2;
                context.beginPath();
                context.moveTo(x1, y1);
                context.lineTo(x2, y2);
                context.stroke();

                return true;
            });

            animationId = requestAnimationFrame(draw);
        };

        animationId = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [sparkColor, sparkSize, sparkRadius, duration, easeFunc, extraScale]);

    function handleClick(event: MouseEvent<HTMLDivElement>): void {
        const canvas = canvasRef.current;

        if (canvas === null) {
            return;
        }

        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const now = performance.now();
        const newSparks = Array.from({ length: sparkCount }, (_, index) => ({
            x,
            y,
            angle: (2 * Math.PI * index) / sparkCount,
            startTime: now,
        }));

        sparksRef.current.push(...newSparks);
    }

    return (
        <div className="click-spark" onClick={handleClick}>
            <canvas ref={canvasRef} className="click-spark__canvas" />
            {children}
        </div>
    );
}
