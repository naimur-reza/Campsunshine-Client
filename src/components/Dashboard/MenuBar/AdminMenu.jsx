import React from "react";
import { NavLink } from "react-router-dom";
import { SiGoogleclassroom } from "react-icons/si";
import { FiUsers } from "react-icons/fi";
const AdminMenu = () => {
  return (
    <div className="uppercase space-y-4 ">
      <NavLink
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  gap-3 transition-colors duration-200 transform  hover:bg-teal-400   hover:text-white ${
            isActive ? "  bg-teal-400 text-white" : "text-gray-600"
          }`
        }
        to={"/dashboard/manage-classes"}>
        <SiGoogleclassroom size={20} />
        Manage Classes
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5 gap-3  transition-colors duration-200 transform  hover:bg-teal-400   hover:text-white ${
            isActive ? " bg-teal-400 text-white" : "text-gray-600"
          } `
        }
        to={"/dashboard/manage-users"}>
        <FiUsers size={20} />
        Manage Users
      </NavLink>
    </div>
  );
};

export default AdminMenu;
