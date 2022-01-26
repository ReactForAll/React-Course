Beyond your primitive types you can create objects that match your needs in Typescript, using interfaces. This allows you to model your own types when you need to save a collection of data. You've seen this in the previous lessons when you created form items. 

In this lesson, you'll learn how to create your own types using the `type` keyword. This is quite similar to the `interface` keyword, but it allows you to create your own types.

```js
// Define a type for a form item
type FormItem = {
  label: string;
  value: string;
  type: string;
  required: boolean;
};
```
