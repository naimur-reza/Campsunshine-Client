import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { MdPeople } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
const InstructorCard = ({ info }) => {
  const { teacher, className, email, image, enrolled, name } = info;
  return (
    <>
      <div className=" bg-black/60 border-sky-600/70 border  overflow-hidden backdrop-blur-sm   relative  space-y-2 text-center rounded-md mb-10 ">
        <div className="relative h-48 w-48 mx-auto flex justify-center border border-sky-300 rounded-full p-0.5 my-10">
          <img
            src={teacher.image}
            className="h-full rounded-full object-cover object-center w-full  "
            alt="teacher_image"
          />
        </div>
        <h1 className="text-white">{name}</h1>
        <h2 className="text-sm  dark:text-gray-400 "> {className}</h2>
        <p className="text-sm  flex items-center gap-2 justify-center text-gray-400">
          <MdPeople /> Students: {enrolled}{" "}
        </p>
        <p className="bg-sky-500/20 justify-center  text-sm py-1 rounded text-gray-400 flex items-center gap-2">
          <AiOutlineMail /> {email}
        </p>
        {/* <div className="absolute inset-0   flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 duration-400 cursor-pointer transition ">
          <div>
            <div className="flex gap-5  justify-center ">
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
            <h1 className="mt-8 text-gray-100 px-5">{className}</h1>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default InstructorCard;
