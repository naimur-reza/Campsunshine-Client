import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const MenuItems = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut().then(() => {
      navigate("/login");
    });
  };
  return (
    <div className="bg-gray-800 text-white font-medium absolute top-14 right-0 w-fit px-3 py-4 rounded-md space-y-2">
      <ul>
        <li>
          <Link
            className="hover:bg-gray-200 block hover:text-black px-2 py-2 rounded-md transition-all"
            to={"/dashboard"}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleLogout()}
            className="hover:bg-gray-200 block hover:text-black px-2 py-2 rounded-md transition-all">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
