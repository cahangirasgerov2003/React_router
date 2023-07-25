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
import Contact from "../pages/helps/Contact";
import { Users, usersLoading } from "../pages/Users";
import { UsersDetails, usersDetailsLoader } from "../pages/UsersDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
