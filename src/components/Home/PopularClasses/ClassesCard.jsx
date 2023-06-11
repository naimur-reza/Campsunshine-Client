import moment from "moment";
import React from "react";

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
  console.log(info);
  const formattedTime = moment(time).fromNow();
  return (
    <div className="max-w-2xl lg:h-[530px]  overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <img
        className="object-fill w-full h-72 hover:scale-105 transition-all duration-500 ease-in-out"
        src={image}
        alt="class"
      />

      <div className="p-6">
        <div>
          <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
            Trending
          </span>
          <a
            href="#"
            className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
            role="link">
            {title}
          </a>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {text}
          </p>
        </div>
        <div className="space-y-2 text-gray-200">
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
              <p className="text-sm bg-sky-200 px-1  rounded-full">
                {formattedTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default classNameesCard;
