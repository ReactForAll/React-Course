You would've completed the last milestone to allow your application to be able to Create, Read, Update and Delete multiple forms. But you may have noticed that you're managing everything via state, and therefore you had to always open the app from the same location, similar to a mobile app. This is why we call it a Single Page Application.Or in other words, if you refresh the page at some point, the application would start from the beginning.

Going forward we'll use React Router to render the app based on the URL. With React Router instead of loading everything in your root URL, it allows you to change this behavior.

React Router allows you to read the URL and render your app based on it, thereby allowing you to mimic the behavior of a multi page application. You can also use programmatic navigation over `<a href>` tags, therefore allowing you to show the pages without having to reload the page.

In order to do this, you need to define the routes(URLs) in your application. And define what URL should load what React component

There are a few libraries you can use to make this happen. The most common is `react-router`. `react-router` is a full fledged library that allows you to take care of all aspects of routing based on a URL. And in most cases you don't need so much. You just need to be able to load pages based on the URL.

In this course we'll be using `raviger` to make this happen.

To get started, we'll need to install `raviger`. You can do this by running the following command in your terminal at the root of your project:

```
npm install raviger
```

Once you've installed raviger, you can import the `useRoutes` hook from `raviger` it in your application and configure your routes.

Let's make a router component that loads our form at `/form` and shows our simple home scren at `/` with a button that navigates to `/form`. In order to do this, let's first put our Home Screen into a component of it's own and replace our buttons to switch screen with `<a>` tags.

We'll start by removing the button to open the form and replacing it with an `<a>` tag that links to the `/form`. While we're at it, let's componentize this button so that we can build a better Home Screen later.

```js
export default function Home() {
  return (
    <a
      href="/form"
      className="bg-gray-200 text-gray-800 border-2 border-gray-400 rounded-lg p-2 m-2 w-full"
    >
      Go to Form
    </a>
  );
}
```

Now let's replace our Back Button in our Form too with an `<a>` tag that links to the `/`. And then go ahead and configure our routes using the `useRoutes` hook in a component of it's own.

```js
import { useRoutes } from "raviger";
import AppContainer from "../AppContainer";
import Form from "../components/Form";
import Home from "../components/Home";

const routes = {
  "/": () => <Home />,
  "/form": () => <Form />,
};
l
export default function AppRouter() {
  const routeResult = useRoutes(routes);
  return (
    <AppContainer>{routeResult}</AppContainer> || (
      <div className="h-screen flex items-center"> </div>
    )
  );
}
```
Here we have the `useRoutes` function which takes in the URLs that we've defined and what react component we want to load for each URL.

Now that we have specified how our App should render based on the URL, let's eliminate the state that we're using to open and hide our form and do it based on the URL.

Now that we have our Router working well, let's also add a Navigation Bar to our Header. Let's add a button for each of our routes.

```js
    <div className="flex gap-2 items-center">
      ...
      <a href="/" className="text-gray-800 p-2 m-2 uppercase">
        Home
      </a>
      <a href="/form" className="text-gray-800 p-2 m-2 uppercase">
        Form
      </a>
    </div>
```

Now with our navigation bar in place, it is very easy to demonstrate how our App uses the different URLs/Routes to render different components, based on our router configuration

Since we've moved our navigation bar to the Header, let's change our Home Component a little more to make it look like a Home Screen.

```js
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex items-center justify-center h-full">
        <img
          className="h-48 w-48"
          src={Logo}
          alt="logo"
          style={{ animation: "spin 2s infinite linear" }}
        />
        <p className="text-xl">
          Welcome to Level 4 of the{" "}
          <span className="font-bold text-gray-800">React Typescript</span>{" "}
          Course{" "}
        </p>
      </div>
    </div>
```

Now we have configured our router for 2 different routes, `/` and `/form`. We've created a simple Navigation Bar, common to all our pages, that links to the `/` and `/form` routes.


Here we have the `useRoutes` function which takes in the URLs that we've defined and what react component we want to load for each URL. This function underneath watches the URL and changes the React components that are mounted based on the URL as if the URL was a state! 