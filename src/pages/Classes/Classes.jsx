import React, { useContext, useState } from "react";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import { AuthContext } from "../../providers/AuthProvider";
import { getAllClasses } from "../../api/classes";

const Classes = () => {
  // const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  const classes = getAllClasses().then((data) => {
    console.log(data);
    // setLoading(false);
  });
  return (
    <div className="pt-[92px]">
      <SectionTitle title="All Classes" subTitle="Find what you want!" />
    </div>
  );
};

export default Classes;
