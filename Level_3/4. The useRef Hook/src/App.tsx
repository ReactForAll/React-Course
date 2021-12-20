import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import FormItem from "./FormItem";

const savedItems = JSON.parse(localStorage.getItem("items") ?? "[]");
const savedItemDone = JSON.parse(localStorage.getItem("itemDone") ?? "[]");

function App() {
  const [items, setItems] = React.useState<string[]>(savedItems);
  const [itemDone, setItemDone] = useState<boolean[]>(savedItemDone);
  const [input, setInput] = React.useState<string>("");
  const [lastEdited, setLastEdited] = React.useState<string>(
    new Date().toLocaleString()
  );

  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setLastEdited(new Date().toLocaleString());
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [items, itemDone]);

  const addItem = () => {
    setItems([...items, input]);
    setItemDone([...itemDone, false]);
    setInput("");
  };
  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
    setItemDone(itemDone.filter((_, i) => i !== index));
  };
  const markDone = (index: number) => {
    myRef.current?.scrollIntoView({ behavior: "smooth" });
    setItemDone(itemDone.map((done, i) => (i === index ? !done : done)));
  };

  const save = () => {
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("itemDone", JSON.stringify(itemDone));
  };
  return (
    <div className="flex justify-center h-full">
      <div className="m-4 p-4 flex flex-col gap-2">
        <h1 className="text-xl">Form</h1>
        <span>Last edited: {lastEdited}</span>
        {items.map((item, renderIndex) => (
          <FormItem
            key={renderIndex}
            renderIndex={renderIndex}
            text={item}
            done={itemDone[renderIndex] ? "Done" : "Not Done"}
            onChangeCB={(e: any) =>
              setItems(
                items.map((currentItem, mapIndex) =>
                  mapIndex === renderIndex ? e.target.value : currentItem
                )
              )
            }
            markDoneCB={markDone}
            removeItemCB={removeItem}
          />
        ))}
        <div className="flex gap-2">
          <input
            className="flex-1 border border-gray-400 bg-gray-100 rounded-md p-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="bg-blue-600 rounded-md p-2" onClick={addItem}>
            Add Item
          </button>
        </div>
        <div className="flex justify-end m-2 mt-4" ref={myRef}>
          <button className="bg-blue-400 rounded-md p-2" onClick={save}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
