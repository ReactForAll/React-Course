Similar to Path Parameters or Dynamic Paths, you can also read query parameters and use them to render your React Component.

## useQueryParams Hook

The useQueryParams hook in hookrouter allows you to read query parameters directly in your component

```js
import { useQueryParams } from 'raviger';

const MyComponent = () => {
  const [queryParams] = useQueryParams();
  const { search="" } = queryParams;
  return <div>Searching for {search}</div>;
};
```

You can use `useQueryParams` to all query parameters in your component.
