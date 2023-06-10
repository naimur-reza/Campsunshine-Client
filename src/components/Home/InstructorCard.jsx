import React from "react";

const InstructorCard = ({ info }) => {
  const { name, email, image } = info;
  return (
    <div>
      <img src={image} alt="" />
      <h1>Name: {name}</h1>
      <h1>Email: {email}</h1>
    </div>
  );
};

export default InstructorCard;
