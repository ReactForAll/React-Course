So, in the previous lesson, we learned to render React components based on the paths that we specify. We also refactored our application to have multiple pages. 

In this lesson, we're gonna learn about Path Params. Path Params are parameters that are specified in the URL. Which means that you use a dynamic value from the URL to render your component. This is similar to your public twitter link or your public github profile. 

In your github profile you have `github.com/:username` where `:username` is replaced with a valid username. Similarly we can configure our app to have a dynamic value for the id of our form like `/form/:id`. This would allow us to render a form based on the URL that is opened. Another advantage is that you can directly open this URL for a specific form.

Since we already have a function that could create our initial state based on a formID, we need to go ahead and receive a URL with a formID.

```js
  "/form/:id": ({ id }: any) => <Form id={Number(id)} />,
```
Now we would also need to refactor the Open Form button, to work with URLs instead of the state variable. Here, when we're routing with Path Params, we can actually eliminate the State we were using to store what form is open right now!

So let's replace our button to Open Form with an `<a>` tag that leads to the `/form/:id` URL.

```js
{savedForms.map((form) => (
  ...
  <a href={`/form/${form.id}`} className="bg-gray-200 text-gray-800 border-2 border-gray-400 rounded-lg p-1 m-2">
    Open Form
  </a>
  ...
))}
```

We would also have to replace our button that uses `closeFormCB` to use an `a` tag instead!

Great! The form that we saved in local storage can now be loaded based on the ID that we specified in the URL. 