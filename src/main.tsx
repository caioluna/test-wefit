import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Catalog } from "./pages/Catalog";
import { SuccessPage } from "./pages/SuccessPage";

import { GlobalStyle } from "./theme/global";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: "/",
        element: <Catalog />,
        errorElement: <div>404 Not Found</div>,
      },
      {
        path: "/search",
        element: <Catalog />,
        errorElement: <div>404 Not Found</div>,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <div>404 Not Found</div>,
      },
      {
        path: "/success",
        element: <SuccessPage />,
        errorElement: <div>404 Not Found</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
