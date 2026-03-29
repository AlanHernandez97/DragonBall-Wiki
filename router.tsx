import { createBrowserRouter } from "react-router";
import Home from "./pages/Home"
import Characters from "./pages/Characters";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/characters",
    element: <Characters />,
  },
]);