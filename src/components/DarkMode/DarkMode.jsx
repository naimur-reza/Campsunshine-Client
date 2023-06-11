import React, { useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { LuSunMoon } from "react-icons/lu";
const DarkMode = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    if (toggle) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className="lg:pl-10   flex justify-end">
      {!toggle ? (
        <BsMoonStarsFill
          onClick={handleToggle}
          size={24}
          className="cursor-pointer"
        />
      ) : (
        <LuSunMoon
          onClick={handleToggle}
          size={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default DarkMode;
