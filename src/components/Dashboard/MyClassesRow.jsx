import React, { useContext, useState } from "react";
import { FaCross, FaPen, FaTrash } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { IoIosChatbubbles } from "react-icons/io";
import { updateClassStatus } from "../../api/classes";
import { toast } from "react-hot-toast";
import FeedbackModal from "../Modal/FeedbackModal";
import UpdateClassModal from "../Modal/UpdateClassModal";
const MyClassesRow = ({ classInfo, index, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    _id,
    className,
    image,
    name,
    price,
    seats,
    status,
    teacher,
    enrolled,
  } = classInfo;
  const openModal = () => {
    setIsOpen(!isOpen);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <tr>
        <td className="text-center">{index + 1}.</td>
        <td className="pr-2">
          <div className="bg-gray-100 w-fit p-2 rounded-lg my-1">
            <img src={image} className="w-36 h-20 my-1 rounded-md " alt="" />
            <h1 className="text-sm">{className}</h1>
          </div>
        </td>
        <td className="pl-5">
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
        <td className="text-center">
          <div className="text-sm text-gray-900">{seats}</div>
        </td>
        <td className="text-center ">${price}</td>
        <td>
          <span
            className={`${
              (status === "approved" && "bg-green-500") ||
              (status === "denied" && "bg-red-500") ||
              "bg-black/50"
            } px-2 py-1 text-white rounded-full text-xs mx-4  whitespace-nowrap `}>
            {status ? status : "pending"}
          </span>
        </td>
        <td className="text-center">{!enrolled ? 0 : enrolled} </td>
        <td className="text-center">
          <button
            disabled={status === "approved"}
            onClick={() => openModal(true)}
            className="bg-gray-500 p-3 hover:bg-gray-600 transition-all rounded-full ">
            <FaPen size={19} color="white" />
          </button>
        </td>
        <td className="text-center">
          <button
            onClick={() => openModal(true)}
            className="bg-cyan-500 p-3 hover:bg-cyan-600 transition-all rounded-full ">
            <IoIosChatbubbles size={19} color="white" />
          </button>
        </td>
      </tr>

      <UpdateClassModal
        classInfo={classInfo}
        id={_id}
        isOpen={isOpen}
        closeModal={closeModal}
        refetch={refetch}
      />
    </>
  );
};

export default MyClassesRow;
