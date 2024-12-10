import React, { useState } from "react";
import NavbarF from "../components/NavbarF";
import Contact from "../components/Contact";
import NavbarLogin from "../components/Register/NavbarRegister";

function ChatBot() {
  const [question, setQuestion] = useState("");
  const [responses, setResponses] = useState([]); // Correct state name for clarity
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (!question.trim()) return; // Avoid empty questions
    setLoading(true); // Show spinner

    const url = `https://virtual-vaidhya-v2.onrender.com/ask?question=${encodeURIComponent(
      question
    )}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      // Append new response to the list
      setResponses((prevResponses) => [
        ...prevResponses,
        { isUser: true, text: question },
        { isUser: false, text: data.response },
      ]);
      setQuestion(""); // Clear the input field
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // Hide spinner
    }
  };

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  return (
    <>
      <NavbarLogin />
      <div className="flex justify-center items-center min-h-screen ">
        <div className="w-full max-w-3xl mx-auto">
          <div
            className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8"
            style={{
              background:
                "linear-gradient(135deg, #FF7F50 0%, #FFF 40%, #FFF 60%, #32CD32 100%)",
            }}
          >
            {/* Header */}
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">
                Virtual Vaidhya
              </h3>
              <p className="text-gray-600 text-sm">Your HealthCare Chat Bot</p>
            </div>

            {/* Chat Response Section */}
            <div className="px-4 py-4 max-h-60 overflow-y-auto bg-gray-50 rounded-lg shadow-inner">
              {loading ? (
                <div className="flex justify-center items-center">
                  <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : (
                responses.map((message, index) => (
                  <div
                    key={index}
                    className={`flex text-sm items-center mb-4 ${
                      message.isUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    {!message.isUser && (
                      <img
                        src="https://img.icons8.com/color/48/doctor-male--v1.png"
                        alt="BOT Doctor Icon"
                        className="w-8 h-8 mr-2"
                      />
                    )}
                    <div
                      className={`px-4 py-2 rounded-lg shadow ${
                        message.isUser
                          ? "bg-blue-500 text-white"
                          : "bg-gray-300 text-gray-800"
                      }`}
                    >
                      {message.text}
                    </div>
                    {message.isUser && (
                      <img
                        src="https://img.icons8.com/color/48/thinking-male--v1.png"
                        alt="User"
                        className="w-8 h-8 ml-2"
                      />
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Input Section */}
            <div className="mt-4">
              <input
                type="text"
                className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message..."
                value={question}
                onChange={handleChange}
                onKeyPress={(e) => {
                  if (e.key === "Enter") handleClick();
                }}
              />
              <button
                className="mt-3 w-full bg-green-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                onClick={handleClick}
              >
                Ask Question
              </button>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default ChatBot;
