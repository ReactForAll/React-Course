Through this Level, we explore how typed languages are different from untyped languages and some of the advantages of typed languages.

Through the previous lessons, we've been using some basic types in our programs. In this Level, we'll explore how to use more advanced types in our programs.

#### Primitive Data Types in Typescript
The commonly used primitive data types available in Typescript as described in the [official documentation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean) are 

    String : typeof instance === "string" | "Hello World"
    Number : typeof instance === "number" | 3.14
    Boolean : typeof instance === "boolean" | true or false

On top of these there is also the type `any` which is a type that can be anything. We prefere not to use this type in our programs because it defeats the purpose of the type system.


## Drawbacks of Dynamic Typing | JS

A common issue with dynamic typing as with JavaScript is that it leads to a lot of runtime errors. With typescript, you can find a good balance between static and dynamic typing.

Extra Reading: [Static Typing Where Possible, Dynamic Typing When Needed: The End of the Cold War Between Programming Languages](https://www.ics.uci.edu/~lopes/teaching/inf212W12/readings/rdl04meijer.pdf)
