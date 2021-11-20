In the previous lessons you've seen how you can pass values through React Components as props. The same way, you can also pass functions as props. You've seen this in the `input` and `button` components. Now let's see how you can pass functions as props to your own React components and see how they can be used.

```jsx
const FormItem(props) {
  return (
    <div className="flex gap-4">
      <input
        className="bg-gray-100 rounded-md p-2"
        value={props.inputValue}
        onChange={props.onChange}
      />{" "}
      -
      <button
        className="p-2"
        onClick={() => props.markDoneCB(props.renderIndex)}
      >
        {props.itemDone ? "Done" : "Not Done"}
      </button>
      <button
        className="bg-blue-600 rounded-md p-2"
        onClick={() => props.removeItemCB(props.renderIndex)}
      >
        Remove
      </button>
    </div>
  );
}
```

Here you may have noticed that I've named the Callback function with 'CB' at the end. This is a convention that I've used to indicate that the function is a callback function. It helps you differentiate Callback functions that you've received through props from the ones that you've created within the same component.

You can pass Callback functions as props to your own React components. You can use them to perform some action when the user clicks on the button.

```jsx
  const markDoneCB = () => {
  };
  return (
    <CustomButton markDoneCB={markDone} text="Click me!" />
  );
}
```
