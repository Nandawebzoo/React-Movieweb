import React from "react";
import { Outlet } from "react-router-dom";
import MoveflixNavbar from "./navbar";

function AppShell() {
  return (
    <>
      <MoveflixNavbar />
      <Outlet />
    </>
  );
}

export default AppShell;
