In this lesson let's learn `localStorage` to store data in the browser, `localStorage` is a simple storage option that allows you to store key value pairs in your browser. You can use the `setItem` and `getItem` APIs to do this.

```js
localStorage.setItem("key", "value");
localStorage.getItem("key");
// returns "value"
```
Since you can only store strings in `localStorage`, you can use the `JSON.stringify` and `JSON.parse` APIs to convert your data to and from JSON and store the JSON string of your Objects and Arrays in `localStorage`.

Let's use the localStorage APIs to store our data in the browser.