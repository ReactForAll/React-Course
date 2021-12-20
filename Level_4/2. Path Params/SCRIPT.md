So, in the previous lesson, we learned to render React components based on the paths that we specify. We also refactored our application to have multiple pages. Until now, our application has been built for creating a single form. Now, lets build on top of our application to support multiple forms. In order to do this, we will use dynamic paths to specify what form needs to be opened. 

First, lets create a type that can represent multiple forms which we would use to store data in local storage code. 

```js
interface formData {
  id: number;
  formFields: formField[];
}

interface formField {
  id: number;
  label: string;
  value: string;
}
```
Now we will have to refactor our form state to be of type `formData`. So, lets create a function to get the initial state instead of directly defining the initial state like before.

```js
const getLocalForms = () => {
  const localForms = localStorage.getItem("savedForms");
  if (localForms) {
    return JSON.parse(localForms);
  }
  return [];
};

const initialState = (formId?: number) => {
  console.log("Initializing State for", formId);
  if (formId) {
    const localForms = getLocalForms();
    const result = localForms.find((form: formData) => form.id === formId);
    if (result) {
      return result;
    }
  }
  return { id: Number(new Date()), formFields: intialFormFields };
};
```
Here, we are using the `getLocalForms` function to get the saved forms from local storage. If there are no saved forms, we will return an empty array. 

Now to create our initialState, we'd go through the saved forms and find a form with the specified ID. If there is no form with the specified ID, we will return the initial state for a new form, like before. 

Now, we can go ahead and update our state to be of type `formData` and change all of the places where we are updating `formData` to update `formData.formFields` instead.

Let's comment out the part where we're saving our form to local storage temporarily and test out if our forms are working fine. Its a good practice to stop and verify your changes when you are doing a major refractoring like this. 

<!-- Add Console.Logs in Code to Verify Expected behaviour -->

Now that we've verify our changes using `console.log` Let's go ahead and refactor our useEffect to save our form to local storage as well.

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

Here, we have defined a function that takes the current state of the form and builds the object that we want to save to local storage. We are using the `getLocalForms` function to get the saved forms from local storage. And then we are using the `filter` function to remove the form that we want to save, later replacing it with the current formState. We are using the `JSON.stringify` function to convert the object to a string and then saving it to localStorage.

Now, let's use the dev tools to inspect the localStorage and find the form IDs that we've saved and then configure our router to parse the form ID from the URL and pass it to our Form component.

```js
  "/form/:id": ({ id }: any) => <Form id={Number(id)} />,
```

Now, we can test our application by navigating to `/form/1` or the ID that we saved in local storage.

Great! The form that we saved in local storage is now loaded based on the ID that we specified in the URL. 

Now let's also go ahead and add a list that represents the saved forms in our `<Home>` component. 

```js
      <h1 className="text-2xl font-bold text-gray-800">Saved Forms</h1>
      <div className="flex flex-wrap items-center justify-center p-4">
        {savedForms.map((form) => (
          <a
            href={`/form/${form.id}`}
            className="bg-gray-200 shadow-lg rounded-xl p-4 m-4"
          >
            <h2 className="text-xl">Form {form.id}</h2>
          </a>
        ))}
      </div>
```

Let's structure our getLocalForms under `/utils` and our type definitions to `/types` since we need to use it in the Home component as well now.