import { useRoutes } from "raviger";
import AppContainer from "../AppContainer";
import Home from "../components/Home";
import App from "../App";
import Form from "../components/Form";
import ListForms from "../components/ListForms";
import PreviewForm from "../components/PreviewForm";

const routes = {
  "/": () => <Home />,
  "/form": () => <ListForms />,
  "/form/:id": ({ id }: { id: string }) => <Form formId={Number(id)} />,
  "/form/:id/preview": ({ id }: { id: string }) => {
    console.log("Loading Preview");
    return <PreviewForm formId={Number(id)} />;
  },
  "/form/:id/preview/:questionId": ({
    id,
    questionId,
  }: {
    id: string;
    questionId: string;
  }) => <PreviewForm formId={Number(id)} questionId={Number(questionId)} />,
  "*": () => <div>404</div>,
};

export default function AppRouter() {
  const routeResult = useRoutes(routes);
  console.log("Rendering", routeResult);
  return (
    <AppContainer>{routeResult}</AppContainer> || (
      <div className="h-screen flex items-center"> </div>
    )
  );
}
