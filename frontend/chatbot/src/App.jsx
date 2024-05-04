import React, { useState } from 'react'

function App() {

  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleClick = async () => {
    const url = `https://virtual-vaidhya.onrender.com/ask?question=${question}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setResponse(data.response);

    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleChange = (e) => {
    setQuestion(e.target.value);
  }

  return (
    <div className='chatbot'>
      <div className="chatbot_inputArea">
        <input type='text' placeholder='Type your message...' value={question} onChange={handleChange} />
        <button onClick={handleClick}>Ask Question</button>
      </div>
      <div className='chatbot_chatArea'>
        {response}
      </div>
    </div>
  )

}

export default App
