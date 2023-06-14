import React from "react";
import "../CommonBanner/BannerCM.css";

const CommonBanner = ({ heading }) => {
  return (
    <div className="cm-banner justify-center items-center flex pt-10">
      <div className="overlay"></div>

      <h2 className="font-bold text-4xl md:text-6xl bg-gradient-to-r animate-text from-green-100 via-purple-400 to-green-200 bg-clip-text text-transparent">
        {heading}
      </h2>
    </div>
  );
};

export default CommonBanner;
