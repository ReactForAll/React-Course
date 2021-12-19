React works by manipulating the DOM with functions similar to `document.getElementById(**).setInnerHTML(**)`. You can render your entire React App into a DOM element using `ReactDOM.render(**)`.

```js
ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'));
```  

React will render the h1 element inside the div with id `root`.

Within your React App, you structure your code by creating elements/components.

Creating a React element using React's API is very simple. You can use `React.createElement` to create a React element. for example, to create a div element. The syntax for `React.createElement` is:

```js
    const element = React.createElement(
        type, // tag or component
        props, // props or attributes
        children
    )
```

Here you can assume props to be the properties of the element. For example, you can create a div element with 
```js
    React.createElement('div', {id: 'my-div'}, 'Hello World')`
```

This would result in HTML that looks like this:

```js
    <div id="my-div">Hello World</div>
```

Similarly you can also nest React Elements within each other. For example, you can create a div element with a h1 element inside it by specifying the h1 element to be the child of the div element.

Now this doesn't exactly look like the perfect way to write code, but it is important for us to understand how React works. We will learn more about how react works underneath in the next lesson.
