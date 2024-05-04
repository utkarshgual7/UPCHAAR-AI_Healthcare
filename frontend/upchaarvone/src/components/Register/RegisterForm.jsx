import React, { useState, useContext } from "react";
import { Link, Navigate, useNavigate  } from "react-router-dom";
import UserDetails from "../../pages/UserDetails";
import axios from 'axios';
import { toast } from 'react-toastify';
import { Context } from '../../main';

const RegisterForm = () => {

  const { isAuthenticated, setIsAuthenticated } = useContext(Context)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  const navigateTo = useNavigate();

  if (isAuthenticated) {
    return <Navigate to={"/"} />
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/patient/register",
        { firstName, lastName, email, phone, nic, dob, gender, password, role: "Patient" },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          }
        })
        .then(res => {
          toast.success(res.data.message),
          setFirstName(""),
          setLastName(""),
          setEmail(""),
          setPhone(""),
          setNic(""),
          setDob(""),
          setGender(""),
          setPassword("")
        })

    }
    catch (error) {
      toast.error(error.res.data.message)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div
        className="bg-gradient-to-br from-orange-400 to-green-500 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
        style={{
          background:
            "linear-gradient(135deg, #E67444 0%, #FFFEFD 40%, #FFFEFD 60%, #81C46A 100%)",
        }}
      >
        <h2 className="text-2xl font-semibold text-login mb-6 lg:mb-8">
          Register to UPCHAAR
        </h2>
        <form onSubmit={handleSubmit}>

          <div className="mb-4 lg:mb-6">
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-semibold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="fullName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div className="mb-4 lg:mb-6">
            <label
              htmlFor="lastName"
              className="block text-gray-700 font-semibold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="fullName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div className="mb-4 lg:mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div className="mb-4 lg:mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Mobile Number
            </label>
            <input
              type="number"
              id="email"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div className="mb-4 lg:mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
               NIC
            </label>
            <input
              type="number"
              id="email"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div className="mb-4 lg:mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
               Date Of Birth
            </label>
            <input
              type="date"
              id="email"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div className="mb-4 lg:mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div className="mb-4 lg:mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Gender
            </label>
            <select value={gender} onChange={((e) => setGender(e.target.value))}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Othetrs">Others</option>
          </select>
          </div>


          
          <Link to="/userdetails">
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 mb-4 lg:mb-6"
            >
              Register Now
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
