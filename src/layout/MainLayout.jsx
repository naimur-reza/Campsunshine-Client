import React from "react";
import Header from "../components/shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-290px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
