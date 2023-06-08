import React from "react";
import { ImSpinner10 } from "react-icons/im";
const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[100vh] ">
      <ImSpinner10 className="text-5xl animate-spin text-red-600" />
    </div>
  );
};

export default Spinner;
