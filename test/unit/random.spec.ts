import { random } from '../../src/calculator/random';

describe('random', () => {
    it('return a value between min and max', async () => {
        const rand = await random(0, 10);

        expect(rand).toBeGreaterThanOrEqual(0);
        expect(rand).toBeLessThanOrEqual(10);
    });

    it('min and max are the same will result in the same number', async () => {
        const rand = await random(2, 2);

        expect(rand).toBe(2);
    });

    it('the min and max are inclusive', async () => {
        const rand = await random(2, 3);

        expect(rand).toBeGreaterThanOrEqual(2);
        expect(rand).toBeLessThanOrEqual(3);
    });

    it('throw an error when min or max are negative numbers', async () => {
        await expect(async () => {
            const rand = await random(-2, 0);
        }).rejects.toThrow();
    });

    it('throw an error when min is greater or equal to max', async () => {
        await expect(async () => {
            const rand = await random(2, 0);
        }).rejects.toThrow();
    });
});
