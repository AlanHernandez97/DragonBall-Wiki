import { createBrowserRouter } from "react-router";
import Home from "./pages/Home"
import Character from "./pages/Characters";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/character/:name",
    element: <Character />,
  },
]);