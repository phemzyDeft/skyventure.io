import React from "react";
import ImageComp from "./Image";

const BlogCardComponent = ({ title, details, image, date, month }) => {
  return (
    <div className="relative z-30 flex flex-col items-center">
      <div className="relative top-[5rem]">
        <ImageComp
          image={image}
          styles="w-[349px] h-[220px] object-cover rounded-xl"
        />
        <div
          className="absolute bottom-[-3rem] right-3 bg-app-purple text-white rounded-full w-[106px] 
        h-[106px] flex flex-col items-center justify-center z-30"
        >
          <p className="text-app-25 font-bold">{date}</p>
          <p className="text-app-25 font-normal">{month}</p>
        </div>
      </div>
      <div className="w-[349px] 2xl:w-[411px] bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-8 h-[442px] flex justify-center items-center">
          <div>
            <h2 className="font-bold text-app-25 mb-5">{title}</h2>
            <p className="text-app-sm">{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardComponent;
