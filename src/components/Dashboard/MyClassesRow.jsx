import React, { useContext, useState } from "react";
import { FaPen } from "react-icons/fa";
import { VscCommentUnresolved } from "react-icons/vsc";
import UpdateClassModal from "../Modal/UpdateClassModal";
import { MdCommentsDisabled } from "react-icons/md";
import MyFeedbackModal from "../Modal/MyFeedbackModal";
const MyClassesRow = ({ classInfo, index, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFeedbackOpen, setFeedbackOpen] = useState(false);
  const closeFeedbackModal = () => {
    setFeedbackOpen(false);
  };

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
        <td className="text-center">{index + 1}.</td>
        <td className="pr-2">
          <div className="bg-gray-100 dark:bg-transparent w-fit p-2 rounded-lg my-1">
            <img src={image} className=" my-1 rounded-md " alt="" />
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
            disabled={status === "denied"}
            onClick={() => openModal(true)}
            className="bg-gray-500 p-3 hover:bg-gray-600 transition-all rounded-full ">
            <FaPen size={19} color="white" />
          </button>
        </td>
        <td className="text-center">
          <button
            disabled={!feedback}
            onClick={() => setFeedbackOpen(true)}
            className="bg-cyan-500 p-3 text-white hover:bg-cyan-600 transition-all rounded-full ">
            {feedback ? (
              <VscCommentUnresolved size={19} />
            ) : (
              <MdCommentsDisabled size={19} />
            )}
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
      <MyFeedbackModal
        feedback={feedback}
        isFeedbackOpen={isFeedbackOpen}
        closeFeedbackModal={closeFeedbackModal}
      />
    </>
  );
};

export default MyClassesRow;
