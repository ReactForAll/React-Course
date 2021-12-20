In this lesson you'll learn about React Router which helps you to load your app based on a URL instead of loading your entire app at the same URL as the name "Single Page Application" Suggests. This allows you to make your SPA mimic the URL based routing of Multi Page Applications

In this course we'll be using `raviger` to make this happen. `raviger` is a very lightweight Router we could use. There are many alternatives, including the very extensive `react-router`, but we'll be using `raviger` for the scope of this course

To get started, we'll need to install `raviger`. You can do this by running the following command in your terminal at the root of your project:

```
npm install raviger
```

Once you've installed raviger, you can import the `useRoutes` hook into your application and configure your routes.

```js
const routes = {
  "/": () => <HomeComponent />,
  "/form": () => <FormComponent />,
};
l
export default function AppRouter() {
  const routeResult = useRoutes(routes);
  return (
    routeResult || (
      <div className="h-screen flex items-center"> </div>
    )
  );
}
```
