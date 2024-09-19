import React from "react";
import NavBar from "../components/navigation/NavBar";
import MobileNav from "../components/navigation/MobileNav";
import ImageComp from "../components/Image";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const ComingSoon = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Coming Soon | Sky Venture</title>
                <link rel="canonical" href="https://www.skyventure.io/" />
            </Helmet>
            <section className="w-full bg-coming-soon-bg bg-cover bg-no-repeat h-[642px] md:h-screen 2xl:h-[1142px] relative">
                {/* Navbar */}
                <div className="hidden md:absolute lg:block top-[2rem] left-0 right-0">
                    <NavBar />
                </div>
                <div className="fixed z-50 lg:hidden top-[0rem] left-0 right-0 bg-white py-4">
                    <MobileNav />
                </div>

                {/* Main Content */}
                <div className="flex flex-col justify-end 2xl:justify-center items-center h-full text-white pb-10 px-4 md:px-0">
                    <ImageComp image="/images/coming-soon-text.svg" />
                    <ImageComp image="/images/our-new.svg" styles="mb-10" />
                    <p className="text-base lg:text-2xl text-black 2xl:text-app-40 text-center">
                        We create awesome stuff for you
                    </p>
                </div>

                {/* Main Content */}
            </section>
            {/* <Footer /> */}
        </>
    );
};

export default ComingSoon;