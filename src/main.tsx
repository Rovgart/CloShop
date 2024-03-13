import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/root.tsx";
import ErrorPage from "./ErrorPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./routes/SignUp/SignUp.tsx";
import Electronics from "./routes/Categories/Electronics.tsx";
import Jewelery from "./routes/Categories/Jewelery.tsx";
import Mens_Clothing from "./routes/Categories/Men's Clothing.tsx";
import WomenClothing from "./routes/Categories/Women's Clothing.tsx";
import loader from "./routes/Card/loader.ts";
import productFetcher from "./API/productFetcher.ts";
import { categoriesFetcher } from "./API/categoriesFetcher.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: categoriesFetcher,
  },
  {
    path: "/SignUp/SignUp",
    element: <SignUp />,
  },
  {
    path: "/Categories/jewelery",
    element: <Jewelery />,
    loader: (params) => loader("jewelery", params),
  },
  {
    path: "/Categories/electronics",
    element: <Electronics />,
    loader: (params) => loader("electronics", params),
  },
  {
    path: "/Categories/men's clothing",
    element: <Mens_Clothing />,
    loader: (params) => loader("men's clothing", params),
  },
  {
    path: "/Categories/women's clothing",
    element: <WomenClothing />,
    loader: (params) => loader("women's clothing", params),
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
