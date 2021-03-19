import { PropTypes } from 'prop-types';
import React, { useState } from 'react';

function FirstName({ value, setValue }) {
    return (
        <div>
            <label htmlFor="first-name">First name</label>
            <input
                type="text"
                id="first-name"
                autoComplete="chrome-off"
                value={value}
                onChange={setValue}
            />
        </div>
    );
}
FirstName.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
};

function LastName({ value, setValue }) {
    return (
        <div>
            <label htmlFor="last-name">Last name</label>
            <input
                type="text"
                id="last-name"
                autoComplete="chrome-off"
                value={value}
                onChange={setValue}
            />
        </div>
    );
}
LastName.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
};

function Email({ value, setValue }) {
    return (
        <div>
            <label htmlFor="email">E-mail</label>
            <input
                type="text"
                id="email"
                autoComplete="chrome-off"
                value={value}
                onChange={setValue}
            />
        </div>
    );
}
Email.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
};

function Debug({ state }) {
    return <pre>{JSON.stringify(state)}</pre>;
}
Debug.propTypes = {
    state: PropTypes.object,
};

export function Form() {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    function update(name, value) {
        setState({
            ...state,
            [name]: value,
        });
    }

    function clickHandler() {
        console.log(state);
    }

    return (
        <form>
            <FirstName
                value={state.firstName}
                setValue={(event) => update('firstName', event.target.value)}
            />
            <LastName
                value={state.lastName}
                setValue={(event) => update('lastName', event.target.value)}
            />
            <Email
                value={state.email}
                setValue={(event) => update('email', event.target.value)}
            />
            <button type="button" onClick={clickHandler}>
                Submit
            </button>
        </form>
    );
}
