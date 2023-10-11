import React, { useContext, useEffect, useState } from "react";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import { AuthContext } from "../../providers/AuthProvider";
import { getAllClasses } from "../../api/classes";
import ClassesCard from "../../components/Home/AllClasses/AllClassesCard";
import Spinner2 from "../../components/shared/Spinner/Spinner2";
import { motion } from "framer-motion";
import { ScrollRestoration } from "react-router-dom";
import EmptyState from "../../components/Dashboard/EmptyState";
import SkeletonLoading from "../../components/SkeletonLoading";
const Classes = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    setLoading(true);
    getAllClasses().then((res) => {
      setClasses(res);
      setLoading(false);
    });
  }, []);

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
    <>
      <ScrollRestoration />
      <div className="pt-[92px]  my-container">
        <SectionTitle title="All Classes" subTitle="Find what you want!" />
        {loading && <SkeletonLoading />}
        {Array.isArray(classes) && classes.length > 0 && classes && (
          <>
            <motion.ul
              className="container"
              variants={container}
              initial="hidden"
              animate="visible">
              <div className="grid px-5 lg:px-0 grid-cols-1 mt-7 lg:grid-cols-3 place-items-center gap-5">
                {classes.map((classInfo) => {
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
            </motion.ul>
          </>
        )}
      </div>
    </>
  );
};

export default Classes;
