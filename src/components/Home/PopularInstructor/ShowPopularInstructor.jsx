import Swal from "sweetalert2";
// eslint-disable-next-line react/prop-types
const ShowPopularInstructor = ({ instructor }) => {
  // eslint-disable-next-line react/prop-types
  const { email, image, name } = instructor;
  return (
    <div className="max-w-sm mx-auto rounded-lg overflow-hidden  shadow-2xl bg-gray-100">
      <img
        className="w-full rounded-xl h-60  py-5  px-5"
        src={image}
        alt="Profile"
      />

      <div className="px-6 py-2">
        <div className="font-semibold text-gray-800 text-xl md:text-2xl">
          {" "}
          {name}
        </div>
        <p className="text-gray-700 text-sm">
          {" "}
          <span>{email}</span>{" "}
        </p>
      </div>
      <div className="px-6 pb-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[12px] font-normal text-gray-700 mr-2">
          #expert
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[12px] font-normal text-gray-700 mr-2">
          #awesome
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[12px] font-normal text-gray-700 mr-2">
          #professional
        </span>
      </div>
      <div className="mb-4 text-center px-6">
        <button
          onClick={() =>
            Swal.fire({
              title: "Great!!",
              text: "You are following the instructor",
              icon: "success",
            })
          }
          className=" bg-green-600 w-full py-1 rounded-md text-white"
        >
          Follow
        </button>
      </div>
    </div>
  );
};

export default ShowPopularInstructor;
