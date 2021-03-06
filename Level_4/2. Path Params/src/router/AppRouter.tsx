import { useRoutes } from "raviger";
import AppContainer from "../AppContainer";
import Home from "../components/Home";
import App from "../App";

const routes = {
  "/": () => <Home />,
  "/form": () => <App />,
};

export default function AppRouter() {
  const routeResult = useRoutes(routes);
  return (
    <AppContainer>{routeResult}</AppContainer> || (
      <div className="h-screen flex items-center"> </div>
    )
  );
}
