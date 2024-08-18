import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Context/AuthProvider";
import SocialLogin from "../../../Shared/SocialLogin/SocialLogin";
import loginImg from "../../../assets/login.png";
import Logo from "../../../assets/logo.png";
const Login = () => {
  //TODO: Some Upgradtion Here
  const [showPassword, setShowPassword] = useState(false);
  const [error] = useState("");
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
    });
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password).then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User Has Been Login",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate(from, { replace: true });
    });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <Helmet>
        <title>WRS || Login</title>
      </Helmet>
      <section className="py-6 container mx-auto">
        <div
          data-aos="fade-up"
          className=" flex h-full flex-wrap items-center  justify-center lg:justify-between"
        >
          <div className=" md:mb-0 md:w-8/12 lg:w-6/12">
            <img src={loginImg} className="w-full" alt="Phone image" />
          </div>

          <div className="md:w-8/12 w-[90%] lg:ml-2 lg:w-5/12 md:mt-16 mt-0">
            <section className="">
              <div className="flex flex-col items-center justify-center   mx-auto ">
                <a
                  href="#"
                  className="flex gap-2 items-center mb-6 text-2xl font-semibold"
                >
                  <img className="w-10 rounded-3xl" src={Logo} alt="" />
                  <h2
                    style={{ fontFamily: "Signika Negative', sans-serif" }}
                    className="text-lg items-center  font-bold"
                  >
                    WonderRoots Scholars
                  </h2>
                </a>
                <div className="w-full  bg-gradient-to-r from-gray-200 to-lime-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-700">
                  <div className="p-6 text-gray-800 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                      Login to your account
                    </h1>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-4 md:space-y-6"
                      action="#"
                    >
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Your email
                        </label>
                        <input
                          {...register("email", { required: true })}
                          type="email"
                          name="email"
                          id="email"
                          defaultValue={"jubair123@mail.com"}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Enter Your Mail..."
                        />
                        {errors.name && (
                          <span className="text-red-600">
                            Email is required
                          </span>
                        )}
                      </div>
                      <div className="relative">
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Password
                        </label>
                        <input
                          {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            // pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                          })}
                          type={showPassword ? "text" : "password"}
                          name="password"
                          defaultValue={"@#Jubair2097"}
                          id="password"
                          placeholder="Enter Your Password...."
                          className=" border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        <button
                          type="button"
                          className="absolute right-4 bottom-[1px] transform -translate-y-1/2 text-gray-400"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <FaEye className="h-6 w-6 rounded-full bg-white" />
                          ) : (
                            <FaEye className="h-6 w-6 rounded-full bg-white" />
                          )}
                        </button>
                        {errors.name && (
                          <span className="text-red-600">
                            Password is required
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="remember"
                              aria-describedby="remember"
                              type="checkbox"
                              className="w-4 h-4 border  border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                              required
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className=" ">
                              Remember me
                            </label>
                          </div>
                        </div>
                        <p className="text-sm cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500">
                          Forgot password?
                        </p>
                      </div>
                      <p className="text-red-600 text-sm">{error}</p>
                      <p className=" font-poppins font-medium my-2 text-base text-orange-600">
                        {
                          "(N:B:) The default value is admin credentials (If you don't have account? create your own account)"
                        }
                      </p>
                      <button
                        type="submit"
                        className="w-full mt-5 text-md bg-violet-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Sign in
                      </button>
                      <p className="text-center mb-0">Or</p>
                      <SocialLogin></SocialLogin>
                      <p className="text-sm font-light  ">
                        Don’t have an account yet?{" "}
                        <Link
                          to="/register"
                          className="font-medium  text-primary-600 hover:underline dark:text-primary-500"
                        >
                          Sign up Now
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
