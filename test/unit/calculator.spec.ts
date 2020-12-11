import { calculator } from '../../src/calculator/calculator';

describe('calculator', () => {
    it('add', () => {
        expect(calculator([2, 6], '+')).toBe(8);
    });

    it('devide', () => {
        expect(() => {
            calculator([2, 0], '/');
        }).toThrow();
    });
});
