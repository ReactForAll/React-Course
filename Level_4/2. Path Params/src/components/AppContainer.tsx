import React from "react";
import Header from "./Header";

export default function AppContainer(props: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen m-4 bg-gray-100 items-center overflow-auto">
      <div className="max-w-6xl w-full p-4 mx-auto bg-white shadow-lg rounded-xl">
        <Header title={`React Typescript`} />
        {props.children}
      </div>
    </div>
  );
}
