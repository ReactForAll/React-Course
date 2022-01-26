Until now, our app has been capable of building and viewing only a single form. Now that we have a simple form builder, let's level up our app to be able to manage multiple forms!

Since we've already defined the type a single form, we won't have to make much changes to our Form App, since we'd always be working with a single form at a time. We just need the Form to be able to load a form from the `localStorage`.

Let's add an `id` to our `formData` interface to easily distinguish between forms.

```js
interface formData {
  id: number;
  title: string;
  fields: formField[];
}
```

First off, we'd have to change our functions that we use to load and save forms. Currently our `initialState` is a simple statement that returns the form from the `localStorage` if it exists and our default form if it doesn't. Let's change that and build a more comprehensive function that can look for the right form from the localStorage, where we'd now be storing multiple forms.

Since we don't have a way to list our available forms at the moment, let's take the first form in our `localStorage` to test our setup!

```js
const getLocalForms: () => formData[] = () => {
  const formsJSON = localStorage.getItem("savedForms");
  return formsJSON ? JSON.parse(formsJSON) : [];
};

const intialState: () => formData = () => {
  const forms = getLocalForms();
  if (forms.length > 0) {
    return forms[0];
  }
  const newForm = {
    id: Number(new Date()),
    title: "Untitled Form",
    formFields: initialFormFields,
  };
  saveForms([...forms, newForm]);
  return newForm;
};

const saveForms = (updatedLocalForms: formData[]) => {
  localStorage.setItem("savedForms", JSON.stringify(updatedLocalForms));
};

const saveFormData = (currentState: formData) => {
  const localForms = getLocalForms();
  const updatedLocalForms = localForms.map((form) =>
    form.id === currentState.id ? currentState : form
  );
  saveForms(updatedLocalForms);
};

```

<!-- Actual Implementation for getInitialState -->
<!-- ```js
const getInitialState = (formId?: number) => {
  if (formId) {
    const localForms = getLocalForms();
    const result = localForms.find((form: formData) => form.id === formId);
    if (result) {
      return result;
    }
    return { id: Number(formId), title: "", formFields: intialFormFields };
  }
  return { id: Number(new Date()), formFields: intialFormFields };
}
``` -->
<!-- End of Actual Implementation -->

Here, we are using the `getLocalForms` function to get the saved forms from local storage. If there are no saved forms, we will return an empty array. We've encapsulated the logic of fetching all forms from our localStorage into a separate funciton and we have a function that can build the initialState separately.

Now we'd also have to take care of updating our localStorage when we save a form. We'll need to add a new function to update our localStorage.

```js
const updatedForms = (form: formData) => {
const localForms = getLocalForms();
const filteredLocalForms = localForms.filter(
    (formFilter: formData) => formFilter.id !== form.id
);
return JSON.stringify([...filteredLocalForms, form]);
};

useEffect(() => {
    let timeout = setTimeout(() => {
    localStorage.setItem("savedForms", updatedForms(formState));
    }, 1000);
    return () => clearTimeout(timeout);
}, [formState]);
```

With this helper we can select the form from `localStorage` and update it with the changes!

We can clear the localStorage from our browser's dev tools to get started!

Let's also update our state to use the getInitialState function to get the form we want to load.

```js
const [formState, setFormState] = useState(getInitialState());
```

Now we can see that the Form is being successfully saved and then loaded from the localStorage. We now have a data structure that we can use to store multiple forms.

