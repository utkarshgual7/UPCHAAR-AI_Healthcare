import React from "react";
import { getImageUrl } from "../utils.js";
import About from "../components/About.jsx";
import Navbar from "../components/Navbar.jsx";
import Working from "../components/Working.jsx";
import Stats from "../components/Stats.jsx";
import Contact from "../components/Contact.jsx";
import BackToTop from "../components/BackToTop.jsx";
const Home = () => {
  return (
    <>
      <Navbar />
      <About />
      <Working />
      <Stats />
      <Contact />
      <BackToTop />
    </>
  );
};

export default Home;
