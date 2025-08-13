import React from "react";
import { motion } from "framer-motion";
import Contact from "../components/Contact";
import { getImageUrl } from "../utils.js";

import BackToTop from "../components/BackToTop";
import { useNavigate } from "react-router-dom";
import NavbarLogin from "../components/Register/NavbarRegister.jsx";

import { useSelector } from "react-redux";
import Footer from "../components/Footer.jsx";

const Features = () => {
  const navigateTo = useNavigate();
  const navigate = useNavigate();

  const LoggedInUser = useSelector((state) => state.Agent.LoggedInUser);
  const handleNavigation = (path) => {
    if (LoggedInUser) {
      navigate(path);
    } else {
      navigate(`/login?redirect=${encodeURIComponent(path)}`);
    }
  };

  const handleDoctor = () => {
    navigateTo("/finddoctor");
  };

  const handleChatBot = () => {
    navigateTo("/virtualvaidhya");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <>
        <NavbarLogin />

        <div className="container mx-auto px-6 pt-16 pb-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Explore Our Features
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover powerful AI-driven healthcare tools designed to assist you in your medical journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-8 bg-white shadow-2xl rounded-2xl overflow-hidden backdrop-blur-sm border border-orange-200/30 hover:shadow-3xl transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, #E67444 0%, #FFFEFD 40%, #FFFEFD 60%, #81C46A 100%)",
              }}
            >
              <div className="bg-white/20 p-4 rounded-xl mb-6 w-fit mx-auto">
                <img
                  src={getImageUrl("About/chatbot.png")}
                  className="w-16 h-16"
                  alt="Virtual Vaidhya"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: "#4A3A89" }}>
                Virtual Vaidhya Chat
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-center">
                Connect with our AI-powered medical consultant for instant health guidance and preliminary diagnosis support.
              </p>
              <button
                onClick={() => handleNavigation("/virtualvaidhya")}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Consultation
              </button>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-8 bg-white shadow-2xl rounded-2xl overflow-hidden backdrop-blur-sm border border-orange-200/30 hover:shadow-3xl transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, #E67444 0%, #FFFEFD 40%, #FFFEFD 60%, #81C46A 100%)",
              }}
            >
              <div className="bg-white/20 p-4 rounded-xl mb-6 w-fit mx-auto">
                <img
                  src={getImageUrl("About/scan.png")}
                  className="w-16 h-16"
                  alt="AI Scan Review"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: "#4A3A89" }}>
                AI Scan Review
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-center">
                Upload your medical scans for AI-powered analysis. Get comprehensive insights and recommendations based on your current health status.
              </p>
              <a href="https://upchaar-medical-test-report.onrender.com//" className="block">
                <button
                  onClick={() =>
                    handleNavigation(
                      "https://upchaar-osteoarthritis-x-ray-reader.onrender.com/"
                    )
                  }
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Upload Lab Report
                </button>
              </a>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-8 bg-white shadow-2xl rounded-2xl overflow-hidden backdrop-blur-sm border border-orange-200/30 hover:shadow-3xl transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, #E67444 0%, #FFFEFD 40%, #FFFEFD 60%, #81C46A 100%)",
              }}
            >
              <div className="bg-white/20 p-4 rounded-xl mb-6 w-fit mx-auto">
                <img
                  src={getImageUrl("About/x-ray.png")}
                  className="w-16 h-16"
                  alt="X-Ray Analysis"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: "#4A3A89" }}>
                X-Ray Analysis
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-center">
                Advanced AI-powered osteoarthritis detection from X-ray images. Get instant analysis and early detection insights for joint health.
              </p>
              <a href="https://upchaar-osteoarthritis-x-ray-reader.onrender.com/" className="block">
                <button
                  onClick={() =>
                    handleNavigation(
                      "https://upchaar-medical-test-report.onrender.com/"
                    )
                  }
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Analyze X-Ray
                </button>
              </a>
            </motion.div>
          </div>
        </div>

        <Contact />
        <Footer />
        <BackToTop />
      </>
    </div>
  );
};

export default Features;
