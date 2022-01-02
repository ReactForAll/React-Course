import React from "react";
import Header from "./Header";

export default function AppContainer(props: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen p-4 bg-gray-100 items-center overflow-auto">
      <div className="flex flex-col max-w-6xl h-full w-full p-4 mx-auto bg-white shadow-lg rounded-xl">
        <Header title={`Welcome #react-typescript with #tailwindcss`} />
        <div className="flex items-center w-full pt-2 flex-1">
          <div className="w-full">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
