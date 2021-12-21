A compiler takes source code and produces an executable. It is the executable that is executed at the client side. Meanwhile an interpreter takes source code and executes it.

Javascript is an interpreted language. It is interpreted at runtime by the browser. Meanwhile TypeScript is compiled to Javascript and this compilation acts as an additional factor of safety.

#### Primitive Data Types in Typescript
The commonly used primitive data types available in Typescript as described in the [official documentation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean) are 

    String : typeof instance === "string" | "Hello World"
    Number : typeof instance === "number" | 3.14
    Boolean : typeof instance === "boolean" | true or false

JavaScript has two primitive values used to signal absent or uninitialized value: `null` and `undefined`. TypeScript has two corresponding types by the same names. You can enable the `strictNullChecks` compiler option to get strict null checks.

#### noImplicitAny
The `noImplicitAny` compiler option is used to prevent the compiler from inferring `any` type when no type is explicitly provided. At the end of this Level, we'll see how to use this option to get rid of unintentional use of the `any` type.

The basic types in Typescript are undefined, Boolean, Number, String, Array, and Object. Here undefined, Boolean, Number and String are the basic types. Meanwhile Array and Object are the complex types.

It is important to understand that just like in javascript, `undefined` is different from `null`. `undefined` is a type and value. Meanwhile `null` is a value and can be assigned to any nullable type. 

Now our basic types Boolean (Representing `true` or `false`), Number (Representing a number), String (Representing a string) and undefined can be used to build complex types.

We also have Object and Array. Object is a complex type that can be used to build complex types. Array is a complex type that can be used to build complex types. You can define types the same way you've been doing them in the previous lessons, by using a `:` symbol. We'll learn about type inference in the coming lessons.

Here are some examples where static typing could help avoid run-time errors:
```js
var text: string;
text = undefined; // type error, assign a number to a string type variable

function floorValue(value: number) {}
floorValue(''); // type error, use a number as a string type parameter
```

You might think what's the need to control the types of the parameters and return values of functions. This becomes relevant when you are working with larger projects and you want to avoid run-time errors. There could be a simple variable that is being used across multiple files and you want to make sure that this variable is always defined and never set to undefined. Typescript helps you achieve this.


You can make an array of any type. Be it an array of strings, numbers, booleans or even complex types. You can also make an array of arrays. We'll learn more about complex arrays in later sections
