import React from "react";
import NavBar from "../components/navigation/NavBar";
import Footer from "../components/Footer";
import MobileNav from "../components/navigation/MobileNav";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Marquee from "../components/Marque";
import Founder from "../components/Founder";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Card = ({ count, title, bg1, bg2, path, list }) => {
  return (
    <div to={path} className=" ">
      <div
        className={`relative animated-card-child   z-30 w-screen sm:w-[400px] h-[487px] ${bg1} md:rounded-3xl overflow-hidden bg-cover bg-center transition-all ease-in-out duration-100 a z-20`}
      >
        <div className="absolute bottom-0 left-0 w-full p-4 z-20">
          <div className="mb-10 ">
            <div className="text-white text-[30px] lg:text-app-40
 font-extrabold uppercase font-roboto  text-shadow-2xl  ">
              {title}
            </div>
            <Link
              to={path}
              className="bg-[#730EFA] text-white rounded-[50px] text-center p-[10px] mt-6 inline-block md:w-[184px]" target="_blank">
              Discover
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const offers = [
    {

      title: "Sky Venture Labs",
      bg1: "bg-bg-offer-1",
      bg2: "group-hover:bg-bg-offer-1-variant",
      path: "https://skyventurelabs.com",

    },
    {

      title: "Sky Venture STUDIOS",
      bg1: "bg-bg-offer-2",
      bg2: "group-hover:bg-bg-offer-2-variant",
      path: "https://skyventurestudios.com",

    },
    {
      count: "02",
      title: "CRYPTOHUNTER .NEWS",
      bg1: "bg-bg-offer-3",
      bg2: "group-hover:bg-bg-offer-2-variant",
      // path: "/coming-soon",

    },

  ];

  const texts = [
    "SKY VENTURE LABS",
    "SKY VENTURE STUDIOS",
    "CRYPTOHUNTER.NEWS"

  ];
  return (
    <main className="  w-full">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Sky Venture</title>
        <link rel="canonical" href="https://www.skyventure.io/" />
      </Helmet>
      <section className="w-full  bg-hero-section bg-cover  bg-center  xl:bg-cover bg-no-repeat h-screen relative pt-[4rem] ">
        {/* Adjusted padding-top */}

        {/* Navbar */}
        <div className="hidden md:absolute lg:block top-0 left-0 right-0">
          <NavBar />
        </div>
        <div className="fixed z-50 lg:hidden top-[0rem] left-0 right-0 bg-white py-4">
          <MobileNav />
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center h-full pb-10 ">

          <div>
            <h2 className="text-5xl lg:text-6xl 2xl:text-app-100 font-bold text-center uppercase  text-white ">
              One world, one ecosystem
            </h2>
            <h2 className="text-5xl lg:text-6xl 2xl:text-app-100 font-bold text-center uppercase mb-6 text-white">
              #1 incubator
            </h2>
          </div>
          <p className="text-center font-medium text-lg md:text-2xl  2xl:text-app-3xl w-full 2xl:max-w-[1268px] max-w-[800px] flex justify-center mb-12 2xl:mb-[100px] text-white">
            Risk-Sharing Incubation: We are the first to invest in your success by sharing the risks, not just the rewards
          </p>

        </div>
      </section>
      <Marquee texts={texts} />

      <section className="xl:mb-10 w-full bg-svlab-section bg-cover bg-center xl:bg-cover bg-no-repeat lg:h-[50vh] xl:h-screen relative pt-[4rem]">
        {/* Adjusted padding-top */}

        {/* Main Content */}
        <div className="flex flex-col items-center  lg:justify-end h-full pb-10">

          <div>
            <h2 className=" opacity-70 text-3xl md:text-5xl lg:text-6xl 2xl:text-app-100 font-bold text-center uppercase  text-white mb-6">
              SKY VENTURE
            </h2>
          </div>
          <p className="text-center uppercase text-lg md:text-3xl  2xl:text-app-3xl font-bold w-full 2xl:max-w-[1268px] max-w-[800px] flex justify-center mb-12 2xl:mb-[100px] text-white ">
            One World, One Ecosystem," encapsulates our commitment to creating a unified Incubation platform for global innovation.          </p>

        </div>
      </section>

      <div>



        <div className="py-16  2xl:pt-[173px] flex justify-center ">
          <div className="">

            <div className="w-full  mx-auto px-4 md:px-0 pb-[35px] 2xl:[106px]">
              {/* //grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 content-center justify-items-center */}

              <div className="flex items-center justify-center flex-wrap gap-8 mx-auto">
                {offers?.map((item, index) => (
                  <Card
                    key={index}
                    title={item?.title}
                    count={item?.count}
                    bg1={item?.bg1}
                    bg2={item?.bg2}
                    path={item?.path}
                    list={item.list}
                  />
                ))}
              </div>
            </div>




            <section className="w-full px-4 md:px-0  pt-6  md:pt-[100px] bg-black">
              <div className="w-full md:w-4/5 mx-auto">
                <div className="flex flex-col items-center justify-center md:gap-6 my-16 md:mb-[50px] space-y-3">
                  <p className="text-left md:text-center font-bold text-2xl md:text-7xl 2xl:text-app-100 text-app-purple uppercase">
                    THE FOUNDERS
                  </p>
                  <p className="w-full lg:w-3/4 text-center font-medium text-sm md:text-2xl 2xl:text-app-32 text-white">
                    We are dedicated to nurturing ambitious projects from inception to launch, ensuring projects not only survive but excel.
                  </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center sm:gap-x-24 lg:gap-x-64 bg-founder-section  bg-contain  bg-no-repeat  py-24 ">

                  <Founder
                    imagepath={"/images/allen.svg"}
                    name={"Allen Tan Chee Hoe"}
                    post={"CO-FOUNDER | VP | CIO"}
                    description=' 15 years+ of experience in product development, focusing on crafting solutions for underserved communities. Ex Findwork that acquiring over 4 million certified and verified users and connecting with more than 7,000 businesses in the blue-collar sector.'
                    social={[

                      {
                        icon: <BsTwitterX className='w-4 h-4 ' />, link: 'https://x.com/AllenTanCheeHoe' },

                      { icon: <FaLinkedinIn className='w-4 h-4 ' />, link:'https://www.linkedin.com/in/allen-tan-chee-hoe/'},

                    ]}

                  />

                  <Founder
                    imagepath={"/images/meet-forbes.svg"}
                    name={"Sky Wee"}
                    post={"CO-FOUNDER | MD | CBDO"}
                    description={<>Crypto & Gaming Influencer with 4M followers | Forbes Business Council Member | Managing Partner at VC firms | Binance Official KOL |  <Link className="text-blue-500" to='
https://councils.forbes.com/profile/Sky-Wee-Managing-Partner-VC-Crypto-Influencer-Advisor-ATF-Capital/950ed4a7-2f34-4b69-a936-cf301062f115'>
                      https://councils.forbes.com/profile/Sky-Wee-Managing-Partner-VC-Crypto-Influencer-Advisor-ATF-Capital/950ed4a7-2f34-4b69-a936-cf301062f115</Link></>}
                    social={[
                      { icon: <FaFacebookF className='w-4 h-4 ' />, link: 'https://www.facebook.com/skywee97' },
                      { icon: <BsTwitterX className='w-4 h-4 ' />, link: 'https://x.com/OfficialSkyWee1' },

                      { icon: <FaLinkedinIn className='w-4 h-4 ' />, link: 'https://www.linkedin.com/in/skywee97/' },
                      { icon: <FaTiktok className='w-4 h-4 ' />, link: 'https://www.tiktok.com/@skywee97_' },
                      { icon: <FaInstagram className='w-4 h-4 ' />, link: 'https://www.instagram.com/skywee97/' },

                    ]}


                  />

                </div>
              </div>
            </section>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
