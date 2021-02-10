import React, { useState } from 'react';

import { Operator, calculator } from '../calculator/calculator';
import {
    CalculatorContext,
    CalculatorContextValue,
} from '../context/CalculatorContext';

type Props = {
    children: React.ReactNode;
};

export function CalculatorContextProvider(props: Props): JSX.Element {
    const [input, setInput] = useState('0');
    const [calculation, setCalculation] = useState<
        CalculatorContextValue['calculation']
    >({});

    function addDigit(digit: number): void {
        setInput(input === '0' ? String(digit) : `${input}${String(digit)}`);
    }

    function reset(): void {
        setInput('0');
        setCalculation({});
    }

    function operate(operator: Operator): void {
        setCalculation({
            left: Number(input),
            operator,
            right: undefined,
        });
        setInput('0');
    }

    function calculate(): void {
        if (
            calculation.left === undefined ||
            calculation.operator === undefined
        ) {
            return;
        }

        setCalculation({
            ...calculation,
            right: Number(input),
        });

        const result = calculator(
            calculation.left,
            Number(input),
            calculation.operator,
        );

        setInput(String(result));
    }

    const value = {
        input,
        calculation,
        addDigit,
        reset,
        operate,
        calculate,
    };

    return (
        <CalculatorContext.Provider value={value}>
            {props.children}
        </CalculatorContext.Provider>
    );
}
