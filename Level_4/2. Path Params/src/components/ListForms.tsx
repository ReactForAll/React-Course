import React, { useEffect } from "react";
import { formData } from "../types/form";
import { getLocalForms } from "../utils/StorageUtils";

export default function ListForms(props: { openFormCB: (id: number) => void }) {
  const [forms, setForms] = React.useState<formData[]>(getLocalForms());
  useEffect(() => {
    localStorage.setItem("savedForms", JSON.stringify(forms));
  }, [forms]);
  return (
    <div>
      <div className="flex items-center justify-center">
        <div
          className="flex justify-between px-4 m-2 2-full md:w-1/2 shadow-md border border-gray-200 hover:bg-white bg-gray-100 cursor-pointer rounded-lg"
          onClick={() => props.openFormCB(Number(new Date()))}
        >
          <div className="flex flex-col py-2">
            <h1 className="text-xl text-slate-700"> + New Form</h1>
            <span className="text-gray-600"></span>
          </div>
        </div>
      </div>
      {forms.map((form) => {
        // Form Card with Open and Delete buttons
        return (
          // Card Div
          <div className="flex items-center justify-center">
            <div className="flex justify-between px-4 m-2 2-full md:w-1/2 shadow-md border border-gray-200 rounded-lg">
              <div className="flex flex-col py-2">
                <h1 className="text-xl text-slate-700">{form.title}</h1>
                <span className="text-gray-600">
                  {form.formFields.length} Questions
                </span>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => {
                    props.openFormCB(form.id);
                  }}
                  className="bg-gray-200 text-gray-800 border-2 border-gray-400 rounded-lg p-1 m-2"
                >
                  Open Form
                </button>
                <button
                  onClick={() => {
                    setForms(forms.filter((f) => f.id !== form.id));
                  }}
                  className="bg-gray-200 text-gray-800 border-2 border-gray-400 rounded-lg p-1 m-2"
                >
                  Delete Form
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
