We know that when we load a certain url, we can use our router to render a component based on the url. Now how would we change the URL from our code (Not from an a href link).

We can use the `navigate` function from `raviger` to take care of this!

The navigate function also takes 2 optional parameters: `[replace]` and `[queryParams]`. The `replace` parameter is a boolean value which, if true, will replace the current history entry. The `queryParams` parameter will add the query parameters to the url.


```js
navigate('/home', false, { search: 'Query' });
```
The above code will navigate to the url `/home?search=Query`.
