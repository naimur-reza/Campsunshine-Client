import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const UpdateClassForm = ({
  classInfo,
  handleSubmit,
  register,
  onSubmit,
  loading,
  handleImageUpdate,
}) => {
  const { user } = useContext(AuthContext);

  const { className, seats, price } = classInfo;
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-gray-700 " htmlFor="className">
              Class Name
            </label>
            <input
              id="className"
              defaultValue={className}
              {...register("className", { required: true })}
              type="text"
              placeholder="class name"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md       focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40   focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 " htmlFor="image">
              Class Image
            </label>
            <input
              id="image"
              onChange={(e) => handleImageUpdate(e.target.files[0])}
              // {...register("image")}
              placeholder="image"
              type="file"
              accept="image/*"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md       focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40   focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 " htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              {...register("name", { required: true })}
              value={user?.displayName}
              //   disabled
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
              {...register("email", { required: true })}
              value={user?.email}
              //   disabled
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md       focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40   focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 " htmlFor="seats">
              Available Seats
            </label>
            <input
              id="seats"
              defaultValue={seats}
              type="number"
              {...register("seats", { required: true, valueAsNumber: true })}
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
              defaultValue={price}
              //   value={price}
              {...register("price", { required: true, valueAsNumber: true })}
              type="number"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md       focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40   focus:outline-none focus:ring"
            />
          </div>
        </div>
        <button
          disabled={loading}
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 mt-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
          {loading ? (
            <div className="w-5 h-5 border-black/70  rounded-full border-dashed  animate-spin border-2 m-auto" />
          ) : (
            "Update"
          )}
        </button>
      </form>
    </div>
  );
};

export default UpdateClassForm;
