The `useRef` is a yet another hook in React that allows you to create a mutable variable. `useRef` also allows you to “remember” the current value of a variable on the render cycle. You can use the useRef hook like this:

```js
const ref = useRef(initialValue);
```

A common use case of the useRef is to access DOM nodes. For example, you can use the useRef hook to access the DOM node of a child element.

```js
const ref = useRef(null);
return (
  <div>
    <div className="h-screen w-screen bg-gray-200">
        <button onClick={_=>ref.current.focus()}>Focus Hello World</button>
    </div>
    <span ref={ref}>Hello World</span>
  </div>
);
```


