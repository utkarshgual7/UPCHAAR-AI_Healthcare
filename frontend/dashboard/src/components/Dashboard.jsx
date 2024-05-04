import React, { useContext, useEffect, useState } from 'react'
import { Context } from "../main"
import axios from 'axios';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
import { GoCheckCircleFill } from "react-icons/go"
import { AiFillCloseCircle } from "react-icons/ai"



const Dashboard = () => {

  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const { isAuthenticated, user } = useContext(Context);

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/appointment/all",
          {
            withCredentials: true,
          })
          const sortedAppointment = data.appointment.sort((a,b) => {
            return new Date(b.appointmentDate) - new Date(a.appointmentDate);
          })
          console.log("data", sortedAppointment);
        setAppointments(sortedAppointment);

      } catch (error) {
        setAppointments([]);
        console.log("SOME ERROR OCCURED WHILE FETCHING APPOINTMENTS", error)
      }
    }
    fetchAppointment();
  }, []);

  useEffect(() => {
    const doctor = async() => {
      try {
        const {data} = await axios.get(
          "http://localhost:4000/api/v1/user/hospital/doctor",
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

  const handleUpdateStatus = async (appointmentId, status) => {
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut porro quisquam non? Hic corporis, temporibus aperiam obcaecati ducimus quo culpa.
              </p>
            </div>
          </div>
          <div className="secondBox">
            <p>Total Appointments</p>
            <h3>{appointments.length}</h3>
          </div>
          <div className="thirdBox">
            <p>Registered Doctors</p>
            <h3>{doctors.length}</h3>
          </div>
        </div>
        <div className="banner">
          <h5>Appointments</h5>
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Date</th>
                <th>Slot</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Status</th>
                <th>Visited</th>
              </tr>
            </thead>
            <tbody>
              {
                appointments && appointments.length > 0 ?
                  (
                    appointments.map(appointment => {
                      return (
                        <tr key={appointment._id}>
                          <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
                          <td>{appointment.appointmentDate.substring(0, 10)}</td>
                          <td>{appointment.appointmentTime}</td>
                          <td>{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
                          <td>{appointment.department}</td>
                          <td>
                            <select className={appointment.status === "Pending" ? "value-pending" : appointment.status === "Rejected" ? "value-rejected" : "value-accepted"}
                              value={appointment.status} onChange={(e) => handleUpdateStatus(appointment._id, e.target.value)}>
                              <option value="Pending" className='value-pending'>Pending</option>
                              <option value="Accepted" className='value-accepted'>Accepted</option>
                              <option value="Rejected" className='value-rejected'>Rejected</option>
                            </select>
                          </td>
                          <td>
                            {appointment.hasVisited === true ? <GoCheckCircleFill className='green' /> : <AiFillCloseCircle className='red' />}
                          </td>
                        </tr>
                      )
                    }
                    )) : (<h1> NO APPOINTMENTS!</h1>)
              }
            </tbody>
          </table>
        </div>
      </section>

    </>
  )
}

export default Dashboard
