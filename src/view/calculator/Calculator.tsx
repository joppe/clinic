import React, { useState } from 'react';

import { Operator, calculator } from '../../calculator/calculator';
import { Button } from './Button';
import { Display } from './Display';

interface Style {
    [component: string]: React.CSSProperties;
}

type State = {
    left: null | string;
    operator: null | Operator;
    right: null | string;
};

const ROW_HEIGHT = 30;

const style: Style = {
    root: {
        padding: '10px',
        width: '400px',
        border: '1px solid black',
    },
    debug: {
        fontSize: '11px',
    },
    columns: {
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

export function Calculator(): JSX.Element {
    const [value, setValue] = useState('0');
    const [state, setState] = useState<State>({
        left: null,
        operator: null,
        right: null,
    });

    function addDigit(digit: number) {
        setValue(value === '0' ? String(digit) : `${value}${String(digit)}`);
    }

    function reset(): void {
        setValue('0');
        setState({
            left: null,
            operator: null,
            right: null,
        });
    }

    function operate(operator: Operator): void {
        setState({
            left: value,
            operator,
            right: null,
        });
        setValue('0');
    }

    function calc(): void {
        if (state.left === null || state.operator === null) {
            return;
        }

        setState({
            ...state,
            right: value,
        });

        const result = calculator(
            parseFloat(state.left),
            parseFloat(value),
            state.operator,
        );

        setValue(String(result));
    }

    return (
        <div style={style.root}>
            <Display value={value} />
            <div style={style.debug}>
                {`${state.left ?? ''} ${state.operator ?? ''} ${
                    state.right ?? ''
                }`}
            </div>
            <div style={style.columns}>
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
                    <Button key="=" type="operation" clickHandler={calc}>
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
        </div>
    );
}
