import React from "react";

const About = () => {
  return (
    <section className="dark:bg-transparent dark:text-gray-200 pt-28">
      <div className="container mx-auto px-4">
        <div className="md:flex md:flex-row-reverse md:justify-between">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">
              Welcome to our Summer Camp School!
            </h2>
            <p className="mb-6 dark:text-gray-300">
              At our Summer Camp School, we provide a fun and engaging
              environment for children to learn, explore, and make lasting
              memories. With a focus on interactive activities and educational
              experiences, we strive to make every summer an unforgettable
              adventure.
            </p>
            <p className="mb-6 dark:text-gray-300">
              Our dedicated team of experienced counselors and instructors
              ensures that each child receives personalized attention and
              guidance throughout their time with us. From sports and arts to
              science and nature, we offer a wide range of programs that cater
              to different interests and age groups.
            </p>
            <p className="mb-6 dark:text-gray-300">
              We believe in fostering creativity, teamwork, and personal growth
              in a safe and inclusive setting. Our campers have the opportunity
              to build new friendships, develop essential life skills, and
              discover their passions while having a blast!
            </p>
          </div>
          <div className="md:w-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
