import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const InstructorCard = ({ info }) => {
  const { name, teaching, students, email, image } = info;
  return (
    <>
      <div className=" bg-black/20 backdrop-blur-sm rounded  relative p-4 space-y-2 text-center ">
        <img src={image} alt="" />
        <h1 className="text-lg font-semibold text-yellow-400">{name}</h1>
        <h2 className="text-sm text-gray-100">{teaching}</h2>
        <p className="text-sm text-gray-100">Students: {students} </p>
        <p className="bg-gray-200 text-sm py-1 rounded text-gray-700">
          {email}
        </p>
        <div className="absolute inset-0   flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 duration-400 cursor-pointer transition ">
          <div>
            <div className="flex gap-5  ">
              <BsFacebook
                size={24}
                className="text-sky-400 hover:text-sky-500 transition-all  cursor-pointer"
              />
              <BsInstagram
                size={24}
                className="text-red-500 hover:text-red-600 transition-all  cursor-pointer"
              />
              <BsTwitter
                size={24}
                className="text-sky-500  hover:text-sky-600 transition-all cursor-pointer"
              />
            </div>
            <h1 className="mt-8 text-gray-100">{teaching}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorCard;
