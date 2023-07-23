// / -> <Home />
// /home -> <Home />
// /about -> <About />
// /products -> <Products />

import React from "react";

// Import Pages
import Home from "../pages/Home";
import About from "../pages/About";

// Import Router
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
