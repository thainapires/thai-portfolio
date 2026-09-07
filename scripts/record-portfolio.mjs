import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const outputDir = path.resolve('artifacts/portfolio-showcase');

await fs.mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
    headless: true,
});

const context = await browser.newContext({
    viewport: {
        width: 1440,
        height: 900,
    },
    recordVideo: {
        dir: outputDir,
        size: {
            width: 1440,
            height: 900,
        },
    },
});

const page = await context.newPage();

await page.goto('http://localhost:3002', {
    waitUntil: 'networkidle',
});

await page.evaluate(() => {
    window.scrollTo(0, 0);
});

await page.waitForTimeout(1500);

await page.evaluate(async () => {
    await new Promise((resolve) => {
        const step = 18;
        const delay = 16;       

        const interval = setInterval(() => {
            window.scrollBy(0, step);

            const reachedBottom =
                window.scrollY + window.innerHeight >=
                document.documentElement.scrollHeight - 2;

            if (reachedBottom) {
                clearInterval(interval);
                resolve();
            }
        }, delay);
    });
});

await page.waitForTimeout(1500);

const video = page.video();

await context.close();

const originalVideoPath = await video.path();
const finalVideoPath = path.join(outputDir, 'portfolio.webm');

await fs.rename(originalVideoPath, finalVideoPath);

await browser.close();

console.log(`Video generated at: ${finalVideoPath}`);