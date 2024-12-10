import React from "react";
import { Link } from "react-router-dom";
import { getImageUrl } from "../../utils.js";
import Home from "../../pages/Home.jsx";

const NavbarLogin = () => {
  return (
    <>
      <div className="relative flex">
        <Link to="/" className="relative top-0 left-0 z-50 pt-6 pr-2">
          <img
            src={getImageUrl("Navbar/logoupchaar.png")}
            alt="Logo"
            className="h-auto w-[250px]"
          />
        </Link>
        <div>
          <ul className="flex space-x-10 absolute pr-4 md:pr-10 top-4 md:top-10 right-4 md:right-14 font-sans font-bold">
            <li>
              <a href="/" className="hover:bg-orange-400 p-2 rounded-md">
                HOME
              </a>
            </li>
            <li>
              <a
                href="/register"
                className="hover:bg-orange-400 p-2 rounded-md"
              >
                REGISTER
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:bg-orange-400 p-2 rounded-md">
                CONTACT
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:bg-orange-400 p-2 rounded-md">
                FAQ's
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarLogin;
