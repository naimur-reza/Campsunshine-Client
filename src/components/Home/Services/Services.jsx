import React from "react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import student from "../../../assets/home/student.png";
import teacher from "../../../assets/home/teacher.png";
import service from "../../../assets/home/service.png";
import certificate from "../../../assets/home/certificate.png";
import ServicesCard from "./ServicesCard";

const Services = () => {
  // todo: add services from api
  const data = [
    {
      title: "Student Service",
      image: student,
      text: "Providing exceptional programs for a rewarding learning experience. ",
    },
    {
      title: "Best Teacher",
      image: teacher,
      text: "Dedicated to delivering top-notch teaching and Support",
    },
    {
      title: "Certification",
      image: certificate,
      text: "Unlocking global opportunities with recognized certifications",
    },
    {
      title: "Good Program",
      image: service,
      text: "Ensuring personalized care and support for an enhanced learning journey.",
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-transparent py-10 mb-10">
      <SectionTitle
        title={"Our Services"}
        subTitle={"Our services are designed to help you achieve your goals"}
      />
      <div className="my-container mt-8 px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-4 gap-5 py-10">
        {data.map((item, index) => (
          <ServicesCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
