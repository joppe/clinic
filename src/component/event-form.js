import { PropTypes } from 'prop-types';
import React, {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';

function eventEmitter() {
    const listeners = {};

    function off(event, listener) {
        if (listeners[event] === undefined) {
            return;
        }

        listeners[event] = listeners[event].filter(
            (registered) => registered !== listener,
        );
    }

    return {
        on(event, listener) {
            if (listeners[event] === undefined) {
                listeners[event] = [];
            }

            listeners[event].push(listener);

            return () => {
                off(event, listener);
            };
        },
        off,
        emit(event, payload) {
            if (listeners[event] === undefined) {
                return;
            }

            listeners[event].forEach((listener) => listener(event, payload));
        },
    };
}

const EventFormContext = createContext({
    emitter: eventEmitter(),
    getValue() {},
});

function EventFormProvider({ defaultValues = {}, children }) {
    const valuesRef = useRef(defaultValues);
    const emitter = eventEmitter();

    useEffect(() => {
        return emitter.on('change', (event, payload) => {
            valuesRef.current = {
                ...valuesRef.current,
                [payload.name]: payload.value,
            };
        });
    }, [valuesRef]);

    const value = {
        emitter,
        getValue(name) {
            return valuesRef.current[name];
        },
    };

    return (
        <EventFormContext.Provider value={value}>
            {children}
        </EventFormContext.Provider>
    );
}
EventFormProvider.propTypes = {
    children: PropTypes.node,
    defaultValues: PropTypes.object,
};

function useFormValue(name) {
    const { emitter, getValue } = useContext(EventFormContext);
    const [value, setValue] = useState(getValue(name));

    useEffect(() => {
        return emitter.on('change', (event, payload) => {
            if (payload.name !== name) {
                return;
            }

            setValue(payload.value);
        });
    }, []);

    return value;
}

function FirstName() {
    const { emitter } = useContext(EventFormContext);

    function changeHandler(event) {
        emitter.emit('change', {
            name: 'firstName',
            value: event.target.value,
        });
    }

    return (
        <div>
            <label htmlFor="first-name">First name</label>
            <input
                type="text"
                id="first-name"
                autoComplete="chrome-off"
                onChange={changeHandler}
            />
        </div>
    );
}

function LastName() {
    const { emitter } = useContext(EventFormContext);

    function changeHandler(event) {
        emitter.emit('change', { name: 'lastName', value: event.target.value });
    }

    return (
        <div>
            <label htmlFor="last-name">Last name</label>
            <input
                type="text"
                id="last-name"
                autoComplete="chrome-off"
                onChange={changeHandler}
            />
        </div>
    );
}

function Email() {
    const { emitter } = useContext(EventFormContext);

    function changeHandler(event) {
        emitter.emit('change', { name: 'email', value: event.target.value });
    }

    return (
        <div>
            <label htmlFor="email">E-mail</label>
            <input
                type="text"
                id="email"
                autoComplete="chrome-off"
                onChange={changeHandler}
            />
        </div>
    );
}

function Debug() {
    const state = {
        firstName: useFormValue('firstName'),
        lastName: useFormValue('lastName'),
        email: useFormValue('email'),
    };

    return <pre>{JSON.stringify(state)}</pre>;
}

function Form() {
    const { getValue } = useContext(EventFormContext);

    function clickHandler() {
        console.log({
            firstName: getValue('firstName'),
            lastName: getValue('lastName'),
            email: getValue('email'),
        });
    }

    return (
        <form>
            <FirstName />
            <LastName />
            <Email />
            <Debug />
            <button type="button" onClick={clickHandler}>
                Submit
            </button>
        </form>
    );
}

export function EventForm() {
    return (
        <EventFormProvider
            defaultValues={{ firstName: '', lastName: '', email: '' }}
        >
            <Form />
        </EventFormProvider>
    );
}
