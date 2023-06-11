import React, { useContext, useState } from "react";
import ManageUsersRow from "../../components/Dashboard/ManageUsersRow";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers, removeUser, updateUserRole } from "../../api/auth";
import axios from "axios";
import Spinner from "../../components/shared/Spinner/Spinner";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [loading, setLoading] = useState(false);
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],

    queryFn: async () => {
      const response = await axios(`${import.meta.env.VITE_API_URL}/users`);
      return response.data;
    },
  });

  // managing users

  const handleAdmin = (email) => {
    setLoading(true);
    updateUserRole(email, "admin").then((res) => {
      console.log(res);
      setLoading(false);
      refetch();
    });
  };
  const handleInstructor = (email) => {
    setLoading(true);
    updateUserRole(email, "instructor").then((res) => {
      console.log(res);
      refetch();
      setLoading(false);
    });
  };
  const handleRemove = (email) => {
    Swal.fire({
      title: "Remove This User?",
      text: "User will be kicked out from server!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Remove!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        removeUser(email).then((res) => {
          refetch();
          setLoading(false);
          console.log(res);
        });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

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
      <table className="min-w-full  bg-white dark:bg-black/30">
        <thead className="bg-teal-400 text-white">
          <tr>
            <th scope="col " className="px-2">
              #
            </th>
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
                handleAdmin={handleAdmin}
                handleInstructor={handleInstructor}
                handleRemove={handleRemove}
              />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ManageUsers;
