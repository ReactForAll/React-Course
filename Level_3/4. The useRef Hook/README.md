The `useRef` is a yet another hook in React that allows you to create a mutable variable. `useRef` also allows you to “remember” the current value of a variable on the render cycle. It is most commonly used for accessing the DOM node of a component.

```js
const ref = useRef(null);
return (
  <div>
    <div className="h-screen w-screen bg-gray-200">
      <button onClick={(_) => ref.current?.focus()}>Focus Hello World</button>
    </div>
    <span ref={ref}>Hello World</span>
  </div>
);
```

You may have noticed the `?` used along when refering to ref.current.focus. This is the Javascript's Optional Chaining feature. This allows you to check if ref.current is null before calling the focus method to avoid an error when referencing focus.

Extra Reading: (https://reactjs.org/docs/hooks-custom.html)[Custom Hooks in React]