import React, { useEffect, useRef } from "react";

interface formData {
  id: number;
  title: string;
  formFields: formField[];
}

interface formField {
  id: number;
  label: string;
  value: string;
}

const intialFormFields = [
  { id: 1, label: "First Name", value: "" },
  { id: 2, label: "Last Name", value: "" },
  { id: 3, label: "Email", value: "" },
];

const getLocalForms = () => {
  const localForms = localStorage.getItem("savedForms");
  if (localForms) {
    return JSON.parse(localForms);
  }
  return [];
};

const getInitialState = () => {
  const localForms = getLocalForms();
  if (localForms.length > 0) {
    return localForms[0];
  }
  return { id: Number(new Date()), title: "", formFields: intialFormFields };
};
const saveFormData = (formData: formData) => {
  localStorage.setItem("formData", JSON.stringify(formData));
};

const updatedForms = (form: formData) => {
  const localForms = getLocalForms();
  const filteredLocalForms = localForms.filter(
    (formFilter: formData) => formFilter.id !== form.id
  );
  return JSON.stringify([...filteredLocalForms, form]);
};

export default function Form(props: { closeFormCB: () => void }) {
  const [formState, setFormState] = React.useState<formData>(getInitialState());
  const [newField, setNewField] = React.useState("");

  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const oldTitle = document.title;
    document.title = "Form Editor";
    ref.current?.focus();
    return () => {
      document.title = oldTitle;
    };
  }, []);

  useEffect(() => {
    let timeout = setTimeout(() => {
      localStorage.setItem("savedForms", updatedForms(formState));
    }, 1000);
    return () => clearTimeout(timeout);
  }, [formState]);

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

      <input
        ref={ref}
        type="text"
        className="border-2 border-gray-200 rounded-lg p-2 m-2 w-full"
        placeholder="Title"
        value={formState.title}
        onChange={(e) => setFormState({ ...formState, title: e.target.value })}
      />
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
                  console.log(newFields);
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
                const updatedFields = formState.formFields.map((item) => {
                  if (item.id === field.id) {
                    return { ...item, value: e.target.value };
                  }
                  return item;
                });
                return {
                  ...formState,
                  formFields: updatedFields,
                };
              })
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
            setFormState(() => {
              return {
                ...formState,
                formFields: [
                  ...formState.formFields,
                  {
                    id: Number(new Date()),
                    label: newField,
                    value: "",
                  },
                ],
              };
            });
            setNewField("");
          }}
        >
          Add Field
        </button>
        <button
          className="bg-gray-200 text-gray-800 border-2 border-gray-400 rounded-lg p-2 m-2 mx-4"
          onClick={() => {
            setFormState((formState) => {
              return {
                ...formState,
                formFields: formState.formFields.map((item) => ({
                  ...item,
                  value: "",
                })),
              };
            });
          }}
        >
          Clear Form
        </button>
      </div>
    </div>
  );
}
