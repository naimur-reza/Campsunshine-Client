import React from "react";
import { Link } from "react-router-dom";

const Avatar = ({ image, setMenuOpen, menuOpen }) => {
  console.log(image);
  return (
    <div className="cursor-pointer ml-4 mt-3 lg:ml-0 lg:mt-0">
      {image ? (
        <img
          referrerPolicy="no-referrer"
          onClick={() => setMenuOpen(!menuOpen)}
          className="h-9 w-9 rounded-full"
          src={image}
          alt="user"
        />
      ) : (
        <Link className="text-white dark:text-gray-300" to="/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Avatar;
