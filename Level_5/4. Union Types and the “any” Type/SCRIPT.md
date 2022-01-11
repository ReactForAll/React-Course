We've seen how typescript allows us to use the `any` type to represent variables that can take up values of different types. And I have repeatedly warned you against using this. So, how should we handle those scenarios where we actually need a variable to be able to hold values of two or more different types?

This is where Union types come in. Typescript uses union types to accomodate dynamic variables which can have values of multiple types. You can use the `|` symbol to create a union type.

```js
let x: number | string = 3;
x = "Hello"; // Successfully assigns a string to x
x = true; // Error: Type 'boolean' is not assignable to type 'number | string'.
```

Now this means that x can be assigned number values as well as string values. If you try to assign a value that is not a number or a string, you will get a type error.

So for instance, our optional attributes of our interface

```js
interface IUser {
  name: string;
  age?: number;
}
```

Here the type of the age property is `number | undefined`. Since we have strict null checks, we'll now have to check if the age property is undefined before we try to use it like a number.

This means that you can define a variable specifying what types you need it to be able to hold, thereby giving you the perfect balance of flexibility and type safety.

### Discriminating Unions

The common technique for working with Unions is to use a single field that is common across all the different types of the Union which TypeScript can use to narrow down on the current type. We can use this technique to exhaustively handle all the possible types using a switch case. Let's modify our code to support dropdowns along with text inputs using Unions. It is important to note that dropdowns would require an additional field to represent the options. So, we will modify our `formFields` type to be a union type that is either input text or a dropdown. A common practice is to use an attribute named 'kind' to differentiate between the different types within the union. So let's define a discriminated union type to represent the different types of form fields.

```js
type DropdownField = {
  kind: "dropdown";
  options: string[];
  label: string;
  value: string;
};
type TextField = {
  kind: "text";
  label: string;
  value: string;
};
type FormField = DropdownField | TextField;
```

Here we are using the `type` keyword to generate our types. Within all of our types, we have the common keyword named `kind` which is used to differentiate between the different types of the union `formField`. We can simply use a switch case to identify the type from the union and then manage the types accordingly. For instance, for each field, from an array of `formFields` we can render the right components depending on the type. 

```js
switch(field.kind) {
  case "dropdown":
    return (
      <Dropdown
        label={field.label}
        options={field.options}
        value={field.value}
        onChange={(value) => setFieldValue(field.label, value)}
      />
    );
  case "text":
    return (
      <TextField
        label={field.label}
        value={field.value}
        onChange={(value) => setFieldValue(field.label, value)}
      />
    );
  default:
    return React.null;
}
```