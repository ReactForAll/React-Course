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
      <button onClick={(_) => ref.current?.focus()}>Focus Hello World</button>
    </div>
    <span ref={ref}>Hello World</span>
  </div>
);
```

You may have noticed the `?` used along when refering to ref.current.focus. This is the Javascript's Optional Chaining feature. This allows you to check if ref.current is null before calling the focus method to avoid an error when referencing focus.

You can see that the `useRef` hook is used to access the DOM node of a child element. You can access the DOM using ref.current and use any of the DOM APIs.

useRef being a mutable variable, it is the go-to solution when you need to use legacy libraries that are not React-friendly. useRef creates a plain JavaScript object that contains a mutable value. Therefore it's as vanilla as you can get.

useRef is also useful when you need to make some custom hooks of your own. You'll learn more about this in the next target.
