Now, that we have learned the `useEffect` hook, lets learn one more React hook thats available for us known as the `useRef` hook. The `useRef` hook is most commonly used to access the DOM nodes. This is because the `useRef` hook gives you a mutable variable that you can use in your component. Let's use a `useRef` hook to access a DOM node in our app.

In order to use the `useRef` hook, we will first decleare a `useRef` variable with an initial value. When you are initializing the `useRef` to access the DOM node, you would typically initialize it with `null`.

```js
const ref = useRef(null);
```

Now, you can pass the `ref` variable to the `<input>` element as a prop named `ref` to do this. Let's create a new field named `title` that would represent the title of the form.

```js
const ref = useRef(null);
return (
  <div>
    ...
    <input ref={ref} type="text" className=""border-2 border-gray-200 rounded-lg p-2 m-2 w-full" placeholder="Title" />
  </div>
);
```

Now, in order to store our title in our form state, we will have to define a more comprehensive type that includes the title as well as the `formFields`. Let's define an interface for this and call it `formData`.

```js
interface formData {
  title: string;
  formFields: formField[];
}
```

Now, we will have to refactor our form, to use the new type and also refractor our functions that save our `formData` to local storage

First, let's refactor our initial state to include the `title`:
```js
const intialState = localStorage.getItem("formData")
  ? JSON.parse(localStorage.getItem("formData") || "[]")
  : { title: "", formFields };
```

Now, Let's refactor our `addField` and clear form buttons. They seem like the most straightforward ones. 

```js
<button
  className="bg-gray-200 text-gray-800 border-2 border-gray-400 rounded-lg p-2 m-2"
  onClick={() => {
    setFormState(() => {
      return {
        ...formState,
        formFields: [
          ...formState.formFields,
          {
            id: Number(new Date()),
            label: newField,
            value: "",
          },
        ],
      };
    });
    setNewField("");
  }}
>
  Add Field
</button>
<button
  className="bg-gray-200 text-gray-800 border-2 border-gray-400 rounded-lg p-2 m-2 mx-4"
  onClick={() => {
    setFormState((formState) => {
      return {
        ...formState,
        formFields: formState.formFields.map((item) => ({
          ...item,
          value: "",
        })),
      };
    });
  }}
>
  Clear Form
</button>
```

Now, let's refactor our formFields map which contains our input as well as our remove button.

```js
formState.formFields.map((field) => (
  <React.Fragment key={field.id}>
    <div className="flex w-full justify-between items-end">
      <span className="w-full text-lg px-2">{field.label}</span>
      <button
        className="bg-gray-200 text-gray-800 border-2 border-gray-400 rounded-lg p-2 m-2"
        onClick={() =>
          setFormState((formState) => {
            const newFields = formState.formFields.filter(
              (item) => item.id !== field.id
            );
            console.log(newFields);
            return {
              ...formState,
              formFields: newFields,
            };
          })
        }
      >
        Remove
      </button>
    </div>
    <input
      className="border-2 border-gray-200 rounded-lg p-2 m-2 w-full"
      type="text"
      value={field.value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setFormState((formState) => {
          const updatedFields = formState.formFields.map((item) => {
            if (item.id === field.id) {
              return { ...item, value: e.target.value };
            }
            return item;
          });
          return {
            ...formState,
            formFields: updatedFields,
          };
        })
      }
      placeholder={field.label}
    />
  </React.Fragment>
))
```

We'll also have to specify the right type for our `saveFormData` function.

```js
const saveFormData = (formData: formData) => {
  localStorage.setItem("formData", JSON.stringify(formData));
};
```

Now our Form seems to be working well.

Now that we have refactored our state to include the title, let's go back and finally use our `ref` to access the title. We can focus the title input field when the page loads, so that the user can directly start typing as soon as they open the page. 

```js
  useEffect(() => {
    const oldTitle = document.title;
    document.title = "Form Editor";
    ref.current.focus();
    return () => {
      document.title = oldTitle;
    };
  }, []);
```

And there we have a Type Error! Since we haven't specified the type for our `ref`, TypeScript has inferred it as `never`. Since we are assigning it to an input element, let's assign the type of the `ref` as `HTMLInputElement`.

```js
const ref = useRef<HTMLInputElement>(null);
```

And yet again we have a Type Error! Now, the compiler is telling us that the object `ref.current` is possibly `null`. In order to overcome this, we can use Javascript's Optional Chaining feature that allows us to check if its null before calling the `.focus` function.

```js
useEffect(() => {
  const oldTitle = document.title;
  document.title = "Form Editor";
  ref.current?.focus();
  return () => {
    document.title = oldTitle;
  };
}, []);
```

Now you can see that, as soon as we open the form, the title `input` field is getting focussed.

You can see that the `useRef` hook is used to access the DOM node of a child element. You can access the DOM using ref.current and use any of the DOM APIs.

useRef being a mutable variable, it is the go-to solution when you need to use legacy libraries that are not React-friendly. useRef creates a plain JavaScript object that contains a mutable value. Therefore it's as vanilla as you can get.

useRef is also useful when you need to make some custom hooks of your own. You'll learn more about this in the next target.
