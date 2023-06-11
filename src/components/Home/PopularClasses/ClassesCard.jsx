import React from "react";

const classNameesCard = ({ info, loading }) => {
  const {
    title,
    className_image,
    text,
    price,
    enrolled,
    instructor,
    image,
    date,
  } = info || {};
  console.log(info);
  return (
    <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <img
        className="object-cover w-full h-64 hover:scale-105 transition-all duration-500 ease-in-out"
        src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Article"
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

        <div className="mt-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                className="object-cover h-10 rounded-full"
                src={image}
                alt="Avatar"
              />
              <a
                href="#"
                className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                role="link">
                {instructor}
              </a>
            </div>
            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
              21 SEP 2015
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default classNameesCard;
