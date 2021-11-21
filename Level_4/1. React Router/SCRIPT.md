Till now we've been using the browser to navigate through the single page application. This meant that if you refresh the page at some point, the application would start from the beginning.

React Router is used to render the app based on the URL. With React Router instead of loading everything in your root URL, it allows you to changes this behavior.

React Router allows you to read the URL and render your app based on it, thereby allowing you to mimic the behavior of a multi page application. You can also use programmatic navigation over `<a href>` tags, therefore allowing you to show the pages without having to reload the page.

In order to do this, you need to define the routes(URLs) in your application. And define what URL should load what React component

There are a few libraries you can use to make this happen. The most common is `react-router`. `react-router` is a full fledged library that allows you to take care of all aspects of routing based on a URL. And in most cases you don't need so much. You just need to be able to load pages based on the URL.

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

There you have it! Now you can use `hookrouter` to render the app based on the URL. You can add any number of paths and load React components based on the current URL.