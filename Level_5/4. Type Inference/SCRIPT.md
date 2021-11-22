Type Inference is a feature of typescript that allows typescript to infer the type without the need for explicit annotation. For instance if you create a variable `x = 3` Then typescript can infer that it is a number and assumes that x is of type `number` unless you explicitly specify otherwise.

```js

let x = 3;
x = "Hello"; // TypeError: Type 'string' is not assignable to type 'number'.

```

Here TypeScript infers that the type of x is a number, since it was assigned a `number`.

```js

let x = "Hello";
x = 3; // TypeError: Type 'number' is not assignable to type 'string'.

```

Here TypeScript infers that the type of x is a string, since it's initialized with a `string` value. 

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

From the above examples you may notice that whenever you initialize a variable with some value, typescript infers the type of the variable based on the value. It is important to note that TypeScript has a hard time inferring types if you do not initialize the variable. 

## Contextual Typing

Typescript also infers the type of functions based on the context in which they are used. This is called contextual typing. For instances

```js
window.onmousedown = function (mouseEvent) {
  console.log(mouseEvent.button);
  console.log(mouseEvent.kangaroo); //Property 'kangaroo' does not exist on type 'MouseEvent'.
};
```

Here since window and window.onmousedown are previously defined, typescript infers the type of the newly assigned window.onmousedown function as `(mouseEvent: MouseEvent) => void`. Therefore typescript knows that MouseEvent has no property called kangaroo defined, thus throwing the error.