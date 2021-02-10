import React from 'react';

import { useValue } from '../../hook/useValue';
import { blueTeal } from '../../style/color';
import { Style } from '../../type/Style';

const style: Style = {
    root: {
        position: 'absolute',
        left: '5px',
        top: '5px',
        display: 'flex',
        fontSize: '11px',
        fontWeight: 'bold',
        color: blueTeal,
    },
};

export function Debug(): JSX.Element {
    const left = useValue('left');
    const operator = useValue('operator');
    const right = useValue('right');

    return <div style={style.root}>{`${left} ${operator} ${right}`}</div>;
}
