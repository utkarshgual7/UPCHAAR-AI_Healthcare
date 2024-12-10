import React from "react";

import Contact from "../components/Contact";
import { getImageUrl } from "../utils.js";
import ChatBot from "./ChatBot.jsx";
// import { Img } from "../components";
import BackToTop from "../components/BackToTop";
import { useNavigate } from "react-router-dom";
import NavbarLogin from "../components/Register/NavbarRegister.jsx";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import Footer from "../components/Footer.jsx";

const Features = () => {
  const navigateTo = useNavigate();
  const LoggedInUser = useSelector((state) => state.Agent.LoggedInUser);

  const handleDoctor = () => {
    navigateTo("/finddoctor");
  };

  const handleChatBot = () => {
    navigateTo("/virtualvaidhya");
  };

  return (
    <div>
      <>
        <NavbarLogin />

        <div className="container mx-auto px-4 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div
              className="p-6 bg-gradient-to-br from-orange-400 to-green-500 bg-white shadow-md rounded-lg overflow-hidden max-w-xs mb-4"
              style={{
                background:
                  "linear-gradient(135deg, #E67444 0%, #FFFEFD 40%, #FFFEFD 60%, #81C46A 100%)",
              }}
            >
              <img
                src={getImageUrl("About/chatbot.png")}
                className="mx-auto mb-4"
              />{" "}
              {/* Add your image source here */}
              <h2
                className="text-lg font-semibold mb-2"
                style={{ color: "#4A3A89" }}
              >
                Chit-Chat with Virtual Vaidhya
              </h2>
              <p className="text-black-600 mb-4">
                Get to chat with our very own AI consultant that helps you
                figure out your disease before you reach out to the doctor.
              </p>
              {LoggedInUser && (
                <button
                  onClick={handleChatBot}
                  className="text-white px-4 py-2 rounded-lg focus:outline-none align-bottom"
                  style={{ backgroundColor: "#E67D41" }}
                >
                  Let's Chat -- GO
                </button>
              )}
            </div>
            {/* Card 2 */}
            <div
              className="p-6 bg-gradient-to-br from-orange-400 to-green-500 bg-white shadow-md rounded-lg overflow-hidden max-w-xs mb-4"
              style={{
                background:
                  "linear-gradient(135deg, #E67444 0%, #FFFEFD 40%, #FFFEFD 60%, #81C46A 100%)",
              }}
            >
              <img
                src={getImageUrl("About/scan.png")}
                className="mx-auto mb-4"
              />{" "}
              {/* Add your image source here */}
              <h2
                className="text-lg font-semibold mb-2"
                style={{ color: "#4A3A89" }}
              >
                AI Scan Review
              </h2>
              <p className="text-black-600 mb-4">
                Get results based on your uploaded scans keeping in mind your
                current medical state. This gives you an overview of the
                problems you might be having and suggests appropriate cures for
                them.
              </p>
              <a href="https://upchaar-medical-test-report.onrender.com//">
                {LoggedInUser && (
                  <button
                    className=" text-white px-4 py-2 rounded-lg focus:outline-none"
                    style={{ backgroundColor: "#E67D41" }}
                  >
                    UPLOAD LAB REPORT SCAN
                  </button>
                )}
              </a>
            </div>
            {/* Card 3 */}
            <div
              className="p-6 bg-gradient-to-br from-orange-400 to-green-500 bg-white shadow-md rounded-lg overflow-hidden max-w-xs mb-4"
              style={{
                background:
                  "linear-gradient(135deg, #E67444 0%, #FFFEFD 40%, #FFFEFD 60%, #81C46A 100%)",
              }}
            >
              <img
                src={getImageUrl("About/doctors.png")}
                className="mx-auto mb-4"
              />{" "}
              <h2 className="text-xl font-bold text-black text-center mb-4">
                OSTEOARTHRITIS X-RAY REVIEW
              </h2>
              <p className="text-sm font-semibold text-orange-700 mb-4">
                Osteoarthritis is a degenerative joint disease, in which the
                tissues in the joint break down over time. Scan your X-Ray image
                to confirm the presence of Osteoarthritis.
              </p>
              <a href="https://upchaar-osteoarthritis-x-ray-reader.onrender.com/">
                {LoggedInUser && (
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    style={{ backgroundColor: "#E67D41" }}
                  >
                    Scan X-Ray Image
                  </button>
                )}
              </a>
              {/* <h2
                className="text-lg font-semibold mb-2"
                style={{ color: "#4A3A89" }}
              >
                Find Doctors to consult
              </h2>
              <p className="text-black-600 mb-4">
                Get a curated list of the best doctors to consult. Select an
                appointment, pay, and connect to the doc!
              </p>
              <button
                onClick={handleDoctor}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                style={{ backgroundColor: "#E67D41" }}
              >
                Book Appointment
              </button> */}
            </div>
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
