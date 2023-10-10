import React from "react";
import { Tilt } from "react-tilt";

const ServicesCard = ({ item, index }) => {
  const { image, title, text } = item;

  return (
    <Tilt>
      <div
        options={{
          max: 45,
          scale: 0.5,
          speed: 450,
        }}
        className="space-y-3 lg:h-80 border-teal-400/80 border dark:shadow-teal-700/30   bg-white dark:bg-black/50  shadow-xl cursor-pointer rounded-lg  p-5">
        <img src={image} className="h-24" alt="" />
        <h1 className="text-lg dark:text-gray-300 font-semibold">{title}</h1>
        <p className="text-gray-600 text-sm  dark:text-gray-200 tracking-wide  ">
          {text}
        </p>
        <button className="border-b-2 border-yellow-500 border-dotted text-sky-500">
          Read More
        </button>
      </div>
    </Tilt>
  );
};

export default ServicesCard;
