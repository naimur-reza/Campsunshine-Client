import { useContext, useState } from "react";
import Avatar from "../../Avatar/Avatar";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import MenuItems from "./MenuItems";
import logo from "../../../assets/logo.png";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { user } = useContext(AuthContext);
  console.log(user);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="z-10 w-full  fixed   ">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to={"/"}>
              <img className="w-12 h-12" src={logo} alt="" />
            </Link>
            <p className=" text-xl font-semibold text-yellow-400 uppercase ">
              CampSunshine
            </p>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
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

        {/* Mobile Menu */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          }`}
          aria-hidden={isOpen ? "false" : "true"}>
          <div className="flex flex-col md:flex-row md:mx-6">
            <NavLink
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#">
              Home
            </NavLink>
            <NavLink
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#">
              Shop
            </NavLink>
            <NavLink
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#">
              Contact
            </NavLink>
            <NavLink
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#">
              About
            </NavLink>
          </div>
          <Avatar
            setMenuOpen={setMenuOpen}
            menuOpen={menuOpen}
            image={user?.photoURL}
          />
          {menuOpen && <MenuItems />}
        </div>
      </div>
    </nav>
  );
}

export default Header;
