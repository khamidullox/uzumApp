import React from "react";
import { Outlet } from "react-router-dom";
import Novbar from "../components/Novbar";

function MainLayout() {
  return (
    <div className="flex ">
      <Novbar />
      <main className="aligen-content">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
