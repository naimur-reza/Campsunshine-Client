import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import modalbg from "../../../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
const ClassesCard = ({ classInfo }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.pathname;
  const { _id, name, image, className, price, seats, teacher } = classInfo;
  const handleEnroll = (id) => {
    if (!user) {
      Swal.fire({
        title: "Your're not logged in. Login now?",
        padding: "3em",
        color: "#ffff",
        showDenyButton: true,
        denyButtonText: `Later`,
        confirmButtonText: `Login`,
        confirmButtonColor: "sky",
        denyButtonColor: "red",
        background: ` url('https://i.ibb.co/4N5Rpfc/rose-petals.pnghttps://i.ibb.co/dKwxGz8/slanted-gradient.png') center center`,
        backdrop: `
            rgba(0,0,0,0.4)

          `,
      }).then((res) => {
        if (res.isConfirmed) {
          navigate("/login", { state: { from: from } }, { replace: true });
        }
      });
    }
  };

  return (
    <div className="space-y-3 p-5 shadow-lg rounded-lg ">
      <img className="w-80 rounded h-40" src={image} alt={name} />
      <h3 className="text-lg py-2 font-semibold">{className}</h3>

      <div className="flex items-center ">
        Instructor:
        <div className="flex ms-2 w-full items-center justify-between">
          <p className="text-base">{name}</p>
          <img
            className="w-12 h-12  rounded-full"
            src={teacher.image}
            alt="teacher"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <p>Available Seats: {seats}</p>
        <p>Price: ${price}</p>
      </div>
      <button
        onClick={() => handleEnroll(_id)}
        className="block m-auto  duration-200  bg-teal-500 w-full py-2 rounded-lg text-white tracking-wide ">
        Enroll Now
      </button>
    </div>
  );
};

export default ClassesCard;
