import React from "react";
import ImageComp from "./Image";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div >
      <div className="flex w-full justify-center">
        <ImageComp image="/images/contact-text.svg" />
      </div>
      <div className="bg-contact-bg-m md:bg-contact-bg w-full h-full bg-cover bg-no-repeat md:h-[270px] pb-[50px] md:pb-0">
        <div className="w-4/5 mx-auto h-full pt-20">
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-3.5">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <ImageComp image="/images/sharing.svg" />
              <p className="text-center md:text-left font-bold text-2xl 2xl:text-app-40-48 text-white">
                Sharing Expertise. Building <br></br> Relationship.
              </p>
            </div>
            <div>
              <Link to="mailto:hello@skyventurelabs.com">
              <button className="px-8 2xl:px-16 py-4 2xl:py-6 text-app-purple font-semibold text-base 2xl:app-25 rounded-[42px] bg-white">
                Lets Connect
              </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
