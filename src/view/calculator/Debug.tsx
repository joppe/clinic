import React, { useContext } from 'react';

import { CalculatorContext } from '../../context/CalculatorContext';
import { Style } from '../../type/Style';

const style: Style = {
    debug: {
        display: 'flex',
        margin: '0 0 10px 0',
        height: '30px',
        fontSize: '11px',
    },
};

export function Debug() {
    const { calculation } = useContext(CalculatorContext);

    return (
        <div style={style.debug}>
            {`${calculation.left ?? ' '} ${calculation.operator ?? ' '} ${
                calculation.right ?? ' '
            }`}
        </div>
    );
}
