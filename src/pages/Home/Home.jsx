import React from "react";
import Slider from "../../components/Home/Slider/Slider";
import Services from "../../components/Home/Services/Services";
import PopularClasses from "../../components/Home/PopularClasses/PopularClasses";

const Home = () => {
  return (
    <div>
      <Slider />
      <Services />
      <PopularClasses />
    </div>
  );
};

export default Home;
