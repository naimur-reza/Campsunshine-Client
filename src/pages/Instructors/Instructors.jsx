import React, { useEffect, useState } from "react";
import { getInstructors } from "../../api/Instructor";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import InstructorCard from "../../components/Home/InstructorCard";
import Spinner2 from "../../components/shared/Spinner/Spinner2";

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
  if (loading) {
    return <Spinner2 />;
  }
  return (
    <div className="pt-20 my-container">
      <SectionTitle title={"Instructors"} subTitle={"Meet Our Instructors"} />
      <div className="grid grid-cols-1 py-10 lg:grid-cols-3 place-content-center">
        {instructors &&
          instructors.map((instructor) => (
            <InstructorCard key={instructor._id} info={instructor} />
          ))}
      </div>
    </div>
  );
};

export default Instructors;
