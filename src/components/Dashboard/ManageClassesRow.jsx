import React, { useContext } from "react";
import { FaChalkboardTeacher, FaTrash } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";

const ManageClassesRow = ({ classInfo, index }) => {
  const { className, email, image, name, price, seats, status, teacher } =
    classInfo;
  return (
    <tr>
      <td>
        <div className="bg-gray-100 w-fit p-2 rounded-lg my-1">
          <img src={image} className="w-36 h-20 my-1 rounded-md " alt="" />
          <h1>{className}</h1>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-10 h-10 rounded-full"
              src={teacher?.image}
              alt="User Avatar"
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{name}</div>
            <div className="text-sm ">{teacher?.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{seats}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">${price}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">{status}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <button className="bg-red-400 p-3 hover:bg-red-500 transition-all rounded-full ">
          <FaTrash size={18} color="white" />
        </button>
      </td>
    </tr>
  );
};

export default ManageClassesRow;
