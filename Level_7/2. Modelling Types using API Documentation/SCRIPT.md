Now that we've seen how to use the `fetch` API to communicate with our server, let's now take a look at creating types that represent the data we receive from our server.

Now this is kind of tricky, since we don't know what the data will look like. We'll use the `any` type to represent the data we receive from the server. We receive the JSON data resolved from the promise as an `any` type, so we need to specify how to cast it into a specific type.

Let's head the the Open API specification for the forms API to see what the data looks like! Our current APIs are at `https://typeformapi.gigin.dev/` and the Open API specification is available at `https://typeformapi.gigin.dev/swagger/`. 

The documentation for this API has described both the requests and response models as well as a glimpse of the database models. We can refer to this to model our types in the frontend. For instance, we can see that the forms API have 3 attributes title, description and is_public of types string, string and boolean respectively and we also have the parameters that we need to use to validate these fields in the API documentation. So, we can go ahead and model the types that we will use to interop with the backend API. 

Let's first model the form referring to the documentation. 

```tsx
type Form = {
  title: string;
  description: string;
  is_public: boolean;
};
```

We can also create a function that can validate the form referring to the parameters specified in the swagger documentation.

```tsx
title: string // maxLength: 100; minLength: 1
description:	string // x-nullable: true
is_public:	boolean
```

```tsx
export type Errors<T> = Partial<Record<keyof T, string>>;

export const validateForm = (form: Form) => {
  const errors: Errors<Form> = {};
  if (form.title.length < 1) {
      errors.title = 'Title is required';
  }

  if (form.title.length > 100) {
      errors.title = 'Title must be less than 100 characters';
  }
  if(form.description && form.description.length > 1000) {
      errors.description = 'Description must be less than 100 characters';
  }
  return errors;
}
```

Now we can use the `validateForm` function to validate the form before sending it to the server. Given the APIs available to use, we will have to create a form before we can create formFields. So let's create a `CreateForm` component that would allow us to create a form, save it and on successful save, redirect to the form page where we can allow the users to create formFields.

Before we integrate the Create Form API, you can head to `tsapi.coronasafe.live` and Sign up. We will use this username and password to Authenticate our API requests.


```tsx
import { navigate } from "raviger";
import React, { useState } from "react";
import { Errors, Form, validateForm } from "../types/formTypes";

export default function CreateForm() {
  const [form, setForm] = useState<Form>({
    title: "",
    description: "",
    is_public: false,
  });

  const [errors, setErrors] = useState<Errors<Form>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateForm(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Basic Auth Credentials
      const auth = "Basic " + window.btoa("gigin:7zQ7efBJRHCWVyu");
      const response = await fetch("https://tsapi.coronasafe.live/api/forms/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: auth,
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        navigate(`/forms/${data.id}`);
      }
    }
  };

  return (
    <div className="w-full max-w-lg divide-y divide-gray-200">
      <h1 className="text-2xl my-2 text-gray-700">Create Form</h1>
      <form className="py-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className={`${errors.title ? "text-red-500" : ""}`}
          >
            Title
          </label>
          <input
            className="w-full border-2 border-gray-200 rounded-lg p-2 my-2 flex-1"
            type="text"
            name="title"
            id="title"
            value={form.title}
            onChange={handleChange}
          />
          {errors.title && <p className="text-red-500">{errors.title}</p>}
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className={`${errors.description ? "text-red-500" : ""}`}
          >
            Description
          </label>
          <input
            className="w-full border-2 border-gray-200 rounded-lg p-2 my-2 flex-1"
            type="text"
            name="description"
            id="description"
            value={form.description}
            onChange={handleChange}
          />
          {errors.description && (
            <p className="text-red-500">{errors.description}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            className="mr-2 border-2 border-gray-200 rounded-lg p-2 my-2 flex-1"
            type="checkbox"
            name="is_public"
            id="is_public"
            value={form.is_public ? "true" : "false"}
            onChange={handleChange}
          />
          <label
            htmlFor="is_public"
            className={`${errors.is_public ? "text-red-500" : ""}`}
          >
            Is Public
          </label>
          {errors.is_public && (
            <p className="text-red-500">{errors.is_public}</p>
          )}
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

```

You can first head to typeform.coronasafe.live and Sign Up, to get a set of credentials you can use for integrating with the Create Form API. 

We can head to `Tailwind UI` to create a modal that would show the `CreateForm` component. 

Now we'll rewire our `CreateForm` button to open a model that would show the `CreateForm` component and then  we will wire the `CreateForm` component to open the form based on the success response. 