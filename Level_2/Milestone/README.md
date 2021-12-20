Through the previous lessons, you have learned to
 - Create Controlled Form Elements
 - Add Items to an Array without mutating the original array (using spread operator)

Similar to using the spread operator on an array, you can also use it on an object to make an object with the same details as an existing object and modify only some fields of the object. For example

If you have an object like this:
```js
const obj = {
  name: "John",
  age: 30,
  location: "New York"
};
```
You can make a new object with only the `age` field changed like this:
```js
const newObj = {
  ...obj,
  age: 40
};
```

Now with this new found knowledge, you can make all the `<input>` elements rendered from the array controlled elements, and add a new field named `value` to the array objects which would hold the value of the input field that is rendered.

To make sure that you've successfully made a controlled element, make a button that would clear the entire form, meaning the form fields rendered by the array would be set to `""`.