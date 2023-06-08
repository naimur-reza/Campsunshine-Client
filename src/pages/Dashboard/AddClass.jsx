import React from "react";
import AddClassForm from "../../Forms/AddClassForm";
import { useForm } from "react-hook-form";

const AddClass = () => {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <AddClassForm
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
    />
  );
};

export default AddClass;
