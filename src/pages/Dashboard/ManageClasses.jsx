import React, { useContext, useState } from "react";

import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ManageClassesRow from "../../components/Dashboard/ManageClassesRow";

const ManageClasses = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const {
    data: classes = [],

    refetch,
  } = useQuery({
    queryKey: ["classes"],

    queryFn: async () => {
      const response = await axios(`${import.meta.env.VITE_API_URL}/classes`);
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
  console.log(classes);
  return (
    <table className="min-w-full  bg-white">
      <thead className="bg-teal-400 text-white">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-sm font-medium  uppercase tracking-wider">
            Class
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-sm font-medium  uppercase tracking-wider">
            Instructor
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-sm font-medium  uppercase tracking-wider">
            Seats
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-sm font-medium  uppercase tracking-wider">
            Price
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-sm font-medium  uppercase tracking-wider">
            Status
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-sm font-medium  uppercase tracking-wider">
            Action
          </th>
        </tr>
      </thead>

      <tbody className=" ">
        {classes &&
          classes.map((classInfo, index) => (
            <ManageClassesRow
              key={classInfo._id}
              classInfo={classInfo}
              refetch={refetch}
              index={index}
            />
          ))}
      </tbody>
    </table>
  );
};

export default ManageClasses;
