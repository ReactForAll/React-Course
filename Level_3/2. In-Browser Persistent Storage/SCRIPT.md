<!-- Unimplemented Feedback:  I'm not sure how well TypeScript's type inference works, but once we specify the type of the formState, shouldn't TypeScript be able to infer the type of formData sent to the saveFormData function? -->

Until now, we've been using state to store data in our application. The data stored in state is lost when a component is unmounted. And the state of the `<App>` is lost when the application is closed or reloaded. Now this is ideal from a componentization perspective, but some data may need to be stored across sessions. There a few options to do this inside a browser.

In this lesson let's learn `localStorage` to store data in the browser, so that even when the application is closed or reloaded, we can still preserve some data

In order to store data to the `localStorage`, we can use the `localStorage.setItem()` method.

```js
localStorage.setItem("key", "value");
```

So let's create a function to save our form data to the `localStorage`. Since we'll be storing our Array of `formFields` in the `localStorage`, we can convert it to a JSON string. 

JSON or JavaScript Object Notation is a text format using which you can serialize data to a string. You can read more about JSON at [https://www.json.org/](https://www.json.org/). For example our formData which is an object that looks like

```js
[
  {
    id: "firstName",
    label: "First Name",
    value: "John"
  },
  {
    id: "lastName",
    label: "Last Name",
    value: "Doe"
  }
]
```

When converted to a JSON string, it looks like this: 

```json
[
  {
    "id": "firstName",
    "label": "First Name",
    "value": "John"
  },
  {
    "id": "lastName",
    "label": "Last Name",
    "value": "Doe"
  }
]
```

We'll be using the `JSON.stringify` method to do this.

```js
const saveFormData = (formData) => {
  localStorage.setItem("formData", JSON.stringify(formData));
};
```
When we define this function, typescript would want us to specify what is the type of formData that we are receiving here because there is no initial value like before that Typescript can use to infer the type from. So, lets define the type for our `formFields` using an interface.

```js
interface formField {
  id: number;
  label: string;
  value: string;
}
```
Once we define this, we can simply specify the type of the argument like:

```js
const saveFormData = (formData: formField[]) => {
  localStorage.setItem("formData", JSON.stringify(formData));
};
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
const intialState = localStorage.getItem("formData")
  ? JSON.parse(localStorage.getItem("formData") || "")
  : formFields;
```

We'll also need to update the state to use this `initialState` value.

```js
  const [formState, setFormState] = React.useState(intialState);
```

Now that seems to be giving us a lot of Type Errors. This is because we're now taking the initial value from the localStorage and Typescript can no longer infer what's the type of the state. So let's specify it's type as well:

```js
const [formState, setFormState] = React.useState<formField[]>(intialState);

```
Great! Now that sure worked like a charm! Now we have our app powered by the `localStorage` from the browser! 