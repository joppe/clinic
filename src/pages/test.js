import React, { useState } from 'react';

import { Interval } from '../component/interval';

export default function Test() {
    const [show, setShow] = useState(false);

    function handleClick() {
        setShow(!show);
    }

    return (
        <section>
            <h1>What will it do?</h1>

            {!show && (
                <button type="button" onClick={handleClick}>
                    Start
                </button>
            )}
            {show && <Interval />}
        </section>
    );
}
