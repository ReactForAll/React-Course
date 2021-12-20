In this lesson let's learn `localStorage` to store data in the browser, `localStorage` is a simple storage option that allows you to store key value pairs in your browser. You can use the `setItem` and `getItem` APIs to do this.

```js
localStorage.setItem("key", "value");
localStorage.getItem("key");
// returns "value"
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

Here you can the nullish coalescing operator (??) to check if there is data stored in the `localStorage` and if not, it will use the fallback value `[]` to return an empty array.