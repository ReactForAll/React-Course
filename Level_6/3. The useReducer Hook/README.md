The useReducer Hook is a React Hook that lets you manage the state of a React application using a reducer. It enforces the action reducer pattern and lets you easily manage the state of larger applications. You can use the useReducer Hook instead of the useState hook to make sure you stick to the Action Reducer Pattern.

Let's take a simple example to understand how the useReducer Hook can be used to create a Counter in React.

```js
import React, { useReducer } from 'react';

const initialState = {
  count: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        Decrement
      </button>
    </div>
  );
};

```

Here Instead of using the useState Hook, we use the useReducer Hook. And instead of using setState, we dispatch an action and the reducer takes care of updating the state value.
