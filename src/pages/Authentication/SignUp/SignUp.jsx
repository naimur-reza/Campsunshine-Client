import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import GoogleLogin from "../../../components/shared/SocailLogin/GoogleLogin";
import { FaSpinner } from "react-icons/fa";

function SignUp() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user, createUser, updateUserProfile } = useContext(AuthContext);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ name, photoUrl, email, password }) => {
    setLoading(true);
    createUser(email, password)
      .then((res) => {
        updateUserProfile(name, photoUrl).then(() => {
          toast.success("Account created successfully");
          navigate("/");
          setLoading(false);
        });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div className={`bg-white ${isDarkMode ? "dark:bg-gray-900" : ""}`}>
      <div className="flex justify-center h-screen">
        <div
          className={`hidden bg-cover lg:block lg:w-2/3 ${
            isDarkMode ? "bg-gray-900 bg-opacity-40" : ""
          }`}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
          }}>
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Meraki UI
              </h2>

              <p className="max-w-xl mt-3 text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                autem ipsa, nulla laboriosam dolores, repellendus perferendis
                libero suscipit nam temporibus molestiae
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center bg-gradient-to-b from-black via-purple-950 to-red-950 w-full px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <div className="flex justify-center mx-auto">
                <img
                  className="w-auto h-7 sm:h-8"
                  src="https://merakiui.com/images/logo.svg"
                  alt=""
                />
              </div>

              <p className="mt-3 text-gray-500 dark:text-gray-300">
                Please sign up to access
              </p>
            </div>

            <div className="mt-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...register("name", { required: true })}
                    id="name"
                    placeholder="Your Name"
                    className={`block  w-full bg-gray-300 px-4 py-2 rounded-md placeholder-gray-700 outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-40 border-l-4 border-yellow-400`}
                  />
                </div>
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Photo Url
                  </label>
                  <input
                    type="url"
                    name="photoUrl"
                    id="photoUrl"
                    {...register("photoUrl", { required: true })}
                    placeholder="Your Photo Url"
                    className={`block  w-full bg-gray-300 px-4 py-2 rounded-md placeholder-gray-700 outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-40 border-l-4 border-yellow-400`}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    id="email"
                    placeholder="Enter Your Email"
                    className={`block  w-full bg-gray-300 px-4 py-2 rounded-md placeholder-gray-700 outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-40 border-l-4 border-yellow-400`}
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-600 dark:text-gray-200">
                      Password
                    </label>
                  </div>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    {...register("password", { required: true })}
                    placeholder="Your Password"
                    className={`block  w-full bg-gray-300 px-4 py-2 rounded-md placeholder-gray-700 outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-40 border-l-4 border-yellow-400`}
                  />
                </div>

                <div className="mt-6">
                  <button
                    disabled={loading}
                    type="submit"
                    className={`w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50`}>
                    {loading ? (
                      <FaSpinner className="m-auto animate-spin" size={24} />
                    ) : (
                      "Sign Up"
                    )}
                  </button>
                  <div className="flex items-center mt-3">
                    <hr className="w-1/2 " />
                    <p className="mx-4 text-white">Or</p>
                    <hr className="w-1/2 " />
                  </div>
                  <GoogleLogin />
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-400">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="text-blue-500 focus:outline-none focus:underline hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
