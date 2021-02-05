import React from 'react';

type Prop = {
    value: string;
};

const style: React.CSSProperties = {
    boxSizing: 'border-box',
    margin: '0 0 10px 0',
    padding: '0 10px',
    width: '100%',
    border: '1px solid black',
    lineHeight: '30px',
    textAlign: 'right',
    color: 'black',
};

export function Display(prop: Prop) {
    return <input type="text" style={style} value={prop.value} disabled />;
}
