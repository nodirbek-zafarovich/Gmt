import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import RootLayout from "./Layout/RootLayout";

// pages
import Home from "./Pages/Home";
import Catalog from "./Pages/Catalog";
import Korzina from "./Pages/Korzina";
import Favorite from "./Pages/Favorite";
import Compare from "./Pages/Compare";

import { Toaster } from "react-hot-toast";
import ProductDetail from "./Pages/ProductDetail";
import Manufactures from "./Pages/Manufactures";
import CatalogLayout from "./Layout/CatalogLayout";
import CabinetKey from "./Pages/CabinetKey";
import Uslugi from "./Pages/Uslugi";
import Aksii from "./Pages/Aksii";
import Contact from "./Pages/Contact";
import Delivery from "./Pages/Delivery";
import Payment from "./Pages/Payment";
import Guarantees from "./Pages/Guarantees";
import Blog from "./Pages/Blog";
import AboutCompanyNews from "./components/AboutCompanyNews";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Manufactures />,
      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: "catalog",
          element: <CatalogLayout />,
          children: [
            {
              index: true,
              element: <Catalog />,
            },
            {
              path: ":id",
              element: <ProductDetail />,
            },
          ],
        },
        {
          path: "korzina",
          element: <Korzina />,
        },
        {
          path: "favorite",
          element: <Favorite />,
        },
        {
          path: "compare",
          element: <Compare />,
        },
        {
          path: "cabinetKey",
          element: <CabinetKey />,
        },
        {
          path: "uslugi",
          element: <Uslugi />,
        },
        {
          path: "aksii",
          element: <Aksii />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about",
          element: <AboutCompanyNews />,
        },

        {
          path: "delivery",
          element: <Delivery />,
        },
        {
          path: "payment",
          element: <Payment />,
        },
        {
          path: "guarantees",
          element: <Guarantees />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
};

export default App;
