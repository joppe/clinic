import React from 'react';

import { Button } from './Button';
import { Display } from './Display';

export function Calculator() {
    function addDigit(): void {}

    return (
        <div>
            <Display value="0" />
            <div>
                {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((digit) => (
                    <Button key={digit} clickHandler={addDigit}>
                        {String(digit)}
                    </Button>
                ))}
            </div>
        </div>
    );
}
