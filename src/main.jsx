import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ModalContextProvider } from "./context/modalContext.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "../src/pages/AboutUs.jsx";
import MainLayout from "./pages/MainLayout.jsx";
import ModelsPage from "./pages/ModelsPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import SalonsPage from "./pages/SalonsPage.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/models",
        element: <ModelsPage />,
      },
      {
        path: "/salons",
        element: <SalonsPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
