import React from 'react';

import { CalculatorContextProvider } from '../../provider/CalculatorContextProvider';
import { yellowGoldenSand } from '../../style/color';
import { Style } from '../../type/Style';
import { Buttons } from './Buttons';
import { Debug } from './Debug';
import { Display } from './Display';

const style: Style = {
    root: {
        padding: '10px',
        width: '400px',
        border: '1px solid black',
        backgroundColor: yellowGoldenSand,
    },
    display: {
        position: 'relative',
        display: 'flex',
    },
};

export function Calculator(): JSX.Element {
    return (
        <CalculatorContextProvider>
            <div style={style.root}>
                <div style={style.display}>
                    <Display />
                    <Debug />
                </div>
                <Buttons />
            </div>
        </CalculatorContextProvider>
    );
}
