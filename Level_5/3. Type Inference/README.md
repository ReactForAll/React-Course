Type Inference is a feature of typescript that allows typescript to infer the type without the need for explicit annotation

```js

let x = 3;
x = "Hello"; // TypeError: Type 'string' is not assignable to type 'number'.

```

Here TypeScript infers that the type of x is a number.

```js

let x = "Hello";
x = 3; // TypeError: Type 'number' is not assignable to type 'string'.

```

Here TypeScript infers that the type of x is a string.

Now Typescript can also infer the type of Arrays and Objects. For instance,

```js
let obj = {
  name: "John",
  age: 30
};
```

Here TypeScript infers that the type of obj is an object of type `{ name: string; age: number; }`.

How about an array? Sure, you can do that too!

```js
let arr = [1, 2, 3];
```

Here TypeScript infers that the type of arr is an array of type number. `number[]` What if we make an array with numbers and strings?

```js
let arr = [1, "Hello", 3];
```

Typescript infers that the type of arr is an array of type `number | string` ie. `(number | string)[]`. Typescript infers union types also this way.

It is important to note that TypeScript has a hard time inferring types if you do not initialize the variable.
