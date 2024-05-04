import React from "react";
import NavbarF from "../components/Features/NavbarF";
import Contact from "../components/Contact";
import { getImageUrl } from "../utils.js";
import ChatBot from "./ChatBot.jsx"
import { Img, Heading, Text, Button } from "../components";
import BackToTop from "../components/BackToTop";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigateTo = useNavigate();

  const handleDoctor = () => {
    navigateTo("/finddoctor")
  }

  const handleChatBot = () => {
    navigateTo("/virtualvaidhya");
  }

  return (
    <div>
      <>
        <NavbarF />
        <div className="container mx-auto px-4 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="p-6 bg-gradient-to-br from-orange-400 to-green-500 bg-white shadow-md rounded-lg overflow-hidden max-w-xs mb-4" style={{
                background:
                  "linear-gradient(135deg, #E67444 0%, #FFFEFD 40%, #FFFEFD 60%, #81C46A 100%)",
              }}>
              <Img src={getImageUrl("About/chatbot.png")} className="mx-auto mb-4" /> {/* Add your image source here */}
              <h2 className="text-lg font-semibold mb-2" style={{ color: "#4A3A89" }}>Chit-Chat with Virtual Vaidhya</h2>
              <p className="text-black-600 mb-4">
                Get to chat with our very own AI consultant that helps you figure out your disease before you reach out to the doctor.
              </p>
              <button onClick={handleChatBot} style={{marginBottom: "0px"}} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600" style={{ backgroundColor: "#E67D41" }}>
                Let's Chat -- GO 
              </button>
            </div>
            {/* Card 2 */}
            <div className="p-6 bg-gradient-to-br from-orange-400 to-green-500 bg-white shadow-md rounded-lg overflow-hidden max-w-xs mb-4" style={{
                background:
                  "linear-gradient(135deg, #E67444 0%, #FFFEFD 40%, #FFFEFD 60%, #81C46A 100%)",
              }}>
              <Img src={getImageUrl("About/scan.png")} className="mx-auto mb-4" /> {/* Add your image source here */}
              <h2 className="text-lg font-semibold mb-2" style={{ color: "#4A3A89" }}>AI Scan Review</h2>
              <p className="text-black-600 mb-4">
                Get results based on your uploaded scans keeping in mind your current medical state. This gives you an overview of the problems you might be having and suggests appropriate cures for them.
              </p>
              <a href="https://bloodreportscanner.onrender.com/">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600" style={{ backgroundColor: "#E67D41" }}>
                UPLOAD LAB REPORT SCAN
              </button>
              </a>
        
            </div>
            {/* Card 3 */}
            <div className="p-6 bg-gradient-to-br from-orange-400 to-green-500 bg-white shadow-md rounded-lg overflow-hidden max-w-xs mb-4" style={{
                background:
                  "linear-gradient(135deg, #E67444 0%, #FFFEFD 40%, #FFFEFD 60%, #81C46A 100%)",
              }}>
              <Img src={getImageUrl("About/doctors.png")} className="mx-auto mb-4" /> {/* Add your image source here */}
              <h2 className="text-lg font-semibold mb-2" style={{ color: "#4A3A89" }}>Find Doctors to consult</h2>
              <p className="text-black-600 mb-4">
                Get a curated list of the best doctors to consult. Select an appointment, pay, and connect to the doc!
              </p>
              <button onClick={handleDoctor} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600" style={{ backgroundColor: "#E67D41" }}>
                Book Appointment
              </button>
            </div>
          </div>
        </div>
        <Contact />
        <BackToTop />
      </>
    </div>
  );
};

export default Features;
