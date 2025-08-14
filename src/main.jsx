import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/about" replace={true} />
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "experience",
        element: <ExperiencePage />,
      },
      {
        path: "*", // Catch-all route for undefined URLs
        element: <Navigate to="/about" replace={true} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
