import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Context/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ShowClasses = (classes) => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();
  const { availabeSeats, classImage, className, instructorName, price, _id } =
    classes.classes;
  const handleSelectButton = () => {
    const classDetails = {
      ClassId: _id,
      availabeSeats,
      classImage,
      instructorName,
      price,
      className,
      email: user?.email,
    };
    if (user && user?.email) {
      axiosSecure.post("/selectClass", classDetails).then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Class is Selected",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
    } else {
      Swal.fire({
        title: "Please Login Now",
        text: "Login First",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="py-2">
      <div
        className={` flex max-w-md justify-center items-center bg-gray-100  shadow-xl rounded-lg overflow-hidden`}
      >
        <div className="w-1/3  px-2 justify-center flex items-center ">
          <img className="rounded-lg h-44" src={classImage} alt="Class Image" />
        </div>
        <div className="w-2/3 p-4">
          <h1 className="text-gray-900 font-bold text-[16px] md:text-xl">
            {className}
          </h1>
          <p className="mt-2 text-black font-medium">
            Instructor : {instructorName}
          </p>
          <p className="mt-2 text-gray-700">Availabe Seats : {availabeSeats}</p>
          <div className="flex item-center mt-2">
            <svg
              className="w-5 h-5 fill-current text-gray-700"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
            <svg
              className="w-5 h-5 fill-current text-gray-700"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
            <svg
              className="w-5 h-5 fill-current text-gray-700"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
            <svg
              className="w-5 h-5 fill-current text-gray-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
            <svg
              className="w-5 h-5 fill-current text-gray-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
          </div>
          <div className="flex item-center justify-between mt-3">
            <h1 className="text-gray-700 font-bold text-xl">${price}</h1>
            <button
              onClick={() => {
                handleSelectButton(classes);
              }}
              className="px-3 py-2 bg-blue-700 text-white text-xs font-bold uppercase rounded-md"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowClasses;
