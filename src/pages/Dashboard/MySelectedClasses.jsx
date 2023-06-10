import React, { useContext } from "react";
import { getMySelectedClasses, selectClass } from "../../api/selectClasses";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../providers/AuthProvider";
import Spinner2 from "../../components/shared/Spinner/Spinner2";
import MySelectedClassRow from "../../components/Dashboard/MySelectedClassRow";

const MySelectedClasses = () => {
  const { user, loading } = useContext(AuthContext);
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
  if (isLoading) {
    return <Spinner2 />;
  }
  return (
    <>
      <h1>Class Selected: {classes.length}</h1>

      <table className="min-w-full  bg-white text-cen">
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
              <MySelectedClassRow
                key={classInfo._id}
                classInfo={classInfo}
                index={index}
              />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default MySelectedClasses;
