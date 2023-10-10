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

  useEffect(() => {
    getPopularClasses().then((data) => setClasses(data));
  }, []);
  return (
    <>
      <div className="px-5">
        <SectionTitle
          // color={"text-gray-200"}
          title="Popular Classes"
          subTitle={
            "Explore our most popular classes and learn the latest skills"
          }
        />
        <Swiper
          // slidesPerView={3}
          spaceBetween={20}
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
          {classes &&
            classes.map((info, index) => (
              <SwiperSlide key={index}>
                <ClassesCard key={index} info={info} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}
