Actions and Reducers are functions that limit the different ways a state can be changed. It is more of a pattern than a rule.

For Instance, if you have a state that is a list of objects, and you want to add a new object to the list, you can do so by using an action.

```js
enum ActionTypes {
  ADD_TODO,
  REMOVE_TODO,
}
const reduce = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [...state, action.text];
    default:
      return state;
  }
};

const addTodo = (text) => {
  return {
    type: ActionTypes.ADD_TODO,
    text
  }
}
```

Now this is a reducer, but it is not a pure function. It is a function that takes in a state and an action, and returns a new state. 