Until now, we have been glancing through the use of types in TypeScript. We have used explicit type declarations and we have created interfaces that represent our data. Through the next two levels, we will find better depth in our understanding around types. 

First half, let's quickly recap through the most commonly used types in TypeScript. We have used these in our previous lessons and 

#### Primitive Data Types in Typescript
The commonly used primitive data types available in Typescript as described in the [official documentation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean) are 

    String : typeof instance === "string" | "Hello World"
    Number : typeof instance === "number" | 3.14
    Boolean : typeof instance === "boolean" | true or false

JavaScript has two primitive values used to signal absent or uninitialized value: `null` and `undefined`. TypeScript has two corresponding types by the same names. 

### The `any` type

In Typescript, unlike other strongly typed languages, we can opt out of the typesystem by using the type `any`. The `any` type in TypeScript is our biggest enemy when we are writing type-safe code. The more we use the `any` type, the lesser the compiler can help us avoid mistakes.

#### tsconfig.json

Now let's head to our project and take a look at our tsconfig.json file. This file tells TypeScript to use specific options of the compiler. Let's see a some of the options that are useful for us.

#### strict
By default, CRA generates a project that is configured to use the `--strict` flag. This flag tells TypeScript to treat the code as a strict-mode program. This means that it will enforce the strictest rules of the language.

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

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

### Arrays

Arrays in typescript are quite similar to arrays in JavaScript. We've used arrays in our form to represent each of our `formFields` and we have made our form builder capable of managing multiple forms by storing an array of `formData` objects.

### Interfaces

In the previous lessions, we have created our own interfaces to define the objects we have used. We will learn more about interfaces as well in the coming lessons. 

### The never type

We have seen the `never` type in our `useRef` lesson. The `never` type is used to express the type of values that never occur. For instance `never` is used as the return type of function that never returns. Or in the case of our `useRef` hook, the `never` type is used to express the type of the `current` property of the `React.RefObject` type. When we don't specify a type for your `useRef` hook, since we've initialized it with value `null`, the `useRef` hook will return a `React.MutableRefObject<null>` type. Now when we were accessing the `current` property of the `React.RefObject`, we got a `never` type error. This is because the `current` property of the `React.RefObject` type is `null` and we can't access the `current` property of `null`. We solved this problem by explicitly specifying the type of the `ref`.

In a nutshell `never` is used to specify something that never happens. In this case a ref of type null would never have a current value!

### Compilation vs Interpretation

Through this level, we will see how the compilation process helps us write a code that exhaustively handles all cases especially when we refactor our code either for building new features or for restructuring. 

Now that we have had a recap of the types in TypeScript that we have already used, we will learn about more about the intricacies of the types in TypeScript through the remaining lessons of this level.