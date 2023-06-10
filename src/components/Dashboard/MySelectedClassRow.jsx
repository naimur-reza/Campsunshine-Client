import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

const MySelectedClassRow = ({ classInfo, handleRemove, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { className, image, teacher, price, status, name } = classInfo;

  return (
    <>
      <tr>
        <td className="px-2">{index + 1}.</td>
        <td>
          <div className="bg-gray-100 w-fit p-2 rounded-lg my-1">
            <img src={image} className="w-36 h-20 my-1 rounded-md " alt="" />
            <h1 className="text-sm">{className}</h1>
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

        <td className="px-6 py-4 whitespace-nowrap">${price}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <button
            disabled={status === "approved"}
            // onClick={() => handleApprove(_id)}
            className="bg-yellow-500 p-3 hover:bg-yellow-600 transition-all rounded-full ">
            <MdPayment size={19} color="white" />
          </button>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <button
            onClick={() => openModal(true)}
            className="bg-red-500 p-3 hover:bg-red-600 transition-all rounded-full ">
            <FaTrash size={19} color="white" />
          </button>
        </td>
      </tr>

      {/* <FeedbackModal isOpen={isOpen} closeModal={closeModal} /> */}
    </>
  );
};

export default MySelectedClassRow;
