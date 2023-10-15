import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Common Components/Header Component/Header";
import Sidebar from "./Common Components/Sidebar Component/Sidebar";
const Layout = () => {
  return (
    <>
      <div className="grid grid-cols-12">
        {/* Sidebar*/}
        <div className="col-span-4">
          <Sidebar />
        </div>
        {/* Main Content*/}
        <div className="col-span-8">
          {/* Header */}
          <Header />
          {/*Dashboard content*/}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
