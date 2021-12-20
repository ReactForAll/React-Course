import { useState } from "react";
import Logo from "../logo.svg";
import { formData } from "../types/form";
import { getLocalForms } from "../utils/storageUtils";

const savedForms: formData[] = getLocalForms();
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex items-center justify-center h-full">
        <img
          className="h-48 w-48"
          src={Logo}
          alt="logo"
          style={{ animation: "spin 2s infinite linear" }}
        />
        <p className="text-xl">
          Welcome to Level 4 of the{" "}
          <span className="font-bold text-gray-800">React Typescript</span>{" "}
          Course{" "}
        </p>
      </div>
      <h1 className="text-2xl font-bold text-gray-800">Saved Forms</h1>
      <div className="flex flex-wrap items-center justify-center p-4">
        {savedForms
          .map((form) => (
            <a
              href={`/form/${form.id}`}
              className="bg-gray-200 shadow-lg rounded-xl p-4 m-4"
            >
              <h2 className="text-xl">{form.title}</h2>
            </a>
          ))}
      </div>
    </div>
  );
}
