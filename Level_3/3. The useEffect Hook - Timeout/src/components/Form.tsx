import React from "react";

interface formField {
  id: number;
  label: string;
  value: string;
}

const formFields = [
  { id: 1, label: "First Name", value: "" },
  { id: 2, label: "Last Name", value: "" },
  { id: 3, label: "Email", value: "" },
];

const intialState = localStorage.getItem("formData")
  ? JSON.parse(localStorage.getItem("formData") || "[]")
  : formFields;

const saveFormData = (formData: formField[]) => {
  localStorage.setItem("formData", JSON.stringify(formData));
};

export default function Form(props: { closeFormCB: () => void }) {
  const [formState, setFormState] = React.useState<formField[]>(intialState);
  const [newField, setNewField] = React.useState("");
  return (
    <div className="flex flex-col items-center">
      <div className="flex">
        <button
          onClick={props.closeFormCB}
          className="bg-gray-200 text-gray-800 border-2 border-gray-400 rounded-lg p-2 m-2 w-full"
        >
          Close Form
        </button>

        <button
          onClick={(_) => saveFormData(formState)}
          className="bg-gray-200 text-gray-800 border-2 border-gray-400 rounded-lg p-2 m-2 w-full"
        >
          Save Form
        </button>
      </div>
      {formState.map((field) => (
        <React.Fragment key={field.id}>
          <div className="flex w-full justify-between items-end">
            <span className="w-full text-lg px-2">{field.label}</span>
            <button
              className="bg-gray-200 text-gray-800 border-2 border-gray-400 rounded-lg p-2 m-2"
              onClick={() =>
                setFormState(() => {
                  const newState = formState.filter(
                    (item) => item.id !== field.id
                  );
                  console.log(newState);
                  return newState;
                })
              }
            >
              Remove
            </button>
          </div>
          <input
            className="border-2 border-gray-200 rounded-lg p-2 m-2 w-full"
            type="text"
            value={field.value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormState(
                formState.map((item) => {
                  if (item.id === field.id) {
                    return { ...item, value: e.target.value };
                  }
                  return item;
                })
              )
            }
            placeholder={field.label}
          />
        </React.Fragment>
      ))}
      {/* Button to add Form Item */}
      <div className="flex w-full justify-between items-end">
        <input
          type="text"
          value={newField}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewField(e.target.value)
          }
          className="border-2 border-gray-200 rounded-lg p-2 m-2 flex-1"
          placeholder="Add New Field"
        />

        <button
          className="bg-gray-200 text-gray-800 border-2 border-gray-400 rounded-lg p-2 m-2"
          onClick={() => {
            setFormState([
              ...formState,
              { id: Number(new Date()), label: newField, value: "" },
            ]);
            setNewField("");
          }}
        >
          Add Field
        </button>
        <button
          className="bg-gray-200 text-gray-800 border-2 border-gray-400 rounded-lg p-2 m-2 mx-4"
          onClick={() => {
            setFormState(formState.map((item) => ({ ...item, value: "" })));
          }}
        >
          Clear Form
        </button>
      </div>
    </div>
  );
}
