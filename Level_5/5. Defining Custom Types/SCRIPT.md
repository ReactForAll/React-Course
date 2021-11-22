Beyond your primitive types you can create objects that match your needs in Typescript. This allows you to model your own types when you need to save a collection of data. You've seen this in the previous lessons when you created form items. 

```js
// Define a type for a form item
type FormItem = {
  label: string;
  value: string;
  type: string;
  required: boolean;
};
```

### Discriminated unions

We've gone through Unions that allow us to define types with different allowed values. Discriminated Unions on the other hand go one step further in designing types that precisely fit your usecase. They allow you to create types that contain multiple types of objects, that are discriminated by a common attribute

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
