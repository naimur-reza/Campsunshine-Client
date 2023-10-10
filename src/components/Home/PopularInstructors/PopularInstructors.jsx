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
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    getPopularClasses().then((res) => {
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
        spaceBetween={40}
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
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
