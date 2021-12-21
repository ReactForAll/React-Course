Until now, we've been using state to store data in our application. The data stored in state is lost when a component is unmounted. And the state of the `<App>` is lost when the application is closed or reloaded. Now this is ideal from a componentization perspective, but some data may need to be stored across sessions. There a few options to do this inside a browser.

In this lesson let's learn `localStorage` to store data in the browser, so that even when the application is closed or reloaded, we can still preserve some data

In order to store data to the `localStorage`, we can use the `localStorage.setItem()` method.

```js
localStorage.setItem("key", "value");
```

So let's create a function to save our form data to the `localStorage`. Since we'll be storing our Array of `formFields` in the `localStorage`, we'll need to convert it to a JSON string. We'll be using the `JSON.stringify` method to do this.

```js
function saveFormData(formData) {
  localStorage.setItem("formData", JSON.stringify(formData));
}
```

Now we can add a button to our form to save the data to the `localStorage`.
```js
    <button
        onClick={(_) => saveFormData(formState)}
        className="bg-gray-200 text-gray-800 border-2 border-gray-400 rounded-lg p-2 m-2 w-full"
    >
    Save Form
    </button>
```

Now we can open up the dev tools in our browser to inspect the `localStorage` and see that our data is there.

Great! looks like we've successfully saved our data to localStorage. Now let's use the `localStorage.getItem()` method to retrieve the data from the `localStorage`. Given we need to initialize our state based on the localStorage

Using this method, you can store data that is stored in the browser and load it into the state when the App is loaded.

```js
const intialState = localStorage.getItem("formState")
  ? JSON.parse(localStorage.getItem("formState") || "")
  : formFields;
```

We'll also need to update the state to use this `initialState` value.

```js
  const [formState, setFormState] = React.useState(intialState);
```

Now that seems to be giving us a lot of Type Errors. This is because we're now taking the initial value from the localStorage, typescript can't tell what's the type of the state. Before when we were specifying the initial value of the state as an array of objects, typescript knew what the type of the state was.

So in order to solve this, let's define our `formField` type and ask our useState to use this.

```js
interface formField {
  id: number;
  label: string;
  value: string;
}

const [formState, setFormState] = React.useState<formField[]>(intialState);

```
Great! Now that sure worked like a charm! Now we have our app powered by the `localStorage` from the browser! 