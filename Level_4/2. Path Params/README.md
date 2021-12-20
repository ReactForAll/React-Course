Through this lesson we'll refactor our app to manage multiple forms and learn about using Path Params that you can pass into your component! Just like we mention static paths in the router, you use path params to match dynamic paths and pass the dynamic part of the URL to your React component so that your React component can render based on that!

```js
const routes = {
    '/': () => <Home />,
    '/form/:id': ({id}) => <Form id={id} />,
};
```

This way you can have a dynamic path like `/form/123` and it will be matched to `/form/:id` and the `id` param will be `123`.
