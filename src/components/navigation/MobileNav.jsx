import React, { useState } from "react";
import ImageComp from "../Image";
import { Link, useLocation } from "react-router-dom";

const MobileNav = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const [openServiceMenu, setOpenServiceMenu] = useState(false);

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

  return (
    <>
      <section className="bg-[#F8F5FF] rounded-[80px] px-10 py-2 flex justify-between items-center w-full max-w-[1220px] 2xl:max-w-[1760px] mx-auto">
        {/* <Link to="/">
          <ImageComp image="/images/logo.svg" styles="h-16" />
<ImageComp image="/images/10.png" styles="h-16" />

        </Link> */}
        {/* <ImageComp
          image="/images/menu-icon.svg"
          handleClick={() => {
            setOpenMenu(!openMenu);
          }}
          styles="cursor-pointer"
        /> */}
      </section>
      {/* {openMenu && (
        <div className="h-screen w-full bg-white pt-6 fixed lg:hidden z-40 text-black">
          <ul className="flex flex-col gap-2.5 pt-4 pl-6">
            <li
              className={`${
                location.pathname === "/" ? "font-bold" : "font-normal"
              } hover:text-app-complimentary-color transition-colors ease-in-out capitalize py-[1.5px] text-app-sm`}
              onClick={() => setOpenMenu(false)}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`${
                location.pathname === "/about-us" ? "font-bold" : "font-normal"
              } hover:text-app-complimentary-color transition-colors ease-in-out capitalize py-[1.5px] text-app-sm`}
              onClick={() => setOpenMenu(false)}
            >
              <Link to="/about-us">About Us</Link>
            </li>

            <li
              className={` ${
                location?.pathname.includes("/services")
                  ? "font-bold"
                  : "font-normal"
              } cursor-pointer hover:text-app-complimentary-color transition-colors ease-in-out capitalize flex items-center gap-[34px] text-sm`}
              onClick={() => setOpenServiceMenu(!openServiceMenu)}
            >
              <span className="text-app-sm">services</span>
              <ImageComp
                image="/images/arrow-down.svg"
                styles={`${openServiceMenu && "rotate-270"}`}
              />
            </li>
            {openServiceMenu && (
              <div className="px-4 py-2 rounded-[5px] flex flex-col gap-2 top-[2rem]">
                {serviceMenu.map((service, index) => (
                  <Link key={index} to={service?.path}>
                    <div
                      className={`${
                        location?.pathname === service?.path
                          ? "font-bold"
                          : "font-normal"
                      } flex items-center gap-4 cursor-pointer 
                 hover:font-semibold`}
                      onClick={() => setOpenMenu(false)}
                    >
                      {/* <ImageComp image={service?.image} /> 
                      <span className="text-app-sm">{service?.title}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            <li
              className={`${
                location.pathname === "/contact" ? "font-bold" : "font-normal"
              } hover:text-app-complimentary-color transition-colors ease-in-out capitalize py-[1.5px] text-app-sm`}
              onClick={() => setOpenMenu(false)}
            >
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      )} */}
    </>
  );
};

export default MobileNav;
