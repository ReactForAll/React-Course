
### Optional Parameters

When you create a function, not all parameters of the function may be required. Some of them can be optional. You can denote these using a `?` symbol. This is known as optional parameters.

```js
function greet(firstName: string, lastName?: string) {
    console.log(`Hello ${firstName} ${lastName}`);
}
```

### Default Parameters

In a function, you can specify a default value for a parameter. This is done by assigning a value to the parameter.

```js
function greet(firstName: string, lastName: string = "Smith") {
    console.log(`Hello ${firstName} ${lastName}`);
}
```

### Rest Parameters

In a function, you can specify a variable number of parameters. This is done by using the `...` symbol. Such parameters are called rest parameters.

```js
function greet(firstName: string, ...restOfName: string[]) {
    console.log(`Hello ${firstName} ${restOfName.join(" ")}`);
}
```
