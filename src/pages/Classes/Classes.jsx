import React, { useContext, useEffect, useState } from "react";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import { AuthContext } from "../../providers/AuthProvider";
import { getAllClasses } from "../../api/classes";
import ClassesCard from "../../components/Home/Classes/ClassesCard";

const Classes = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    setLoading(true);
    getAllClasses().then((res) => {
      setClasses(res);
      setLoading(false);
    });
  }, [user]);

  return (
    <div className="pt-[92px] my-container">
      <SectionTitle title="All Classes" subTitle="Find what you want!" />

      <div className="grid grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
        {classes &&
          classes.map((classInfo) => {
            return <ClassesCard key={classInfo._id} classInfo={classInfo} />;
          })}
      </div>
    </div>
  );
};

export default Classes;
