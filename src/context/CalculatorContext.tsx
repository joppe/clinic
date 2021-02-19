import { createContext } from 'react';

import { Operator } from '../calculator/calculator';

export type CalculatorContextValue = {
    input: string;
    calculation: {
        left?: number;
        right?: number;
        operator?: Operator;
    };
    addDigit(digit: number): void;
    reset(): void;
    calculate(): void;
    operate(operator: Operator): void;
};

export const CalculatorContext = createContext<
    CalculatorContextValue | undefined
>(undefined);
