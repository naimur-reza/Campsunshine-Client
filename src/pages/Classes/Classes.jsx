import React, { useState } from "react";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import { getClasses } from "../../api/classes";
import { set } from "react-hook-form";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  return (
    <div className="pt-[92px]">
      <SectionTitle title="All Classes" subTitle="Find what you want!" />
    </div>
  );
};

export default Classes;
