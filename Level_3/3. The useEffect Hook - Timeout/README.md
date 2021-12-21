Let's learn about the useEffect hook, using which we can trigger a function based on a state change or a prop change. You can define a useEffect like:

```js
useEffect(() => {
  console.log('stateVariable or props changed)
  // do something
}, [stateVariable, props])
```