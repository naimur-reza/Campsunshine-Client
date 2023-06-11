import React from "react";
import logo from "../../../assets/logo.png";
const SectionTitle = ({ title, subTitle, color }) => {
  return (
    <div className="space-y-3 text-center">
      <h1
        className={`${
          color ? color : "text-gray-800"
        } font-bold  text-xl  lg:text-3xl `}>
        {title}
      </h1>
      <img className="mx-auto w-14" src={logo} alt="" />
      <p className={color ? color : "text-gray-600"}>{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
