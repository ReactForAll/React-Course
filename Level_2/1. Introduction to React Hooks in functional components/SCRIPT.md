# Introduction to React Hooks and Functional components

In the previous lessons, we've been using stateless functional React components to render our UI. Going forward, let's learn to use React states to make our components reactive. When I say Reactive, what I mean is changing the UI based on the user's actions! We use the React state to achieve this. 

In order to access the React state, we will use the `useState` hook that's available in React. You can import it as a named import like:

```js
import { useState } from "react"
```

Now, you can create a state variable using the `useState` hook like:

```js
const [state, setState] = useState(initialValue);
```

Now you may notice that when you create a state using the hook, we are initializing two variables, state and setState. This is because React state is immutable, meaning you shouldn't mutate it, but you can assign new values to it using the setState function. So if you want to change the value of state you would use the setState function like this:

```js
  setState(newStateValue);
```
Instead of simply mutating the value of the state variable like this: 

```js
  state = newStateValue
  state = state + 1
```

Note that you can also specify the type of the state variable that you are creating using a `<>` like this: 

```js
const [page, setPage] = useState<string>("Home");
```

Now let's encapsulate our Form into a separate component and switch between our components using a state named `page`! In order to use this, we will handle the `click` action on a button to modify our state variable.

```js
  {page === "HOME" ? (
    <button
      onClick={() => setPage("FORM")}
      className="bg-gray-200 text-gray-800 border-2 border-gray-400 rounded-lg p-2 m-2 w-full"
    >
      Go to Form
    </button>
  ) : (
    <div>
      <button
        onClick={() => setPage("HOME")}
        className="bg-gray-200 text-gray-800 border-2 border-gray-400 rounded-lg p-2 m-2 w-full"
      >
        Close Form
      </button>
      <Form />
    </div>
  )}
```

Now if you click on the button, the state changes and react re-renders the component based on the new value of the state.

Here you may have noticed how we're handling a button click using an arrow function. If you want want to execute multiple statements within an arrow function you can simply wrap the statements in a set of curly braces; Something like this:

```js
  onClick={() => { setPage("FORM"); console.log("Switching to Form View"); }}
```

Let's learn more about building dynamic components using the React state in the coming lessons.
