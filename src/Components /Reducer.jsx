import React, { useReducer } from 'react';

// Define the initial state
const initialState = { count: 0 };

// Define the reducer function
const reduce = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count > 0 ? state.count - 1 : 0 };
        case 'RESET':
            return { count: state.count = 0 };
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};

const Reducer = () => {
    // Initialize useReducer with reducer and initialState
    const [state, dispatch] = useReducer(reduce, initialState);

    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button> &nbsp;&nbsp;
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button><br /><br />
            <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
        </div>
    );
};

export default Reducer;
