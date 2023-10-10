import React from "react";
import { MdPeople } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
const InstructorCard = ({ info }) => {
  const { teacher, className, email, image, enrolled, name } = info;
  return (
    <>
      <div className=" dark:bg-black/40 border-sky-600/60 border  overflow-hidden backdrop-blur-sm   relative  space-y-2 text-center rounded-md mb-10 bg-gray-200/30">
        <div className="relative overflow-hidden  h-48 w-48 mx-auto flex justify-center border border-sky-300 rounded-full p-0.5 my-10">
          <img
            src={teacher.image}
            className="h-full rounded-full object-cover object-center w-full  hover:scale-105 duration-200 transition"
            alt="teacher_image"
          />
        </div>
        <h1 className="text-gray-800 dark:text-white">{name}</h1>
        <h2 className="text-sm  dark:text-gray-400 "> {className}</h2>
        <p className="text-sm  flex items-center gap-2 justify-center dark:text-gray-400">
          <MdPeople /> Students: {enrolled}{" "}
        </p>
        <p className="bg-sky-500/20 justify-center  text-sm py-1 rounded dark:text-gray-400 flex items-center gap-2">
          <AiOutlineMail /> {email}
        </p>
      </div>
    </>
  );
};

export default InstructorCard;
