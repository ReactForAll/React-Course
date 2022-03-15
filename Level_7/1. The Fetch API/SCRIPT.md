Welcome to the 7th Level of the React Course! 

Until now, we've been building an app with a scope that stays strictly within the browser. All our data has resided in our browser and even our persistent storage was in the `localStorage` of the user's browser. In this lesson we'll learn to start using the `fetch` api to make our requests to a server which would hold the user's data. As you probably already know, this allows us to go beyond the scope of the browser and access our data over the internet.

The fetch API is a tool we can use to communicate with our backend server over HTTP APIs. In order to get started let's use the fetch API to integrate with our backend server.

We have an API at 'tsapi.coronasafe.live/api/mock_test/' that gives us a static list of forms. We will use this to get started with the `fetch` API. Let's refractor our page that displays the forms to use the fetch API to make a request to the server and display the forms from the server.

In order to make the request when the component mounts the first time, we will use the `useEffect` hook.

We need to use the `fetch` function to make a request to the server. The fetch function is asynchronous and it returns a promise that resolves to the response from the server. 

We have 2 ways of handling the Promise returned by the fetch function.

Either you can use the .then() method to handle the response from the server. Or you can use the await keyword after making the function an `async` function. We can use the `await` keyword to wait for the response to come back from the server.

Using `.then` to handle the response from the server.
```tsx
const fetchForms = () => {
    fetch('https://tsapi.coronasafe.live/api/mock_test/')
        .then(response => response.json())
        .then(data => {
            setForms(data);
        });
  };
  useEffect(() => {
    fetchForms();
  }, []);
```
Or using the `await` keyword to handle the response from the server.
```tsx
const fetchForms = async () => {
    const response = await fetch("https://tsapi.coronasafe.live/api/test/");
    const forms = await response.json();
    setForms(forms);
  };
  useEffect(() => {
    fetchForms();
  }, []);
```



A Promise is an object that represents a value that may or may not be available at some point in the future. We use the `await` keyword to wait for the promise to resolve and get the value from the promise. The Promise is resolved as the `Response` when the server sends a response back to us. The `Response` has a `json()` method that returns a promise that resolves to the JSON data from the server. We use the `await` keyword to wait for the promise to resolve and get the JSON data from the promise.

Now since our existing `FormData` has the `formFields` property, and our API response does not, let's make the `formFields` property optional in our type definition.

```ts
export type FormItem = Omit<FormData, 'formFields'>;
```

Now the `json()` method returns the response body as a JavaScript object, and this is of type `any`. We'll learn about modelling around our backend APIs to improve static typing while working with APIs in the next lesson!

