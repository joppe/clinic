import { calculator } from '../../src/calculator/calculator';

describe('calculator', () => {
    describe('add', () => {
        it('positive integers', () => {
            expect(calculator(2, 6, '+')).toBe(8);
            expect(calculator(0, 6, '+')).toBe(6);
        });

        it('negative integers', () => {
            expect(calculator(-2, 6, '+')).toBe(4);
            expect(calculator(-2, -23, '+')).toBe(-25);
        });

        it('positive floats', () => {
            expect(calculator(0.2, 1.2, '+')).toBe(1.4);
        });
    });

    describe('subtract', () => {
        it('positive integers', () => {
            expect(calculator(2, 6, '-')).toBe(-4);
            expect(calculator(0, 6, '-')).toBe(-6);
        });

        it('negative integers', () => {
            expect(calculator(-2, 6, '-')).toBe(-8);
            expect(calculator(-2, -23, '-')).toBe(21);
        });

        it('positive floats', () => {
            expect(calculator(0.2, 1.2, '-')).toBe(-1);
        });
    });

    describe('multiply', () => {
        it('positive integers', () => {
            expect(calculator(2, 6, '*')).toBe(12);
            expect(calculator(9, 4, '*')).toBe(36);
        });

        it('negative integers', () => {
            expect(calculator(-2, 6, '*')).toBe(-12);
            expect(calculator(-2, -23, '*')).toBe(46);
        });

        it('positive floats', () => {
            expect(calculator(0.2, 1.2, '*')).toBe(0.24);
        });

        it('by zero', () => {
            expect(calculator(0, 1.2, '*')).toBe(0);
        });
    });

    describe('devide', () => {
        it('devide', () => {
            expect(calculator(6, 2, '/')).toBe(3);
        });

        it('by zero', () => {
            expect(() => {
                calculator(2, 0, '/');
            }).toThrow();
        });
    });
});
