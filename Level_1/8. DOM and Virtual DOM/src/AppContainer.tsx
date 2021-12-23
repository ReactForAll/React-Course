import React from "react";

export default function AppContainer(props: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100 items-center overflow-auto">
      <div className="max-w-6xl w-full m-4 p-4 mx-auto bg-white shadow-lg rounded-xl">
        {props.children}
      </div>
    </div>
  );
}
