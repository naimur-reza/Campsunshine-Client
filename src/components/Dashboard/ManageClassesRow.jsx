import { useState } from "react";

import { BsCheckLg } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

import { BiCommentCheck, BiCommentDetail } from "react-icons/bi";

import FeedbackModal from "../Modal/FeedbackModal";
const ManageClassesRow = ({
  classInfo,
  handleApprove,
  handleDeny,
  index,
  refetch,
}) => {
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
    feedback,
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
        <td>{index + 1}.</td>
        <td>
          <div className="bg-gray-100 w-fit p-2 rounded-lg my-1">
            <img src={image} className=" h-32 w-36  my-1 rounded-md " alt="" />
            <h1 className="text-sm w-36">{className}</h1>
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
        <td>
          <span
            className={`${
              (status === "approved" && "bg-green-500") ||
              (status === "denied" && "bg-red-500") ||
              "bg-black/50"
            } px-2 py-1 text-white rounded-full text-sm `}>
            {status ? status : "pending"}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <button
            disabled={status === "approved"}
            onClick={() => handleApprove(_id)}
            className="bg-green-500 p-3 hover:bg-green-600 transition-all rounded-full ">
            <BsCheckLg size={19} color="white" />
          </button>
          <button
            onClick={() => handleDeny(_id)}
            disabled={status === "denied"}
            className="bg-red-500 p-3 ml-2 hover:bg-red-600 transition-all rounded-full ">
            <RxCross1 size={19} color="white" />
          </button>
        </td>
        <td className="px-6 py-4 relative whitespace-nowrap">
          <button
            disabled={feedback}
            onClick={() => openModal(true)}
            className="bg-cyan-500 p-3 hover:bg-cyan-600 transition-all rounded-full ">
            {feedback ? (
              <BiCommentCheck size={19} color="white" />
            ) : (
              <BiCommentDetail size={19} color="white" />
            )}
          </button>
        </td>
      </tr>

      <FeedbackModal
        refetch={refetch}
        id={_id}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default ManageClassesRow;
