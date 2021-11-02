Until now, we've been using state to store data in our application. The data stored in state is lost when a component is unmounted. And the state of the `<App>` is lost when the application is closed or reloaded. Now this is ideal from a componentization perspective, but some data may need to be stored across sessions. There a few options to do this inside a browser.

In this lesson let's learn `localStorage` to store data in the browser, so that even when the application is closed or reloaded, we can still preserve some data

In order to store data to the `localStorage`, let's use the `localStorage.setItem()` method.

```js
localStorage.setItem('key', 'value');
```

Using this method, you can store data that is stored in the browser and load it into the state when the App is loaded.