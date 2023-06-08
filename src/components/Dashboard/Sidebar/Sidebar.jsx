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
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}>
        <div className="cursor-pointer flex items-center gap-3">
          <img className="w-auto hidden md:block  h-10 " src={logo} alt="" />
          <p className="mt-1">CAMPSUNSHINE</p>
        </div>

        <div className="relative mt-6">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="none">
              <path
                d="M21 21L15 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 text-sm bg-gray-100 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus:border-indigo-500 focus:outline-none focus:ring"
            placeholder="Search..."
          />
        </div>
        {/* Add other sidebar content here */}
      </aside>
    </>
  );
};

export default Sidebar;
