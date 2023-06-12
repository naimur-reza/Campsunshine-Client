import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../../../components/shared/SocialLogin/GoogleLogin";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import { FaEye, FaSpinner } from "react-icons/fa";
import { BiHide } from "react-icons/bi";
import logo from "../../../assets/logo.png";
import "../../../../public/shapes.svg";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const [loading, setLoading] = useState(false);
  const { logIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    const { email, password } = e.target;

    logIn(email.value, password.value)
      .then((res) => {
        console.log(res.user);
        toast.success("Login successfully");
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
        setLoading(false);
      });
  };

  return (
    <div className=" bg-[url('https://svgshare.com/i/uA9.svg')] bg-cover ">
      <div className=" min-h-screen  ">
        <div className="flex items-center  pt-14 w-full max-w-md px-6 mx-auto lg:w-2/6 h-full">
          <div className="flex-1">
            <div className="text-center">
              <div className="flex justify-center mx-auto">
                <img className="w-12 " src={logo} alt="" />
              </div>

              <p className="mt-3 text-gray-200 ">
                Sign in to access your account
              </p>
            </div>

            <div className="mt-8">
              <form onSubmit={handleLogin}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-200   ">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    className={`block  w-full bg-gray-200 px-4 py-2 rounded-md placeholder-gray-700 outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-40 border-l-4 border-yellow-400`}
                  />
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-200   ">
                      Password
                    </label>
                  </div>
                  <div className="flex relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="Your Password"
                      className={`block  w-full bg-gray-200 px-4 py-2 rounded-md placeholder-gray-700 outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-40 border-l-4 border-yellow-400 `}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-[25%] cursor-pointer hover:text-black duration-200">
                      {showPassword ? (
                        <BiHide size={20} className="text-gray-700" />
                      ) : (
                        <FaEye size={20} className="text-gray-700" />
                      )}
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    disabled={loading}
                    type="submit"
                    className={`w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50`}>
                    {loading ? (
                      <FaSpinner className="m-auto animate-spin" size={24} />
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </div>
              </form>
              <div className="flex items-center mt-3">
                <hr className="w-1/2 " />
                <p className="mx-4 text-white">Or</p>
                <hr className="w-1/2 " />
              </div>
              <GoogleLogin />

              <p className="mt-6 text-sm text-center text-gray-200">
                Don't have an account yet?{" "}
                <Link
                  to={"/signUp"}
                  className="text-blue-500 focus:outline-none focus:underline hover:underline">
                  Sign up
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
