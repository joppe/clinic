import React, { CSSProperties } from 'react';

import {
    blueTeal,
    brownBurntSienna,
    brownSandy,
    greenJava,
    yellowGoldenSand,
} from '../../style/color';

type Type = 'input' | 'operation' | 'state';

type Props = {
    children: JSX.Element | string;
    type: Type;
    clickHandler: () => void;
};

const style: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    border: '1px solid black',
    fontWeight: 'bold',
};

const inputStyle: CSSProperties = {
    ...style,
    color: '#000000',
    backgroundColor: brownBurntSienna,
};

const operationStyle: CSSProperties = {
    ...style,
    color: '#ffffff',
    backgroundColor: blueTeal,
};

const stateStyle: CSSProperties = {
    ...style,
    color: '#ffffff',
    backgroundColor: greenJava,
};

function getStyle(type: Type): CSSProperties {
    switch (type) {
        case 'input':
            return inputStyle;
        case 'operation':
            return operationStyle;
        case 'state':
            return stateStyle;
        default:
            return style;
    }
}

export function Button(props: Props): JSX.Element {
    return (
        <button
            type="button"
            style={getStyle(props.type)}
            onClick={props.clickHandler}
        >
            {props.children}
        </button>
    );
}
