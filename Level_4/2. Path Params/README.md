Just like we mention static paths in the router, you can also use path params to match dynamic paths.

```js
const routes = {
    '/': () => <Home />,
    '/app/:data': ({data}) => <App data={data} />,
};
```

This way you can have a dynamic path like `/app/123` and it will be matched to `/app/:data` and the `data` param will be `123`.

You can also nest path params. Like this:

```js
const routes = {
    '/': () => <Home />,
    '/app/:data/:id': ({data, id}) => <App data={data} id={id} />,
};
```