Type Inference is a feature of typescript that allows typescript to infer the type without the need for explicit annotation. We have seen this in a lot of places in the previous lessons. You may have noticed that we have not explicitly specified the types in a lot of places. This is because typescript is able to infer the type of a variable based on the value assigned to it. A good example of this is the fact that all of our components are functions and we have not specified the type of the return value for almost any of our components. 

Another example of this would be, in our earlier lessons, we did not define an interface for our `formFields`. Instead typescript was inferring them from the intial value for the state.
Let's look at the different places where typescript can infer the types. 

### From the Intial Value

Typescript can infer the type of a variable when you initialize it with a certain value. For instance, if you initialize a variable with a text value, the type of the variable will be a string. Example for this would be a state initialized with a string value.

```js
import {useState} from 'react';

const App = () => {
  const [state, setState] = useState('HOME');
  ...
};
```

Here, we have not explicitly specified the type of the state instead the initial value `'HOME'` is used to infer the type of the state as a string.

The compiler can also infer union types. For instance, if you create an array of different types, the compiler will infer the type of the array as a union type. For instance, if you create an array of strings and numbers, the compiler will infer the type of the array as a union type of string and number. 

Similarly, if you create a function that returns two different types based on a condtion, the compiler will infer the type of the function as a union type of the two types. A good example of this is when you create a function that finds a form based on a form id. If the function returns undefined when the formId is not found, the compiler will infer the type of the function as a union type of undefined and FormData.

```js
const findForm = (formId: string): FormData | undefined => {
  return forms.find(form => form.id === formId);
};
```
## Contextual Typing

Typescript also infers the type of functions based on the context in which they are used. This is called contextual typing. For instances

```js
window.onmousedown = function (mouseEvent) {
  console.log(mouseEvent.button);
  console.log(mouseEvent.kangaroo); //Property 'kangaroo' does not exist on type 'MouseEvent'.
};
```

Here since window and window.onmousedown are previously defined, typescript infers the type of the newly assigned window.onmousedown function as `(mouseEvent: MouseEvent) => void`. Therefore typescript knows that MouseEvent has no property called kangaroo defined, thus throwing the error.