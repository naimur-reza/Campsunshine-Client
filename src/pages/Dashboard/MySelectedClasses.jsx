import React, { useContext, useState } from "react";
import {
  getMySelectedClasses,
  removeSelectedClass,
  selectClass,
} from "../../api/selectClasses";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../providers/AuthProvider";
import Spinner2 from "../../components/shared/Spinner/Spinner2";
import MySelectedClassRow from "../../components/Dashboard/MySelectedClassRow";
import Swal from "sweetalert2";
import EmptyState from "../../components/Dashboard/EmptyState";

const MySelectedClasses = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const {
    data: classes = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const { data } = await getMySelectedClasses(user?.email);
      console.log(data);
      return data;
    },
  });

  const handleRemove = async (id) => {
    Swal.fire({
      title: "Delete selected class?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        removeSelectedClass(id).then((data) => {
          if (data.deletedCount > 0) {
            refetch();
            setLoading(false);
            Swal.fire("Deleted!", "successfully");
          }
        });
      }
    });
  };
  if (isLoading || loading) {
    return <Spinner2 />;
  }
  return (
    <>
      {classes && Array.isArray(classes) && classes.length > 0 ? (
        <>
          <h1>Class Selected: {classes.length}</h1>

          <table className="min-w-full dark:bg-black/30 bg-white text-cen">
            <thead className="bg-teal-400 text-white">
              <tr>
                <th scope="col" className="px-2">
                  #
                </th>
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
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-medium  uppercase tracking-wider">
                  Payment
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
                  <MySelectedClassRow
                    key={classInfo._id}
                    classInfo={classInfo}
                    index={index}
                    refetch={refetch}
                    handleRemove={handleRemove}
                  />
                ))}
            </tbody>
          </table>
        </>
      ) : (
        <EmptyState
          title={"You have'nt selected any classes !"}
          linkText={"Select Classes"}
          route={"/classes"}
        />
      )}
    </>
  );
};

export default MySelectedClasses;
