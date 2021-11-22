
### Optional Parameters

When you create a function, not all parameters of the function may be required. Some of them can be optional. You can denote these using a `?` symbol. This is known as optional parameters.

```js
function greet(firstName: string, lastName?: string) {
    console.log(`Hello ${firstName} ${lastName}`);
}
```

The above example shows how in typescript if you have a function that works with and without a parameter, you can use the `?` symbol to denote that the parameter is optional. If you don't mark the parameter as optional, Typescript will not allow you to call the function without the parameter.

In react, you would need to specify the optional props using the `?` symbol when you define the component

```js
function Greet(props: { firstName: string, lastName?: string }) {
    return (
        <div>
            Hello {props.firstName} {props.lastName}
        </div>
    );
}

<Greet firstName="John" />
<Greet firstName="John" lastName="Doe" />
```

This way Typescript allows you to call the `Greet` component with or without the `lastName` parameter.

### Default Parameters

In a function, you can specify a default value for a parameter. This is done by assigning a value to the parameter.

```js
function greet(firstName: string, lastName: string = "Smith") {
    console.log(`Hello ${firstName} ${lastName}`);
}
```
Default Parameters are also quite important in React. You can specify the default value of a prop in the component definition. This allows you to create generic components that has a default set of props and specifying these props when you call them allows you to override the default props.

```js
function Greet(props: { firstName: string, lastName?: string = "Smith" }) {
    return (
        <div>
            Hello {props.firstName} {props.lastName}
        </div>
    );
}
<Greet firstName="John" /> // Hello John Smith
<Greet firstName="John" lastName="Doe" /> // Hello John Doe
```


### Rest Parameters

In a function, you can specify a variable number of parameters. This is done by using the `...` symbol. Such parameters are called rest parameters.

```js
function greet(firstName: string, ...restOfName: string[]) {
    console.log(`Hello ${firstName} ${restOfName.join(" ")}`);
}
```

Rest parameters are used to represent an indefinite number of arguments. A simple example for a function that takes a variable number of arguments is the `Math.max` function. This function takes an indefinite number of arguments and returns the largest one.
