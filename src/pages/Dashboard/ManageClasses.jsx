import React, { useContext, useState } from "react";

import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ManageClassesRow from "../../components/Dashboard/ManageClassesRow";
import { updateClassStatus } from "../../api/classes";
import { toast } from "react-hot-toast";
import Spinner2 from "../../components/shared/Spinner/Spinner2";

const ManageClasses = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const {
    data: classes = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["classes"],
    enabled: !loading,

    queryFn: async () => {
      const response = await axios(`${import.meta.env.VITE_API_URL}/classes`);
      return response.data;
    },
  });

  // handling status

  const handleApprove = (id) => {
    setLoading(true);
    updateClassStatus(id, { status: "approved" }).then((data) => {
      if (data.modifiedCount > 0) {
        refetch();
        toast.success("Class Approved");
        setLoading(false);
      }
    });
  };
  const handleDeny = (id) => {
    setLoading(true);
    updateClassStatus(id, { status: "denied" }).then((data) => {
      if (data.modifiedCount > 0) {
        toast.success("Class Denied");
        refetch();
        setLoading(false);
      }
    });
  };

  if (isLoading || loading) return <Spinner2 />;

  console.log(classes);
  return (
    <>
      <h1 className="text-sm tracking-wider pb-2">
        Total Classes: {classes.length}
      </h1>
      <table className="min-w-full  bg-white text-cen">
        <thead className="bg-teal-400 text-white">
          <tr>
            <th>#</th>
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
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium  uppercase tracking-wider">
              Feedback
            </th>
          </tr>
        </thead>

        <tbody className=" ">
          {classes &&
            classes.map((classInfo, index) => (
              <ManageClassesRow
                key={classInfo._id}
                classInfo={classInfo}
                index={index}
                handleApprove={handleApprove}
                handleDeny={handleDeny}
              />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ManageClasses;
