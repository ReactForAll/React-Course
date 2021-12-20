Until now, we've been using state to store data in our application. The data stored in state is lost when a component is unmounted. And the state of the `<App>` is lost when the application is closed or reloaded. Now this is ideal from a componentization perspective, but some data may need to be stored across sessions. There a few options to do this inside a browser.

In this lesson let's learn `localStorage` to store data in the browser, so that even when the application is closed or reloaded, we can still preserve some data

In order to store data to the `localStorage`, let's use the `localStorage.setItem()` method.

```js
localStorage.setItem("key", "value");
```

Using this method, you can store data that is stored in the browser and load it into the state when the App is loaded.

In order to get data from the `localStorage`, let's use the `localStorage.getItem()` method.

```js
localStorage.getItem("key");
```

It is to be noted that you can only store strings in the `localStorage`. If you want to store anything else, the JSON.stringify() method can be used to convert the data into a string. This converts the array or object into a string using the JSON format.

For instance:

```js
const data = [1, 2, 3];
localStorage.setItem("key", JSON.stringify(data));
```

When you have a stringified object in the `localStorage`, you can use the JSON.parse() method to convert it back into an array or object. Since there is a possibility that there is no data stored in the `localStorage`, you can use the nullish coalescing operator (??) to check if there is data stored in the `localStorage`. The nullish coalescing operator (??) will return the value on the left if the value on the right is null or undefined.

```js
const data = JSON.parse(localStorage.getItem("key") ?? "[]");
```
