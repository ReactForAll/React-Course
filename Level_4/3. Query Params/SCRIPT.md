In the previous lesson, we learned about using Dynamic Path parameters and passing them as props to our components. Meanwhile, to read queryParams, which look like `yourapp.com/page?search="Query"`, you need to use the useQueryParams Hook.

The useQueryParams hook in hookrouter allows you to read query parameters directly in your component. It returns an object with the query parameters as it's properties. You can simply deconstruct the object(if you fancy that) and use it as you would any other object.

```js
import { useQueryParams } from 'hookrouter';

const MyComponent = () => {
  const { queryParams } = useQueryParams();
  const { search="" } = queryParams;
  return <div>Searching for {search}</div>;
};
```

In the above example, if we open the page `yourapp.com/page?search="Query"`, your component will render

```
<div>Searching for Query</div>
```

Now you might ask how query params are different from path params. Well the answer is pretty simple from a user perspective. Query params are more readable for a user. They are more human-friendly. Meanwhile, path params are more concise but does not give the user a sense of what the path is.

You can use `useQueryParams` to all query parameters in your component.

What about modifying the query parameters from your React component? Well useQueryParams also provides a setQueryParams function that you can use to do that!

The same way you would declare a state using useState, you can fetch and modify query parameters using useQueryParams.

```js
const MyComponent = () => {
    const [queryParams, setQueryParams] = useQueryParams();
    const { search="" } = queryParams;
    const [search, setSearch] = useState(search);
    const handleSearchChange = (e) => {
        setQueryParams({ search: e.target.value });
    };
    return (<div>
        
            <input type="search" value={search} onChange={e => setSearch(e.target.value)} />
            <button onClick={handleSearchChange}>Search now</button>
            <span>Searching for {search}</span>
        </div>);
```