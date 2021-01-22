import fetch from 'node-fetch';

export async function random(min: number, max: number): Promise<number> {
    const response = await fetch(
        `http://www.randomnumberapi.com/api/v1.0/random?min=${min}&max=${max}&count=1`,
    );
    const result: number[] = await response.json();

    return result[0];
}
