Hey again! Now that you've learned how to write JSX, let's see how you can make React Components!

React allows us to break down the problem of building a complex application into smaller, more manageable components. For instance, if we wanted to build a simple form, we could break down the form items into simpler components, and then build out the form as a set of components rather than a single large component.

Let's take a look at our React project and try to break it into smaller components.

First off, let's take our Header section and break it down into a component.

```js
  function Header {
    return (
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
    )
  }
```
So, here we have broken down our Header section into a separate component. Now we can simply call this component inside our `App` like `<Header />`. Now we have also seen that similar to parsing attributes in HTML tags, we pass props in JSX. Similarly, lets pass a prop into our header component. You can do this by writing 

```js
  <Header title={`Welcome to Lesson ${4+2} of #react-typescript with #tailwindcss`} />
```
Now in our header component, you can receive props as an argument to the function and access the title prop using `props.title`. Now in Typescript, we need to specify what type of props we receive in each component. And in this header, we can see that we are accepting an object with only a title key. We would represent this like:

```js
  export default function Header(props: { title: string }) {
```

### Children

Similarly, you can also make components which can have their own children similar to a div element in HTML. So, lets move our wrapper divs into a separate component and pass our content as its children. Let's first make our `AppContainer` Component using the existing div wrappers that we have:

```js
export default function AppContainer(props: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100 items-center overflow-auto">
      <div className="max-w-6xl w-full m-4 p-4 mx-auto bg-white shadow-lg rounded-xl">
        {props.children}
      </div>
    </div>
  );
}
```
Here if we look at the props, you can see that we are receving an object with only a key named children of type `React.ReactNode` This is a fixed type for children in React. 

### Rendering Components from Data

Another common practice that you follow to improve code reusability in React is to render JSX based on variables or more specfically arrays. For example, if you need to make a set of input tags, you could render these input tags from an array. Let's take an array of form fields.

```js
const formFields = ["First Name", "Last Name", "Email"];
```

Now in order to render some input tags based on this, you can simply use the `.map` Array function inside your JSX

```js
  {formFields.map((field) => (
    <input
      className="border-2 border-gray-200 rounded-lg p-2 m-2 w-full"
      type="text"
      placeholder={field}
    />
  ))}
```

Here, you can see how code snippets can be used inside JSX to create dynamic UI components.

Now, an important thing that you need to remember when you are rendering data from an array is that you should always use a key prop to help React understand how it should rerender if there are any changes to the array. If you open up the console in your browser, you'd see this warning stating `Warning: Each child in a list should have a unique "key" prop.`. So, what is the key prop? The key prop is the unique identifier for each item in your array. The best way to deal with this is to make sure each of your array item has an ID associated with it. So, lets refactor our array of strings into an array of objects with an ID along with the form field. 

```js
const formFields = [
  { id: 1, label: "First Name" },
  { id: 2, label: "Last Name" },
  { id: 3, label: "Email" },
];
```

Now, we can update the array map to ouse a key prop when it is rendering.
```js
  {formFields.map((field) => (
    <input
      key={field.id}
      className="border-2 border-gray-200 rounded-lg p-2 m-2 w-full"
      type="text"
      placeholder={field.label}
    />
  ))}
```

You would learn more about how React uses the key prop for renrendering in the coming lessons.
