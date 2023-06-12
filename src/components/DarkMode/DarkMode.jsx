import React, { useEffect, useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { LuSunMoon } from "react-icons/lu";
const DarkMode = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    const darkModeEnabled = storedDarkMode === "true";
    setToggle(darkModeEnabled);

    if (darkModeEnabled) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleToggle = () => {
    const newToggle = !toggle;
    setToggle(newToggle);

    if (newToggle) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", newToggle.toString());
  };
  return (
    <div className="lg:pl-10   flex justify-end">
      {!toggle ? (
        <BsMoonStarsFill
          onClick={handleToggle}
          size={24}
          className="cursor-pointer text-black/90 "
        />
      ) : (
        <LuSunMoon
          onClick={handleToggle}
          size={24}
          className="cursor-pointer text-yellow-400"
        />
      )}
    </div>
  );
};

export default DarkMode;
