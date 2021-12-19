Through this Level, we explore how typed languages are different from untyped languages and some of the advantages of typed languages.

Through the previous lessons, we've been using some basic types in our programs. In this Level, we'll explore how to use more advanced types in our programs.

#### Primitive Data Types in Typescript
The commonly used primitive data types available in Typescript as described in the [official documentation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean) are 

    String : typeof instance === "string" | "Hello World"
    Number : typeof instance === "number" | 3.14
    Boolean : typeof instance === "boolean" | true or false

On top of these there is also the type `any` which is a type that can be anything. We prefere not to use this type in our programs because it defeats the purpose of the type system.

JavaScript has two primitive values used to signal absent or uninitialized value: `null` and `undefined`. TypeScript has two corresponding types by the same names. You can enable the `strictNullChecks` compiler option to get strict null checks.

#### noImplicitAny
The `noImplicitAny` compiler option is used to prevent the compiler from inferring `any` type when no type is explicitly provided. At the end of this Level, we'll see how to use this option to get rid of unintentional use of the `any` type.

#### Arrays

#### Objects


## Static and Dynamic Typing

``` 
var x = "Hello World" // Assigning String
x = false // Assigning boolean
```

## Drawbacks of Dynamic Typing | JS

High Runtime Errors: We've observer a very high frequency of Runtime Type Errors in ReactJS on Error Monitoring Services.

Extra Reading: [Static Typing Where Possible, Dynamic Typing When Needed:
The End of the Cold War Between Programming Languages](https://www.ics.uci.edu/~lopes/teaching/inf212W12/readings/rdl04meijer.pdf)

As you'll learn later in this course, Typescript helps you achieve this golden middle ground between dynamically and statically typed languages.
