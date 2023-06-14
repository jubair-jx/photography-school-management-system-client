import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { user, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      const loggedUser = result.user;
      const savedUser = {
        name: loggedUser.displayName,
        email: loggedUser.email,
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
            Swal.fire({
              position: "center",
              icon: "success",
              title: "User created successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div>
      <div className="text-center mx-auto">
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="w-full text-white   border-gray-400  bg-gray-600 border-[3px]  focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
        >
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            className="w-8"
            alt="google logo png suite everything you need know about google newest"
          />
          Sign in with Google<div></div>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
