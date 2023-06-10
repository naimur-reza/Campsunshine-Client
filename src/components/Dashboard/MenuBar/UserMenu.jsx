import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const UserMenu = () => {
  const { user, role } = useContext(AuthContext);
  return (
    <div className="space-y-1 text-sm">
      <img
        className="mx-auto rounded-full w-20 h-20 sm:w-24 sm:h-24"
        src={user.photoURL}
        alt={user}
      />
      <p>{user.displayName}</p>
      <p className="hover:underline cursor-pointer">{user.email}</p>
      <p className="bg-blue-400 w-fit py-0.5 px-2  rounded-full text-white">
        {role ? role : "Student"}
      </p>
    </div>
  );
};

export default UserMenu;
