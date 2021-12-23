
By now we have a form builder that allows us to to create our own custom form of text inputs! 

- Create a Custom Hook named `useLocalStorage`
- Your Custom Hook should receive 2 arguments, the initial value of the state and the key to be used for localStorage.
- Create a State inside the `useLocalStorage` hook and the hook should return the state, setState as an array
- If the localStorage(key) is null, then the state should be initialized with the initialState received as the argument of the hook and localStorage(key) if it's not null.
- In your App.tsx, use useLocalStorage instead of useState for `items` and `itemsDone`
- In your `useLocalStorage` hook, there should be a `useEffect` that saves the value of it's state to localStorage using `localStorage.setItem` whenever the value of the state changes.

> You may find implementations of useLocalStorage with a quick Google Search. Make sure that you Ignore Existing Solutions when you complete this Milestone.