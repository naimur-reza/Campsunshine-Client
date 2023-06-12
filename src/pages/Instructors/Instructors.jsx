import React, { useEffect, useState } from "react";
import { getInstructors } from "../../api/Instructor";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import InstructorCard from "../../components/Home/InstructorCard";
import Spinner2 from "../../components/shared/Spinner/Spinner2";
import { motion } from "framer-motion";
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

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="pt-20 my-container">
      <SectionTitle title={"Instructors"} subTitle={"Meet Our Instructors"} />

      <motion.ul
        className="container"
        variants={container}
        initial="hidden"
        animate="visible">
        <div className="grid grid-cols-1 py-10 px-5 lg:px-0 lg:grid-cols-3 place-itemter">
          {instructors &&
            instructors.map((instructor) => (
              <motion.li variants={item}>
                <InstructorCard key={instructor._id} info={instructor} />
              </motion.li>
            ))}
        </div>
      </motion.ul>
    </div>
  );
};

export default Instructors;
