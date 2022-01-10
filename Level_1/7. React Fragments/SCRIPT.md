In React components, you may have noticed that you always need to return a single react node. In the previous lesson we had used a `<div>` to wrap around our input and label. If we remove the wrapper like this:

```js
formFields.map((field) => (
  <span key={field.id} className="w-full text-lg px-2">
    {field.label}
  </span>
  <input
    key={field.id}
    className="border-2 border-gray-200 rounded-lg p-2 m-2 w-full"
    type="text"
    placeholder={field.label}
  />
))
```
Now we can see an error that `Adjacent JSX elements must be wrapped in an enclosing tag.` Even though in most cases, you would return only a single node as a component, sometimes you might not want to add an unnecessary div to this. 

Now, how would we tackle this? Normally, you would simply use a JSX div to wrap the JSX element that we are returning. Now, this definitely works but brings in additional div into the DOM tree. This is where React Fragments come in. React Fragments allow you to group a set of elements under a single JSX tag without any change reflecting onto the actual DOM. In order to use React Fragments you can simply write <React.Fragment>

```js
formFields.map((field) => (
  <React.Fragment key={field.id}>
    <span className="w-full text-lg px-2">
      {field.label}
    </span>
    <input
      className="border-2 border-gray-200 rounded-lg p-2 m-2 w-full"
      type="text"
      placeholder={field.label}
    />
  </React.Fragment>
))
```

You can also use React Fragments by using an empty JSX tag like `<></>` around your elements. This is the new shorthand syntax for React Fragments. But do note that the shorthand syntax does not support the key prop. So, for this specific scenario, you would need to write the `<React.Fragment>` explicitily. 