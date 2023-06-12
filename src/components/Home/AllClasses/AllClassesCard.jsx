import React, { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { ImSpinner3 } from "react-icons/im";
import { useLocation, useNavigate } from "react-router-dom";
import { selectClass } from "../../../api/selectClasses";
import { toast } from "react-hot-toast";
import moment from "moment/moment";

const ClassesCard = ({ classInfo }) => {
  const { user, role } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.pathname;
  const { _id, name, image, className, price, seats, teacher, time } =
    classInfo;
  const formattedTime = moment(time).fromNow();

  // todo: seats not working
  const don = false;
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

    // after click on select button
    setLoading(true);
    const selectInfo = {
      classId: id,
      name: name,
      className: className,
      price: price,
      image: image,
      teacher: teacher,
      userEmail: user.email,
    };
    selectClass(selectInfo)
      .then((data) => {
        console.log(data);
        toast.success("Class Selected");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div
      className={`${
        !seats && "bg-rose-600 dark:bg-red-300/70  text-white"
      } p-5 rounded-lg shadow-xl space-y-3 dark:bg-black/50`}>
      <img className="w-80 rounded h-40 object-cover" src={image} alt={name} />
      <h3 className="text-lg py-2 font-semibold dark:text-gray-300">
        {className}
      </h3>

      <div className="flex items-center underline underline-offset-2 dark:text-gray-300 text-gray-700 ">
        Instructor:
        <div className="flex ms-2 w-full items-center justify-between ">
          <p className="text-base ">{name}</p>
          <img
            className="w-12 h-12 object-cover rounded-full"
            src={teacher.image}
            alt="teacher"
          />
        </div>
      </div>
      <p className="text-sm bg-sky-100 w-fit text-black/80 px-2 rounded-full">
        {formattedTime}
      </p>
      <div className="flex mt-2 justify-between text-gray-700">
        <p className="dark:text-gray-300">Available Seats: {seats}</p>
        <p className="dark:text-yellow-400">Price: ${price}</p>
      </div>
      <button
        disabled={!seats || role}
        onClick={() => handleEnroll(_id)}
        className={`${
          !seats ? "bg-teal-900" : "bg-teal-500 hover:bg-teal-700"
        } block  m-auto  mt-2 duration-200   w-full py-2 rounded-lg text-white tracking-wide`}>
        {loading ? (
          <ImSpinner3 size={23} className={"animate-spin  m-auto"} />
        ) : (
          "Select"
        )}
      </button>
    </div>
  );
};

export default ClassesCard;
