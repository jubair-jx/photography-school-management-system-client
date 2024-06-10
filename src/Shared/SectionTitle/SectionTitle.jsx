import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div data-aos="fade-up" className="text-center mx-auto">
      <h2 className="uppercase   bg-gradient-to-r animate-text from-gray-800 via-gray-500 to-sky-400 bg-clip-text text-transparent text-2xl mx-auto mt-2 font-extrabold border-purple-800 rounded-lg border-y-[3px] w-72 py-3  mb-3">
        {heading}
      </h2>
      <p className="bg-gradient-to-r animate-text from-yellow-600 via-gray-900 to-yellow-600 bg-clip-text text-transparent  text-lg italic">
        ~ {subHeading} ~
      </p>
    </div>
  );
};

export default SectionTitle;
