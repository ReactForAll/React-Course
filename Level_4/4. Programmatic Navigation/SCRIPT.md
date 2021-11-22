In the previous lesson we've learned to use the path in the URL to render our component accordingly. What about when we need to change the Component, this means that we need to update the URL and  In order to use this we need to programmatically update the URL that we have opened. Now how would we change the URL from our code (Not from an a href link).

We can use the `navigate` function from `hookrouter` to take care of this!

```js
import { navigate } from 'hookrouter';

const MyComponent = () => {
  const handleClick = () => {
    navigate('/about');
  };

  return (
    <button onClick={handleClick}>
      Go to about page
    </button>
  );
};
```

The navigate function also takes 2 optional parameters: `[replace]` and `[queryParams]`. The `replace` parameter is a boolean value which, if true, will replace the current history entry. The `queryParams` parameter will add the query parameters to the url.

```js
navigate('/home', true );
```

Here, the history entry will be replaced with the new url. And therefore it wouldn't be possible to press the back button to go back to the previous page. 

```js
navigate('/home', false, { search: 'Query' });
```

Here the Query Params are specified as the third parameter. This will add the query parameters to the url.

The above code will navigate to the url `/home?search=Query`.
