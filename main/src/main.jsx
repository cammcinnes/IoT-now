import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import CreateProject from "./pages/CreateProject";
import ErrorPage from "./pages/ErrorPage";
// import Project from "./pages/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />
  },
  {
    path: "create",
    element: <CreateProject />,
    errorElement: <ErrorPage />
  },
  // {
  //   path: "project",
  //   element: <Project />,
  //   errorElement: <ErrorPage />
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);