### Generic Functions

In Typescript you can use Generics to create functions that can work with any type. You might ask why not just use the `any` type? Well, just like everywhere else we've avoided the `any`, we wanna avoid it here too for the sake of Type Safety!

Generics allows you to merge functions that do almost the same thing to arguments of different types. For instance you could create a generic function that accepts a generic array and return the element of the array at a certain index.

```js
function itemAt<T>(index: number, arr: T[]): T {
    T result = arr[index]
    return result;
}
```

Here we have a generic function that takes an index and an array and returns the element at that index. Here the array can be of any type. Since the argument `arr` is of type `T[]`, we can do anything that we could do to an array in general and we respond with the element at an index, of type `T`.

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

Here we take an array of objects with the property `age` and return the oldest element. Here the array should be of a type that has the property `age`. This is checked by the compiler and if the array is not of the correct type, an error is thrown.

Typescript checks if T is a type that extends the HasAge interface. This means that T must have the property `age`.


