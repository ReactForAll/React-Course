In the previous lesson we've learned to use the path in the URL to render our component accordingly. We used `a href` tags to navigate to different URLs. But until now, we have not explored a method that would allow us to change the URL from our code. We can achieve this using the `navigate` function from `raviger`.

Now where would be need to use this, for instance if we open up a new form at `/form`, we generate a new `formID`, but since it doesn't get updated in the URL, the user may lose track of the form if he accidentally refreshes the page. 

How can we solve this? We can use the `navigate` function to change the URL from our code as soon as we generate the formID. This would mean that even if the user reloads the page, the same form would be loaded from the `localStorage` based on the `formID` in the URL.

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
