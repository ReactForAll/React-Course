import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="flex h-screen bg-gray-100 items-center">
      <div className="w-64 p-4 mx-auto bg-white shadow-lg rounded-xl">
        <h1 className="text-center text-xl">Welcome to <br /> #react-typescript with #tailwindcss </h1>
        <img src={logo} className="animate-spin" alt="logo" />
      </div>
    </div>
  );
}

export default App;
