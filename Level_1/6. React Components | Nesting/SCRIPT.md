Hey again! Now that you've learned how to write JSX, let's see how you can make React Components!

React allows us to break down the problem of building a complex application into smaller, more manageable components. For instance, if we wanted to build a simple todo list application, we could break down the todo list into a simple generic list as a generic component, and then build out the todo list items as a set of components that are specific to the todo list.

In order to well separate code, react allows you to make components, and nest components inside each other. Let's look at our React project and try to make it into smaller components

Let's take our Header section and break it down into a component.

```js
  <div className="flex gap-2 items-center">
    <img
      className="h-16 w-16"
      src={logo}
      alt="logo"
      style={{ animation: "spin 2s infinite linear" }}
    />
    <h1 className="text-center text-xl">
      Welcome to Lesson {4 + 2} of #react-typescript with #tailwindcss
    </h1>
  </div>
```

### Children

React Components have children similar to a <div> element. The children are the content that is inside the component. For instance, let's say we have a component called `<Heading />` that works as a wrapper class for <h1> for your project.

```js
function Heading(props) {
  return <h1>{props.children}</h1>;
}
```

### Props

React Components can receive props from their parent components. In the example below, we have a component that receives type as a prop.

```js
function Heading(props) {
    if(props.type === "h1") {
        return <h1>{props.children}</h1>
    } else {
        return <h2>{props.children}</h2>
    }
}
```

### Dynamic UI Components

Now let's see how we can render large components and eliminate the need for repeating code. Let's see how we can create a component that renders a list that looks like

```js
function List(props) {
    return (
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    );
}
```

To do this, you can use an array, to reduce the amount of code you need to write. Such as:


```js
const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];
const MyComponent = () => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};
```

Here, you can see how code snippets can be used inside JSX to create dynamic UI components.

Important: By using the `key` prop, we can ensure that the list is rendered correctly. and if there are any changes to the list, the list will be updated efficiently. The key prop is used to uniquely identify each list item.
