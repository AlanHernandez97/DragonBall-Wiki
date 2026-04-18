import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Planets from "./pages/Planets";
import { Layout } from "./src/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // El Layout envuelve a las demás
    children: [
      {
        index: true, // Esto hace que sea la ruta por defecto en "/"
        element: <Home />,
      },
      {
        path: "planets", // Se convierte en "/planets"
        element: <Planets />,
      },
    ],
  },
]);