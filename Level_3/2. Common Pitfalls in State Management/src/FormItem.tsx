import React from "react";

export default function FormItem(props: any) {
  return (
    <div className="flex gap-4">
      <input
        className="bg-gray-100 rounded-md p-2"
        value={props.inputValue}
        onChange={props.onChange}
      />{" "}
      -
      <button
        className="p-2"
        onClick={() => props.markDoneCB(props.renderIndex)}
      >
        {props.itemDone ? "Done" : "Not Done"}
      </button>
      <button
        className="bg-blue-600 rounded-md p-2"
        onClick={() => props.removeItemCB(props.renderIndex)}
      >
        Remove
      </button>
    </div>
  );
}
