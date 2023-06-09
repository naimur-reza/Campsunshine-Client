import React, { useContext } from "react";
import ManageUsersRow from "../../components/Dashboard/ManageUsersRow";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../api/auth";
import axios from "axios";
import Spinner from "../../components/shared/Spinner/Spinner";

const ManageUsers = () => {
  const { user } = useContext(AuthContext);
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],

    queryFn: async () => {
      const response = await axios(`${import.meta.env.VITE_API_URL}/users`);
      return response.data;
    },
  });
  if (isLoading) {
    <Spinner />;
  }
  console.log(users);
  return (
    <table className="min-w-full bg-white">
      <thead className="bg-teal-400 text-white">
        <tr>
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
        </tr>
      </thead>

      <tbody className=" ">
        {users &&
          users.map((user) => <ManageUsersRow key={user._id} user={user} />)}
      </tbody>
    </table>
  );
};

export default ManageUsers;
