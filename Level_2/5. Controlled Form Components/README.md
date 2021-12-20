In the last lesson, we learned to intercept the onChange Event of an `<input>` and store it's value in a state. You may have realized that this would work only in one way. We are not binding the input to use the value of the state. This means that we can't modify the value of the `<input>` based on the state. 

So if we modify our arrow function that adds a new form field to clear the input like:

```js
  <button
    className="bg-gray-200 text-gray-800 border-2 border-gray-400 rounded-lg p-2 m-2 w-full"
    onClick={() =>{
      setFormState([
        ...formState,
        { id: Number(new Date()), label: newField },
      ])
      setNewField("");
      }
    }
  >
    Add Field
  </button>
```


You can see that this doesn't seem to be working. This would only clear the value of the state. The input text is still there. This is because this input field is not yet a controlled element. In order to make it a controlled element, we need to add a `value` attribute to the input element. The `value` attribute is a string that represents the current value of the input field. If we can wire the `value` attribute to a state variable, we can make this input field a controlled element.

```js
  <input
    type="text"
    value={newField}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
      setNewField(e.target.value)
    }
    className="border-2 border-gray-200 rounded-lg p-2 m-2 w-full"
    placeholder="Add New Field"
  />
```

Now we have a controlled input field. We can now use the value of the state to modify the value of the input field from our code. 