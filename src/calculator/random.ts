import fetch from 'node-fetch';

export async function random(min: number, max: number): Promise<number> {
    if (min < 0 || max < 0) {
        throw new Error('Only positive numbers are allowed');
    }

    if (min > max) {
        throw new Error('Min is larger than max');
    }

    const response = await fetch(
        `http://www.randomnumberapi.com/api/v1.0/random?min=${min}&max=${max}&count=1`,
    );
    const result: number[] = await response.json();

    return result[0];
}
