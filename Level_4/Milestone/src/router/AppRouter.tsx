import { useRoutes } from "raviger";
import AppContainer from "../AppContainer";
import Home from "../components/Home";
import App from "../App";
import Form from "../components/Form";
import ListForms from "../components/ListForms";

const routes = {
  "/": () => <Home />,
  "/form": () => <ListForms />,
  "/form/:id": ({ id }: { id: string }) => <Form formId={Number(id)} />,
};

export default function AppRouter() {
  const routeResult = useRoutes(routes);
  return (
    <AppContainer>{routeResult}</AppContainer> || (
      <div className="h-screen flex items-center"> </div>
    )
  );
}
