import { updateCurrentUser } from "firebase/auth";
import React, { useContext } from "react";
import { FaChalkboardTeacher, FaTrash } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { removeUser, updateUserRole } from "../../api/auth";
import { SiNano } from "react-icons/si";
import Spinner from "../shared/Spinner/Spinner";
import { AuthContext } from "../../providers/AuthProvider";

const ManageUsersRow = ({ user, refetch, setLoading, index }) => {
  const { _id, name, email, role, image } = user || {};

  const handleAdmin = (email) => {
    setLoading(true);
    updateUserRole(email, "admin").then((res) => {
      console.log(res);
      setLoading(false);
      refetch();
    });
  };
  const handleInstructor = (email) => {
    setLoading(true);
    updateUserRole(email, "instructor").then((res) => {
      console.log(res);
      refetch();
      setLoading(false);
    });
  };
  const handleRemove = (email) => {
    setLoading(true);
    removeUser(email).then((res) => {
      refetch();
      setLoading(false);
      console.log(res);
    });
  };

  return (
    <tr>
      <td>{index + 1}.</td>
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
          disabled={role === "admin"}
          onClick={() => handleAdmin(email)}
          className="bg-emerald-500 p-3 hover:bg-emerald-500 transition-all rounded-full ">
          <GrUserAdmin size={18} color="" />
        </button>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <button
          disabled={role === "instructor"}
          onClick={() => handleInstructor(email)}
          className="bg-cyan-400 p-3 hover:bg-cyan-500 transition-all rounded-full ">
          <FaChalkboardTeacher size={18} color="white" />
        </button>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <button
          onClick={() => handleRemove(email)}
          className="bg-red-400 p-3 hover:bg-red-500 transition-all rounded-full ">
          <FaTrash size={18} color="white" />
        </button>
      </td>
    </tr>
  );
};

export default ManageUsersRow;
