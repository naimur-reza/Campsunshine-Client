import { updateCurrentUser } from "firebase/auth";
import React, { useContext } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { updateUserRole } from "../../api/auth";

const ManageUsersRow = ({ user, refetch }) => {
  const { _id, name, email, role, image } = user || {};

  const handleAdmin = (email) => {
    updateUserRole(email, "admin").then((res) => {
      refetch();
      console.log(res);
    });
  };
  const handleInstructor = (email) => {
    updateUserRole(email, "instructor").then((res) => {
      refetch();
      console.log(res);
    });
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-10 h-10 rounded-full"
              src={image}
              alt="User Avatar"
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{name}</div>
            <div className="text-sm ">{email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{role ? role : "Student"}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <button
          onClick={() => handleAdmin(email)}
          className="bg-emerald-400 px-5 py-3 hover:bg-emerald-500 transition-all rounded-md ">
          <GrUserAdmin size={20} color="" />
        </button>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <button
          onClick={() => handleInstructor(email)}
          className="bg-cyan-400 px-5 py-3 hover:bg-cyan-500 transition-all rounded-md ">
          <FaChalkboardTeacher size={20} color="white" />
        </button>
      </td>
    </tr>
  );
};

export default ManageUsersRow;