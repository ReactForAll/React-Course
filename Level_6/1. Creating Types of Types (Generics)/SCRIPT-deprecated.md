Until now, we have primarily seen the user generics when we were explicitly defining the types for our `useState` hooks. TypeScript uses Generics to define the types of types. Let's try to understand how the `useState` hook creates state variables of different types using Generics.

In order to explicitly specify the type of the state, we can use the following syntax:

```js
const [state, setState] = useState<string>('HOME');
```

Here, using Generics, we are passing the type `string` to the useState hook. The `useState` hook is designed to work with any type. However, in order to make the state variables statically typed, the `useState` hook is built using Generics.

### Utility Types

TypeScript provides several utility types to facilitate common type transformations. These are also designed using Generics because they are designed to work with any type.

Let's discuss some of these utility types. and see how they are defined using Generics.
#### Partial<Type>

```js
type Partial<T> = {
  [P in keyof T]?: T[P];
};
```
Parital is used to create a type that has the same properties as the original type but with some of the properties removed. So, if we have a type like:

```js
type User = {
  name: string;
  age: number;
  email: string;
};
```
The `Partial<User>` type would be any type with one or more properties of the original type. For example all of the following types would be valid:

```js
type PartialUser = Partial<User>;
type PartialUser1 = {
  name: string;
  age: number;
};
type PartialUser2 = {
  email: string;
};
type PartialUser3 = {
  name: string;
  age: number;
  email: string;
};
```

Some other utility types are:

#### Pick<Type, K>

```js
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```
Pick is used to create a type that has the same properties as the original type but with only the properties specified in the type K.

#### Required<Type>

```js
type Required<T> = {
  [P in keyof T]-?: T[P];
};
```
Required is used to create a type that has the same properties as the original type but with all the properties set to required.

You can read more about these utility types [here](https://www.typescriptlang.org/docs/handbook/utility-types.html).

> Note: These utility types are available globally in Typescript. There is no need to define them, we've defined them as a part of this exercise simply to explain how Generics are used.