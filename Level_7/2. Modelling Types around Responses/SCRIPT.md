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
description	string // x-nullable: true
is_public	boolean
```

```tsx
const validateForm = (form: Form) => {
    const errors: Form = {
        title: '',
        description: '',
        is_public: '',
    };
    
    if (form.title.length < 1) {
        errors.title = 'Title is required';
    }
    
    if (form.title.length > 100) {
        errors.title = 'Title must be less than 100 characters';
    }
    
    if (form.description.length > 100) {
        errors.description = 'Description must be less than 100 characters';
    }
    
    if (form.is_public === undefined) {
        errors.is_public = 'is_public is required';
    }
    
    return errors;
    };
```

Now we can use the `validateForm` function to validate the form before sending it to the server. Given the APIs available to use, we will have to create a form before we can create formFields. So let's create a `CreateForm` component that would allow us to create a form, save it and on successful save, redirect to the form page where we can allow the users to create formFields.


```tsx
export default function CreateForm() {
    const [form, setForm] = useState<Form>({
        title: '',
        description: '',
        is_public: false,
    });
    
    const [errors, setErrors] = useState<Form>({
        title: '',
        description: '',
        is_public: '',
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        const errors = validateForm(form);
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            // Basic Auth Credentials
            const auth = 'Basic ' + btoa('username:password');
            const response = await fetch('http://localhost:8000/forms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': auth,
                },
                body: JSON.stringify(form),
            });
            const data = await response.json();
            if (response.ok) {
                navigate(`/forms/${data.id}`);
            } else {
                setIsSubmitting(false);
            }
        } else {
            setIsSubmitting(false);
        }
    };
    
    return (
        <div>
            <h1>Create Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={form.title}
                        onChange={handleChange}
                    />
                    <div>{errors.title}</div>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        value={form.description}
                        onChange={handleChange}
                    />
                    <div>{errors.description}</div>
                </div>
                <div>
                    <label htmlFor="is_public">Is Public</label>
                    <input
                        type="checkbox"
                        name="is_public"
                        id="is_public"
                        checked={form.is_public}
                        onChange={handleChange}
                    />
                    <div>{errors.is_public}</div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
```

You can first head to typeform.coronasafe.live and Sign Up, to get a set of credentials you can use for integrating with the Create Form API. 

We can head to `Tailwind UI` to create a modal that would show the `CreateForm` component. 

Now we'll rewire our `CreateForm` button to open a model that would show the `CreateForm` component and then  we will wire the `CreateForm` component to open the form based on the success response. 