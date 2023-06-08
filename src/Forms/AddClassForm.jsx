import React from "react";
import { useForm } from "react-hook-form";

const AddClassForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section className="max-w-5xl p-6 mx-auto bg-white rounded-md shadow-md  ">
      <h2 className="text-lg bg-teal-400 px-5 py-2 rounded-md text-white font-semibold  capitalize ">
        Add a Class
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-gray-700 " htmlFor="className">
              Class Name
            </label>
            <input
              id="className"
              type="text"
              placeholder="class name"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md       focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40   focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 " htmlFor="emailAddress">
              Class Image
            </label>
            <input
              id="emailAddress"
              type="file"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md       focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40   focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 " htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              placeholder="your name"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md       focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40   focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 " htmlFor="email">
              Your Email
            </label>
            <input
              id="email"
              placeholder="email"
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md       focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40   focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 " htmlFor="seats">
              Available Seats
            </label>
            <input
              id="seats"
              type="text"
              placeholder="seats"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md       focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40   focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 " htmlFor="price">
              Price
            </label>
            <input
              id="price"
              placeholder="Price"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md       focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40   focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddClassForm;
