import React from "react";
import ImageComp from "./Image";

const CircledText = ({ text }) => {
  return (
    <div className="relative z-30">
      <ImageComp
        image="/images/circle-sign.svg"
        styles="max-w-[300px] 2xl:w-full hidden md:block"
      />
      <ImageComp image="/images/circle-sign-m.svg" styles="block md:hidden" />
      <p className="text-[#EE3248] font-semibold text-2xl 2xl:text-app-40 uppercase hidden md:block absolute bottom-[3rem] left-[2rem]">
        {text}
      </p>
      <p className="text-[#EE3248] font-semibold text-2xl 2xl:text-app-40 uppercase block md:hidden absolute bottom-[0rem] left-[2rem]">
        {text}
      </p>
    </div>
  );
};

export default CircledText;
