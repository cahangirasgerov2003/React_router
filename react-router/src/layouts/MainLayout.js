import React from "react";

import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <header className="container">
        <h1>React Router</h1>
        <nav>
          <NavLink to="" className="me-3">
            Home
          </NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="users">Users</NavLink>
        </nav>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
