## What is Typescript

Typescript is a new programming language that is designed to be a superset of JavaScript. This means that typescript is everything that javascript is, and some more. So the question is what more can typescript do than javascript? Typescript can help you write type-safe code, which means it's more maintainable and error free.

## Why use Typescript?

Typescript Compiles to Javascript, therefore powering Javascript with the advantages of a compiled languages all the while allowing the use of Javascript's most powerful features.

Using Typescript allows you to write code that is more readable, easier to maintain and extend, especially when working with large projects. The compiler will help reduce the number of runtime errors and make it easier to debug the any errors that may occur.

It is considerably easier to refactor code when you have a compiled language, especially on large projects. The freedom of dynamic typing often leaves you with a lot of problems that can be avoided with a compiled language. 

You can avoid many of the common runtime errors that can occur with dynamic typing by using the compiler. Phantom runtime errors like 'undefined is not a function' are very common in Javascript.

## How do you write type-safe code in Typescript?

Let's check out the basic types that you would need to know to get started. 

Those are String, Number, Boolean, Array, and Object. Here String is a type that is typically used to store text. Number is a type that broadly represents numbers, this includes integers and floating point numbers like `1` or `3.14`. Boolean is a type that is can be used to store `true` or `false`. These are your primitive Data Types.

Now you have Arrays and Objects. Array is a type that is typically used to store a list of items `["Hello", "World]`. Object is a type that is typically used to store a collection of key/value pairs where the value can be any type like `{text: "Hello World", flag: true}`. 

Now typescript makes sure that you are not mixing up types. For example, if you have a variable that is a number and you try to assign a string to the variable, you will get an error.

```ts
    let x: = 5;
    let y = "5";
    x = y; // Error: Type '"5"' is not assignable to type 'number'.
```

## Compiling and Running Typescript

You may already use `node` command to run javascript files. But what if you want to run typescript files?

You'll need to install the type-script compiler first. You can simply run 

```
    npm install -g typescript
```

Once you have typescript installed you can run the compiler by typing

```
    tsc <file_name>
```

You'll learn more about Typescript in-depth in later lessons. 