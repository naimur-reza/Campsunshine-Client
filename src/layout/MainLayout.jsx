import React from "react";
import Header from "../components/shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="dark:bg-gradient-to-t dark:from-black dark:via-sky-900 dark:to-black">
        <Header />
        <div className="min-h-[calc(100vh-290px)]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
