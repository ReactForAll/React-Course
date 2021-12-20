In the previous lesson we've learned to use the path in the URL to render our component accordingly. We used a href tags to navigate different URLs. But until now, we have not explored a method that would allow us to change the URL from our code. We can achieve this using the navigate function from `raviger`.

For our New Forms, let's use the navigate function to update the URL with the newly generated ID of the form.

```js
  import { navigate } from 'raviger';
  
  useEffect(() => {
    formState.id !== props.id && navigate(`/form/${formState.id}`);
  }, [formState.id]);
```

The navigate function also takes 2 optional parameters: `[replace]` and `[queryParams]`. 

The `replace` parameter is a boolean value which, if true, will replace the current history entry.
```js
navigate(url, true );
```

In our example, let's use the replace flag so that the URL is replaced rather than pushed to the history stack.

The `queryParams` parameter will add the query parameters to the URL.

Here, the history entry will be replaced with the new url. And therefore it wouldn't be possible to press the back button to go back to the previous page. 

```js
navigate('/home', false, { search: 'Query' });
```

Here the Query Params are specified as the third parameter. This will add the query parameters to the url.

The above code will navigate to the url `/home?search=Query`.
