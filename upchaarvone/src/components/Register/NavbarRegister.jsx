import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getImageUrl } from "../../utils.js";
import Home from "../../pages/Home.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { logout } from "../../redux/user/userSlice.js";

const NavbarLogin = () => {
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const LoggedInUser = useSelector((state) => state.Agent.LoggedInUser);
  const handleLogout = async () => {
    dispatch(logout());
    enqueueSnackbar("Logout Success.", {
      variant: "info",
    });

    navigateTo("/");
  };

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
            <li className="hover:bg-orange-400 p-2 rounded-md cursor-pointer">
              <a href="/">HOME</a>
            </li>
            {LoggedInUser ? (
              <button
                onClick={handleLogout}
                className="text-black hover:bg-orange-400 p-2 rounded-md "
              >
                LOGOUT
              </button>
            ) : (
              <Link to="/login" className="hover:bg-orange-400 p-2 rounded-md">
                LOGIN
              </Link>
            )}
            <li className="hover:bg-orange-400 p-2 rounded-md cursor-pointer">
              <a href="#contact">CONTACT</a>
            </li>
            <li className="hover:bg-orange-400 p-2 rounded-md cursor-pointer">
              <a href="/faq">FAQ's</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarLogin;
