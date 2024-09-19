import React from "react";
import NavBar from "../components/navigation/NavBar";
import MobileNav from "../components/navigation/MobileNav";
import ImageComp from "../components/Image";
import CircledText from "../components/CircledText";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const ValueCard = ({ image, title, details }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 max-w-[200px]">
      <ImageComp image={image} />
      <p className="font-bold text-base md:text-app-32">{title}</p>
      <p className="text-sm md:text-base text-center">{details}</p>
    </div>
  );
};

const ChooseVenturesCard = ({ image, title, details }) => {
  return (
    <div
      className="px-6 py-3.5 flex flex-col gap-6"
      style={{ boxShadow: "12px 12px 20px 2px #D9D9D94D" }}
    >
      <ImageComp image={image} styles="w-[62px] h-[62px]" />
      <p className="font-medium text-base md:text-2xl 2xl:text-app-32">
        {title}
      </p>
      <p className="font-medium text-sm md:text-base">{details}</p>
    </div>
  );
};

const About = () => {
  const visions = [
    { image: "/images/diverse.png", text: "Diverse Service offerings" },
    { image: "/images/expert.png", text: "Expert Team" },
    { image: "/images/extensive.png", text: "Extensive Network" },
    { image: "/images/proven.png", text: "Proven Results" },
  ];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | Sky Ventures Studios</title>
        <link rel="canonical" href="https://www.skyventures.xyz/" />
      </Helmet>
      <section className="w-full bg-about-bg bg-cover bg-no-repeat h-[797px] md:h-screen 2xl:h-[865px] relative mb-20 md:mb-[100px]">
        {/* Navbar */}
        <div className="hidden md:absolute lg:block top-[2rem] left-0 right-0">
          <NavBar />
        </div>
        <div className="fixed z-50 lg:hidden top-[0rem] left-0 right-0 bg-white py-4">
          <MobileNav />
        </div>

        {/* Main Content */}
        <div className="flex flex-col justify-end items-center h-full text-white pb-10">
          <p className="font-extrabold uppercase text-2xl md:text-7xl 2xl:text-app-100 mb-[30px]">
            about us
          </p>
          <p className="font-medium text-sm md:text-2xl 2xl:text-app-32 text-center max-w-4xl mx-auto px-4">
            Sky Ventures Studios By the Numbers: "Sky Ventures Studios propels
            visionary projects with impactful results, backing every innovative
            step with solid statistics and achievements."
          </p>
        </div>
      </section>
      {/* section2 */}
      <div className="bg-cover bg-no-repeat bg-about-section-2-bg h-full 2xl:h-[946px] px-4 md:px-0 mb-20 md:mb-[100px]">
        <div className="w-full md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col gap-11 order-2 md:order-1">
            <p className="text-app-purple text-2xl md:text-7xl 2xl:text-app-100 font-bold">
              WHO WE ARE
            </p>
            <div className="flex flex-col gap-3.5">
              <p className="font-bold text-base md:text-3xl 2xl:text-app-40">
                Mission
              </p>
              <p className="text-sm md:text-2xl 2xl:text-app-3xl-2">
                "Our mission is to equip startups with the tools to innovate
                freely, ensuring their path to market success with robust
                technological support."
              </p>
            </div>
            <div className="flex flex-col gap-3.5">
              <p className="font-bold text-base md:text-3xl 2xl:text-app-40">
                Vision
              </p>
              <p className="text-sm md:text-2xl 2xl:text-app-3xl-2">
                "To empower visionary entrepreneurs by delivering innovative
                solutions that transform industries and promote sustainable
                growth
              </p>
            </div>
            <div className="flex flex-col gap-[17px]">
              {visions.map((item, index) => (
                <div className="flex items-center gap-3.5" key={index}>
                  <ImageComp image={item?.image} styles="h-[33px] w-[33px]" />
                  <p className="text-sm md:text-base">{item?.text}</p>
                </div>
              ))}
            </div>
          </div>
          <ImageComp
            image="/images/about-1.png"
            styles="order-1 md:order-2 object-cover"
          />
        </div>
      </div>
      {/* section3 */}
      <div className="w-full px-4 md:px-0 md:w-4/5 mx-auto mb-20 md:mb-[100px]">
        <div className="flex flex-col items-start md:items-center justify-center gap-6 mb-20 md:mb-[100px]">
          <p className="text-left md:text-center font-bold text-2xl md:text-7xl 2xl:text-app-100 text-app-purple uppercase">
            Our Core Values
          </p>
          <p className="w-full lg:w-3/4 text-left md:text-center font-medium text-sm md:text-2xl 2xl:text-app-32">
            Sky Ventures Studios is built on a foundation of agility,
            reliability, innovation, user-centricity, and sustainability
          </p>
        </div>
        <div
          className="rounded-[10px] p-0 md:p-10 lg:p-[100px] 2xl:p-[151px]"
          style={{ boxShadow: "12px 12px 20px 2px #D9D9D94D" }}
        >
          {/* <div className="flex justify-between items-center">
            <ValueCard
              image="/images/innovation.svg"
              title="Innovation"
              detials="We’re committed to continuous innovation, constantly enhancing
                our strategies and solutions"
            />
            <ValueCard
              image="/images/innovation.svg"
              title="Innovation"
              detials="We’re committed to continuous innovation, constantly enhancing
                our strategies and solutions"
            />
            <ValueCard
              image="/images/innovation.svg"
              title="Innovation"
              detials="We’re committed to continuous innovation, constantly enhancing
                our strategies and solutions"
            />
            <ValueCard
              image="/images/innovation.svg"
              title="Innovation"
              detials="We’re committed to continuous innovation, constantly enhancing
                our strategies and solutions"
            />
            <ValueCard
              image="/images/innovation.svg"
              title="Innovation"
              detials="We’re committed to continuous innovation, constantly enhancing
                our strategies and solutions"
            />
          </div> */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <ValueCard
              image="/images/innovation.svg"
              title="Innovation"
              details="We’re committed to continuous innovation, constantly enhancing our strategies and solutions"
            />
            <ValueCard
              image="/images/agility.svg"
              title="Agility"
              details="We rapidly adapt to changes and challenges, ensuring timely and effective responses."
            />
            <ValueCard
              image="/images/reliability.svg"
              title="Reliability"
              details="Our clients rely on us for dependable solutions that meet their highest standards."
            />
            <ValueCard
              image="/images/user-centric.svg"
              title="User-Centric"
              details="We focus on creating user-friendly solutions that improve engagement and satisfaction."
            />
            <ValueCard
              image="/images/sustainability.svg"
              title="Sustainability"
              details="Our strategies are designed to support long-term sustainability, both for our projects and the planet."
            />
          </div>
          {/* <div className="grid grid-cols-5 gap-4 justify-center mt-12">
            <div></div>
            <ValueCard
              image="/images/user-centric.svg"
              title="User-Centric"
              details="We focus on creating user-friendly solutions that improve engagement and satisfaction."
            />
            <div></div>
            <ValueCard
              image="/images/sustainability.svg"
              title="Sustainability"
              details="Our strategies are designed to support long-term sustainability, both for our projects and the planet."
            />
            <div></div>
          </div> */}
        </div>
      </div>
      {/* section4 */}
      <div className="w-full px-4 md:px-0 md:w-4/5 mx-auto mb-20 md:mb-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col gap-6 mb-[50px] md:mb-0">
            <p className="text-app-purple text-2xl md:text-6xl lg:text-7xl 2xl:text-app-100 font-bold">
              WHY CHOSE SKY VENTURES
            </p>
            <p className="text-sm md:text-2xl 2xl:text-app-32">
              Choose us for our comprehensive solutions, expert guidance, vast
              networking opportunities, and a track record of proven results.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 rounded-[10px]">
            <ChooseVenturesCard
              image="/images/diverse.png"
              title="Diverse Service offerings"
              details="From AI to Web 3.0, our broad range of services ensures all
                tech-based needs are met under one roof."
            />
            <ChooseVenturesCard
              image="/images/expert.png"
              title=" Expert Team"
              details="Our team of experts provides deep industry insights and bespoke solutions that drive your project forward"
            />
            <ChooseVenturesCard
              image="/images/extensive.png"
              title="Extensive Network"
              details="Leverage our wide-reaching connections for collaboration and support throughout your project’s lifecycle"
            />
            <ChooseVenturesCard
              image="/images/proven.png"
              title=" Proven Results"
              details="Our commitment to excellence is proven through our consistent delivery of successful, innovative projects"
            />
          </div>
        </div>
      </div>
      {/* section5 */}
      <div className="w-full px-4 md:px-0 md:w-4/5 mx-auto mb-20 md:mb-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[87px]">
          <ImageComp image="/images/chart.svg" />
          <div className="">
            <CircledText text="Streamlined Development Process" />
            <p className="mb-6 text-app-purple text-2xl md:text-6xl lg:text-7xl 2xl:text-app-100 font-bold uppercase">
              Agile and Adaptive
            </p>
            <p className="text-sm md:text-2xl 2xl:text-app-32">
              Our agile methodology ensures rapid, flexible project development,
              adapting quickly to your needs for efficient results.
            </p>
          </div>
        </div>
      </div>
      {/* section6 */}
      <div className="w-full px-4 md:px-0 bg-meet-bg bg-cover bg-no-repeat mb-20 md:mb-[100px]">
        <div className="w-full md:w-4/5 mx-auto">
          <div className="flex flex-col items-start md:items-center justify-center gap-6 mb-20 md:mb-[100px]">
            <p className="text-left md:text-center font-bold text-2xl md:text-7xl 2xl:text-app-100 text-app-purple uppercase">
              Meet the masterminds
            </p>
            <p className="w-full lg:w-3/4 text-left md:text-center font-medium text-sm md:text-2xl 2xl:text-app-32">
              United by code, fuelled by innovation, our team is not just a
              team; it's a symphony of minds orchestrating the future of
              technology.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="flex flex-col gap-2.5">
              <ImageComp image="/images/allen.svg" width={394} height={394} />
              <ImageComp image="/images/allen-name.svg" />
            </div>
            <div className="flex flex-col gap-2.5">
              <ImageComp
                image="/images/meet-forbes.svg"
                width={394}
                height={394}
              />
              <ImageComp image="/images/sky-wee.svg" />
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default About;
