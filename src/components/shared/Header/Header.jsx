import { useContext, useState } from "react";
import Avatar from "../../Avatar/Avatar";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import MenuItems from "./MenuItems";
import logo from "../../../assets/logo.png";
import DarkMode from "../../DarkMode/DarkMode";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { user } = useContext(AuthContext);
  console.log(user);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="z-10 w-full dark:bg-transparent border-b border-gray-300/60 dark:border-gray-300/40   backdrop-blur-sm dark:text-white/90  fixed   ">
      <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between ">
          <Link to={"/"}>
            <div className="flex items-center gap-2">
              <img className="w-12 h-12" src={logo} alt="" />
              <p className=" text-xl font-semibold bg-gradient-to-r from-teal-500 via-red-500  to-yellow-500 text-transparent bg-clip-text  uppercase cursor-pointer ">
                CampSunshine
              </p>
            </div>
          </Link>

          {/* Mobile menu button */}
          <div className="flex  lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className=" text-white   hover:text-gray-200  dark:text-white  focus:outline-none focus:text-gray-300  "
              aria-label="toggle menu">
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Home, Instructors, Classes, Dashboard */}
        {/* Mobile Menu */}
        <div
          className={`absolute text-black  tracking-wider inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out dark:text-white bg-white/70  lg:dark:bg-transparent dark:bg-black/80  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          }`}
          aria-hidden={isOpen ? "false" : "true"}>
          <div className="flex flex-col space-y-3 lg:space-y-0 md:flex-row md:mx-6">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-teal-300 ms-4 underline underline-offset-4"
                  : "ms-4"
              }>
              Home
            </NavLink>
            <NavLink
              to={"/instructors"}
              className={({ isActive }) =>
                isActive
                  ? "text-teal-300 ms-4 underline underline-offset-4"
                  : "ms-4"
              }>
              Instructors
            </NavLink>
            <NavLink
              to={"/classes"}
              className={({ isActive }) =>
                isActive
                  ? "text-teal-300 ms-4 underline underline-offset-4"
                  : "ms-4"
              }>
              Classes
            </NavLink>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) =>
                isActive
                  ? "text-teal-300 ms-4 underline underline-offset-4"
                  : "ms-4"
              }>
              Dashboard
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "text-teal-530 ms-4  underline underline-offset-4"
                  : "ms-4"
              }>
              About
            </NavLink>
          </div>
          <Avatar
            setMenuOpen={setMenuOpen}
            menuOpen={menuOpen}
            image={user?.photoURL}
          />
          {menuOpen && <MenuItems />}
          <DarkMode />
        </div>
      </div>
    </nav>
  );
}

export default Header;
