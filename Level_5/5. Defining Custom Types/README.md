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