# Levels

1. Callback Functions
2. Common Pitfalls in State Management
3. In-Browser Persistent Storage
4. The useEffect Hook - Timeout
5. The useRef Hook
6. Custom Hooks | Optional

Milestone: Make the Application capable of maintaining multiple quizzes and use side-effects to automatically save the quiz to localStorage intermittently.

# Milestone

Now that you've learned to use localStorage and the useEffect Hooks. Start out with the existing application, let's create a wrapper around localStorage with a custom hook.

- Create a Custom Hook named `useLocalStorage`
- Your Custom Hook should receive 2 arguments, the initial value of the state and the key to be used for localStorage.
- Create a State inside the `useLocalStorage` hook and the hook should return the state, setState as an array
- If the localStorage(key) is null, then the state should be initialized with the initialState received as the argument of the hook and localStorage(key) if it's not null.
- In your App.tsx, use useLocalStorage instead of useState for `items` and `itemsDone`
- In your `useLocalStorage` hook, there should be a `useEffect` that saves the value of it's state to localStorage using `localStorage.setItem` whenever the value of the state changes.

> You may find implementations of useLocalStorage with a quick Google Search. Make sure that you Ignore Existing Solutions when you Complete this Milestone.
