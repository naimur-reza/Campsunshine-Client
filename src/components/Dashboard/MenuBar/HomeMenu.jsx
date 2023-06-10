import React from "react";
import { Link } from "react-router-dom";

import { GiGraduateCap } from "react-icons/gi";
import { FaChalkboardTeacher, FaHome } from "react-icons/fa";
const HomeMenu = () => {
  return (
    <div className="uppercase space-y-4 pb-4">
      <Link
        className={`flex items-center px-4 py-2 mt-5 gap-3  transition-colors duration-200 transform  hover:bg-teal-400   hover:text-white `}
        to={"/"}>
        <FaHome size={20} />
        Home
      </Link>
      <Link
        className={`flex items-center px-4 py-2 mt-5 gap-3  transition-colors duration-200 transform  hover:bg-teal-400   hover:text-white `}
        to={"/instructors"}>
        <GiGraduateCap size={20} />
        Instructors
      </Link>
      <Link
        className={`flex items-center px-4 py-2 mt-5 gap-3  transition-colors duration-200 transform  hover:bg-teal-400   hover:text-white `}
        to={"/classes"}>
        <FaChalkboardTeacher size={20} />
        Classes
      </Link>
    </div>
  );
};

export default HomeMenu;
