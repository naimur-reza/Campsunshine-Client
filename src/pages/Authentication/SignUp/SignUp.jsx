import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import GoogleLogin from "../../../components/shared/SocialLogin/GoogleLogin";
import { FaSpinner } from "react-icons/fa";
import { saveUser } from "../../../api/auth";
import { uploadImage } from "../../../api/utils";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [imageData, setImageData] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { user, createUser, updateUserProfile } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ name, email, password, confirmPassword }) => {
    console.log(password);
    setLoading(true);
    const isValid = /^(?=.*[A-Z])(?=.*[\W_])[a-zA-Z0-9\W_]{6,}$/.test(password);

    console.log(isValid, password);
    if (!isValid) {
      toast.error(
        "Password must contain at least one special character and one uppercase letter "
      );
      setLoading(false);
      return;
    } else if (password !== confirmPassword) {
      toast.error("Password does not match");
      setLoading(false);
      return;
    }
    createUser(email, password)
      .then((data) => {
        uploadImage(imageData).then((res) => {
          updateUserProfile(name, res.data.display_url).then(() => {
            toast.success("Account created successfully");
            saveUser(data.user);
            navigate("/");
            setLoading(false);
          });
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
        setLoading(false);
      });
  };
  return (
    <div className=" bg-[url('https://svgshare.com/i/uA9.svg')] bg-cover py-5 lg:py-0 pt-5  lg:min-h-screen">
      <div className="flex items-center  px-6 mx-auto lg:w-2/6">
        <div className="flex-1">
          <div className="text-center">
            <p className="mt-3 text-gray-200">Please sign up to access</p>
          </div>

          <div className="mt-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div>
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm text-gray-200  ">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  id="name"
                  placeholder="Your Name"
                  className={`block  w-full bg-gray-100 px-4 py-2 rounded-md placeholder-gray-700 outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-40 border-l-4 border-yellow-400`}
                />
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm text-gray-200  ">
                  Your Photo
                </label>
                <input
                  type="file"
                  name="image"
                  id="photoUrl"
                  onChange={(e) => setImageData(e.target.files[0])}
                  className={`block  w-full bg-gray-100 px-4 py-2 rounded-md placeholder-gray-700 outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-40 border-l-4 border-yellow-400`}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-200  ">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  id="email"
                  placeholder="Enter Your Email"
                  className={`block  w-full bg-gray-100 px-4 py-2 rounded-md placeholder-gray-700 outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-40 border-l-4 border-yellow-400`}
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm text-gray-200  ">
                    Password
                  </label>
                </div>

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  {...register("password", { required: true })}
                  placeholder="Your Password"
                  className={`block  w-full bg-gray-100 px-4 py-2 rounded-md placeholder-gray-700 outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-40 border-l-4 border-yellow-400`}
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm text-gray-200  ">
                    Confirm Password
                  </label>
                </div>

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  {...register("confirmPassword", { required: true })}
                  placeholder="Confirm Password"
                  className={`block  w-full bg-gray-100 px-4 py-2 rounded-md placeholder-gray-700 outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-40 border-l-4 border-yellow-400`}
                />
                <div className="flex items-center mt-3">
                  <input
                    onClick={() => setShowPassword(!showPassword)}
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span className="text-white ml-3 text-sm">Show Password</span>
                </div>
              </div>

              <div>
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
              </div>
            </form>
            <div className="flex mt-2 items-center">
              <hr className="w-1/2 " />
              <p className="mx-4 text-white">Or</p>
              <hr className="w-1/2 " />
            </div>
            <GoogleLogin />

            <p className="mt-3 text-sm text-center text-gray-200">
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
  );
}

export default SignUp;
