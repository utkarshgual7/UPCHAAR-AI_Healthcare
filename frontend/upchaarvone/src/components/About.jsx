import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getImageUrl } from "../utils.js";
import "./About.css";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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

  return (
    <>
      {/* Offer section */}
      <div
        className="flex justify-center items-center text-5xl font-bold text-orange-500 mt-14 pt-0"
        style={{ paddingTop: "23.0rem" }}
      >
        <span className="border-b-2 border-blue-500 font-bold">
          What We Offer
        </span>
      </div>
      {/* Cards - offer */}
      <div className="flex justify-center items-center py-10 ">
        <div className="px-4">
          <div className="flex flex-wrap justify-center space-x-4">
            <div
              className="bg-gradient-to-br from-orange-400 to-green-500 bg-white shadow-md rounded-lg overflow-hidden p-6 max-w-xs mb-4"
              style={{
                background:
                  "linear-gradient(135deg, #E67444 0%, #FFFEFD 40%, #FFFEFD 60%, #81C46A 100%)",
              }}
            >
              <img
                src={getImageUrl("About/virtual.png")}
                className="mx-auto mb-4 w-14"
                alt="Chat Bot"
              />
              <h2 className="text-2xl font-bold text-violet-500 text-center mb-4">
                VIRTUAL VAIDYA - CHAT BOT
              </h2>
              <p className="text-lg text-gray-700">
              The Virtual Vaidhya is a digital doctor available online. It uses AI to understand symptoms, offer diagnoses, and give personalized advice through text.
              </p>
            </div>
            <div
              className="bg-gradient-to-br from-orange-400 to-green-500 bg-white shadow-md rounded-lg overflow-hidden p-6 max-w-xs mb-4"
              style={{
                background:
                  "linear-gradient(135deg, #E67444 0%, #FFFEFD 40%, #FFFEFD 60%, #81C46A 100%)",
              }}
            >
              <img
                src={getImageUrl("About/doctors.png")}
                className="mx-auto mb-4"
                alt="Chat Bot"
              />
              <h2 className="text-2xl font-bold text-violet-500 text-center mb-4">
                EXPERIENCED DOCTORS
              </h2>
              <p className="text-lg text-gray-700">
              All doctor on or website are experienced practitioners and have years of service to back them up. We provide you with the most trusted doctors.
              </p>
            </div>
            <div
              className="bg-gradient-to-br from-orange-400 to-green-500 bg-white shadow-md rounded-lg overflow-hidden p-6 max-w-xs mb-4"
              style={{
                background:
                  "linear-gradient(135deg, #E67444 0%, #FFFEFD 40%, #FFFEFD 60%, #81C46A 100%)",
              }}
            >
              <img
                src={getImageUrl("About/scan.png")}
                className="mx-auto mb-4"
                alt="Chat Bot"
              />
              <h2 className="text-2xl font-bold text-violet-500 text-center mb-4">
                SCAN REVIEW
              </h2>
              <p className="text-lg text-gray-700">
              The AI scanner is a feature that automatically extracts information and analyzes uploaded blood reports using artificial intelligence algorithms.
              </p>
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
          <div className="max-w-md bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-violet-500 mb-4">
              Customer Review
            </h2>
            <p className="text-lg text-gray-700">
              "Awesome website Nice Doctors very friendly ui experince.I
              reccomend Upchaar to my friends and family"
            </p>
            <p className="mt-4 text-sm text-gray-600">- Geeta</p>
          </div>
          <div className="max-w-md bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-violet-500 mb-4">
              Customer Review
            </h2>
            <p className="text-lg text-gray-700">
              "Dr.Varun is such a nice doctor to consult, he helped me cure my
              acne and pimple in just few months. I will visit upchaar again."
            </p>
            <p className="mt-4 text-sm text-gray-600">- Vaibhav</p>
          </div>
          <div className="max-w-md bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-violet-500 mb-4">
              Customer Review
            </h2>
            <p className="text-lg text-gray-700">
              "Scan review feature is very easy to use. The results are very
              accurate and helpful in diagnosing."
            </p>
            <p className="mt-4 text-sm text-gray-600">- Yashi</p>
          </div>
          <div className="max-w-md bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-violet-500 mb-4">
              Customer Review
            </h2>
            <p className="text-lg text-gray-700">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              tincidunt lectus quis dui vehicula ullamcorper."
            </p>
            <p className="mt-4 text-sm text-gray-600">- Mayank Singh</p>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default About;
