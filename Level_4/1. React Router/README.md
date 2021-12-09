In this lesson you'll learn about React Router which helps you to load your app based on a URL instead of loading your entire app at the same URL as the name "Single Page Application" Suggests. This allows you to make your SPA mimic the URL based routing of Multi Page Applications

In this course we'll be using `hookrouter` to make this happen.

To get started, we'll need to install `hookrouter`. You can do this by running the following command in your terminal at the root of your project:

```
npm install hookrouter
```

Once you've installed hookrouter, you can import it in your application and configure your routes.

```js
import { useRoutes } from 'hookrouter';
import App from "app";

const Home = () => <a href="/app"> Slick Form </a>;

const routes = {
    '/': () => <Home />,
    '/app': () => <App />,
};
	
const Router = () => {
    const routeResult = useRoutes(routes);
    return routeResult || <div className="h-screen flex items-center"> </div>;
}
```

There you have it!
