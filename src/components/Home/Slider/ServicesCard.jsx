import React from "react";
import { Tilt } from "react-tilt";
const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};
const ServicesCard = ({ item }) => {
  const { image, title, text } = item;
  return (
    <Tilt options={defaultOptions}>
      <div className="space-y-3 bg-white shadow-lg rounded-lg  p-5">
        <img src={image} alt="" />
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="text-gray-600 tracking-wide  ">{text}</p>
        <button className="border-b-2 border-yellow-500 border-dotted text-sky-500">
          Read More
        </button>
      </div>
    </Tilt>
  );
};

export default ServicesCard;
