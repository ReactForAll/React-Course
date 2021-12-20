import { useRoutes } from "raviger";
import AppContainer from "../components/AppContainer";
import Form from "../components/Form";
import Home from "../components/Home";

const routes = {
  "/": () => <Home />,
  "/form": () => <Form />,
};

export default function AppRouter() {
  const routeResult = useRoutes(routes);
  return (
    <AppContainer>{routeResult}</AppContainer> || (
      <div className="h-screen flex items-center"> </div>
    )
  );
}
