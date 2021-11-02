In the previous lessons you've seen how you can pass values through React Components as props. The same way, you can also pass functions as props. You've seen this in the `input` and `button` components. Now let's see how you can pass functions as props to your own React components and see how they can be used.

```jsx
function CustomButton(props) {
  return <button onClick={props.onClickCB}>{props.text}</button>;
}
```

Here you may have noticed that I've named the Callback function with 'CB' at the end. This is a convention that I've used to indicate that the function is a callback function. It helps you differentiate Callback functions that you've received through props from the ones that you've created within the same component.

You can pass Callback functions as props to your own React components. You can use them to perform some action when the user clicks on the button.

```jsx
function MyComponent() {
  const onButtonClick = () => {
    alert('You clicked the button!');
  };
  return (
    <CustomButton onClickCB={onButtonClick} text="Click me!" />
  );
}
```
