import React from "react";
import { NavLink } from "react-router-dom";
import { SiGoogleclassroom } from "react-icons/si";
import { FiUsers } from "react-icons/fi";
const InstructorMenu = () => {
  return (
    <div className="uppercase space-y-2 ">
      <NavLink
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3 gap-3 dark:text-gray-200  transition-colors duration-200 transform  hover:bg-teal-400   hover:text-white ${
            isActive ? " bg-teal-400 text-white" : "text-gray-600"
          } `
        }
        to={"/dashboard/my-classes"}>
        <FiUsers size={20} />
        My classes
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3  gap-3 dark:text-gray-200 transition-colors duration-200 transform  hover:bg-teal-400   hover:text-white ${
            isActive ? "  bg-teal-400 text-white" : "text-gray-600"
          }`
        }
        to={"/dashboard/add-class"}>
        <SiGoogleclassroom size={20} />
        Add A Class
      </NavLink>
    </div>
  );
};

export default InstructorMenu;
