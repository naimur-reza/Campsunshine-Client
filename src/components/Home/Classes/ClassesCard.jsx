import React from "react";

const ClassesCard = ({ classInfo }) => {
  const { name, image, className, price, seats, teacher } = classInfo;
  return (
    <div className="space-y-3 p-5 shadow-lg">
      <img className="w-80 rounded h-40" src={image} alt={name} />
      <h3 className="text-lg py-2 font-semibold">{className}</h3>

      <div className="flex items-center gap-2">
        <img
          className="w-12 h-12  rounded-full"
          src={teacher.image}
          alt="teacher"
        />
        <p className="text-base">{name}</p>
      </div>
      <div className="flex justify-between">
        <p>Available Seats: {seats}</p>
        <p>Price: ${price}</p>
      </div>
      <button className="block m-auto bg-teal-500 w-full py-2 rounded-lg text-white tracking-wide ">
        Enroll Now
      </button>
    </div>
  );
};

export default ClassesCard;
