import React from "react";

const GradientText = ({ text }) => {
  return (
    <div className="font-bold">
      <h1 className="bg-gradient-to-r uppercase text-2xl md:text-5xl lg:text-7xl 2xl:text-app-100 font-bold from-[#6F00FF] to-[#9194FC] text-transparent bg-clip-text">
        {text}
      </h1>
    </div>
  );
};

export default GradientText;
