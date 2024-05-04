import React, { useContext, useState } from 'react'
import { Context } from '../main';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { TiHome } from 'react-icons/ti';
import { MdAddModerator } from 'react-icons/md';
import { AiFillMessage } from 'react-icons/ai';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { getImageUrl } from "../utils.js";

const SideBar = () => {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const navigateTo = useNavigate();

  const onHover = () => {
    setHover(!hover);
  }

  const handleLogout = async () => {
    await axios.get(
      "http://localhost:4000/api/v1/user/manager/logout",
      {
        withCredentials: true
      }
    ).then((res) => {
      toast.success(res.data.message);
      setIsAuthenticated(false);
      navigateTo("/login");
    })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }

  const goToHome = () => {
    navigateTo("/");
    setShow(!show);
  }

  const goToMessagePage = () => {
    navigateTo("/messages");
    setShow(!show);
  };

  const goToAddNewAdmin = () => {
    navigateTo("/admin/addnew");
    setShow(!show);
  };

  return (
    <>
      <nav style={!isAuthenticated ? { display: "none" } : { display: "flex" }}
        className={show ? "show sidebar" : "sidebar"}>
        <img src={getImageUrl("Navbar/logoupchaar.png")} alt='logo' style={{ width: "112%", height: "12%" }} />
        <div className="links">
          <TiHome onClick={goToHome} title='Home' />
          <MdAddModerator onClick={goToAddNewAdmin} title='Add New Admin' />
          <AiFillMessage onClick={goToMessagePage} title='Messages' />
          <RiLogoutBoxFill onClick={handleLogout} title='Logout' />
        </div>

      </nav>
      <div style={!isAuthenticated ? { display: "none" } : { display: "flex" }} className="wrapper">
        <GiHamburgerMenu className='hamburger' onClick={() => setShow(!show)} />
      </div>
    </>
  )
}

export default SideBar
