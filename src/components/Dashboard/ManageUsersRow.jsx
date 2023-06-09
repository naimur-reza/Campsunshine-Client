import React, { useContext } from "react";

const ManageUsersRow = ({ user }) => {
  const { name, email, role, image } = user || {};
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
        <div className="text-sm text-gray-900">{role ? role : Student}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span>Btn</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span>Btn</span>
      </td>
    </tr>
  );
};

export default ManageUsersRow;
