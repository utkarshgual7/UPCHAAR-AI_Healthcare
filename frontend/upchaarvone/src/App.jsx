import React, { useContext, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import Register from "./pages/Register";
import UserDetails from "./pages/UserDetails";
import Features from "./pages/Features";
import FindDoctor from "./pages/FindDoctor";
import Appointment from "./pages/Appointment";
import Questions from "./pages/Questions.jsx"
// import ApplyDoctor from "./pages/ApplyDoctor";
import { Context } from "./main"
import axios from "axios"
import { ToastContainer } from "react-toastify";
import PaymentSuccess from './components/PaymentSuccess.jsx'
import ChatBot from "./pages/ChatBot.jsx";


const App = () => {

  const {isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);


  useEffect(() => {
    const fetchUser = async() => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/patient/me",
        { withCredentials: true,
          mode: "cors"
        }
      );
      setIsAuthenticated(true);
      setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated])

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userdetails" element={<UserDetails />} />
          <Route path="/features" element={<Features />} />
          <Route path="/finddoctor" element={<FindDoctor />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/faq" element={<Questions />} />
          <Route path="/virtualvaidhya" element={<ChatBot />} />

          {/* <Route path="/applydoctor" element={<ApplyDoctor />} /> */}
          <Route path='/paymentsuccess' element={<PaymentSuccess />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <ToastContainer position='top-center' />
      </Router>
    </>
  );
};

export default App;
