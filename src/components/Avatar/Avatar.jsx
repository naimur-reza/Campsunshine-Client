import React from "react";
import { Link } from "react-router-dom";

const Avatar = ({ image, setMenuOpen, menuOpen }) => {
  return (
    <div className="cursor-pointer">
      {image ? (
        <img
          onClick={() => setMenuOpen(!menuOpen)}
          className="h-9 w-9"
          src={image}
          alt="user"
        />
      ) : (
        <Link className="text-white" to="/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Avatar;
