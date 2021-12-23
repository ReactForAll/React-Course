import React from "react";

const formFields = [
  { id: 1, label: "First Name" },
  { id: 2, label: "Last Name" },
  { id: 3, label: "Email" },
];

export default function Form() {
  return (
    <div className="flex flex-col items-center">
      {formFields.map((field) => (
        <React.Fragment key={field.id}>
          <span className="w-full text-lg px-2">{field.label}</span>
          <input
            className="border-2 border-gray-200 rounded-lg p-2 m-2 w-full"
            type="text"
            placeholder={field.label}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
