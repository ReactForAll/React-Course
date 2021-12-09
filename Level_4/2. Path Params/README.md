In this lesson we'll learn about using Path Params that you can pass into your component! Just like we mention static paths in the router, you use path params to match dynamic paths and pass the dynamic part of the URL to your React component so that your React component can render based on that!

```js
const routes = {
    '/': () => <Home />,
    '/app/:data': ({data}) => <App data={data} />,
};
```

This way you can have a dynamic path like `/app/123` and it will be matched to `/app/:data` and the `data` param will be `123`.

You can also nest path params. Like this:
