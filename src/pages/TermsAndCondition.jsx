import React from "react";
import NavBar from "../components/navigation/NavBar";
import MobileNav from "../components/navigation/MobileNav";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const TermsAndCondition = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Terms And Conditions | Sky Venture</title>
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
          <p className="font-extrabold uppercase text-2xl md:text-5xl lg:text-7xl 2xl:text-app-100 mb-[30px]">
            TERMS AND CONDITIONS
          </p>
        </div>
      </section>
      <div className="px-4 md:px-12 2xl:px-[93px] py-8 2xl:py-[69px] font-medium text-sm md:text-lg 2xl:text-3xl-2">
        <div className="flex flex-col mb-8">
          <p>Terms & Conditions</p>
          <p> Effective Date: 22nd August 2024 </p>
        </div>
        <div>
          <div className="flex flex-col mb-6 2xl:mb-12">
            <p className="font-bold md:text-app-xl 2xl:app-40">
              1. Introduction{" "}
            </p>
            <p>
              Welcome to Sky Venture. By accessing or using our
              website, you agree to comply with and be bound by the following
              terms and conditions ("Terms"). If you do not agree with these
              Terms, please do not use our website.{" "}
            </p>
          </div>
          <div className="flex flex-col mb-6 2xl:mb-12">
            <p className="font-bold md:text-app-xl 2xl:app-40">
              2. Use of Website
            </p>
            <ul className="list-disc ml-6">
              <li>
                Eligibility: You must be at least 18 years old to use our
                website. By using our website, you confirm that you meet this
                requirement.
              </li>
              <li>
                License: We grant you a limited, non-exclusive,
                non-transferable, and revocable license to use our website for
                personal and non-commercial purposes in accordance with these
                Terms
              </li>
              <li>
                Prohibited Conduct: You agree not to use our website for any
                unlawful purpose or in any way that could harm, disable, or
                impair our website or interfere with others' use of the website.
              </li>
            </ul>
          </div>

          <div className="flex flex-col mb-6 2xl:mb-12">
            <p className="font-bold md:text-app-xl 2xl:app-40">
              3. Intellectual Property
            </p>
            <ul className="list-disc ml-7">
              <li>
                Ownership: All content, trademarks, logos, and other
                intellectual property displayed on our website are the property
                of Sky Venture or its licensors. You may not use,
                reproduce, or distribute any content without our prior written
                permission.
              </li>
              <li>
                User Content: If you submit any content to our website, you
                grant us a non-exclusive, worldwide, royalty-free license to
                use, modify, display, and distribute such content in connection
                with our website and services.
              </li>
            </ul>
          </div>

          <div className="flex flex-col mb-6 2xl:mb-12">
            <p className="font-bold md:text-app-xl 2xl:app-40">
              4. Disclaimers
            </p>
            <ul className="list-disc ml-7">
              <li>
                No Warranty: Our website is provided "as is" and "as available"
                without any warranties of any kind, either express or implied,
                including but not limited to, implied warranties of
                merchantability, fitness for a particular purpose, and
                non-infringement.
              </li>
              <li>
                Limitation of Liability: Sky Venture will not be liable
                for any direct, indirect, incidental, consequential, or punitive
                damages arising from your use of our website or inability to
                access our website.
              </li>
            </ul>
          </div>

          <div className="flex flex-col mb-6 2xl:mb-12">
            <p className="font-bold md:text-app-xl 2xl:app-40">
              5. Third-Party Links
            </p>
            <p>
              Our website may contain links to third-party websites that are not
              owned or controlled by Sky Venture. We are not
              responsible for the content, privacy policies, or practices of any
              third-party websites. You access these links at your own risk.
            </p>
          </div>

          <div className="flex flex-col mb-6 2xl:mb-12">
            <p className="font-bold md:text-app-xl 2xl:app-40">
              6. Privacy
            </p>
            <p>
              Your use of our website is also governed by our Privacy Policy,
              which outlines how we collect, use, and protect your information.
              By using our website, you consent to our use of your data as
              described in the Privacy Policy.
            </p>
          </div>

          <div className="flex flex-col mb-6 2xl:mb-12">
            <p className="font-bold md:text-app-xl 2xl:app-40">
              7. Governing Law
            </p>
            <p>
              These Terms are governed by and construed in accordance with the
              laws of Malaysia, without regard to its conflict of law
              principles. Any disputes arising from these Terms or your use of
              our website will be subject to the exclusive jurisdiction of the
              courts of Malaysia
            </p>
          </div>

          <div className="flex flex-col mb-6 2xl:mb-12">
            <p className="font-bold md:text-app-xl 2xl:app-40">
              8. Changes to Terms
            </p>
            <p>
              Sky Venture reserves the right to modify these Terms at
              any time. Any changes will be effective immediately upon posting
              on our website. Your continued use of the website following the
              posting of any changes constitutes your acceptance of those
              changes.
            </p>
          </div>

          <div className="flex flex-col mb-6 2xl:mb-12">
            <p className="font-bold md:text-app-xl 2xl:app-40">
              9. Contact Us
            </p>
            <p>
              If you have any questions about these Terms, please contact us at
              support@skyventure.io.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndCondition;
