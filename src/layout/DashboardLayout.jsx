import React from "react";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="relative dark:text-gray-100 dark:bg-gradient-to-t dark:from-black dark:via-sky-900 dark:to-black min-h-screen md:flex">
      <Sidebar />
      <div className="flex-1  md:ml-64">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
