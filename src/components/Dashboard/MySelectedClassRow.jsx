import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import CheckoutModal from "../Modal/CheckoutModal";

const MySelectedClassRow = ({ classInfo, handleRemove, refetch, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const { _id, className, image, teacher, price, name } = classInfo;

  return (
    <>
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
          <button
            onClick={() => openModal(true)}
            className="bg-yellow-500 p-3 hover:bg-yellow-600 transition-all rounded-full ">
            <MdPayment size={19} color="white" />
          </button>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <button
            onClick={() => handleRemove(_id)}
            className="bg-red-500 p-3 hover:bg-red-600 transition-all rounded-full ">
            <FaTrash size={19} color="white" />
          </button>
        </td>
      </tr>

      <CheckoutModal
        refetch={refetch}
        isOpen={isOpen}
        closeModal={closeModal}
        classInfo={classInfo}
      />
    </>
  );
};

export default MySelectedClassRow;
