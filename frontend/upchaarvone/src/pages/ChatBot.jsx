import React, { useState } from "react";
import NavbarF from "../components/Features/NavbarF";
import Contact from "../components/Contact";

function ChatBot() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true); // Show spinner
    const url = `https://virtual-vaidhya.onrender.com/ask?question=${question}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // Hide spinner
    }
  };

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const renderResponse = (response) => {
    if (!response) return null;

    try {
      const responseData = JSON.parse(response);

      if (Array.isArray(responseData)) {
        return (
          <div className="message bg-gray-200 p-2 mb-2 rounded">
            <select className="block w-full border border-gray-300 p-2 rounded">
              {responseData.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>
        );
      }
    } catch (error) {
      console.error("Error parsing JSON response:", error);
    }

    return (
      <div className="message bg-gray-200 p-2 mb-2 rounded">{response}</div>
    );
  };

  return (
    <>
      <NavbarF />
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-lg w-full mx-auto">
          <div
            className="bg-gradient-to-br from-orange-400 to-green-500 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
            style={{
              background:
                "linear-gradient(135deg, #E67444 0%, #FFFEFD 40%, #FFFEFD 60%, #81C46A 100%)",
            }}
          >
            <div className="px-6 py-4 bg-transparent border-b">
              <h3 className="text-lg font-semibold bg-transparent text-center">
                Virtual Vaidhya - Your HealthCare Chat Bot
              </h3>
            </div>
            <div className="px-6 py-4 max-h-48 overflow-y-auto">
              {loading ? (
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
                </div>
              ) : (
                renderResponse(response)
              )}
            </div>
            <div className="px-6 py-4 border-t">
              <input
                type="text"
                className="w-full py-2 px-3 border rounded"
                placeholder="Type your message..."
                value={question}
                onChange={handleChange}
              />
              <button
                className="mt-2 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
