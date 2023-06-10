import React, { useEffect, useState } from "react";
import { getInstructors } from "../../api/Instructor";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import InstructorCard from "../../components/Home/InstructorCard";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getInstructors().then((data) => {
      setInstructors(data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="pt-20">
      <SectionTitle title={"Instructors"} subTitle={"Meet Our Instructors"} />
      <div>
        {instructors &&
          instructors.map((instructor) => (
            <InstructorCard key={instructor._id} info={instructor} />
          ))}
      </div>
    </div>
  );
};

export default Instructors;
