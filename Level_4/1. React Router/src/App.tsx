import React from "react";
import AppContainer from "./AppContainer";
import Form from "./components/Form";
import ListForms from "./components/ListForms";
import Header from "./Header";

function App() {
  const [page, setPage] = React.useState("HOME");
  const [currentForm, setCurrentForm] = React.useState<number>(0);
  const closeForm = () => setCurrentForm(0);
  return (
    <AppContainer>
      <Header
        title={`Welcome to Lesson ${
          4 + 2
        } of #react-typescript with #tailwindcss`}
      />
      {currentForm === 0 ? (
        <ListForms openFormCB={(id: number) => setCurrentForm(id)} />
      ) : (
        <Form formId={currentForm} closeFormCB={closeForm} />
      )}
    </AppContainer>
  );
}

export default App;
