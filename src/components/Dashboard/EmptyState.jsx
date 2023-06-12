import React from "react";
import { Link } from "react-router-dom";

const EmptyState = ({ title, route, linkText }) => {
  return (
    <div className="text-center pt-52">
      <h1 className="text-3xl font-semibold "> {title}</h1>
      <Link
        className="font-semibold mr-3 bg-teal-500 px-5 py-3 rounded-lg inline-block mt-3 hover:bg-teal-600 hover:shadow-lg transition duration-200 text-white"
        to={"/"}>
        Back To Home
      </Link>
      <Link
        className="font-semibold bg-teal-500 px-5 py-3 rounded-lg inline-block mt-3 hover:bg-teal-600 hover:shadow-lg transition duration-200 text-white"
        to={route}>
        {linkText}
      </Link>
    </div>
  );
};

export default EmptyState;
