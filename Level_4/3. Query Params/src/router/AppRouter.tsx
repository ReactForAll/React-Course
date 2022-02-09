import { useRoutes } from "raviger";
import App from "../App";
import About from "../components/About";
import { Form } from "../components/Form";
import Home from "../components/Home";

const routes = {
  "/": () => <Home />,
  "/about": () => <About />,
  "/form/:formId": ({ formId }: { formId: string }) => (
    <Form formId={Number(formId)} />
  ),
};

export default function AppRouter() {
  const routeResult = useRoutes(routes);
  return routeResult;
}
