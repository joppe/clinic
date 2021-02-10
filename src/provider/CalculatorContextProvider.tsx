import React, { useEffect, useRef } from 'react';

import {
    CalculatorContext,
    InputChangePayload,
    Values,
} from '../context/CalculatorContext';
import { eventEmitter } from '../event-emitter/eventEmitter';

type Props = {
    children: React.ReactNode;
};

export const CHANGE_EVENT = 'change';

export function CalculatorContextProvider(props: Props): JSX.Element {
    const valuesRef = useRef<Values>({
        input: '0',
        left: '',
        operator: '',
        right: '',
    });
    const emitter = eventEmitter<InputChangePayload>();

    useEffect(() => {
        return emitter.on(
            CHANGE_EVENT,
            (event: string, payload: InputChangePayload): void => {
                valuesRef.current = {
                    ...valuesRef.current,
                    [payload.name]: payload.value,
                };
            },
        );
    }, [valuesRef]);

    const value = {
        emitter,
        getValue(name: string): string {
            return valuesRef.current[name];
        },
    };

    return (
        <CalculatorContext.Provider value={value}>
            {props.children}
        </CalculatorContext.Provider>
    );
}
