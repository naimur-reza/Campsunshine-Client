import { FaChalkboardTeacher, FaTrash } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";

const ManageUsersRow = ({
  user,
  index,
  handleAdmin,
  handleInstructor,
  handleRemove,
}) => {
  const { _id, name, email, role, image } = user || {};
  return (
    <tr>
      <td className="px-3">{index + 1}.</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={image}
              alt="User Avatar"
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium dark:text-gray-200 text-gray-900">
              {name}
            </div>
            <div className="text-sm  dark:text-gray-200">{email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm dark:text-gray-200 text-gray-900">
          {role ? role : "Student"}
        </div>
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
