# Introduction to React Hooks and Functional components

In the previous lessons, We've been using stateless functional React component. So how do we make it controlled? Or how do we use State in a functional component? 

This is where React Hooks come in. React Hooks are a set of new features that allow us to write functional components that are easier to read and easier to understand. In order to use State inside a functional component, we have the useState hook.

```js
const MyComponent = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};
```

That looks a lot more simpler than the class based example we saw for Creating a counter right! We'll be using functional components and React Hooks in this course. The state can be anything from a simple counter to a complex object, we'll learn more about that in the upcoming lessons.