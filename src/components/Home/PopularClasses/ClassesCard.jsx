import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

const classNameesCard = ({ info, loading }) => {
  const {
    title,
    price,
    enrolled,
    teacher,
    image,
    time,
    text,
    name,
    className,
  } = info || {};

  const formattedTime = moment(time).fromNow();
  return (
    <Link to={"classes"} className="cursor-pointer">
      <div className="lg:max-w-2xl lg:h-[530px] mb-10 overflow-hidden bg-gray-100 rounded-lg shadow-md dark:bg-black/60 cursor-pointer">
        <div className="h-72 overflow-hidden ">
          <img
            className="object-fill h-full w-full  hover:scale-105 transition-all duration-200 ease-in-out"
            src={image}
            alt="class"
          />
        </div>

        <div className="p-6">
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              Trending
            </span>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {text}
            </p>
          </div>
          <div className="space-y-2 text-gray-800 dark:text-gray-200">
            <h1 className="text-xl">{className}</h1>
            <h1>Student Enrolled: {enrolled}</h1>

            <p>Price: ${price}</p>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <img
                  className="object-cover h-10 w-10 rounded-full"
                  src={teacher.image}
                  alt="Avatar"
                />
              </div>
              <div className="flex  ms-3 items-center gap-10">
                <p className="mx-1 text-sm text-gray-600 dark:text-gray-300">
                  {name}
                </p>
                <p className="text-xs text-center w-full lg:text-sm bg-sky-200  dark:text-black dark:bg-gray-50 rounded-full">
                  {formattedTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default classNameesCard;
