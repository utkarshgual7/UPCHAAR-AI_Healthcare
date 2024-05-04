import React, { useState, useContext } from "react";
import { Link, Navigate,useNavigate } from "react-router-dom";
import axios from 'axios'
import { toast } from 'react-toastify'
import { Context } from "../../main"

const LoginForm = () => {

  const {isAuthenticated, setIsAuthenticated} = useContext(Context)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigateTo = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
      "http://localhost:4000/api/v1/user/login",
      {email, password, confirmPassword, role: "Patient"},
    { withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }
    ).then(res => {
      toast.success(res.data.message),
      setEmail(""),
      setPassword(""),
      setConfirmPassword(""),
      navigateTo("/features"),
      setIsAuthenticated(true)
    })
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  if(isAuthenticated){
    return <Navigate to={"/"} />
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
          Login to your account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 lg:mb-8">
            <label
              htmlFor="username"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="username"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-6 lg:mb-8">
            <label
              htmlFor="username"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="username"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-6 lg:mb-8">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 mb-4 lg:mb-6"
          >
            Login Now
          </button>
          <h3 className="text-sm text-gray-700 mb-4 lg:mb-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </h3>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
