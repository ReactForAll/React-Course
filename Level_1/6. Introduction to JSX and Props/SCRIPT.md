# Introduction to JSX and Props


Hey! Now that you have seen how React's Raw APIs can create Elements, let's take a look at JSX. 

JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like syntax in JavaScript. It is a subset of JavaScript that is used to write HTML. 

JSX allows you to write React components in a more declarative and readable way. It is a subset of JavaScript that is used to write HTML. 

Now let's try to refactor these React Elements into JSX.

```js
const element = React.createElement(
  'h1',
  { id: 'someId' },
  'This is a title'
);
```

```js 
const element = <h1 id="someId">This is a title</h1>;
```

Now you can see that the first argument is JSX tag name, and the second argument is spread across the JSX tag as attributes, similar to HTML attributes. The third argument, the children, is the content of the JSX tag.

So What about nesting JSX tags? Sure! you can do that too!

```js
const element = (
  <div>
    <h1>This is a title</h1>
    <p>This is a paragraph</p>
  </div>
);
```

Now this might look like a lot of HTML, but it's actually 3 React Elements.

There are a few caveats to JSX, but they are easy to understand and to get used to.

Since JSX is technically JavaScript, you can't use class = as an attribute, because it is a reserved keyword. You can use className = instead.

```js
const element = (
  <div className="someClass">
    <h1>This is a title</h1>
    <p>This is a paragraph</p>
  </div>
);
```

Second, All JSX elements must be closed. For example, the following is not valid JSX:

```js
<img src="https://www.example.com/image.png" >
```
This is because in HTML, img tags need not be closed. However, in JSX, all tags must be closed.

A valid img JSX tag would therefore look like either:
```js
<img src="https://www.example.com/image.png" />
```
OR
```js
<img src="https://www.example.com/image.png"></img>
```

### JSX Syntax

The following is a valid JSX syntax:

```js
<div>
  <h1>Hello World</h1>
  <p>This is a JSX element</p>
</div>
```

Now if you want to write some Javascript code inside your JSX element, you can use the { } syntax. For example, the following is a valid JSX syntax:

For example: 

```js
<div>
  <h1>Heading</h1>
  <p>This is a JSX element</p>
  {/* This is a valid JSX syntax */}
  <p>{someVariable}</p>
</div>
```

You can also write valid Javascript expressions inside JSX curly braces. For example, the following is a valid JSX syntax:


```js
<div>
  <h1>{someVariable}</h1>
  <p>This is a JSX element</p>
  {/* This is a valid JSX syntax */}
  <p>{1+1}</p>
</div>
```

### Props

Props or properties are used in JSX to pass data into React elements. Every React element has a props object that is used to pass data into the element. When we use JSX elements of html tags, we pass the attributes for the html tags as props. You would learn more about using Props in the next lesson.