# Introduction to JSX and Props

In this lesson we'd be learning about JSX and how to use it to create React components.

In a nutshell the JSX equivalent of Raw React APIs would look something like this:

```js
// Raw API
React.createElement(
  'div',
  { className: 'flex h-screen bg-gray-100 items-center' },
  React.createElement(
    'h1',
    { className: 'text-center text-xl' },
    'Welcome to #react-typescript with #tailwindcss'
  ),
)
```

The JSX equivalent for the above code would look like:

```js
  <div className="flex h-screen bg-gray-100 items-center">
    <h1 className="text-center text-xl">
      Welcome to #react-typescript with #tailwindcss
    </h1>
  </div>
```