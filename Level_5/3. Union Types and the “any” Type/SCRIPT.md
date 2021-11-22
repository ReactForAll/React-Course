### Union Types

Typescript uses what is known as union types to accomodate dynamic variables which can have values of multiple types. You can use the `|` symbol to create a union type.

```js
let x: number | string = 3;
x = "Hello"; // Successfully assigns a string to x
x = true; // Error: Type 'boolean' is not assignable to type 'number | string'.
```

Now this means that x can be assigned number values as well as string values. If you try to assign a value that is not a number or a string, you will get a type error.

This means that you can define a variable specifying what types you need it to be able to hold, thereby giving you the perfect balance of flexibility and type safety.


### Unions over enums

In the previous courses you may have come acress `enum`s or enumerations. Typescript also supports `enum` Typescript supports numerical and string enums like:

```js
enum Direction {
  UP,
  DOWN
}
```

Here UP is stored as 0 and DOWN is stored as 1. Even though enums help you to create your own types containing a limited said of assignable values, it's harder to debug at times, because if you try to log them, you'd get the numerical value as the log. You could also use String enums but they are quite redundant. Take a look

```js 
enum Direction {
    UP="UP"
    DOWN="DOWN"
}
```

Meanwhile you could simply use unions to achieve the same feat!

```js
type Direction= "UP"|"DOWN"
```

You can use unions to define your own set of allowed values, thereby allowing you to create your own types like `enum`s

### The “any” Type

In typescript, you can use the `any` type to represent a variable that can hold any type of value. Now this is a very dangerous proposition. Because if you imagine a variable that can hold any type of value, typescript can't provide any kind of type safety. Now that's almost like asking typescript to act like Javascript!


To initialize a variable with the `any` type, you can:

```js
let x: any;
x = 3;
x = "Hello";
x = true;
```

Here you can see that you can assign any type of value to x and the compiler will not complain! Which means that you lose all type safety. This is the reason why you should avoid using the `any` type. 