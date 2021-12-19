# Introduction to JSX and Props


Hey! Now that you have seen how React's Raw APIs can be used to create Elements, let's take a look at JSX. 

JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like syntax in JavaScript. It is a subset of JavaScript that is used to write HTML. 

With JSX you can write React readable fashion. For instance, let's refactor our previous example to use JSX.

```js
const element = <h1> Welcome to #react-typescript with #tailwindcss </h1>;
```

See! It's that simple! it practically mimics our HTML.

Now you can see that the first argument is JSX tag name, and the second argument is spread across the JSX tag as props, similar to HTML attributes. The third argument, the children, is the content of the JSX tag.

So how do we refactor about our wrapper div? Well you can simply nest JSX tags inside each other.

```js
const element = (
  <div className="flex h-screen bg-gray-100 items-center justify-center">
    <h1 className="py-4 text-center text-xl"> Welcome to #react-typescript with #tailwindcss </h1>
  </div>
);
```
Now even though this looks a lot like plain HTML, but it's actually 2 React Elements. Underneath the hood, React parses the JSX and uses the same `createElement` API to render this.

Now let's switch back to using our App component. We can see that our App component is entirely JSX.

Let's change the `index.tsx` file to render our App component.

```js
  ReactDOM.render(<App />, document.getElementById('root'));
```

There are a few Caveats to JSX. Firstly like we've mentioned before, since JSX is technically JavaScript, you can't use class = as an attribute, because it is a reserved keyword. We use className = instead.

Second, All JSX elements must be closed. For example, if we look at the img tag we have over here, it's a closed tag instead of an open tag like you typically find in HTML

So if we try to use an open tag instead, we'll get an error.

```js
  img src={logo} className="animate-spin" alt="logo">
```
Even though in HTML, img tags need not be closed and this is a valid HTML Tag. However, in JSX, all tags must be closed and therefore this right here is not valid JSX.

A valid JSX img tag would therefore look like either:
```js
  <img src={logo} className="animate-spin" alt="logo" />
```
OR
```js
  <img src={logo} className="animate-spin" alt="logo"></img>
```

### Code Snippets

Now since JSX is just a syntax for portraying HTML that we use inside our Typescript files, we can use variables inside JSX by simply wrapping them inside a set of curly braces `{ }`. For example, the following is a valid JSX syntax:

For example: 

```js
  const welcomeMessage = 'Welcome to #react-typescript with #tailwindcss';
  return (
    <div className="flex h-screen bg-gray-100 items-center">
      <div className="w-64 p-4 mx-auto bg-white shadow-lg rounded-xl">
        <h1 className="text-center text-xl">{welcomeMessage}</h1>
        <img src={logo} className="animate-spin" alt="logo" />
      </div>
    </div>
  );
```

You can also write valid Javascript expressions inside JSX curly braces. For example, the following is a valid JSX syntax:

```js
  <h1 className="text-center text-xl">Welcome to Lesson {4+1} of #react-typescript with #tailwindcss</h1>
```

You could also use a curly brace to specify a property value using a variable or an expression. Live we've specified the src of our img tag:

```js
  <img src={logo} className="animate-spin" alt="logo" />
```

Another thing to note is that if for some reason you need to specify inline styles, you can use the `style` prop. Now you need to pass in an object to the `style` prop. For example:

```js
  const spinStyle = {
    animation: 'spin 2s linear infinite',
  };
  <img src={logo} alt="logo" style={spinStyle} />
```

If you want to specify the inline styles within the JSX itself, you need to wrap it twice in curly braces since you first open a curly brace for writing an expression within JSX and then another one to create an object.

```js
  <img src={logo} alt="logo" style={{animation: 'spin 2s linear infinite'}} />
```

### Props

Props or properties are used in JSX to pass data into React elements. Every React element has a props object that is used to pass data into the element. When we use JSX elements of html tags, we pass the attributes for the html tags as props. You will learn more about using Props in the next lesson.