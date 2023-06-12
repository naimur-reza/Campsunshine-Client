import React from "react";
import { TbListDetails } from "react-icons/tb";

const EnrolledClassesRow = ({ classInfo, index }) => {
  const { image, className, name, teacher, price } = classInfo;
  return (
    <tr>
      <td className="px-3">{index + 1}.</td>
      <td>
        <div className="bg-gray-100 dark:bg-transparent w-fit p-2 rounded-lg my-1">
          <img
            src={image}
            className="w-36 object-cover h-28 my-1 rounded-md "
            alt=""
          />
          <h1 className="text-sm">{className}</h1>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-10 h-10 object-cover rounded-full"
              src={teacher?.image}
              alt="User Avatar"
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium dark:text-gray-200 text-gray-900">
              {name}
            </div>
            <div className="text-sm ">{teacher?.email}</div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">${price}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <button className="bg-teal-500 p-3 hover:bg-teal-600 transition-all rounded-full ">
          <TbListDetails size={19} color="white" />
        </button>
      </td>
    </tr>
  );
};

export default EnrolledClassesRow;
