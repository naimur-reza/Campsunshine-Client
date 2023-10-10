import React from "react";
import { ScrollRestoration } from "react-router-dom";

const Spinner2 = () => {
  return (
    <>
      <ScrollRestoration />
      <div className="min-h-[100vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 dark:border-white border-black rounded-full border-dashed animate-spin" />
      </div>
    </>
  );
};

export default Spinner2;
