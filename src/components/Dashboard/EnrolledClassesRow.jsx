import React from "react";
import { TbListDetails } from "react-icons/tb";

const EnrolledClassesRow = ({ classInfo, index }) => {
  const { image, className, name, teacher, price, time, paymentIntentId } =
    classInfo;
  return (
    <tr>
      <td className="px-3">{index + 1}.</td>
      <td>
        <div className="  dark:bg-transparent w-fit p-2 rounded-lg my-1">
          <img
            src={image}
            className="w-36 object-cover h-28 my-1 rounded-md "
            alt=""
          />
          <h1 className="text-xs">{className}</h1>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">{paymentIntentId}</td>
      <td className="text-sm">{time}</td>
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
