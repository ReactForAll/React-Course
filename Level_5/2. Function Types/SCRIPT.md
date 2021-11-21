In the previous lesson, we learned how we can define static typed variables. We can also define static typed functions. A static typed function has a defined type for each argument and the return type of the function. This brings a lot more clarity on what a funciton does. When you create a function that pads a string, you can't pass anything other than a string. Nor can you pass in undefined. This means that you don't have to handle undefined or other types within the function.

```js
// Function that takes a string and returns a string
function sayHello(name: string): string {
  return `Hello, ${name}!`;
}
```

If you look at the above function, we've specified that it takes a string as an argument and returns a string. We can specify the type of each argument and the return type of the function.

Now that we've looked at how to define a function with static typing, let's take a look at passing functions as parameters. Or a function that returns a function.

If you're passing a function A that takes X and returns Y into a function B, you can specify the type of funciton B as

```js
function B(funcA: (x: X) => Y): void {
  // ...
}
```

Or taking a more realistic example:

```js
// Function that takes a void function and returns a string
function sayHello(getText: () => string): string {
  const text = getText();
  return `Hello, ${text}!`;
}
```

If you look at the above function, we've specified that it takes a function that returns a string as an argument and returns a string. This is how you can specify the type of a function.

Similarly you can also define the type of a function that returns a function.

```js
// Function that returns a void function that returns a string
function sayHello(getText: () => string): () => string {
    const text = getText();
    return () => `Hello, ${text}!`;
}
```
Now this looks quite complicated, so let's take a closer look. We can see that the function that we're returning is a function that takes no arguments and returns a string. This is specified as `() => string` as the return type of the function sayHello. Now sayHello also takes a function as an argument. This is specified as `(() => string)`, as the getText function should take no arguments and return a string.

