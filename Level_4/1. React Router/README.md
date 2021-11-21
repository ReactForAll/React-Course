React Router is used to render the app based on the URL. With React Router instead of loading everything in your root URL, it allows you to changes this behavior.

In this course we'll be using `hookrouter` to make this happen.

To get started, we'll need to install `hookrouter`. You can do this by running the following command in your terminal at the root of your project:

```
npm install hookrouter
```

Once you've installed hookrouter, you can import it in your application and configure your routes.

```js
import {useRoutes} from 'hookrouter';

const Home = () => <a href="/app"> Slick Form </a>;

const routes = {
    '/': () => <Home />,
    '/app': () => <App />,
};
	
const Router = () => {
    const routeResult = useRoutes(routes);
    
    return routeResult || <NotFoundPage />;
}
```

There you have it!