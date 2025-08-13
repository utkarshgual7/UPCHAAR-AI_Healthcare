import React, { useState } from "react";
import { Link } from "react-router-dom";
import OtpModal from "../../helper/OtpModal.jsx";
import axios from "axios";

// Component for loading spinner
const Spinner = () => (
  <div className="w-5 h-5 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
);

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    dob: "",
    gender: "",
  });

  const [passwordError, setPasswordError] = useState("");

  const [otp, setOtp] = useState("");
  const [isOtpModalOpen, setOtpModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    if (id === "password") {
      validatePassword(value);
    }
  };

  const validatePassword = (value) => {
    const minLength = 6;
    const hasSpecialChar = /[@#$&]/.test(value);
    const hasNumber = /\d/.test(value);

    if (value.length < minLength) {
      setPasswordError("Password must be at least 6 characters long");
    } else if (!hasSpecialChar) {
      setPasswordError(
        "Password must contain at least one special character (@, #, $, &)."
      );
    } else if (!hasNumber) {
      setPasswordError("Password must contain at least one number.");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    if (passwordError) return;

    try {
      const res = await fetch("api/auth/patient/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      setLoading(false);
      if (data) {
        setOtpModalOpen(true);
        setSuccessMessage(data.message);
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async () => {
    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const res = await fetch("api/auth/patient/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          otp,
          password: formData.password,
        }),
      });
      console.log(formData.email, otp, formData.password);
      const data = await res.json();
      setLoading(false);

      if (data) {
        setSuccessMessage(
          "OTP verified successfully!, Registration Successful"
        );
        setOtpModalOpen(false);
        setTimeout(() => {
          clearForm();
        }, 5000);
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage("Failed to verify OTP. Please try again.");
    }
  };

  const cancelRegistration = async () => {
    try {
      await axios.post("/api/auth/patient/cancel-registration", {
        email: formData.email,
      });

      setErrorMessage("Registration cancelled by user, Kindly Try Again");
    } catch (error) {
      console.error("Failed to cancel registration:", error);
    }
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      phone: "",
      dob: "",
      gender: "",
    });
    setOtp(""); // Clear OTP field
    setSuccessMessage("");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div
        className="max-w-lg w-full shadow-2xl rounded-2xl px-8 pt-8 pb-10 backdrop-blur-sm border border-white/20"
        style={{
          background:
            "linear-gradient(135deg, #E67444 0%, #FFFEFD 40%, #FFFEFD 60%, #81C46A 100%)",
        }}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
            Create Your Account
          </h2>
          <p className="text-white/80 text-sm">
            Fill in your details for registration
          </p>
        </div>
        
        {errorMessage && (
          <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg text-sm">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="mb-4 p-3 bg-green-100 border border-green-300 text-green-700 rounded-lg text-sm font-medium">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-orange-300/50 focus:border-orange-400 transition-all duration-200 shadow-sm hover:shadow-md bg-white/90 backdrop-blur-sm"
            />
            <input
              type="email"
              placeholder="Email Address"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-orange-300/50 focus:border-orange-400 transition-all duration-200 shadow-sm hover:shadow-md bg-white/90 backdrop-blur-sm"
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-orange-300/50 focus:border-orange-400 transition-all duration-200 shadow-sm hover:shadow-md bg-white/90 backdrop-blur-sm"
            />
          </div>
          {passwordError && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
              {passwordError}
            </div>
          )}
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-sm text-white font-semibold drop-shadow-sm"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your mobile number"
                maxLength={10}
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-orange-300/50 focus:border-orange-400 transition-all duration-200 shadow-sm hover:shadow-md bg-white/90 backdrop-blur-sm"
              />
            </div>
            
            <div className="space-y-2">
              <label
                htmlFor="dob"
                className="text-sm text-white font-semibold drop-shadow-sm"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-orange-300/50 focus:border-orange-400 transition-all duration-200 shadow-sm hover:shadow-md bg-white/90 backdrop-blur-sm"
              />
            </div>
            
            <div className="space-y-2">
              <label
                htmlFor="gender"
                className="text-sm text-white font-semibold drop-shadow-sm"
              >
                Gender
              </label>
              <select
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-orange-300/50 focus:border-orange-400 transition-all duration-200 shadow-sm hover:shadow-md bg-white/90 backdrop-blur-sm"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Transgender">Transgender</option>
                <option value="Other">Prefer not to say</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-4 mt-6 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-3 focus:ring-blue-300/50 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold text-lg disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <Spinner />
                <span>Creating Account...</span>
              </div>
            ) : (
              "Create Account"
            )}
          </button>
          
          <div className="mt-6 text-center">
            {successMessage && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-lg font-medium">
                {successMessage}
              </div>
            )}
            <p className="text-white/80 text-sm">
              Already have an account?{" "}
              <Link 
                to="/login" 
                className="text-white font-semibold hover:text-blue-200 transition-colors duration-200 underline decoration-2 underline-offset-2"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>

      {/* OTP Modal */}
      <OtpModal
        isOpen={isOtpModalOpen}
        onClose={() => {
          setOtpModalOpen(false); // Close the modal
          cancelRegistration();
          clearForm();
        }}
        setOpen={setOtpModalOpen}
        email={formData.email}
        otp={otp}
        setOtp={setOtp}
        isLoading={loading}
        errorMessage={errorMessage}
        successMessage={successMessage}
        handleOtpSubmit={handleOtpSubmit}
      />
    </div>
  );
};

export default Register;
