import { useContext, useEffect, useState } from 'react';

import {
    CalculatorContext,
    CalculatorContextValue,
    InputChangePayload,
} from '../context/CalculatorContext';
import { CHANGE_EVENT } from '../provider/CalculatorContextProvider';

export function useValue(name: string): string {
    const { emitter, getValue } = useContext(
        CalculatorContext,
    ) as CalculatorContextValue;
    const [value, setValue] = useState(getValue(name));

    useEffect(() => {
        return emitter.on(
            CHANGE_EVENT,
            (event: string, payload: InputChangePayload) => {
                if (payload.name !== name) {
                    return;
                }

                setValue(payload.value);
            },
        );
    }, []);

    return value;
}
