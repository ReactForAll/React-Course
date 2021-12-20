Now that we can handle onClick actions from the user, let's use an `<input>` text field to collect text input from the user.

In order to receive text input from our user, we need to handle the `onChange` event of our `<input>` element. We can pass a function as the `onChange` property of our `<input>` element. Let's use a new `<input>` element to let the user input the name of the new field to be added instead of using "New Field" as a constant value. Let's create a new state variable called `newField` and a new `<input>` element to collect the user input.

```js
<input
  type="text"
  placeholder="New Field"
  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
    setNewField(event.target.value);
  }}
```

Now we just need to use the value of the `newField` state variable when we add a new element to our formFields array! And there we have it. We're now able to collect the user input and add a new fields to our formFields array.

Before we move forward, let's take a closer look at the onChange event. The `onChange` event is triggered when the user changes the value of an input element. You can understand this further if you replace the setNewField with a console.log statement. You can see that the event.target.value gives us the target value of the input element, after the user has made a change to it, be it type an additional character or paste a set of characters. 

It is also important to note that what we receive here is an event object of type `React.ChangeEvent<HTMLInputElement>`. This means that there are a lot more you can do with the event, such as prevent the default behaviour of the browser that updates the value of the text field by running the `event.preventDefault()` method. You can read more about the event object [here](https://reactjs.org/docs/events.html)

