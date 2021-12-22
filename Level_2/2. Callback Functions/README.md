Callback functions are functions that you pass into another function as a prop. You can do this the same way as you'd pass any other variable.

```js
const logText = (text:string) => {
    console.log(text);
}

<SomeComponent logCB={logText}>
```

A common convention that is followed to identify callback functions is to name them with a trailing `CB` (for Callback).