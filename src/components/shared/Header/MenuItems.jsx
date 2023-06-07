import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const MenuItems = () => {
  const { logOut } = useContext(AuthContext);
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
            className="hover:bg-gray-200 block hover:text-black px-2 py-2 rounded-md transition-all"
            to={"/login"}
            onClick={() => logOut()}>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
