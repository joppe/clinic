import { calculator } from '../../src/calculator/calculator';

describe('calculator', () => {
    it('add', () => {
        expect(calculator(2, 6, '+')).toBe(8);
    });
});
