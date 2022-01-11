Since our project is a CRA project, creating a production build is as simple as starting a development server. We can simply run 

```bash
npm run build
```

This would build the project and create a production ready pack in our `/build` directory. So how is this different from our source files? Let's take a look!

Once we build our project, we can refer our `src` and compare it to the pack from our `/build` directory.

In order to do this, let's take the simplest component that we have and search where it is being used in our `build`. We'll use our Heading Component to start with. If we try to find the text of our Heading component in our `build`, we can see that the `react-scripts build` command has parsed all of our JSX and compiled it into the equivalent React Raw APIs.

```js
<h1>Hello World</h1>
```

has been compiled into the following:

```js
React.createElement(
  "h1",
  null,
  "Hello World"
);
```

It sure is difficult to read the build pack that we have since it's been minified to reduce it's footprint when we deploy it