import React from "react";
import { Outlet } from "react-router-dom";

export const UsersLayout = () => {
  return (
    <div className="usersLayout">
      <h2>Users:</h2>
      <Outlet />
    </div>
  );
};
