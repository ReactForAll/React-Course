The same way we've specified the type of a variable, we can also specify the type of a function.

```js
// Function that takes a string and returns a string
function sayHello(name: string): string {
  return `Hello, ${name}!`;
}
```

If you look at the above function, we've specified that it takes a string as an argument and returns a string. We can specify the type of each argument and the return type of the function.

What about passing functions as a parameter to another function? You can specify the type of the parameter in the function signature of the function that's being passed in.

```js
// Function that takes a void function and returns a string
function sayHello(getText: () => string): string {
  const text = getText();
  return `Hello, ${text}!`;
}
```

If you look at the above function, we've specified that it takes a function that returns a string as an argument and returns a string. This is how you can specify the type of a function.

How about functions that return a function. That would look like:


```js
// Function that returns a void function that returns a string
function sayHello(getText: () => string): () => string {
    const text = getText();
    return () => `Hello, ${text}!`;
}
```