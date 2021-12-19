import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <div className="flex h-screen bg-gray-100 items-center">
      <div className="max-w-6xl p-4 mx-auto bg-white shadow-lg rounded-xl">
        <h1 className="text-center text-xl">
          Welcome to Lesson {4 + 1} of #react-typescript with #tailwindcss
        </h1>
        <img
          src={logo}
          alt="logo"
          style={{ animation: "spin 2s infinite linear" }}
        />
      </div>
    </div>
  );
}

export default App;
