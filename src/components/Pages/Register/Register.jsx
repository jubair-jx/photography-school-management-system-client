import AOS from "aos";
import "aos/dist/aos.css";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Context/AuthProvider";
import SocialLogin from "../../../Shared/SocialLogin/SocialLogin";
import Logo from "../../../assets/logo.png";
import registrationImg from "../../../assets/registration.jpg";
const Register = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
    });
  }, []);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      result.user.displayName = data.name;
      result.user.photoURL = data.photoUrl;
      updateUserProfile(data.name, data.photoURL).then(() => {
        const savedUser = {
          name: data.name,
          email: data.email,
          image: data.photoUrl,
        };
        fetch("https://wonder-server-eight.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
      });
    });
  };
  const password = watch("password");

  const validateConfirmPassword = (value) => {
    if (value === password) {
      return true;
    }
    return "Passwords do not match";
  };
  return (
    <section className="">
      <Helmet>
        <title>WRS || Register</title>
      </Helmet>
      <div
        data-aos="fade-down"
        className=" flex h-full flex-wrap items-center bg-white justify-center lg:justify-between container mx-auto"
      >
        <div className=" md:mb-0 md:w-8/12 lg:w-6/12">
          <img src={registrationImg} className="w-full" alt="Phone image" />
        </div>

        <div className="md:w-8/12 w-[90%]  lg:w-5/12 md:mt-24 mt-0">
          <section className="">
            <div className="flex flex-col items-center justify-center   mx-auto ">
              <a
                href="#"
                className="flex gap-2 items-center mb-6 text-2xl font-semibold text-gray-900 "
              >
                <img className="w-10 rounded-3xl" src={Logo} alt="" />
                <h2
                  style={{ fontFamily: "Signika Negative', sans-serif" }}
                  className="text-lg items-center  font-bold"
                >
                  WonderRoots Scholars
                </h2>
              </a>
              <div className="w-full  bg-gradient-to-r from-gray-200 to-lime-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-700">
                <div className="p-6 text-gray-800 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                    Register to your account
                  </h1>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4 md:space-y-6"
                    action="#"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Your Full Name :
                      </label>
                      <input
                        {...register("name", { required: true })}
                        type="text"
                        name="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Your name..."
                      />
                      {errors.name && (
                        <span className="text-red-600">Name is required</span>
                      )}
                    </div>
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Your Mail..."
                      />
                      {errors.email && (
                        <span className="text-red-600">Email is required</span>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="text"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Your Photo URL
                      </label>
                      <input
                        {...register("photoUrl", { required: true })}
                        type="text"
                        name="photoUrl"
                        placeholder="Enter Your Photo URL...."
                        className=" border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      {errors.photoUrl && (
                        <span className="text-red-600">
                          Photo URL is required
                        </span>
                      )}
                    </div>

                    <div>
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

                          pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                        })}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Your Password...."
                        className=" border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      {errors.password?.type === "required" && (
                        <p className="text-red-600">Password is required</p>
                      )}
                      {errors.password?.type === "minLength" && (
                        <p className="text-red-600">
                          Password must be 6 characters
                        </p>
                      )}
                      {errors.password?.type === "maxLength" && (
                        <p className="text-red-600">
                          Password must be less than 20 characters
                        </p>
                      )}
                      {errors.password?.type === "pattern" && (
                        <p className="text-red-600">
                          Password must have one Uppercase one lower case, one
                          number and one special character.
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Confirm Password
                      </label>
                      <input
                        {...register("confirmPassword", {
                          required: true,
                          validate: validateConfirmPassword,
                        })}
                        type="password"
                        id="password"
                        placeholder="Enter Your Confirm Password...."
                        className=" border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      {errors.confirmPassword && (
                        <span className="text-red-600">
                          {errors.confirmPassword.message}
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
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="remember" className=" ">
                            Remember me
                          </label>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <p className="text-red-600 text-sm">{error}</p>
                    <button
                      type="submit"
                      className="w-full mt-5 text-md bg-violet-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Sign up
                    </button>
                    <p className="divider">Or</p>

                    <SocialLogin></SocialLogin>

                    <p className="text-sm font-light  ">
                      Already have a Account.?{" "}
                      <Link
                        to="/login"
                        className="font-medium  text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Sign in Now
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
  );
};

export default Register;
