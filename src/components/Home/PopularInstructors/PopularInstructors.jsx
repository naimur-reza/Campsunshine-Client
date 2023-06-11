import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import InstructorCard from "./InstructorCard";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./style.css";
// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { getPopularClasses } from "../../../api/classes";
const PopularInstructors = () => {
  const [teachers, setTeachers] = useState(null);

  useEffect(() => {
    getPopularClasses().then((res) => {
      console.log(res);
      setTeachers(res);
    });
  }, []);

  return (
    <div className="blob py-14">
      <SectionTitle
        color={"text-gray-200"}
        title="Popular Instructors"
        subTitle="Meet Popular Instructors based on student "
      />

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="my-container my-10">
        {teachers &&
          teachers.map((teacher) => (
            <SwiperSlide key={teacher._id}>
              <InstructorCard key={teacher._id} info={teacher} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default PopularInstructors;
