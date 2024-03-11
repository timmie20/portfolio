import React from "react";
import { Outlet } from "react-router-dom";
import DynamicIsland from "./DynamicIsland";

const Layout = () => {
  return (
    <>
      <DynamicIsland />
      <Outlet />
    </>
  );
};

export default Layout;
