import React from "react";
import NavbarRegister from "../components/Register/NavbarRegister";
import RegisterForm from "../components/Register/RegisterForm";
import BackToTop from "../components/BackToTop";
import Contact from "../components/Contact";

const Register = () => {
  return (
    <div>
      <NavbarRegister />
      <RegisterForm />
      <BackToTop />
      <Contact />
    </div>
  );
};

export default Register;
