### Generic Functions

In Typescript you can use Generics to create functions that can work with any type. You might ask why not just use the `any` type? Well, just like everywhere else we've avoided the `any`, we wanna avoid it here too for the sake of Type Safety!

For Example:

```js
function itemAt<T>(index: number, arr: T[]): T {
    T result = arr[index]
    return result;
}
```

Here we have a generic function that takes an index and an array and returns the element at that index. Here the array can be of any type. 

A good example of using generics would be to work on similar types of data. For instance, you could create a generic function that takes an array with the property `{age: number}` and returns the oldest date.

```js
interface HasAge {
  age: number;
}

function getOldest<T extends HasAge>(arr: T[]): T {
  return arr.sort((a, b) => b.age - a.age)[0];
}

type Person = {
  name: string;
  age: number;
};

const people: Person[] = [
  { name: 'John', age: 30 },
  { name: 'Mike', age: 25 },
  { name: 'Jane', age: 40 },
];

const oldest = getOldest<Person>(people);
```

### Utility Types

TypeScript provides several utility types to facilitate common type transformations. These are also designed using Generics because they are designed to work with any type. An example of a utility type is the `Partial<Type>` type. It's defined as:

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

You can learn more about utility types [here](https://www.typescriptlang.org/docs/handbook/utility-types.html).

