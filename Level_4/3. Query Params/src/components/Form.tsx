import React, { useState, useEffect } from "react";
import { formData, formField } from "../types/form";
import { getLocalForms } from "../utils/storageUtils";

const intialFormFields: formField[] = [
  { id: 1, label: "First Name", value: "" },
  { id: 2, label: "Last Name", value: "" },
  { id: 3, label: "Email", value: "" },
];

const initialState = (formId?: number) => {
  console.log("Initializing State for", formId);
  if (formId) {
    const localForms = getLocalForms();
    const result = localForms.find((form: formData) => form.id === formId);
    if (result) {
      return result;
    }
  }
  return { id: Number(new Date()), formFields: intialFormFields };
};

const updatedForms = (form: formData) => {
  const localForms = getLocalForms();
  const filteredLocalForms = localForms.filter(
    (formFilter: formData) => formFilter.id !== form.id
  );
  return JSON.stringify([...filteredLocalForms, form]);
};

export default function Form(props: { id?: number }) {
  const [formState, setFormState] = React.useState<formData>(
    initialState(props.id)
  );
  const [newField, setNewField] = React.useState("");
  useEffect(() => {
    let timeout = setTimeout(() => {
      console.log("Saving form", formState.id);
      localStorage.setItem("savedForms", updatedForms(formState));
      console.log("Saved form", updatedForms(formState));
    }, 1000);
    return () => clearTimeout(timeout);
  }, [formState]);
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full">
        <a
          href="/"
          className="bg-gray-200 text-gray-800 border-2 border-gray-400 rounded-lg p-2 m-2"
        >
          Close Form
        </a>
        <input
          className="text-gray-800 border-2 border-gray-400 rounded-lg p-2 m-2 flex-1"
          type="text"
          placeholder="Title"
          value={formState.title}
          onChange={(e) =>
            setFormState({ ...formState, title: e.target.value })
          }
        />
      </div>
      {formState.formFields.map((field) => (
        <React.Fragment key={field.id}>
          <div className="flex w-full justify-between items-end">
            <span className="w-full text-lg px-2">{field.label}</span>
            <button
              className="bg-gray-200 text-gray-800 border-2 border-gray-400 rounded-lg p-2 m-2"
              onClick={() =>
                setFormState((formState) => {
                  const newFields = formState.formFields.filter(
                    (item) => item.id !== field.id
                  );
                  return {
                    ...formState,
                    formFields: newFields,
                  };
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
              setFormState((formState) => {
                const newFields = formState.formFields.map((item) => {
                  if (item.id === field.id) {
                    return { ...item, value: e.target.value };
                  }
                  return item;
                });
                return {
                  ...formState,
                  formFields: newFields,
                };
              })
            }
            placeholder={field.label}
          />
        </React.Fragment>
      ))}
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
            setFormState({
              ...formState,
              formFields: [
                ...formState.formFields,
                { id: Number(new Date()), label: newField, value: "" },
              ],
            });
            setNewField("");
          }}
        >
          Add Field
        </button>
        <button
          className="bg-gray-200 text-gray-800 border-2 border-gray-400 rounded-lg p-2 m-2 mx-4"
          onClick={() => {
            setFormState({
              ...formState,
              formFields: formState.formFields.map((item) => ({
                ...item,
                value: "",
              })),
            });
          }}
        >
          Clear Form
        </button>
      </div>
    </div>
  );
}
