import React, { useContext } from 'react';

import { Operator } from '../../calculator/calculator';
import { CalculatorContext } from '../../context/CalculatorContext';
import { Style } from '../../type/Style';
import { Button } from './Button';

const ROW_HEIGHT = 30;

const style: Style = {
    root: {
        display: 'grid',
        gridTemplateColumns: '3fr 1fr',
        gap: '10px',
    },
    operations: {
        display: 'grid',
        gap: '10px',
        gridAutoRows: `${ROW_HEIGHT}px`,
    },
    digits: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridAutoRows: `${ROW_HEIGHT}px`,
        gap: '10px',
    },
};

export function Buttons(): JSX.Element {
    const { addDigit, reset, operate, calculate } = useContext(
        CalculatorContext,
    );

    return (
        <div style={style.root}>
            <div style={style.digits}>
                {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((digit) => (
                    <Button
                        key={digit}
                        type="input"
                        clickHandler={() => addDigit(digit)}
                    >
                        {String(digit)}
                    </Button>
                ))}
            </div>
            <div style={style.operations}>
                <Button key="ac" type="state" clickHandler={reset}>
                    AC
                </Button>
                <Button key="=" type="operation" clickHandler={calculate}>
                    =
                </Button>
                {['+', '-', '*', '/'].map((operator) => (
                    <Button
                        key={operator}
                        type="operation"
                        clickHandler={() => operate(operator as Operator)}
                    >
                        {operator}
                    </Button>
                ))}
            </div>
        </div>
    );
}
