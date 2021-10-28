# Building Dynamic Components using State

Now that you've seen how to use state, let's look at how to use state to build dynamic components. State is a powerful tool for building dynamic components. You can build components with one or more state variables, and the state variables can be used to dynamically change the content of the component.

For Instance you could make a simple list of items where the user can add a new item using a button.

```js
const ToDoList = () => {
  const [items, setItems] = useState<string[]>(["item 1", "item 2"]);

  const addItem = () => {
    setItems([...items, `item ${items.length + 1}`]);
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={() => addItem()}>Add Item</button>
    </div>
  );
```

That's it! You've created a simple list of items. Now you can add a new item by clicking the button. Now how about we add another button to remove items?

```js
const ToDoList = () => {
  const [items, setItems] = useState<string[]>(["item 1", "item 2"]);

  const addItem = () => {
    setItems([...items, `item ${items.length + 1}`]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={item}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addItem()}>Add Item</button>
    </div>
  );
};
```

That's it! Now you can remove items by clicking the remove button. Next up, in the next lesson, we'll let the user type in a new item and add it to the list.
