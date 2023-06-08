import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import InstructorCard from "./InstructorCard";
import React, { useRef, useState } from "react";
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
const PopularInstructors = () => {
  // todo: add popular instructors data from api

  const teachers = [
    {
      _id: 1,
      name: "John Doe",
      teaching: "Bangla",
      students: 100,
      email: "jhon@gmail.com",
      image: "https://themesfamily.com/tm/hadi/assets/img/team/1.jpg",
    },
    {
      _id: 2,
      name: "John Doe",
      teaching: "English",
      students: 100,
      email: "jhon@gmail.com",
      image: "https://themesfamily.com/tm/hadi/assets/img/team/1.jpg",
    },
    {
      _id: 3,
      name: "John Doe",
      teaching: "Math",
      students: 100,
      email: "jhon@gmail.com",
      image: "https://themesfamily.com/tm/hadi/assets/img/team/1.jpg",
    },
    {
      _id: 4,
      name: "John Doe",
      teaching: "Biology",
      students: 100,
      email: "jhon@gmail.com",
      image: "https://themesfamily.com/tm/hadi/assets/img/team/1.jpg",
    },
    {
      _id: 5,
      name: "John Doe",
      teaching: "Bangla",
      students: 100,
      email: "jhon@gmail.com",
      image: "https://themesfamily.com/tm/hadi/assets/img/team/1.jpg",
    },
    {
      _id: 6,
      name: "John Doe",
      teaching: "Physics",
      students: 100,
      email: "jhon@gmail.com",
      image: "https://themesfamily.com/tm/hadi/assets/img/team/1.jpg",
    },
  ];
  return (
    <div className="blob py-14">
      <SectionTitle
        color={"text-gray-200"}
        title="Popular Instructors"
        subTitle="Our best teachers"
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
