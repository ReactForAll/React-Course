Until now, we have been glancing through the use of types in TypeScript. We have used explicit type declarations and we have created interfaces that represent our data. Through the next two levels, we will find better depth in our understanding around types. 

First half, let's quickly recap through the most commonly used types in TypeScript.  

#### Primitive Data Types in Typescript
The commonly used primitive data types available in Typescript as described in the [official documentation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean) are 

    String : typeof instance === "string" | "Hello World"
    Number : typeof instance === "number" | 3.14
    Boolean : typeof instance === "boolean" | true or false

JavaScript has two primitive values used to signal absent or uninitialized value: `null` and `undefined`. TypeScript has two corresponding types by the same names. 

#### strictNullChecks
You can enable the `strictNullChecks` compiler option to get strict null checks. Strict null checks are
You can do this in the `tsconfig.json` file.

```json
{
  "compilerOptions": {
    "strictNullChecks": true
  }
}
```

Since we have `strict` enabled, all strict type checks will be enforced. So we don't need to additionally set the `strictNullChecks` compiler option in our config.

#### noImplicitAny
The `noImplicitAny` compiler option is used to prevent the compiler from inferring `any` type when no type is explicitly provided. At the end of this Level, we'll see how to use this option to get rid of unintentional use of the `any` type.

```json
{
  "compilerOptions": {
    "noImplicitAny": true
  }
}
```

`noImplicitAny` is also enabled by default because we have `strict` enabled.

These two compiler options allow us to write better type-safe code.


### The `any` type

The `any` type in TypeScript is our biggest enemy when we are writing type-safe code. The more we use the `any` type, the lesser the compiler can help us avoid mistakes.

### Arrays

Arrays in typescript are quite similar to arrays in JavaScript. We've used arrays in our form to represent each of our `formFields` and we have made our form builder capable of managing multiple forms by storing an array of `formData` objects.

### Interfaces

In the previous lessions, we have created our own interfaces to define the objects we have used. We will learn more about interfaces as well in the coming lessons. 

### Compilation vs Interpretation

Through this level, we will see how the compilation process helps us write a code that exhaustively handles all cases especially when we refactor our code either for building new features or for restructuring. 


Now that we have had a recap of the types in TypeScript that we have already used, we will learn about more about the intricacies of the types in TypeScript through the remaining lessons of this level.