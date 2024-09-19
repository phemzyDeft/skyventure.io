import React from "react";
import ImageComp from "../Image";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const serviceMenu = [
    {
      title: "Artifical intelligence",
      path: "/services/artificial-intelligence",
      image: "/images/computer-icon.svg",
    },
    {
      title: "Web3 development",
      path: "/services/web3-development",
      image: "/images/creative-icon.svg",
    },
    {
      title: "Game development",
      path: "/services/game-development",
      image: "/images/business-icon.svg",
    },

    {
      title: "Creative design",
      path: "/services/creative-design",
      image: "/images/lead-icon.svg",
    },
   // {
   //   title: "Lead ambassador",
   //   path: "/services/lead-ambassador",
   //   image: "/images/lead-icon.svg",
   // },
   // {
   //   title: "Strategic advisory",
   //   path: "/services/strategic-advisory",
   //   image: "/images/lead-icon.svg",
   // },
    {
      title: "Softare development",
      path: "/services/software-development",
      image: "/images/lead-icon.svg",
    },
  ];
  const location = useLocation();
  return (
    <section className="bg-transparent rounded-[80px] px-10 py-4 flex justify-between items-center w-full max-w-[1220px] 2xl:max-w-[1760px] mx-auto">
      {/* <Link to="/">
        <ImageComp image="/images/logo.svg" />
<ImageComp image="/images/10.png" styles = "h-24"/>
      </Link>  */}
      {/* <nav>
        <ul className="flex items-center 2xl:gap-[63px] gap-8 text-sm 2xl:text-app-base cursor-pointer">
          <li
            className={`${
              location?.pathname === "/" ? "font-bold" : "font-normal"
            } hover:font-bold transition-all ease-in-out duration-100`}
          >
            <Link to="/">HOME</Link>
          </li>
          <li
            className={`${
              location?.pathname === "/about-us" ? "font-bold" : "font-normal"
            } hover:font-bold transition-all ease-in-out duration-100`}
          >
            <Link to="/about-us">ABOUT US</Link>
          </li>
          <div className="relative group">
            <li
              className={`${
                location?.pathname.includes("/services") ? "font-semibold" : ""
              } cursor-pointer hover:text-app-complimentary-color transition-colors ease-in-out uppercase flex items-center gap-2`}
            >
              <span>services</span>
              <ImageComp
                image="/images/arrow-down.svg"
                styles={`group-hover:rotate-180 px-2`}
              />
            </li>
            <div className="w-[250px] absolute top-[1rem] bg-transparent">
              <div className="px-4 py-2 bg-[#F8F5FF] rounded-[5px] group-hover:flex flex-col gap-2 hidden mt-[3rem]">
                {serviceMenu.map((service, index) => (
                  <Link key={index} to={service?.path}>
                    <div
                      className={`${
                        location?.pathname === service?.path
                          ? "font-semibold"
                          : "font-normal"
                      } flex items-center gap-4 cursor-pointer hover:font-semibold`}
                    >
                      {/* <ImageComp image={service?.image} /> 
                      <span className="text-app-sm">{service?.title}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <li
            className={`${
              location?.pathname === "/contact" ? "font-bold" : "font-normal"
            } hover:font-bold transition-all ease-in-out duration-100`}
          >
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="bg-[#6B00FA] border border-[#9498FF] text-white py-3.5 px-12 rounded-3xl text-base 2xl:text-app-xl">
            Login
          </li>
        </ul>
      </nav> */}
    </section>
  );
};

export default NavBar;
