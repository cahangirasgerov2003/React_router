import React from "react";

import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <header>
        <h1>React Router</h1>
        <nav>
          <NavLink to="" className="me-3">
            Home
          </NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
