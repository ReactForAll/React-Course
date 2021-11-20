You've seen how React allows you to build reactive components. Components have a state and it renders the UI based on the state. Similarly, you can use custom hooks to build reactive functions.

When I say Reactive functions, they are functions that behave exactly like React Components except for the fact that they are not rendered to the DOM.

One of the most commonly used custom hooks is the PreviousValue hook. It allows you to get the previous value of a state or a prop.

```js
const usePreviousValue = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
```

```js
const [lastEdited, setLastEdited] = useState(new Date());
const previousLastEdited = usePreviousValue(lastEdited);

useEffect(() => {
  console.log("New Last Edited Time:", lastEdited);
  console.log("Previous Last Edited Time:", previousLastEdited);
}, [lastEdited]);
```

Another commonly use custom hook is the useClickOutside hook. It allows you to detect when the user clicks outside of a component.

```js
const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};
```
