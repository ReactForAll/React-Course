import React from "react";
import Logo from "../logo.svg";

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
    </div>
  );
}
