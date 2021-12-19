import React from "react";
import AppContainer from "./AppContainer";
import Header from "./Header";

const formFields = [
  { id: 1, label: "First Name" },
  { id: 2, label: "Last Name" },
  { id: 3, label: "Email" },
];

function App() {
  return (
    <AppContainer>
      <Header
        title={`Welcome to Lesson ${
          4 + 2
        } of #react-typescript with #tailwindcss`}
      />
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
    </AppContainer>
  );
}

export default App;
