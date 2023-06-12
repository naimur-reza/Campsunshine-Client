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
    <div className=" py-1 px-5">
      <SectionTitle
        color={"text-gray-200"}
        title="Popular Instructors"
        subTitle="Meet Popular Instructors based on student "
      />

      <Swiper
        slidesPerView={1}
        spaceBetween={28}
        breakpoints={{
          // when window width is >= 640px
          340: {
            width: 340,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
          },
        }}
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
