Through the last lesson, we have set up a CRA App. Now let's take a look at how we can use the React APIs to build our app.

You can head straight to the `index.tsx` file. This is the Entry Point for your React Project. You can take a quick look at the imports. You can see that we're using React and ReactDOM here. We use ReactDOM to mount our React Component on to our index.html Page. We have a fairly simple App.tsx file that renders a simple React Component, but before we go there let's replace the code calling the `App.tsx` file and build a simple `Hello World` example to start with!

```js
ReactDOM.render(<h1>Hello World!</h1>, document.getElementById('root'));
```  

I'll be using the terms DOM and virtual DOM a lot in this lesson. When I say DOM, I'm referring to the changes that you see in the Browser and when I say ReactDOM or Virtual DOM, I'm talking about us telling react to do something. We will learn more about the DOM and the Virtual DOM at a later lesson in this level.

Now when you run our app using `npm start` and open it up in your browser, you'll see a simple HTML page that says `Hello World!`. Now if you open up the developer tools in your browser and inspect the HTML that is being rendered, you would see a  `<h1>Hello World!</h1>` inside the <div id="root">. Now if you've used vanilla Javascript in the past, you might notice that what has happened here is quite similar to what would happen if you invoked the `.setInnerHTML` method on a DOM element, like:

```js
document.getElementById('root').setInnerHTML(<h1>Hello World</h1>);
```

The only difference is that when you use the `.setInnerHTML` method, you're actually setting the HTML of the DOM element. But when you use the `.render` method, you're actually modifying a virtual copy of the DOM element, or in other words the React DOM. And react works under the hood to change the actual DOM to mimic the virtual DOM. 

If you open the file at `public/index.html`, You can see the div with id `root`. So when we ask ReactDOM to render something to `document.getElementById('root')`, it mounts the React App to this div!

We'll learn more about how react works underneath in the coming lessons. But for now, we need to understand that using the React APIs we specify the HTML that we want to render and React renders it for us.

### React.createElement

So we have seen that React has a virtual copy of the DOM. Similarly, for each element of the HTML tree, React maintains a React element. To create a React element, we use the `React.createElement` method. The syntax for `React.createElement` is:

```js
    React.createElement(
        type, // tag or component
        props, // props or attributes
        children
    )
```

Here you can assume props to be the attributes of the element. For example, you can create a div element with 

```js
    const headingElement = React.createElement(
        'h1', // tag or component
        { className: 'py-4 text-center text-xl' }, // attributes or props
        'Welcome to #react-typescript with #tailwindcss' // children
    );
```

This would result in HTML that looks like this:

```js
    <h1 class="py-4 text-center text-xl">Welcome to #react-typescript with #tailwindcss</h1>
```

You may have noticed that we have specified the `class` for the HTML element as `className` in the props. This is because `class` is a reserved keyword in JavaScript. So we use `className` to specify the class attribute.

What about the children? The children are the content of the element. For example, you can nest the `headingElement` that you've created inside a `div` element like this:

```js
    const divElement = React.createElement(
        'div', // tag or component
        { className: 'flex h-screen bg-gray-100 items-center justify-center' }, // attributes or props
        headingElement // children
    );
```

So that's How React Elements are created using the `createElement` API. Now you might think this isn't exactly a very elegant way to build web apps given that we end up needing to write more code than the HTML we generate. If you thought so, you'd be correct too! To tackle this, we'll learn JSX in the next lesson to write React Code much more similar to our HTML!
