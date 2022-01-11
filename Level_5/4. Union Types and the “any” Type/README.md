### Union Types

Typescript uses what is known as union types to accommodate dynamic variables which can have values of multiple types. You can use the `|` symbol to create a union type.

```js
let x: number | string = 3;
x = "Hello"; // Successfully assigns a string to x
x = true; // Error: Type 'boolean' is not assignable to type 'number | string'.
```

Now this means that x can be assigned number values as well as string values. If you try to assign a value that is not a number or a string, you will get a type error.

This means that you can define a variable specifying what types you need it to be able to hold, thereby giving you the perfect balance of flexibility and type safety.


### Unions over enums

You can use unions to define your own set of allowed values, thereby allowing you to create your own types like an`enum' :

```js
type Direction= "UP"|"DOWN"
```

Defining a type like this gives you better type-safety than using an enum.


### The “any” Type

In typescript, you can use the `any` type to represent a variable that can hold any type of value. This needs to be avoided to the best of your ability if you want to take advantage of that type safety that typescript promises.

To initialize a variable with the www`any` type, you can:

```js
let x: any;
x = 3;
x = "Hello";
x = true;
```

Here all assignments are successful since `x` is of type `any`

