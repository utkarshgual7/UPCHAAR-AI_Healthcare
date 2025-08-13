import React from "react";
import NavbarLogin from "../components/Login/NavbarLogin";
import LoginForm from "../components/Login/LoginForm";
import Contact from "../components/Contact";
import BackToTop from "../components/BackToTop";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <NavbarLogin />
      <div className="pt-8 pb-16">
        <LoginForm />
      </div>
      <BackToTop />
    </div>
  );
};

export default Login;
