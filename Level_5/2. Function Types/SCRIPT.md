Given that, we have extensively used functional components to build our app, it is very important for us to understand how to build statically typed functions. In React, since we are building components to which we pass only props. Defining an object representing the props is usually all we need. We have seen this in our `Header` component where we were passing the `title` string to our component.

```js
export default function Header(props: { title: string }) {
  ...
}
```

This means that, if we have optional props that we need to pass into our component, we just need to specify that specific property as optional like: 

```js
export default function Header(props: { title: string, subtitle?: string }) {
  ...
}
```

We can see that our form-builder is currently always receiving the form id. Let's move the logic of generating the form id to inside the form-builder component. Let's make a new URL at `/form/new` and render our form-builder without the now optional form id. Now we can also change the URL to create new forms to accomodate this change. 

We have also seen that we need to specify the type when we are passing children to our components. We've seen this in our `AppContainer` component.

```js
export default function AppContainer(props: { children: React.ReactNode }) {
  ...
}
```

In our react components, the return type is almost always implicit as we are returning jsx. On our normal functions though, we might need to specify the types at times. For instance, in our `getLocalForms` function, since we are parsing the JSON, we'll need to specify that the localStorage would be parsed to receive an array of form data. Since the `JSON.parse` function returns an `any` type this has unintentionally broken our type safety.

Once we fix this and update our function definition, to explicitly specify the type of the return value, we can see how our `findForm` function is flawed. We haven't been accounting for the `findForm` function to return `undefined` if the form id is not found. Now the compiler starts to guide us showing you in exactly how many places we need to fix this. 

We can fix this by navigating out of the preview page if the form is not found and using the nullish coalescing operator to coalesce the form data with a default value, since the `navigate` is asynchronous and we need to return an initial value for our state in the meantime.

You can also define the types for callback functions within an interface just like any other function. For instance, an `onChange` callback function would be defined as:

```js
interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
```

Let's abstract our input components for our form builder to make it a bit more reusable.

```js
export default function FormInput(props: {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <div className="flex flex-col w-full p-6">
      <span className="text-md text-slate-700 p-2">{props.label}</span>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="text"
        placeholder="Enter your answer"
        value={props.value}
        onChange={(e) => props.onChange && props.onChange(e.target.value)}
      />
    </div>
  );
}
```

Now our Form Input has been abstracted into a separate component and this would allow us to make this more sophisticated in the next lessons.