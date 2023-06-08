import React, { useState } from "react";
import AddClassForm from "../../Forms/AddClassForm";
import { useForm } from "react-hook-form";
import { addClass } from "../../api/classes";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { uploadImage } from "../../api/utils";

const AddClass = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm();
  const onSubmit = ({ name, image, className, seats, price, email }) => {
    // console.log(name, image, className, seats, price, email);
    setLoading(true);
    const imageData = image[0];
    uploadImage(imageData)
      .then((data) => {
        addClass({
          name,
          image: data.data.display_url,
          className,
          seats,
          price,
          email,
          status: "pending",
        })
          .then((res) => {
            console.log(res);
            if (res.data.insertedId) {
              toast.success("Class added successfully");
              setLoading(false);
              navigate("/dashboard/my-classes");
            }
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
            toast.error(err.message);
          });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(err.message);
      });
  };
  return (
    <AddClassForm
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      loading={loading}
    />
  );
};

export default AddClass;
