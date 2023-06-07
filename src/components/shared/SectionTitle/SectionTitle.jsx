import React from "react";
import logo from "../../../assets/logo.png";
const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="space-y-4 text-center">
      <h1 className="font-bold text-3xl ">{title}</h1>
      <img className="mx-auto w-14" src={logo} alt="" />
      <p className="text-gray-600">{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
