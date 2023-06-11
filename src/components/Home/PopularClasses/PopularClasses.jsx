import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import ClassesCard from "./ClassesCard";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { getPopularClasses } from "../../../api/classes";

export default function PopularClasses() {
  const [classes, setClasses] = useState([]);
  // const classes = [
  //   {
  //     title: "Basic English Speaking",
  //     class_image: "https://i.ibb.co/0jZzQYH/Rectangle-27.png",
  //     text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     price: 100,
  //     enrolled: 100,
  //     instructor: "Abdul Halim",
  //     image: "https://themesfamily.com/tm/hadi/assets/img/client/img-3.jpg",
  //     date: new Date(),
  //   },
  //   {
  //     title: "Basic English Speaking",
  //     class_image: "https://i.ibb.co/0jZzQYH/Rectangle-27.png",
  //     text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     price: 100,
  //     enrolled: 100,
  //     instructor: "Abdul Halim",
  //     image: "https://themesfamily.com/tm/hadi/assets/img/client/img-3.jpg",
  //     date: new Date(),
  //   },
  //   {
  //     title: "Basic English Speaking",
  //     class_image: "https://i.ibb.co/0jZzQYH/Rectangle-27.png",
  //     text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     price: 100,
  //     enrolled: 100,
  //     instructor: "Abdul Halim",
  //     image: "https://themesfamily.com/tm/hadi/assets/img/client/img-3.jpg",
  //     date: new Date(),
  //   },
  //   {
  //     title: "Basic English Speaking",
  //     class_image: "https://i.ibb.co/0jZzQYH/Rectangle-27.png",
  //     text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     price: 100,
  //     enrolled: 100,
  //     instructor: "Abdul Halim",
  //     image: "https://themesfamily.com/tm/hadi/assets/img/client/img-3.jpg",
  //     date: new Date(),
  //   },
  //   {
  //     title: "Basic English Speaking",
  //     class_image: "https://i.ibb.co/0jZzQYH/Rectangle-27.png",
  //     text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     price: 100,
  //     enrolled: 100,
  //     instructor: "Abdul Halim",
  //     image: "https:/P/themesfamily.com/tm/hadi/assets/img/client/img-3.jpg",
  //     date: new Date(),
  //   },
  // ];

  useEffect(() => {
    getPopularClasses().then((data) => setClasses(data));
  }, []);
  return (
    <>
      <SectionTitle
        title="Popular Classes"
        subTitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, maiores."
        }
      />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="my-container my-10">
        {classes &&
          classes.map((info, index) => (
            <SwiperSlide key={index}>
              <ClassesCard key={index} info={info} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
