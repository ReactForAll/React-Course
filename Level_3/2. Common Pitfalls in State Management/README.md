Through the previous lessons, I've mentioned that React State is asynchronous. This means that when you update a state, it doesn't immediately get updated. Instead, it gets queued up and gets updated in the background. For instance,

```js
const [count, setCount] = useState(0);
const increment = () => {
  console.log("before update", count);
  setCount(count + 1);
  console.log("after update", count);
};
```

Failure to realize this, you can end up with a situation where you're trying to update a state that's already being updated. For instance, If you update a state twice in a row, you probably won't see the behavior you expect.

```js
const [count, setCount] = useState(0);
const increment = () => {
  console.log("before update", count);
  setCount(count + 1);
  setCount(count + 2);
  console.log("after update", count);
};
```

### Treat state as immutable

According to the React documentation, it's important to treat state as immutable. This means that you shouldn't update state directly. Instead, you should use the setState function. Mutating the State does tend to work in some cases, but it can be a source of bugs. It's best to avoid mutating state directly.

```js
const [count, setCount] = useState(0);
const increment = () => {
  console.log("before update", count);
  /* This is a bad idea  */
  /* count = count + 1; */

  /* This is a good idea */
  setCount(count + 1);
  console.log("after update", count);
};
```

Similarly when you have a state that's an array, you can use the spread operator to update the state without mutating the array.

```js
const [items, setItems] = useState(["Item 1", "Item 2"]);
const addItem = () => {
  console.log("before update", items);
  setItems([...items, "Item 3"]);
  console.log("after update", items);
};
```

The spread operator can be used on Objects and Arrays to update a state without mutating it.
