import React from "react";

import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Loading from "../components/Loading";

const MainLayout = () => {
  const navigation = useNavigation();
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
        {navigation.state === "loading" && <Loading />}
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
