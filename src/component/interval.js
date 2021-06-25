import { useEffect, useState } from 'react';

export function Interval() {
    const [count, setCount] = useState(0);

    function increment() {
        console.log('increment', count);
        setCount(count + 1);
    }

    useEffect(() => {
        const id = window.setInterval(() => {
            console.log('interval');
            increment();
        }, 500);

        return () => {
            window.clearInterval(id);
        };
    }, []);

    return (
        <button type="button" onClick={increment}>
            Count {count}
        </button>
    );
}
