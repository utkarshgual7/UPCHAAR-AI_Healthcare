import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getImageUrl } from "../utils.js";
import {
  ArrowRightIcon,
  ChatIcon,
  CalendarIcon,
  SearchIcon,
} from "@heroicons/react/solid"; // Importing icons
import "./About.css";
import { useSelector } from "react-redux";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const LoggedInUser = useSelector((state) => state.Agent.LoggedInUser);

  return (
    <>
      {/* Offer section */}
      <div
        className="flex justify-center items-center text-4xl font-bold text-orange-500 mt-6"
        style={{ paddingTop: "23.0rem" }}
      ></div>
      {/* Cards - offer */}
      <div className="flex justify-center items-center py-10 ">
        <div className="px-4">
          <div className="flex flex-wrap justify-center space-x-8">
            <div
              className="bg-gradient-to-br from-orange-400 to-green-500 shadow-md rounded-lg overflow-hidden p-5 max-w-xs mb-4"
              style={{
                background:
                  "linear-gradient(135deg, #E67444 0%, #FFFEFD 40%, #FFFEFD 60%, #81C46A 100%)",
              }}
            >
              <img
                src={getImageUrl("About/virtual.png")}
                className="mx-auto mb-4 w-[60px]"
                alt="Virtual Vaidhya"
              />
              <h2 className="text-xl font-bold text-black text-center mb-4">
                VIRTUAL VAIDYA - CHAT BOT
              </h2>
              <p className="text-sm font-semibold font-output leading-relaxed text-orange-700 mb-4">
                The Virtual Vaidhya is a digital doctor available online. It
                uses AI to understand symptoms, offer diagnoses, and give
                personalized advice through text.
              </p>
              <a href="/virtualvaidhya">
                {LoggedInUser && (
                  <button className="bg-blue-300 text-white font-semibold py-1 px-2 rounded-full hover:bg-blue-500 transition duration-200 flex items-center justify-center">
                    <ChatIcon className="w-4 h-4 mr-2" /> Start a Chat
                  </button>
                )}
              </a>
            </div>

            <div
              className="bg-gradient-to-br from-orange-400 to-green-500 shadow-md rounded-lg overflow-hidden p-5 max-w-xs mb-4"
              style={{
                background:
                  "linear-gradient(135deg, #E67444 0%, #FFFEFD 40%, #FFFEFD 60%, #81C46A 100%)",
              }}
            >
              <img
                src={getImageUrl("About/doctors.png")}
                className="mx-auto mb-4 w-[60px]"
                alt="Experienced Doctors"
              />
              {/* <h2 className="text-xl font-bold text-black text-center mb-4">
                EXPERIENCED DOCTORS
              </h2>
              <p className="text-sm font-semibold text-orange-700 mb-4">
                All doctors on our website are experienced practitioners and
                have years of service to back them up. We provide you with the
                most trusted doctors.
              </p> */}

              <h2 className="text-xl font-bold text-black text-center mb-4">
                OSTEOARTHRITIS X-RAY REVIEW
              </h2>
              <p className="text-sm font-semibold font-output leading-relaxed text-orange-700 mb-4">
                Osteoarthritis is a degenerative joint disease, in which the
                tissues in the joint break down over time. Scan your X-Ray image
                to confirm the presence of Osteoarthritis.
              </p>
              <a href="https://upchaar-osteoarthritis-x-ray-reader.onrender.com/">
                {LoggedInUser && (
                  <button className="bg-blue-300 text-white font-semibold py-1 px-2 rounded-full hover:bg-blue-500 transition duration-200 flex items-center justify-center">
                    <ArrowRightIcon className="w-4 h-4 mr-2" /> Scan X-Ray Image
                  </button>
                )}
              </a>
            </div>

            <div
              className="bg-gradient-to-br from-orange-400 to-green-500 shadow-md rounded-lg overflow-hidden p-5 max-w-xs mb-4"
              style={{
                background:
                  "linear-gradient(135deg, #E67444 0%, #FFFEFD 40%, #FFFEFD 60%, #81C46A 100%)",
              }}
            >
              <img
                src={getImageUrl("About/scan.png")}
                className="mx-auto mb-4 w-[60px]"
                alt="AI Scan Review"
              />
              <h2 className="text-xl font-bold text-black text-center mb-4">
                SCAN REVIEW
              </h2>
              <p className="text-sm font-semibold font-output leading-relaxed text-orange-700 mb-4">
                The AI scanner is a feature that automatically extracts
                information and analyzes uploaded blood reports using artificial
                intelligence algorithms.
              </p>
              <a href="https://upchaar-medical-test-report.onrender.com/">
                {LoggedInUser && (
                  <button className=" bg-blue-300 text-white font-semibold py-1 px-2 rounded-full hover:bg-blue-500 transition duration-200 flex items-center justify-center">
                    <SearchIcon className="w-4 h-4 mr-2" /> Scan your report
                  </button>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Section */}
      <div className="flex justify-center items-center text-5xl font-bold text-orange-500 py-8">
        <span className="border-b-2 border-blue-500 font-bold">
          We Are Trusted
        </span>
      </div>
      {/* Review Cards Carousel */}
      <div className="justify-center items-center py-10">
        <Slider {...settings} className="review-carousel">
          <div className="max-w-md bg-white shadow-md rounded-lg p-3 mb-2 mx-5">
            <p className="text-sm text-gray-700">
              "Awesome website! Nice Doctors, very friendly UI experience. I
              recommend Upchaar to my friends and family."
            </p>
            <p className="mt-4 text-xs text-gray-600">- Geeta</p>
          </div>
          <div className="max-w-md bg-white shadow-md rounded-lg p-3 mx-5">
            <p className="text-sm text-gray-700">
              "Dr. Varun is such a nice doctor to consult, he helped me cure my
              acne and pimples in just a few months. I will visit Upchaar
              again."
            </p>
            <p className="mt-4 text-xs text-gray-600">- Vaibhav</p>
          </div>
          <div className="max-w-md bg-white shadow-md rounded-lg p-3 mx-5">
            <p className="text-sm text-gray-700">
              "The scan review feature is very easy to use. The results are very
              accurate and helpful in diagnosing."
            </p>
            <p className="mt-4 text-xs text-gray-600">- Yashi</p>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default About;
