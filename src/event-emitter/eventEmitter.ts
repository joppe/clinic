export type Listener<T> = (event: string, payload: T) => void;

export type Listeners<T> = {
    [event: string]: Listener<T>[];
};

export type EventEmitter<T> = {
    on(event: string, listener: Listener<T>): () => void;
    off(event: string, listener: Listener<T>): void;
    emit(event: string, payload: T): void;
};

export function eventEmitter<T>(): EventEmitter<T> {
    const listeners: Listeners<T> = {};

    function off(event: string, listener: Listener<T>): void {
        if (listeners[event] === undefined) {
            return;
        }

        listeners[event] = listeners[event].filter(
            (registered) => registered !== listener,
        );
    }

    return {
        on(event: string, listener: Listener<T>): () => void {
            if (listeners[event] === undefined) {
                listeners[event] = [];
            }

            listeners[event].push(listener);

            return (): void => {
                off(event, listener);
            };
        },
        off,
        emit(event: string, payload: T): void {
            if (listeners[event] === undefined) {
                return;
            }

            listeners[event].forEach((listener) => listener(event, payload));
        },
    };
}
