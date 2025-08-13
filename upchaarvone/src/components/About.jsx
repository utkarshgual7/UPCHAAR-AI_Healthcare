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
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const navigate = useNavigate();

  const LoggedInUser = useSelector((state) => state.Agent.LoggedInUser);
  const handleNavigation = (path) => {
    if (LoggedInUser) {
      navigate(path);
    } else {
      navigate(`/login?redirect=${encodeURIComponent(path)}`);
    }
  };

  return (
    <>
      <div
        className="flex justify-center items-center text-4xl font-bold text-orange-500 mt-6"
        style={{ paddingTop: "23.0rem" }}
      ></div>
      {/* Features Section */}
      <div className="container mx-auto px-4 pt-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our AI-powered healthcare platform revolutionizes medical care with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Virtual Vaidhya Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="group card-elevated p-8 gradient-primary hover:scale-105 transition-smooth"
          >
            <div className="flex flex-col items-center text-center h-full">
              <div className="bg-white rounded-full p-4 mb-6 shadow-medium group-hover:shadow-large transition-smooth">
                <img
                  src={getImageUrl("About/virtualvaidya.png")}
                  className="w-16 h-16 object-contain"
                  alt="Virtual Vaidhya"
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
                Virtual Vaidhya
                <span className="block text-sm font-medium text-blue-600 mt-1">AI Chat Assistant</span>
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                Get instant medical guidance from our AI-powered virtual doctor. Available 24/7 to understand symptoms and provide personalized health advice.
              </p>
              
              <button
                onClick={() => handleNavigation("/virtualvaidhya")}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-smooth flex items-center justify-center group-hover:shadow-lg"
              >
                <ChatIcon className="w-5 h-5 mr-2" />
                Start Consultation
              </button>
            </div>
          </motion.div>

          {/* X-Ray Analysis Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="group card-elevated p-8 gradient-primary hover:scale-105 transition-smooth"
          >
            <div className="flex flex-col items-center text-center h-full">
              <div className="bg-white rounded-full p-4 mb-6 shadow-medium group-hover:shadow-large transition-smooth">
                <img
                  src={getImageUrl("About/x-ray.png")}
                  className="w-16 h-16 object-contain"
                  alt="X-Ray Analysis"
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
                X-Ray Analysis
                <span className="block text-sm font-medium text-blue-600 mt-1">Osteoarthritis Detection</span>
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                Advanced AI-powered X-ray analysis for osteoarthritis detection. Get instant insights about joint health and degenerative changes.
              </p>
              
              <button
                onClick={() => {
                  window.open("https://upchaar-osteoarthritis-x-ray-reader.onrender.com/", "_blank");
                }}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-smooth flex items-center justify-center group-hover:shadow-lg"
              >
                <ArrowRightIcon className="w-5 h-5 mr-2" />
                Analyze X-Ray
              </button>
            </div>
          </motion.div>

          {/* Medical Report Scanner Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="group card-elevated p-8 gradient-primary hover:scale-105 transition-smooth"
          >
            <div className="flex flex-col items-center text-center h-full">
              <div className="bg-white rounded-full p-4 mb-6 shadow-medium group-hover:shadow-large transition-smooth">
                <img
                  src={getImageUrl("About/scan.png")}
                  className="w-16 h-16 object-contain"
                  alt="Medical Report Scanner"
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
                Report Scanner
                <span className="block text-sm font-medium text-blue-600 mt-1">AI-Powered Analysis</span>
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                Upload your medical reports and get instant AI analysis. Our system extracts key information and provides comprehensive insights.
              </p>
              
              <button
                onClick={() => {
                  window.open("https://upchaar-medical-test-report.onrender.com/", "_blank");
                }}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-full transition-smooth flex items-center justify-center group-hover:shadow-lg"
              >
                <SearchIcon className="w-5 h-5 mr-2" />
                Scan Report
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Trusted by <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">Thousands</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what our patients say about their experience with Upchaar
            </p>
          </div>
          
          {/* Review Cards Carousel */}
          <div className="max-w-6xl mx-auto">
            <Slider {...settings} className="review-carousel">
              <div className="px-4">
                <div className="card-elevated p-8 h-full">
                  <div className="flex items-start mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    "Awesome website! Nice Doctors, very friendly UI experience. I recommend Upchaar to my friends and family."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-green-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      G
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Geeta</p>
                      <p className="text-sm text-gray-600">Verified Patient</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="px-4">
                <div className="card-elevated p-8 h-full">
                  <div className="flex items-start mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    "Dr. Varun is such a nice doctor to consult, he helped me cure my acne and pimples in just a few months. I will visit Upchaar again."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      V
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Vaibhav</p>
                      <p className="text-sm text-gray-600">Verified Patient</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="px-4">
                <div className="card-elevated p-8 h-full">
                  <div className="flex items-start mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    "The scan review feature is very easy to use. The results are very accurate and helpful in diagnosing."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      Y
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Yashi</p>
                      <p className="text-sm text-gray-600">Verified Patient</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
