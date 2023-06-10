import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { getMyClasses } from "../../api/classes";
import MyClassesRow from "../../components/Dashboard/MyclassesRow";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const {
    data: myClasses = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myClasses", user?.email],
    queryFn: async () => {
      const data = await getMyClasses(user?.email);
      console.log(data);
      return data;
    },
  });
  return (
    <div>
      <h1>My Classes : {myClasses.length}</h1>
      <table className="min-w-full  bg-white text-cen">
        <thead className="bg-teal-400 text-white">
          <tr>
            <th className="px-3">#</th>
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
              Enrolled
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
          {myClasses &&
            myClasses.map((item, index) => (
              <MyClassesRow key={item._id} classInfo={item} index={index} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
