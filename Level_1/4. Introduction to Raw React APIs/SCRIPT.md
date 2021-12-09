# Introduction to React APIs

Welcome back!

Through the last lesson, we have set up a CRA App. Now let's take a look at how we can use the React APIs to build our app.

You can head straight to the `index.tsx` file. This is the Entry Point for your React Project. You can take a quick look at the imports. You can see that we're using React and ReactDOM here. We use ReactDOM to mount our React Component on to our index.html Page. We have a fairly simple App.tsx file that renders a simple React Component, but before we go there. So let's replace the code calling the `App.tsx` file and build a simple `Hello World` example to start with!

```js
ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'));
```  

Now when you run our app, you'll see a simple HTML page with a `<h1>Hello World</h1>` inside the <div id="root">

```js
document.getElementById('id).setInnerHTML(<h1>Hello World</h1>);
```

ReactDOM.render works similarly. Now if you open the file at `public/index.html`, You can see the div with id `root`. Now when you say 


React will render the h1 element inside the div with id `root`.

Now that you know how the Render method works, let's see how React can create React Elements and render them.

Creating a React element using React's API is very simple. You can use `React.createElement` to create a React element. for example, to create a div element. The syntax for `React.createElement` is:

```js
    React.createElement(type, props, children)
```

Here you can assume props to be the properties of the element. For example, you can create a div element with `React.createElement('div', {id: 'my-div'}, 'Hello World')`.

This would result in HTML that looks like this:

```js
    <div id="my-div">Hello World</div>
```

Now similar to rendering html elements, you can render React elements using ReactDOM.render.

For instance you can write something like

```js
const element = React.createElement('div', {id: 'my-div'}, 'Hello World');

const container = React.createElement('div', {id: 'root'}, element);

ReactDOM.render(container, document.getElementById('root'));
```

Now this doesn't exactly look like the perfect way to write code, but it is important for us to understand how React works. We will lear more about how react works underneath in the next lesson.
