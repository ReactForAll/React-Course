React Fragments are a way to group a list of elements into a single element or component. React needs every component to be the child of a single node, for example a <div>. But sometimes you might need to make a list of elements into a single element. This is where React Fragments come in. You can simply create a React Fragment and add the elements inside it.

Here's how you would typically wrap things in a div:

```js
<div>
  <h1>Hello</h1>
  <p>World</p>
</div>
```

With React Fragments, you can do the same thing by wrapping the elements inside a React Fragment:

```js
<React.Fragment>
  <h1>Hello</h1>
  <p>World</p>
</React.Fragment>
```

It is to be noted that it is recommended to build components such that each component is a single node. You may use React Fragments for exception cases where you need to build one component from multiple elements. Use React Fragments only if it is necessary. In most cases you will be able to refactor your code such that components render only one node.

You can also wrap components in <> </> tags, this is the new short syntax for React fragments
> The short syntax does not support key props. 
