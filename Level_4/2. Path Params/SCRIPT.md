In the previous lesson, we learned to render React components based on the paths that we specify. 

How about Dynamic Paths? How about URLs that contain data that needs to be used to render the React Component?

Just like we mention static paths in the router, you can also use path params to match dynamic paths.

```js
const routes = {
    '/': () => <Home />,
    '/form/:id': ({id}) => <Form id={id} />,
};
```

You might notice that the function that we specify as the value of the key `/form/:id` receives a parameter in which all the path parameters are accessible.

This way you can have a dynamic path like `/form/123` and it will be matched to `/form/:id` and the `id` param will be `123`. And you can use the value of the `data` prop to render the component! 

Let's make our app handle more than just a single form and use the path params to open up different forms stored in the `localStorage`. The means that we should also have a url for `/form/new` to create a new form that's not yet stored in the `localStorage`. You would also need to make a component that lists all the available forms in the `localStorage`.

Let's first modify our useLocalStorage hook to handle `/form/new` and `/form/:id` paths.

```js

```

You can also nest path params. Like this:

```js
const routes = {
    '/': () => <Home />,
    '/app/:data/:id': ({data, id}) => <App data={data} id={id} />,
};
```

Another added advantage is that this allows you to easily generate shareable links, because the link has the information required to share an item in your application.

Now let's use the Path Param we receive from our router to load the relavant Quiz that's saved with us!

