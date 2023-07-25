import React from "react";

// Import Pages
import Home from "../pages/Home";
import About from "../pages/About";

// Import Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { HelpLayout } from "../layouts/HelpLayout";
import { UsersLayout } from "../layouts/UsersLayout";
import Faq from "../pages/helps/Faq";
import Contact, { contactAction } from "../pages/helps/Contact";
import { Users, usersLoading } from "../pages/usersInfo/Users";
import {
  UsersDetails,
  usersDetailsLoader,
} from "../pages/usersInfo/UsersDetails";
import { NotFound } from "../pages/NotFound";
import { UsersError } from "../pages/UsersError";
import { GlobalError } from "../pages/GlobalError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <GlobalError />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "help",
        element: <HelpLayout />,
        children: [
          {
            path: "contact",
            element: <Contact />,
            action: contactAction,
          },
          {
            path: "faq",
            element: <Faq />,
          },
        ],
      },

      {
        path: "users",
        element: <UsersLayout />,
        errorElement: <UsersError />,
        children: [
          {
            index: true,
            element: <Users />,
            loader: usersLoading,
          },
          {
            path: ":userID",
            element: <UsersDetails />,
            loader: usersDetailsLoader,
          },
        ],
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
