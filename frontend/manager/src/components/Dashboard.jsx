import React, { useContext, useEffect, useState } from 'react'
import { Context } from "../main"
import axios from 'axios';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
import { GoCheckCircleFill } from "react-icons/go"
import { AiFillCloseCircle } from "react-icons/ai"
import { getImageUrl } from "../utils.js";

const Dashboard = () => {

  const [admin, setAdmin] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const { isAuthenticated, user } = useContext(Context);

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/alladmins",
          {
            withCredentials: true,
          })
          console.log("data", data.admins);
        setAdmin(data.admins);

      } catch (error) {
        setAdmin([]);
        console.log("SOME ERROR OCCURED WHILE FETCHING APPOINTMENTS", error)
      }
    }
    fetchAdmin();
  }, []);

  useEffect(() => {
    const doctor = async() => {
      try {
        const {data} = await axios.get(
          "http://localhost:4000/api/v1/user/doctors",
          {
            withCredentials: true
          })
          setDoctors(data.doctors);
          toast.success()
      } catch (error) {
        toast.error(error.response.data.message)
      }
    }
    doctor();
  }, [])

  /*const handleUpdateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/appointment/update/${appointmentId}`,
        { status },
        { withCredentials: true }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId ? { ...appointment, status } : appointment
        )
      );
      toast.success(data.message)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  */
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />
  }

  return (
    <>
      <section className="dashboard page">
        <div className="banner">
          <div className="firstBox">
            <img src='/doc.png' alt='docImg' />
            <div className="content">
              <div>
                <p>Hello ,</p>
                <h5>{user && `${user.firstName} ${user.lastName}`}</h5>
              </div>
              <p>
                Welcome Back ! Doctor
              </p>
            </div>
          </div>
          <div className="secondBox">
            <p>Total Admins</p>
            <h3>{admin.length}</h3>
          </div>
          <div className="thirdBox">
            <p>Registered Doctors</p>
            <h3>{doctors.length}</h3>
          </div>
        </div>
        <div className="banner">
          <h5>Admins</h5>
          <table>
            <thead>
              <tr>
                <th>Admin Name</th>
                <th>Email</th>
                <th>Hospital</th>
                <th>Phone</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {
                admin && admin.length > 0 ?
                  (
                    admin.map(admin => {
                      return (
                        <tr key={admin._id}>
                          <td>{`${admin.firstName} ${admin.lastName}`}</td>
                          <td>{admin.email}</td>
                          <td>{admin.hospital}</td>
                          <td>{admin.phone}</td>
                          <td>{admin.gender}</td>
                        </tr>
                      )
                    }
                    )) : (<h1> NO Admins!!!</h1>)
              }
            </tbody>
          </table>
        </div>
      </section>

    </>
  )
}

export default Dashboard
