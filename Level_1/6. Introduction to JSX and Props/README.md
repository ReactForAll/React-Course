# Introduction to JSX and Props


Introducing JSX. JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like syntax in JavaScript. It is a subset of JavaScript that is used to write HTML. 

Let's quickly compare how we would write React code in JSX and how we would write it in React Raw APIs.

```
// Raw API
React.createElement(
  'div',
  "test",
  React.createElement(
    'h1',
    null,
    'Hello World'
  ),
  React.createElement(
    'p',
    null,
    'This is a paragraph'
  )
)

// JSX

```
  <div test>
    <h1>Hello World</h1>
    <p>This is a paragraph</p>
  </div>
```