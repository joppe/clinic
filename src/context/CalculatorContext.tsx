import { createContext } from 'react';

import { EventEmitter } from '../event-emitter/eventEmitter';

export type InputChangePayload = {
    name: string;
    value: string;
};

export type Values = {
    [name: string]: string;
};

export type CalculatorContextValue = {
    emitter: EventEmitter<InputChangePayload>;
    getValue(name: string): string;
};

export const CalculatorContext = createContext<
    CalculatorContextValue | undefined
>(undefined);
