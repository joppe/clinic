import React from 'react';

type Prop = {
    children: JSX.Element | string;
    clickHandler?: () => void;
};

export function Button(prop: Prop): JSX.Element {
    return (
        <button type="button" onClick={prop.clickHandler}>
            {prop.children}
        </button>
    );
}
