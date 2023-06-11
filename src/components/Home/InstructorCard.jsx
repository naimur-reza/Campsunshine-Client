import React from "react";

const InstructorCard = ({ info }) => {
  const { name, email, image } = info;
  return (
    <div className="w-full mb-4 max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-black/50">
      <img className="object-cover w-full h-64" src={image} alt="avatar" />

      <div className="py-5 text-center">
        <a
          href="#"
          className="block text-xl font-bold text-gray-800 dark:text-white"
          tabIndex="0"
          role="link">
          {name}
        </a>
        <span className="text-sm text-gray-700 dark:text-gray-200">
          {email}
        </span>
      </div>
    </div>
  );
};

export default InstructorCard;
