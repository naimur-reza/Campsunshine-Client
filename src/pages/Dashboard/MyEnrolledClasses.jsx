import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { getPaymentInfo } from "../../api/utils";
import EmptyState from "../../components/Dashboard/EmptyState";
import EnrolledClassesRow from "../../components/Dashboard/EnrolledClassesRow";

const MyEnrolledClasses = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    getPaymentInfo(user?.email).then((data) => {
      setClasses(data);
    });
  }, [user]);
  return (
    <div>
      <h1>Total Classes Enrolled: {classes.length}</h1>
      {classes && Array.isArray(classes) && classes.length > 0 ? (
        <>
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
                  Paid
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-medium  uppercase tracking-wider">
                  Details
                </th>
              </tr>
            </thead>

            <tbody className=" ">
              {classes &&
                classes.map((classInfo, index) => (
                  <EnrolledClassesRow
                    key={classInfo._id}
                    classInfo={classInfo}
                    index={index}
                  />
                ))}
            </tbody>
          </table>
        </>
      ) : (
        <EmptyState
          title={"You have'nt enrolled any classes"}
          route={"/classes"}
          linkText={"Enroll Now"}
        />
      )}
    </div>
  );
};

export default MyEnrolledClasses;
