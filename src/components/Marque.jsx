import React from "react";
const Marquee = ({ texts }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-marquee-bg bg-cover bg-no-repeat h-[184px] 2xl:h-[242px] flex items-center justify-center">
      <div className="animate-marquee inline-block text-base 2xl:text-app-35">
      
        {texts?.map((text, index) => (
       
            <span
              key={index}
              className="text-white font-extrabold text-base md:text-2xl 2xl:text-app-35 mx-4 uppercase  space-x-4"
            >
            <span className="h-[14px] w-[14px] rounded-full inline-block bg-white  mr-2"></span>
            {text}
            </span>
     
         
        ))}
      </div>
      <div className="animate-marquee inline-block text-base 2xl:text-app-35">

        {texts?.map((text, index) => (

          <span
            key={index}
            className="text-white font-extrabold text-base md:text-2xl 2xl:text-app-35 mx-4 uppercase  space-x-4"
          >
            <span className="h-[14px] w-[14px] rounded-full inline-block bg-white  mr-2"></span>
            {text}
          </span>


        ))}
      </div>
    </div>
  );
};

export default Marquee;
