import React from "react";
import Slider from "../../components/Home/Slider/Slider";
import Services from "../../components/Home/Services/Services";
import PopularClasses from "../../components/Home/PopularClasses/PopularClasses";
import PopularInstructors from "../../components/Home/PopularInstructors/PopularInstructors";
import ContactUs from "../../components/Home/ContactUs/ContactUs";
// import "../../../src/assets/home/cool.svg";
const Home = () => {
  return (
    <div className=" ">
      <Slider />
      <Services />
      <div className="">
        <PopularClasses />
        <PopularInstructors />
      </div>
      <ContactUs />
    </div>
  );
};

export default Home;
