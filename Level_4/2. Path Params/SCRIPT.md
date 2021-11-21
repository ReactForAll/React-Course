In the previous lesson, we learned to render React components based on the paths that we specify. 

How about Dynamic Paths? How about URLs that contain data that needs to be used to render the React Component?

Just like we mention static paths in the router, you can also use path params to match dynamic paths.

```js
const routes = {
    '/': () => <Home />,
    '/app/:data': ({data}) => <App data={data} />,
};
```

You might notice that the function that we specify as the value of the key `/app/:data` receives a parameter in which all the path parameters are accessible.

This way you can have a dynamic path like `/app/123` and it will be matched to `/app/:data` and the `data` param will be `123`. And you can use the value of the `data` prop to render the component! 

You can also nest path params. Like this:

```js
const routes = {
    '/': () => <Home />,
    '/app/:data/:id': ({data, id}) => <App data={data} id={id} />,
};
```

Another added advantage is that this allows you to easily generate shareable links, because the link has the information required to share an item in your application.