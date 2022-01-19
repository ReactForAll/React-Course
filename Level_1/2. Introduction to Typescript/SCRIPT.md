## What is Typescript

Typescript is a new programming language that is designed to be a superset of JavaScript. This means that typescript is everything that javascript is, and some more. So the question is what more can typescript do than javascript? Typescript can help you write type-safe code, which means it's more maintainable and error free.

## Why use Typescript?

Typescript Compiles to Javascript, therefore powering Javascript with the advantages of a compiled language all the while allowing the use of Javascript's features.

Using Typescript allows you to write code that is more readable, easier to maintain and extend, especially when working with large projects. The compiler will help reduce the number of runtime errors and make it easier to debug any errors that may occur.

It is considerably easier to refactor code when you have a compiled language, especially on large projects. The freedom of dynamic typing often leaves you with a lot of problems that can be avoided with a compiled language. 

You can avoid many of the common runtime errors that can occur with dynamic typing by using the compiler. Phantom runtime errors like 'undefined is not a function' is very common in Javascript.

## Compiling and Running Typescript

You already installed `node.js` in the previous lesson using which you can run javascript files. But what if you want to run typescript files?

You'll need to install the typescript compiler first. You can simply run 

```
npm install -g typescript
```

Once you have typescript installed you can run the compiler by typing

```
tsc index.ts
```

This would output an `index.js` file which you can run using `node` just like any other javascript file.

```
node index.js
```
## How do you write type-safe code in Typescript?

Static Typing is the key to writing type-safe code. Let's check out the basic types that you would need to know to get started. 

The commonly used primitive data types available in Typescript as described in the [official documentation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean) are:

    String : typeof instance === "string" | "Hello World"
    Number : typeof instance === "number" | 3.14
    Boolean : typeof instance === "boolean" | true or false

On top of these there is also the type `any` which is a type that can be anything. We prefer not to use this type in our programs because it defeats the purpose of the type system, but we might use this in some places during the earlier lessons of this course.


#### Objects

    Object : typeof instance === "object" | {text: "Hello World", flag: true}

In Typescript, Objects are used to store a collection of key/value pairs of different types. You can use an interface to define the structure of an object.

```js
interface Person {
    name: string;
    age: number;
}
```

You could also define an object with one or more of it's properties being objects themselves.

```js
interface Address {
        street: string;
        city: string;
    }

interface Person {
    name: string;
    age: number;
    address: Address;
}
```
Or you could also define them together if you don't plan to use the `Address` interface on it's own otherwise

```js
interface Person {
    name: string;
    age: number;
    address: {
        street: string;
        city: string;
    }
}
```
#### Arrays

    Array : typeof instance === "object" | ["Hello", "World"]

Arrays in Typescript are quite straightforward. You use arrays to list of items. To declare an array you use the `[]` symbol. Arrays are stored as objects (key,value pairs) therefore, typeof array is an object. For example if you want to declare an array of strings you would write:

```js
let myArray: string[] = ["Hello", "World"];
```

### Type Inference
Typescript also infers types based on the inital value that you assign to a variable.

```ts
let x = 5;
let y = "5";
x = y; // Error: Type '"5"' is not assignable to type 'number'.
```

Here, typescript infers that the value of `y` is a string and therefore it can't be assigned to `x`, which is inferred as a number.



You'll learn more about Typescript in later lessons. 