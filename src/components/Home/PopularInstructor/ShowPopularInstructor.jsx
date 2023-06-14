import React from "react";

const ShowPopularInstructor = ({ instructor }) => {
  const { email, image, name } = instructor;
  return (
    <div className="max-w-sm mx-auto rounded-lg overflow-hidden  shadow-2xl bg-gray-100">
      <img
        className="w-full rounded-lg h-60  py-5  px-5"
        src={image}
        alt="Profile"
      />

      <div className="px-6 py-4">
        <div className="font-bold text-gray-800 text-2xl md:text-3xl mb-2">
          {" "}
          {name}
        </div>
        <p className="text-gray-700 text-sm">
          {" "}
          <span>{email}</span>{" "}
        </p>
      </div>
      <div className="px-6 text-center  pb-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[13px] font-semibold text-gray-700 mr-2">
          #expert
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[13px] font-semibold text-gray-700 mr-2">
          #awesome
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[13px] font-semibold text-gray-700 mr-2">
          #professional
        </span>
      </div>
      <div className="mb-4 text-center">
        <button className=" bg-green-600 px-5 py-1 rounded-lg text-white">
          Follow
        </button>
      </div>
    </div>
  );
};

export default ShowPopularInstructor;
