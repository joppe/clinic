import React, { useContext } from 'react';

import {
    CalculatorContext,
    CalculatorContextValue,
} from '../../context/CalculatorContext';
import { Style } from '../../type/Style';

const style: Style = {
    root: {
        boxSizing: 'border-box',
        margin: '0 0 10px 0',
        padding: '0 10px',
        width: '100%',
        border: '1px solid black',
        lineHeight: '30px',
        textAlign: 'right',
        color: 'black',
    },
};

export function Display(): JSX.Element {
    const { input } = useContext(CalculatorContext) as CalculatorContextValue;

    return <input type="text" style={style.root} value={input} disabled />;
}
