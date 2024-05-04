import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../main'
import { Navigate } from 'react-router-dom'
import { toast } from "react-toastify";

const Messages = () => {

  const [messages, setMessages] = useState([])
  const { isAuthenticated } = useContext(Context)

  useEffect(() => {
    const message = async() => {
      try {
        const {data} = await axios.get(
          "http://localhost:4000/api/v1/message/getmessages",
          {
            withCredentials: true
          })
          setMessages(data.message)
      } catch (error) {
        console.log("Error occured while fetching messages:", error)
      }
    };
    message();
  }, []);

  if(!isAuthenticated){
    return <Navigate to={"/login"} />
  }

  return (
    <section className='page messages'>
      <h1>Messages</h1>
      <div className="banner">
        {
          messages && messages.length > 0 ? 
          (
            messages.map(element => {
              return(
                <div className="card">
                  <div className="details">
                    <p>First Name: <span>{element.firstName}</span></p>
                    <p>Last Name: <span>{element.lastName}</span></p>
                    <p>Email: <span>{element.email}</span></p>
                    <p>Phone: <span>{element.phone}</span></p>
                    <p>Message: <span>{element.message}</span></p>
                  </div>
                </div>
              )
            })
          ) : (<h1>No Messages Found</h1>)
        }
      </div>
    </section>
  )
}

export default Messages
