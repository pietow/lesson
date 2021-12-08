import React, { useReducer } from 'react';
import './App.css';

// const initialState = { count: 0 };
const initialCount = 0;

const init = function(initialValue) {
    return { count: initialValue };
}

const reducer = function(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
};

function App() {
    const [state, dispatch] = useReducer(reducer, initialCount, init);

    const increment = () => {
        dispatch({ type: 'increment' });
    };

    const decrement = () => {
        dispatch({ type: 'decrement' });
    };

    return (
        <div className="App">
            <h2>You clicked {state.count} times</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default App;
