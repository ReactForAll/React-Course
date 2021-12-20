### State is Asynchronous

Through the previous lessons, I've mentioned that React State is asynchronous. This means that when you update a state, it doesn't immediately get updated. Instead, it gets queued up and gets updated in the background. For instance, if you look at the `formState.length` before and after you add a new item to it, you would see the same number! This is because when you print it immediately after the `setFormState` function, the update is still in the queue and has not reflected yet. 

Failure to realize this, you can end up with a situation where you're trying to update a state that's already being updated. For instance, If you update a state twice in a row, you probably won't see the behavior you expect.

Now how do we tackle this? Well, until now we have been modifying the state by passing the new value that we'd like the state to have. This works great when you are specifying an absolute value, butt when you're setting a value that's relative to the current value, you might end up with a situation where you're trying to update a state that's already being updated. You're more prone to this problem if you're updating the same state for multiple reasons. In such scenarios, you can pass a function or a closure to the setState function like this:

```js
setFormState(prevState => ([
  ...prevState,
  {
    label: 'newItem',
  } 
]));
```

A closure is a function with no name. It's a way to pass a function as an argument to another function without having to define it. For instance we've been using closures to handle our onChange and onClick events. In this case, we're passing a closure to the setState function that takes the current state as an argument. This makes sure that we're not trying to update the state that's already being updated, the closure get triggered only when that specific update is being made. Therefore it uses the latest value of the state.

### State is immutable.

Another common pitfall in state management is forgetting the fact that state should be treated as immutable. This means that you should never mutate the state, instead you should always use a new instance/value to update the state.