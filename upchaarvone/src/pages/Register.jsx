import React from "react";
import NavbarRegister from "../components/Register/NavbarRegister";
import RegisterForm from "../components/Register/RegisterForm";
import BackToTop from "../components/BackToTop";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <NavbarRegister />
      <div className="pt-8 pb-16">
        <RegisterForm />
      </div>
      <BackToTop />
      <Contact />
      <Footer />
    </div>
  );
};

export default Register;
