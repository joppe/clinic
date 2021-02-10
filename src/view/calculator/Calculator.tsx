import React from 'react';

import { CalculatorContextProvider } from '../../provider/CalculatorContextProvider';
import { Style } from '../../type/Style';
import { Buttons } from './Buttons';
import { Debug } from './Debug';
import { Display } from './Display';

const style: Style = {
    root: {
        padding: '10px',
        width: '400px',
        border: '1px solid black',
    },
};

export function Calculator(): JSX.Element {
    return (
        <CalculatorContextProvider>
            <div style={style.root}>
                <Display />
                <Debug />
                <Buttons />
            </div>
        </CalculatorContextProvider>
    );
}
