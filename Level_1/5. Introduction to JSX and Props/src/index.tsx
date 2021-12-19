import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const headingElement = 
  React.createElement(
    'h1', // tag or component
    { className: 'py-4 text-center text-xl' }, // attributes or props
    'Welcome to #react-typescript with #tailwindcss' // children
  );

  const divElement = React.createElement(
    'div', // tag or component
    { className: 'flex h-screen bg-gray-100 items-center justify-center' }, // attributes or props
    headingElement // children
);

ReactDOM.render(
  divElement,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
