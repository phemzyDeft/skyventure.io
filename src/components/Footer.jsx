import React from "react";
import ImageComp from "./Image";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerCountry = [
    {
      image: "/images/dubai.png",
      country: "Dubai, UAE",
      address: "Office 43-44, Al Fahidi, Bur Dubai, Dubai, UAE",
    },
    {
      image: "/images/paris.png",
      country: "Paris, France",
      address: "66 Avenue des Champs- Elysées 75008",
    },
    {
      image: "/images/edenkoben.png",
      country: "Edenkoben, Germany",
      address: "Nonnenstraße 26 67480 Edenkoben Rheinland-Pfalz",
    },
    {
      image: "/images/ruislip.png",
      country: "Ruislip, England",
      address: "1 Kelvedon Court, Long Drive, Ruislip, England, HA4 0HJ",
    },
  ];

  const socials = [
    // { image: "/images/medium.png", text: "Medium" },
    { image: "/images/twitter.png", text: "Twitter", link:'https://x.com/skyventurelabs' },
    { image: "/images/linkedin.png", text: "Linkedin", link:'https://www.linkedin.com/company/skyventurelabs/' },
  ];

  return (
    <div className="bg-black px-6 md:px-10  h-full">
      <div className="grid gap-y-10 md:grid-cols-2 ">
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-col py-10">
          
          <p className="text-sm md:text-lg font-normal text-white ml-6">
              Sky Venture spearheads the Web3 revolution, driving innovation and forging strategic partnerships to mold the future of technology. Join us as we build our legacy in the Web3 realm.
          </p>
          </div>

        </div>
     
        <div className="flex flex-col justify-center gap-y-16 items-center ">

          <div className="flex justify-between gap-x-6">

            <p className="text-app-15 text-[#C1C1C1]">
              <Link to="/terms-and-conditions">Terms & conditions</Link>
            </p>
            <p className="text-app-15 text-[#C1C1C1]">
              <Link to="/privacy-and-policy">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
      <span className="h-[0.1px] inline-block bg-white w-full"></span>
      <div className="text-center text-white  p-4 ">
        <p>Copyrights@skyventure 2024</p>
      </div>
      </div>
    // </div>
  );
};

export default Footer;
