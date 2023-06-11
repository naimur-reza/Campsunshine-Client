import React, { useContext, useEffect, useState } from "react";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import { AuthContext } from "../../providers/AuthProvider";
import { getAllClasses } from "../../api/classes";
import ClassesCard from "../../components/Home/AllClasses/AllClassesCard";
import Spinner2 from "../../components/shared/Spinner/Spinner2";
import { motion } from "framer-motion";
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
  if (loading) return <Spinner2 />;

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
    <motion.ul
      className="container"
      variants={container}
      initial="hidden"
      animate="visible">
      <div className="pt-[92px] my-container">
        <SectionTitle title="All Classes" subTitle="Find what you want!" />

        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-5">
          {classes &&
            classes.map((classInfo) => {
              return (
                <motion.li key={classInfo._id} variants={item}>
                  <ClassesCard
                    loading={loading}
                    classInfo={classInfo}
                    setLoading={setLoading}
                  />
                </motion.li>
              );
            })}
        </div>
      </div>
    </motion.ul>
  );
};

export default Classes;
