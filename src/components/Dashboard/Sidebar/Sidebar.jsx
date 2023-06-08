import logo from "../../../assets/logo.png";
import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import AdminMenu from "../MenuBar/AdminMenu";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-hot-toast";
const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(true);
  const { user, logOut } = useContext(AuthContext);
  const handleToggle = () => {
    setIsActive(!isActive);
  };
  const handleLogOut = () => {
    logOut().then((res) => {
      toast.success("Logout Successful");
      navigate("/login");
    });
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100  text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            {/* <Logo /> */}

            <img className="w-auto h-10 sm:h-7" src={logo} alt="" />
          </div>
        </div>
        <button
          onClick={handleToggle}
          className=" p-4 focus:outline-none focus:bg-gray-200">
          {!isActive ? (
            <ImCross className="h-5 w-5" />
          ) : (
            <FaBars className="h-5 w-5" />
          )}
        </button>
      </div>
      {/* <aside className="flex  flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-gray-100 "> */}
      <aside
        className={`z-10 md:fixed flex flex-col  overflow-x-hidden  border-r border-gray-300 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}>
        <Link to={"/"} className="cursor-pointer flex items-center gap-3">
          <img className="w-auto   h-10 " src={logo} alt="" />
          <p className="mt-1">CAMPSUNSHINE</p>
        </Link>
        <hr />
        {/*Todo: dynamic role to changing the menus*/}
        <AdminMenu />
        <div className="">
          <hr />
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-teal-400 hover:text-white ${
                isActive ? "bg-teal-400 text-white" : "text-gray-600"
              }`
            }>
            <FcSettings className="w-5 h-5" />

            <span className="mx-4 font-medium">Profile</span>
          </NavLink>
          <button
            onClick={handleLogOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-red-500 hover:text-white transition-colors duration-300 transform">
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
