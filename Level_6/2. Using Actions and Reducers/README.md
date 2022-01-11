Actions and Reducers are functions that limit the different ways a state can be changed. It is more of a pattern than a rule.

For Instance, if you have a state that is a list of objects, and you want to add a new object to the list, you can do so by using an action.

```js
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

Now this is a reducer. It is a function that takes in a state and an action, and returns a new state. This allows you to specify what are the different ways in which the state can be changed.