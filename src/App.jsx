import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Layout from "./layouts/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/movies",
        element: <Movies></Movies>,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
