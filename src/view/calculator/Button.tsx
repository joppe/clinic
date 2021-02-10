import React from 'react';

type Type = 'input' | 'operation' | 'state';

type Props = {
    children: JSX.Element | string;
    type: Type;
    clickHandler: () => void;
};

const blueTeal = '#264653';
const greenJava = '#2a9d8f';
const yellowGoldenSand = '#e9c46a';
const brownSandy = '#f4a261';
const brownBurntSienna = '#e76f51';

const style: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    border: '1px solid black',
    fontWeight: 'bold',
};

const inputStyle: React.CSSProperties = {
    ...style,
    color: '#000000',
    backgroundColor: yellowGoldenSand,
};

const operationStyle: React.CSSProperties = {
    ...style,
    color: '#ffffff',
    backgroundColor: blueTeal,
};

const stateStyle: React.CSSProperties = {
    ...style,
    color: '#ffffff',
    backgroundColor: greenJava,
};

function getStyle(type: Type): React.CSSProperties {
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
