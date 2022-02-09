https://www.digitalocean.com/community/tutorials/how-to-create-custom-types-in-typescript

In the previous lessons we have used interfaces to define objects whenever needed. Similarly, we can also use the `type` keyword to create our own custom types.

Beyond your primitive types you can create objects that match your needs in Typescript. This allows you to model your own types when you need to save a collection of data. You've seen this in the previous lessons when you created form items. 

Currently the interfaces we've made to define our form items look like: 

```js
export interface formData {
  id: number;
  title: string;
  formFields: formField[];
}
  
export interface formField {
  id: number;
  label: string;
  value: string;
}
```

Let's Switch our FormFields to use the type annotation instead

```js
// Define a type for a form item
export type FormItem = {
  id: number;
  label: string;
  value: string;
};
```

We can see that there is a minor difference in syntax and that's pretty much it. Our Compilers seems to have been completely fine with switching to the type annotation over the interface.

So if both of these are so similar, how exactly are they different?

For modelling over objects, interfaces usually work best because Typescript can give us better error messages. However, there are a lot of cases where you may want to use the type annotation. For instance, you can make a type for a string that always follows a certain pattern.

### Template Strings Types

```js
type StringThatStartsWithGet = `get${string}`;
```

Now if you make a variable with type `StringThatStartsWithGet` you can only assign a string that starts with `get`. to it.

We will see how we can use templated types define unions and discriminated unions in the next lesson.
