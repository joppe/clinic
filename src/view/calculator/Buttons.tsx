import React, { useContext } from 'react';

import { Operator, calculator } from '../../calculator/calculator';
import {
    CalculatorContext,
    CalculatorContextValue,
} from '../../context/CalculatorContext';
import { CHANGE_EVENT } from '../../provider/CalculatorContextProvider';
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
    const { emitter, getValue } = useContext(
        CalculatorContext,
    ) as CalculatorContextValue;

    function addInput(digit: number): void {
        const current = getValue('input');
        const value = current === '0' ? String(digit) : `${current}${digit}`;

        emitter.emit(CHANGE_EVENT, { name: 'input', value });
    }

    function reset(): void {
        emitter.emit(CHANGE_EVENT, { name: 'input', value: '0' });
        emitter.emit(CHANGE_EVENT, { name: 'left', value: '' });
        emitter.emit(CHANGE_EVENT, { name: 'right', value: '' });
        emitter.emit(CHANGE_EVENT, { name: 'operator', value: '' });
    }

    function calculate(): void {
        const left = getValue('left');
        const operator = getValue('operator') as Operator;
        const right = getValue('input');
        const result = calculator(Number(left), Number(right), operator);

        emitter.emit(CHANGE_EVENT, { name: 'right', value: right });
        emitter.emit(CHANGE_EVENT, { name: 'input', value: String(result) });
    }

    function operate(operator: Operator): void {
        emitter.emit(CHANGE_EVENT, { name: 'left', value: getValue('input') });
        emitter.emit(CHANGE_EVENT, { name: 'operator', value: operator });
        emitter.emit(CHANGE_EVENT, { name: 'input', value: '0' });
    }

    return (
        <div style={style.root}>
            <div style={style.digits}>
                {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((digit) => (
                    <Button
                        key={digit}
                        type="input"
                        clickHandler={() => addInput(digit)}
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
