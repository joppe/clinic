import React from 'react';

type Props = {
    children: JSX.Element | string;
    clickHandler: () => void;
};

const style: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    border: '1px solid black',
    lineHeight: '20px',
};

export function Button(props: Props): JSX.Element {
    return (
        <button type="button" style={style} onClick={props.clickHandler}>
            {props.children}
        </button>
    );
}
