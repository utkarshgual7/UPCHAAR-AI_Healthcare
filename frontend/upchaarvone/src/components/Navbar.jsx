import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getImageUrl } from "../utils.js";
import { Context } from "../main.jsx";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  const {isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async (req, res) => {
    await axios.get("http://localhost:4000/api/v1/user/patient/logout",
      {
        withCredentials: true
      }).then(res => {
        toast.success(res.data.message);
        setIsAuthenticated(true);
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      });
  };

  return (
    <>
      <div className="relative flex">
        <Link to="/" className="relative top-0 left-0 z-50 pt-6 pr-2">
          <img
            src={getImageUrl("Navbar/logoupchaar.png")}
            alt="Logo"
            className="h-auto"
          />
        </Link>
        <div
          className="flex absolute top-0 right-0"
          style={{ top: "100px", right: "1%" }}
        >
          <img src={getImageUrl("Navbar/nlogo.png")} alt="Logo"></img>
        </div>
        <div
          className=" flex absolute top-0 left-0 "
          style={{ top: "200px", left: "12%" }}
        >
          <h2 className="font-output tracking-wider font-semibold  text-7xl text-orange-500 ">
            GET
          </h2>
        </div>
        <div
          className=" flex absolute top-0 left-0"
          style={{ top: "270px", left: "12%" }}
        >
          <h2 className="font-output  font-semibold tracking-wider text-7xl  text-orange-500 ">
            STARTED...
          </h2>
        </div>
        <Link
          to="/register"
          className="absolute font-output tracking-wider text-base font-semibold top-0 left-0 px-6 md:px-10 py-2 md:py-3 bg-black text-black rounded-full"
          style={{ top: "400px", left: "20%", transform: "translateX(-50%)" }}
        >
          REGISTER
        </Link>
        {isAuthenticated ? (
          <Link
          onClick={handleLogout}
          className="absolute font-output tracking-wider text-base font-bold top-0 left-0 px-8 md:px-12 py-2 md:py-3 bg-transparent text-black rounded-full border-2 border-blue-500"
          style={{ top: "400px", left: "38%", transform: "translateX(-50%)" }}
        >
          LOGOUT
        </Link>
        ) : (
          <Link
          to="/login"
          className="absolute font-output tracking-wider text-base font-bold top-0 left-0 px-8 md:px-12 py-2 md:py-3 bg-transparent text-black rounded-full border-2 border-blue-500"
          style={{ top: "400px", left: "38%", transform: "translateX(-50%)" }}
        >
          LOGIN
        </Link>
        )}

        <div>
          <ul className="flex space-x-10 absolute pr-4 md:pr-10 top-4 md:top-10 right-4 md:right-14 font-sans font-bold">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              {
                isAuthenticated ? (
                  <a onClick={handleLogout}>LOGOUT</a>
                ) : (
                  <a href="/login">LOGIN</a>
                )
              }
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
            <li>
              <a href="/faq">FAQ's</a>
            </li>
            <li>
              {
                isAuthenticated ? (
                  <a href="/features">Features</a>
                ) : (
                  " "
                )
              }
            </li>
            {/* <li>
              <a href="/applydoctor">JOIN AS A DOC</a>
            </li> */}
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
