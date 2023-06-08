import logo from "../../../assets/logo.png";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const Sidebar = () => {
  const [isActive, setIsActive] = useState(true);
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
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
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden  border-r border-gray-300 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}>
        <div className="cursor-pointer flex items-center gap-3">
          <img className="w-auto   h-10 " src={logo} alt="" />
          <p className="mt-1">CAMPSUNSHINE</p>
        </div>

        {/* Add other sidebar content here */}
      </aside>
    </>
  );
};

export default Sidebar;
