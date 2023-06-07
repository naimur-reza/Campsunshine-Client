import React from "react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import student from "../../../assets/home/student.png";
import teacher from "../../../assets/home/teacher.png";
import service from "../../../assets/home/service.png";
import certificate from "../../../assets/home/certificate.png";
import ServicesCard from "../Slider/ServicesCard";
const Services = () => {
  // todo: add services from api
  const data = [
    {
      title: "Student Service",
      image: student,
      text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      title: "Best Teacher",
      image: teacher,
      text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      title: "Certificate To The World",
      image: certificate,
      text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      title: "Good Program",
      image: service,
      text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
  ];
  return (
    <div>
      <SectionTitle
        title={"Our Services"}
        subTitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, maiores."
        }
      />
      <div className="my-container grid grid-cols-2 lg:grid-cols-4 gap-5 py-10">
        {data.map((item, index) => (
          <ServicesCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
