### Union Types

Typescript uses what is known as union types to accommodate dynamic variables which can have values of multiple types. You can use the `|` symbol to create a union type.

```js
let x: number | string = 3;
x = "Hello"; // Successfully assigns a string to x
x = true; // Error: Type 'boolean' is not assignable to type 'number | string'.
```

Now this means that x can be assigned number values as well as string values. If you try to assign a value that is not a number or a string, you will get a type error.

This means that you can define a variable specifying what types you need it to be able to hold, thereby giving you the perfect balance of flexibility and type safety.


### Unions over enums

You can use unions to define your own set of allowed values, thereby allowing you to create your own types like an`enum' :

```js
type Direction= "UP"|"DOWN"
```

Defining a type like this gives you better type-safety than using an enum.

## Discriminated unions

Discriminated Unions open the door for creating much more precise union types. They allow you to create types that contain multiple types of objects, that are discriminated by a common attribute

```js
 interface Circle {
    kind: "circle";
    radius: number;
  }
   
  interface Square {
    kind: "square";
    sideLength: number;
  }
   
  type Shape = Circle | Square;

  function getArea(shape: Shape) {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
                          
      case "square":
        return shape.sideLength ** 2;
                
    }
  }
```

Here the type `Shape` is discriminated by the property `kind`. You can see that Typescript is able to understand that the type of a `Shape` instance is either circle or square with an `if` or `switch` check. This allows you to make much more precise types and therefore build better type-safety in your projects.
