# Controlled Form Components

Now let's try to clear the input text after the user creates a new item.

```js
const ToDoList = () => {
    const [items, setItems] = useState<string[]>(["item 1", "item 2"]);
    const [input, setInput] = useState("");

    const addItem = () => {
      setItems([...items, input]);
      setInput("");
    };

    const removeItem = (index: number) => {
      setItems(items.filter((item, i) => i !== index));
    };
    
    const handleChange = (e: any) => {
      setInput(e.target.value);
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
        <input onChange={handleChange} />
        <button onClick={() => addItem()}>Add Item</button>
      </div>
    );
```

You can see that this doesn't seem to be working. The input text is still there. This is because this input field is not yet a controlled element. In order to make it a controlled element, we need to add a `value` attribute to the input element. The `value` attribute is a string that represents the current value of the input field. If we can wire the `value` attribute to a state variable, we can make this input field a controlled element.

```js
    <input value={input} onChange={handleChange} />
```

Now you can see that we are able to modify the input text from our code. This is now a controlled element. Let's try to create an additional field to each item so that we can mark items as done.

```js
const ToDoList = () => {
    const [items, setItems] = useState<string[]>(["item 1", "item 2"]);
    const [done, setDone] = useState<boolean[]>([false, false]);
    const [input, setInput] = useState("");

    const addItem = () => {
      setItems([...items, input]);
      setDone([...done, false]);
      setInput("");
    };

    const removeItem = (index: number) => {
      setItems(items.filter((item, i) => i !== index));
      setDone(done.filter((item, i) => i !== index));
    };
    
    const handleChange = (e: any) => {
      setInput(e.target.value);
    };

    const handleDone = (index: number) => {
      setDone(done => done.map((item, i) => i === index ? !item : item));
    };

    return (
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={item}>
              {item}
              <button onClick={() => removeItem(index)}>Remove</button>
              <input type="checkbox" checked={done[index]} onChange={() => handleDone(index)} />
            </li>
          ))}
        </ul>
        <input value={input} onChange={handleChange} />
        <button onClick={() => addItem()}>Add Item</button>
      </div>
    );
```
