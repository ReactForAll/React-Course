Welcome back!

Through the previous milestone you've made your own additional types that could be used to manage different kind of form fields. Now you may have felt that you're modifying the state from so many places that you lose context sooner or later. We can solve this by using the Action Reducer Pattern!

Actions and Reducers are functions that limit the different ways a state can be changed. It is more of a pattern than a rule. This means that you have far more control over how the state is changed and thereby make it easier to reason about your code. Using reducer functions to modify your state allows makes it easier to debug the code and ensures a better structure for your state

For Instance, if you have a state that is a list of objects, and you want to add a new object to the list, you can do so by using an action.

```js


const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const newField = getNewField(action.payload.kind, action.payload.label);
      return {
        ...state,
        formFields: [...state.formFields, newField],
      };
    }
    case "remove": {
      return {
        ...state,
        formFields: state.formFields.filter(
          (field) => field.id !== action.payload.id
        ),
      };
    }
  }
  
enum ActionTypes {
    ADD_FIELD,
    REMOVE_FIELD,   
}
const reducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FIELD:
            return [...state, action.field];
        default:
            return state;
    }
};

const dispatchAction = (action) => {
    setState(state => reducer(state, action));
};
```

Now this is a reducer. It is a function that takes in a state and an action, and returns a new state. This allows you to specify what are the different ways in which the state can be changed. This makes it easier to debug the code and ensures a better structure for your state. Let's try to dive into the code and see how the reducer works. For simplicity's sake, we've defined only the action for one type of action. At the end of this lesson you can try to create and handle the REMOVE_FIELD action.

So in the above example we've created a reducer that handles the ADD_FIELD action. We've created a temporary dispatchAction function that updates that state using the reducer. When you want to add a field you dispatch an action like:

```js
    dispatchAction({
        type: ActionTypes.ADD_FIELD,
        field: {
            type: "TEXT",
            label: "First Name",
            value: "",
        }
    });
```

This reaches the reducer and the reducer returns the new value of the state. The new value of the state is then passed to the setState function, thereby updating the state. You can try to create and handle the action for the REMOVE_FIELD action.
