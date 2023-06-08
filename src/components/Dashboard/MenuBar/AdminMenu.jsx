import React from "react";
import { NavLink } from "react-router-dom";
import { SiGoogleclassroom } from "react-icons/si";
import { FiUsers } from "react-icons/fi";
const AdminMenu = () => {
  return (
    <div className="uppercase space-y-4 ">
      <NavLink
        className={`${({ isActive }) =>
          isActive
            ? "active"
            : "flex items-center gap-3 "} flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform
       `}
        to={"/dashboard/manage-classes"}>
        <SiGoogleclassroom size={24} />
        Manage Classes
      </NavLink>
      <NavLink
        className={`${({ isActive }) =>
          isActive
            ? "active"
            : " "} text-gray-600 flex items-center gap-3 px-4 py-2 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform
       `}
        to={"/dashboard/manage-users"}>
        <FiUsers size={24} />
        Manage Users
      </NavLink>
    </div>
  );
};

export default AdminMenu;
