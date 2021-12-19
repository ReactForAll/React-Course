In the previous lessons you've seen how you can pass values through React Components as props. The same way, you can also pass functions as props. You've seen this in the onClick props of `button` components. Now let's see how you can pass functions as props to your own React components and see how they can be used.

In our app, our button to close the form seems a bit out of place. In order to keep this button along with our form we've used an empty div. You could either use a Fragment here or move it inside our `<Form>` component. But, if we move it into our form component, the button does not have access to the page state of the `App` component. This is where our callback function comes in. You can simply pass a prop into our form with the function to be called in order to close the form. You can define the function inside your app component. 

```jsx
  const closeForm = () => setPage("HOME");
```

Now that you've defined the function that you would call to close the form, you need to pass it into the form component as a callback function. Now when you do this, it is good to follow a common convention to indicate that the function is a callback function. You can simply add a CB at the end of the prop to represent callback. It helps you differentiate Callback functions that you've received through props from the ones that you've created within the same component.

```jsx
  <Form closeFormCB={closeForm} />
```

Now you can receive the callback function inside your form component as a prop like:

```jsx
  function Form(props: { closeFormCB: () => void })
``` 

Here, you specified that the form component requires a prop named `closeFormCB` that neither takes any arguments nor returns any arguments as specified in `() => void`. You will learn more about specifying the type for functions in the coming lessons. 

Now within your form component, you can bring in the button that is previously in the app component and specify its on click action as `props.closeFormCB`

```js
  <button
    onClick={props.closeFormCB}
    className="bg-gray-200 text-gray-800 border-2 border-gray-400 rounded-lg p-2 m-2 w-full"
  >
    Close Form
  </button>
```

Here you may notice that we haven't specified an arrow function over here. This is an alternative way of passing a function as a prop. We've used the same syntax to pass the callback function into the form component as well.