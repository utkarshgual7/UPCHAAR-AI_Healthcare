import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getImageUrl } from "../utils.js";
import { ChevronDownIcon, MenuIcon, XIcon } from "@heroicons/react/solid";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/user/userSlice.js";
import { useSnackbar } from "notistack";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const LoggedInUser = useSelector((state) => state.Agent.LoggedInUser);
  const { enqueueSnackbar } = useSnackbar();

  const handleLogout = async () => {
    dispatch(logout());
    enqueueSnackbar("Logout Success.", {
      variant: "info",
    });

    navigateTo("/");
  };

  const moveToContact = () => {
    window.scrollBy({
      top: document.body.scrollHeight, // Scroll to the bottom of the page
      behavior: "smooth",
    });
  };

  const ScrollDownArrow = () => {
    window.scrollBy({
      top: 350,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200 to-green-200 rounded-full opacity-20 animate-pulse-soft"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-200 to-orange-200 rounded-full opacity-20 animate-pulse-soft" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Navigation Header */}
      <nav className="relative z-50 flex justify-between items-center p-4 md:p-6">
        {/* Main Logo */}
        <Link to="/" className="transition-smooth hover:scale-105">
          <img
            src={getImageUrl("Navbar/logoupchaar.png")}
            alt="Upchaar Logo"
            className="w-[200px] md:w-[250px] h-auto drop-shadow-lg"
          />
        </Link>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-orange-500 font-medium transition-smooth">Home</Link>
          <Link to="/aboutus" className="text-gray-700 hover:text-orange-500 font-medium transition-smooth">About</Link>
          <Link to="/features" className="text-gray-700 hover:text-orange-500 font-medium transition-smooth">Features</Link>
          <Link to="/faq" className="text-gray-700 hover:text-orange-500 font-medium transition-smooth">FAQ</Link>
          
          {LoggedInUser ? (
            <button
              onClick={handleLogout}
              className="btn-secondary text-sm"
            >
              Logout
            </button>
          ) : (
            <div className="flex items-center space-x-3">
              <Link to="/login" className="btn-secondary text-sm">
                LOGIN
              </Link>
              <Link to="/register" className="btn-primary text-sm">
                REGISTER
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg bg-white shadow-soft transition-smooth hover:shadow-medium"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <XIcon className="w-6 h-6 text-gray-700" />
          ) : (
            <MenuIcon className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 z-40 bg-white rounded-xl shadow-large p-6 space-y-4">
          <Link to="/" className="block text-gray-700 hover:text-orange-500 font-medium py-2 transition-smooth">Home</Link>
          <Link to="/aboutus" className="block text-gray-700 hover:text-orange-500 font-medium py-2 transition-smooth">About</Link>
          <Link to="/features" className="block text-gray-700 hover:text-orange-500 font-medium py-2 transition-smooth">Features</Link>
          <Link to="/faq" className="block text-gray-700 hover:text-orange-500 font-medium py-2 transition-smooth">FAQ</Link>
          
          <div className="pt-4 border-t border-gray-200">
            {LoggedInUser ? (
              <button
                onClick={handleLogout}
                className="w-full btn-secondary text-sm"
              >
                Logout
              </button>
            ) : (
              <div className="space-y-3">
                <Link to="/login" className="block w-full text-center btn-secondary text-sm">
                  LOGIN
                </Link>
                <Link to="/register" className="block w-full text-center btn-primary text-sm">
                  REGISTER
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Secondary Logo - Floating */}
      <div className="absolute top-24 right-8 max-md:hidden z-30">
        <img
          src={getImageUrl("Navbar/nlogo.png")}
          alt="Secondary Logo"
          className="w-[280px] h-auto opacity-90 drop-shadow-lg"
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
              Upchaar
            </span>
            <span className="block text-4xl md:text-5xl mt-2 text-gray-700">
              Where <span className="italic font-serif bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">A.I.</span> Meets
            </span>
            <span className="block text-3xl md:text-4xl mt-2 text-gray-600">
              Authentic Care 🩺
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the future of healthcare with our AI-powered platform that combines cutting-edge technology with personalized medical care.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {!LoggedInUser ? (
              <>
                <Link to="/register" className="btn-primary text-lg px-8 py-4">
                  Get Started Free
                </Link>
                <Link to="/login" className="btn-secondary text-lg px-8 py-4">
                  Sign In
                </Link>
              </>
            ) : (
              <button
                onClick={ScrollDownArrow}
                className="flex flex-col items-center justify-center group cursor-pointer"
              >
                <div className="bg-white rounded-full p-4 shadow-medium group-hover:shadow-large transition-smooth group-hover:-translate-y-1">
                  <ChevronDownIcon className="w-8 h-8 text-orange-500 animate-bounce" />
                </div>
                <p className="mt-3 text-lg font-semibold text-gray-700 group-hover:text-orange-500 transition-smooth">
                  Explore Features
                </p>
              </button>
            )}
          </div>
        </div>
      </div>


    </div>
  );
};

export default Navbar;
