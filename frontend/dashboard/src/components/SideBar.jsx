import React, { useContext, useState } from 'react'
import { Context } from '../main';
import axios from 'axios';
import {TiHome} from "react-icons/ti"
import {RiLogoutBoxFill} from "react-icons/ri"
import {AiFillMessage} from "react-icons/ai"
import {GiHamburgerMenu} from "react-icons/gi"
import {FaUserDoctor} from "react-icons/fa6"
import {MdAddModerator} from "react-icons/md"
import {IoPersonAddSharp} from "react-icons/io5"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getImageUrl } from "../utils.js"



const SideBar = () => {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  const {isAuthenticated, setIsAuthenticated} = useContext(Context);

  const navigateTo = useNavigate();

  const onHover = () =>{
    setHover(!hover);
  }

  const handleLogout = async() => {
    await axios.get(
      "http://localhost:4000/api/v1/user/admin/logout",
      {
        withCredentials: true
      })
      .then((res) =>{
        toast.success(res.data.message);
        setIsAuthenticated(false)
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }

  const goTohome = () => {
    navigateTo("/");
    setShow(!show);
  };

  const goToDoctorsPage = () => {
    navigateTo("/doctors");
    setShow(!show);
  };

/*  const goToMessagePage = () => {
    navigateTo("/messages");
    setShow(!show);
  };
*/

  const goToAddNewDoctor = () => {
    navigateTo("/doctors/addnew");
    setShow(!show);
  };

  /* const goToAddNewAdmin = () => {
    navigateTo("/admin/addnew");
    setShow(!show);
  };
*/

  return (
    <>
    <nav style={!isAuthenticated ? {display: "none"} : {display: "flex"}}
     className={show ? "show sidebar": "sidebar"}>
      <img src={getImageUrl("Navbar/logoupchaar.png")} alt='logo' style={{ width: "112%", height: "12%" }} />
      <div className="links">
        <TiHome onClick={goTohome} title='Home'/>
        <FaUserDoctor onClick={goToDoctorsPage} title='Doctors'/>
        <IoPersonAddSharp onClick={goToAddNewDoctor} title='Add New Doctor'/>
        <RiLogoutBoxFill onClick={handleLogout} title='Logout'/>
      </div>

    </nav>
    <div style={!isAuthenticated ? {display:"none"}: {display: "flex"}} className="wrapper">
      <GiHamburgerMenu className='hamburger' onClick={() => setShow(!show)} />
    </div>
    </>
  )
}

export default SideBar
