import React, { useState } from "react";
import ImageComp from "./Image";

const Accordion = ({ text, detials }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${
        isOpen && "border border-[#6F00FF80]"
      } flex flex-col px-4 sm:px-6 md:px-8 lg:px-10 py-5 sm:py-6 md:py-7 rounded-2xl shadow-custom-shadow transition-all ease-in-out duration-300`}
    >
      <div className="flex justify-between items-center">
        <p className="font-medium text-base sm:text-lg md:text-lg 2xl:text-2xl">
          {text}
        </p>
        <div
          className={`${
            isOpen ? "bg-app-purple" : "bg-[#F7F7FF]"
          } rounded-lg flex justify-center items-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 cursor-pointer transition-all ease-in-out duration-300`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <ImageComp
            image={isOpen ? "/images/minus.svg" : "/images/plus.svg"}
            styles=""
          />
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all ease-in-out duration-300 ${
          isOpen
            ? "max-h-[1000px] opacity-100 pt-6 sm:pt-7 md:pt-8"
            : "max-h-0 opacity-0"
        }`}
      >
        <p className="font-medium text-base sm:text-lg md:text-lg 2xl:text-2xl">
          {detials}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
