import { useQueryParams } from "raviger";
import React, { useState, useEffect } from "react";
import { formData } from "../types/form";
import { getLocalForms } from "../utils/StorageUtils";

export default function ListForms() {
  const [forms, setForms] = React.useState<formData[]>(getLocalForms());
  const [{ search }, setQuery] = useQueryParams();
  const [searchString, setSearchString] = useState("");
  useEffect(() => {
    localStorage.setItem("savedForms", JSON.stringify(forms));
  }, [forms]);
  return (
    <div>
      <form
        className="w-full md:w-1/2 mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          setQuery({ search: searchString });
        }}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-search"
            >
              Search
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-search"
              name="search"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              type="search"
              placeholder="Search"
            />
          </div>
        </div>
      </form>
      <div className="flex items-center justify-center">
        <a
          className="flex justify-between px-4 m-2 w-full md:w-1/2 shadow-md border border-gray-200 hover:bg-white bg-gray-100 cursor-pointer rounded-lg"
          href={`/form/${Number(new Date())}`}
        >
          <div className="flex flex-col py-2">
            <h1 className="text-xl text-slate-700"> + New Form</h1>
            <span className="text-gray-600"></span>
          </div>
        </a>
      </div>
      {forms
        .filter((form) =>
          form.title.toLowerCase().includes(search?.toLowerCase() || "")
        )
        .map((form) => {
          // Form Card with Open and Delete buttons
          return (
            // Card Div
            <div className="flex items-center justify-center">
              <div className="flex justify-between px-4 m-2 w-full md:w-1/2 shadow-md border border-gray-200 rounded-lg">
                <div className="flex flex-col py-2">
                  <h1 className="text-xl text-slate-700">{form.title}</h1>
                  <span className="text-gray-600">
                    {form.formFields.length} Questions
                  </span>
                </div>
                <div className="flex items-center">
                  <a
                    href={`/form/${form.id}`}
                    className="bg-gray-200 text-gray-800 border-2 border-gray-400 rounded-lg p-1 m-2 text-center"
                  >
                    Open Form
                  </a>
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
