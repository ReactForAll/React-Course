import React, { useState } from "react";
import "./App.css";
import FormItem from "./FormItem";

function App() {
  const [items, setItems] = React.useState<string[]>(["item1", "item2"]);
  const [itemDone, setItemDone] = useState<boolean[]>([false, false]);
  const [input, setInput] = React.useState<string>("");
  const addItem = () => {
    setItems((items) => [...items, input]);
    setItemDone([...itemDone, false]);
    setInput("");
  };
  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
    setItemDone(itemDone.filter((_, i) => i !== index));
  };
  const markDone = (index: number) => {
    setItemDone(itemDone.map((done, i) => (i === index ? !done : done)));
  };
  return (
    <div className="flex justify-center items-center h-full">
      <div className="max-w-6xl m-4 p-4 flex flex-col gap-2">
        <h1 className="text-xl">Form</h1>
        {items.map((item, renderIndex) => (
          <FormItem
            key={renderIndex}
            renderIndex={renderIndex}
            inputValue={item}
            onChange={(e: any) =>
              setItems(
                items.map((currentItem, mapIndex) =>
                  mapIndex === renderIndex ? e.target.value : currentItem
                )
              )
            }
            removeItemCB={removeItem}
            markDoneCB={markDone}
            itemDone={itemDone[renderIndex]}
          />
        ))}
        <div className="flex gap-2">
          <input
            className="flex-1 bg-gray-100 border border-gray-400 rounded-md p-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="bg-blue-600 rounded-md p-2" onClick={addItem}>
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
