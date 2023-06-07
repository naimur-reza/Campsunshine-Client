import React from "react";
import logo from "../../../assets/logo.png";
const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="space-y-5 text-center">
      <h1 className="fon-bold ">{title}</h1>
      <img className="mx-auto" src={logo} alt="" />
      <p className="text-gray-600">{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
