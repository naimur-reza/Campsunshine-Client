import React from "react";
import Slider from "../../components/Home/Slider/Slider";
import Services from "../../components/Home/Services/Services";
import PopularClasses from "../../components/Home/PopularClasses/PopularClasses";
import PopularInstructors from "../../components/Home/PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <div>
      <Slider />
      <Services />
      <PopularClasses />
      <PopularInstructors />
    </div>
  );
};

export default Home;
