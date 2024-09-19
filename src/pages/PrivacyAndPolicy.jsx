import React from "react";
import NavBar from "../components/navigation/NavBar";
import MobileNav from "../components/navigation/MobileNav";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const PrivacyAndPolicy = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Privacy And Policy | Sky Venture</title>
        <link rel="canonical" href="https://www.skyventure.io/" />
      </Helmet>
      <section className="w-full bg-contact-hero-bg bg-cover bg-no-repeat h-[400px] relative">
        {/* Navbar */}
        <div className="hidden md:absolute lg:block  left-0 right-0">
          <NavBar />
        </div>
        <div className="fixed z-50 lg:hidden top-[0rem] left-0 right-0 bg-white py-4">
          <MobileNav />
        </div>

        {/* Main Content */}
        <div className="flex flex-col justify-end items-center h-full text-white pb-10">
          <p className="font-extrabold uppercase text-2xl md:text-7xl 2xl:text-app-100 mb-[30px]">
            Privacy Policy
          </p>
        </div>
      </section>
      <div className="px-4 md:px-12 2xl:px-[93px] py-8 2xl:py-[69px] font-medium text-sm md:text-lg 2xl:text-3xl-2">
        <div className="flex flex-col mb-8 ">
          <p>Privacy Policy </p>
          <p>Effective Date: 22nd August 2024</p>
        </div>
        <div>
          <div className="flex flex-col mb-6 2xl:mb-12">
            <p className="font-bold md:text-app-xl 2xl:app-40">
              1. Introduction{" "}
            </p>
            <p>
              Welcome to Sky Venture. We value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, and safeguard your data when
              you interact with our website and services.
            </p>
          </div>
          <div className="flex flex-col mb-6 2xl:mb-12">
            <p className="font-bold md:text-app-xl 2xl:app-40">
              2. Information We Collect
            </p>
            <p>We may collect the following types of information: </p>
            <ul className="list-disc pl-4">
              <li>
                Personal Information: Name, email address, phone number, and
                other contact details provided by you.
              </li>
              <li>
                Usage Data: Information on how you interact with our website,
                including IP addresses, browser types, referring/exit pages, and
                date/time stamps.
              </li>
              <li>
                Cookies: We use cookies to enhance your experience on our
                website. Cookies are small files stored on your device that help
                us track your preferences and usage patterns.
              </li>
            </ul>
          </div>

          <div className="flex flex-col mb-6 2xl:mb-12">
            <p className="font-bold md:text-app-xl 2xl:app-40">
              3. How We Use Your Information
            </p>
            <p>We may use your information for the following purposes: </p>
            <ul className="list-disc pl-4">
              <li>
                To Provide Services: To fulfill your requests and provide you
                with our products and services.
              </li>
              <li>
                To Improve Our Website: To understand how users interact with
                our site and improve our offerings.
              </li>
              <li>
                To Communicate: To send you updates, newsletters, and other
                information related to Sky Venture.
              </li>
              <li>
                To Comply with Legal Obligations: To fulfill legal and
                regulatory requirements.
              </li>
            </ul>
          </div>

          <div className="flex flex-col mb-6 2xl:mb-12">
            <p className="font-bold md:text-app-xl 2xl:app-40">
              4. Sharing Your Information
            </p>
            <p>
              We do not sell or share your personal information with third
              parties except:{" "}
            </p>
            <ul className="list-disc pl-4">
              <li>
                Service Providers: We may share information with trusted service
                providers who assist us in operating our website and providing
                our services.
              </li>
              <li>
                Legal Requirements: If required by law or legal process, we may
                disclose your information to comply with legal obligations
              </li>
            </ul>
          </div>

          <div className="flex flex-col mb-6 2xl:mb-12">
            <p className="font-bold md:text-app-xl 2xl:app-40">
              5. Security of Your Information
            </p>
            <p>
              We take the security of your information seriously and implement
              appropriate technical and organizational measures to protect it.
              However, no method of transmission over the internet is entirely
              secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="flex flex-col mb-6 2xl:mb-12">
            <p className="font-bold md:text-app-xl 2xl:app-40">
              6. Your Rights You have the right to:
            </p>
            <ul className="list-disc pl-4">
              <li>
                Access Your Information: Request a copy of the personal data we
                hold about you.
              </li>
              <li>
                Correct Your Information: Request corrections to any inaccurate
                or incomplete data.
              </li>
              <li>
                Delete Your Information: Request the deletion of your personal
                data, subject to legal obligations.
              </li>
            </ul>
          </div>

          <div className="flex flex-col mb-6 2xl:mb-12">
            <p className="font-bold md:text-app-xl 2xl:app-40">
              7. Third-Party Links
            </p>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these external
              sites. We encourage you to review their privacy policies before
              providing any personal information.
            </p>
          </div>

          <div className="flex flex-col mb-6 2xl:mb-12">
            <p className="font-bold md:text-app-xl 2xl:app-40">
              8. Changes to This Policy
            </p>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated effective date. We
              encourage you to review this policy periodically to stay informed
              about how we are protecting your information.
            </p>
          </div>

          <div className="flex flex-col mb-6 2xl:mb-12">
            <p className="font-bold md:text-app-xl 2xl:app-40">
              9. Contact Us{" "}
            </p>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at support@skyventure.io.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyAndPolicy;
