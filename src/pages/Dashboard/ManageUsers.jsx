import React, { useContext, useState } from "react";
import ManageUsersRow from "../../components/Dashboard/ManageUsersRow";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../api/auth";
import axios from "axios";
import Spinner from "../../components/shared/Spinner/Spinner";
import { FaUsers } from "react-icons/fa";

const ManageUsers = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const {
    data: users = [],

    refetch,
  } = useQuery({
    queryKey: ["users"],

    queryFn: async () => {
      const response = await axios(`${import.meta.env.VITE_API_URL}/users`);
      return response.data;
    },
  });
  if (loading) {
    return (
      <div className="min-h-[100vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-black rounded-full border-dashed animate-spin" />
      </div>
    );
  }
  console.log(loading);
  return (
    <>
      <h1 className="pb-3 tracking-wide inline-flex items-center gap-2 ">
        <FaUsers size={20} />
        Total Users: {users.length}
      </h1>
      <table className="min-w-full  bg-white">
        <thead className="bg-teal-400 text-white">
          <tr>
            <th scope="col">#</th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium  uppercase tracking-wider">
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium  uppercase tracking-wider">
              Role
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium  uppercase tracking-wider">
              Make Admin
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium  uppercase tracking-wider">
              Make Instructor
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium  uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>

        <tbody className=" ">
          {users &&
            users.map((user, index) => (
              <ManageUsersRow
                key={user._id}
                index={index}
                user={user}
                refetch={refetch}
                setLoading={setLoading}
              />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ManageUsers;
