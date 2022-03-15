Welcome back! Since our project is a Single Page Application, our entire needs to be downloaded for our webpage to show some content. Even though this isn't that much of a problem in our current project, since it's small enough, this would be a major issue in larger projects!

Now how do we solve this. We can do this by Code Splitting or Lazy Loading.

#### Lazily Loading React Components

In React we can use the `React.lazy` function to load our components asynchronously. This is a great way to load our components asynchronously and only when they are needed.

Now let's split out our `PreviewForm` into a separate build that we can load asynchronously.

Up until now we've always imported our React Components like this:

```js
import PreviewForm from './PreviewForm';
```

Now we can use the `React.lazy` function to load our components asynchronously.

```js
const PreviewForm = React.lazy(() => import('./PreviewForm'));
```

Now this means that React will only load the `PreviewForm` component when it needs to be rendered!

Another way to solve this is to use the `React.Suspense` component.

To use this, we can wrap our `PreviewForm` component in a `React.Suspense` component.

```js

const suspenseFallback = (
  <div className="flex justify-center items-center h-full">
    <div className="spinner" />
  </div>
);

const suspenseWrapper = (Component: any) => (props: any) =>
  (
    <React.Suspense fallback={suspenseFallback}>
      <Component {...props} />
    </React.Suspense>
  );

const Home = suspenseWrapper(React.lazy(() => import("../components/Home")));
```
