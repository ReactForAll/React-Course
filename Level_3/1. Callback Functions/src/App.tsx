import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = React.useState<string[]>(["item1", "item2"]);
  const [itemDone, setItemDone] = useState<boolean[]>([false, false]);
  const [input, setInput] = React.useState<string>("");
  const addItem = () => {
    setItems([...items, input]);
    setItemDone([...itemDone, false]);
    setInput("");
  }
  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
    setItemDone(itemDone.filter((_, i) => i !== index));
  }
  const markDone = (index: number) => {
    setItemDone(itemDone.map((done, i) => i === index ? !done : done));
  }
  return (
    <div className="m-4 p-4 flex flex-col gap-2">
      {items.map((item, renderIndex) => 
        <div className="flex gap-4" key={renderIndex}>
          <input className="bg-gray-100 rounded-md p-2" value={item} onChange={(e) => setItems(items.map((currentItem, mapIndex) => mapIndex === renderIndex ? e.target.value : currentItem))} /> - 
          <button className="p-2" onClick={() => markDone(renderIndex)}>{itemDone[renderIndex] ? "Done" : "Not Done"}</button>
          <button className="bg-blue-600 rounded-md p-2" onClick={() => removeItem(renderIndex)}>
            Remove
          </button>
        </div>
        )
      }
      <div className="flex">
        <input className="bg-gray-100 rounded-md p-2" value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="bg-blue-600 rounded-md p-2" onClick={addItem}>Add Item</button>
      </div>
    </div>
  );
}

export default App;
