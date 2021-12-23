import React from "react";
import AppContainer from "./AppContainer";
import Form from "./components/Form";
import Header from "./Header";

function App() {
  const [page, setPage] = React.useState("HOME");
  const openForm = () => setPage("FORM");
  const closeForm = () => setPage("HOME");
  return (
    <AppContainer>
      <Header
        title={`Welcome to Lesson ${
          4 + 2
        } of #react-typescript with #tailwindcss`}
      />
      {page === "HOME" ? (
        <button
          onClick={openForm}
          className="bg-gray-200 text-gray-800 border-2 border-gray-400 rounded-lg p-2 m-2 w-full"
        >
          Go to Form
        </button>
      ) : (
        <Form closeFormCB={closeForm} />
      )}
    </AppContainer>
  );
}

export default App;
