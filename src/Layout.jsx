import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Common Components/Header Component/Header";
import Sidebar from "./Common Components/Sidebar Component/Sidebar";
const Layout = () => {
  return (
    <>
      <div className="flex flex-row bg-[#f5f6f8] max-[992px]:px-4 ">
        {/*Left Side Bar */}

        {/* Sidebar */}
        <Sidebar />

        {/*Right Main section*/}
        <div className="w-full rounded-[25px]  z-0  h-fit m-7">
          {/*Right TopBar*/}
          <Header />

          {/* OTHER CHILDREN WILL LOAD HERE */}

          <div className="px-6 py-5 md:px-14">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
