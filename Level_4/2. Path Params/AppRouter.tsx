import { useRoutes } from "raviger";
import { Form } from "../components/Form";
import Home from "../components/Home";

const routes = {
  "/": () => <Home openFormCB={(_) => {}} />,
  "/form": () => <Form closeFormCB={() => {}} formId={Number(new Date())} />,
};

export function AppRouter() {
  const routerResult = useRoutes(routes);

  return routerResult;
}
