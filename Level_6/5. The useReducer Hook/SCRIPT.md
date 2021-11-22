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

Let's take another example. Let's try to create a reducer that can add a form field to the state.

```js
import React, { useReducer } from 'react';

type FormElementVariants = "TEXT" | "NUMBER" | "CHECKBOX";

type FormElement = {
  type: FormElementVariants,
  label: string,
  value: string,
};

const newField = (label, variant: FormElementVariants): FormElement => ({
    switch (variant) {
        case "TEXT":
        return {
            type: "TEXT",
            value: "",
            label,
        };
        case "NUMBER":
        return {
            type: "NUMBER",
            value: "",
            label,
        };
        case "CHECKBOX":
        return {
            type: "CHECKBOX",
            value: false,
            label,
        };
        default:      
        throw new Error();
    }
};

const reducer = (state: FormElement[], action: { type: "ADD_FIELD", field: FormElement }) => {
  switch (action.type) {
    case 'ADD_FIELD':
      const newField = newField(action.label, action.variant);
        return [...state, newField];
    default:
      throw new Error();
  }
};

```

Now this is more in line with our Form Builder. We can add new Form Fields to the state and render them from the state. This becomes more and more relevant as you create more complex forms and thereby require more complex state management.

In the example above, we have a reducer that can add a form field to the state. We're exhaustively handling all the allowed form field variants. To make the reducer handle more actions we should add the allowed actions to the type property of the action that we receive in the reducer.
