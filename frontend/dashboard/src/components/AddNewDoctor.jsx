import React, { useContext, useState } from 'react'
import { Context } from '../main'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { getImageUrl } from "../utils.js"


const AddNewDoctor = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [nic, setNic] = useState("")
  const [dob, setDob] = useState("")
  const [gender, setGender] = useState("")
  const [password, setPassword] = useState("")
  const [doctorDepartment, setDoctorDepartment] = useState("")
  const [docAvatar, setDocAvatar] = useState("")
  const [docAvatarPreview, setDocAvatarPreview] = useState("")
  const [experience, setExperience] = useState("")
  const [rating, setRating] = useState("")
  const [onlinefees, setOnlinefees] = useState("")
  const [offlinefees, setOfflinefees] = useState("")
  const [hospital, setHospital] = useState("")

  const { isAuthenticated, setIsAuthenticated } = useContext(Context)

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT"
  ];

  const navigateTo = useNavigate();

  const handleAvatar = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setDocAvatarPreview(reader.result);
      setDocAvatar(file);
    }
  }

  const handleAddNewDoctor = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("nic", nic);
      formData.append("gender", gender);
      formData.append("password", password);
      formData.append("doctorDepartment", doctorDepartment);
      formData.append("docAvatar", docAvatar);
      formData.append("dob", dob);
      formData.append("experience", experience);
      formData.append("rating", rating);
      formData.append("onlinefees", onlinefees );
      formData.append("offlinefees" , offlinefees );
      formData.append("hospital" , hospital );

      const response = await axios.post(
        "http://localhost:4000/api/v1/user/doctor/addnew",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          }
        })
      toast.success(response.data.message);
      navigateTo("/");
    }
    catch (error) {
      toast.error(error.response.data.message)
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />
  }

  return (
    <section className='page'>
      <div className="container form-component add-doctor-form">
        <img src={getImageUrl("Navbar/logoupchaar.png")} alt='logo' className='logo' />
        <h1 className='form-title'>REGISTER A NEW DOCTOR</h1>
        <form onSubmit={handleAddNewDoctor}>
          <div className="first-wrapper">
            <div className='doc-image'>
              <img src={docAvatarPreview ? `${docAvatarPreview}` : "/docHolder.jpg"} alt='Doctor Avatar' />
              <input type='file' onChange={handleAvatar} style={{height: "100px"}} />
            </div>
            <div>
              <input type='text' placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              <input type='text' placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
              <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type='number' placeholder='Mobile Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
              <input type='number' placeholder='NIC' value={nic} onChange={(e) => setNic(e.target.value)} />
              <input type='date' placeholder='Date of Birth' value={dob} onChange={(e) => setDob(e.target.value)} />
              <input type='number' placeholder='Experience in years' value={experience} onChange={(e) => setExperience(e.target.value)}/>
              <input type='number' placeholder='Rating out of 5' value={rating} onChange={(e) => setRating(e.target.value)}/>
              <input type='number' placeholder='Online Fees' value={onlinefees} onChange={(e) => setOnlinefees(e.target.value)}/>
              <input type='number' placeholder='Offline Fees' value={offlinefees} onChange={(e) => setOfflinefees(e.target.value)}/>
              <input type='string' placeholder='Hospital Name' value={hospital} onChange={(e) => setHospital(e.target.value)}/> 
              <select value={gender} onChange={((e) => setGender(e.target.value))}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Othetrs">Others</option>
              </select>
              <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

              <select value={doctorDepartment} onChange={(e) => setDoctorDepartment(e.target.value)}>
                <option value="">Select Department</option>
                {departmentsArray.map((element, index) => {
                  return (
                    <option value={element} key={index}>
                      {element}
                    </option>
                  );
                })}
              </select>
              <button type='submit'>REGISTER NEW DOCTOR</button>
            </div>
          </div>
      
        </form>
      </div>
    </section>
  )
}

export default AddNewDoctor

