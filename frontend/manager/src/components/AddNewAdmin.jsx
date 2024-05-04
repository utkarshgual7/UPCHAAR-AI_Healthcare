import React, { useContext, useState } from 'react'
import { Context } from '../main'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const AddNewAdmin = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [nic, setNic] = useState("")
  const [dob, setDob] = useState("")
  const [gender, setGender] = useState("")
  const [password, setPassword] = useState("")
  const [hospital, setHospital] = useState("");

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const navigateTo = useNavigate();

  const handleAddNewAdmin = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/admin/addNew",
        { firstName, lastName, email, phone, nic, dob, gender, password, hospital },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json"
          },
        })

      toast.success(response.data.message);
      setIsAuthenticated(true);
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
      <div className="container form-component add-admin-form">
        <img src='https://s3-alpha-sig.figma.com/img/8720/42a3/7e85fc27550c7eab97dc554a94175d88?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qoXePXVzTFtLlUZwtx4aoUDnyXwSj2FmAaYm~twxNuoOulmehJJXJuzPmvpd7fPcbJu3F7iegV93I0DKirpJYSEFFb4LPbweeqGxmtFIsQja1Kj33Tr24mIj5HLMduq5De7JvPz88LDu~Ac-tfkMFOLAG36E~0549FofL4JaGXwhEZ~JkhiiI6z1JrR48~V7rlSZ7hDZXO2QEjIqgo876N3lUgW1iVTg5n5bBg5ik1hRL3J9gGBBO-xajrqXW-9ChyhHbt1G7bHFCJmjqFUwQujSuUe~U7ituQTwBDEXhk87Js4Q8cs-sbGDzRrwo3t3gtFZfkL~~77vRlwIvIpq1g__' alt='logo' className='logo' />
        <h1 className='form-title'>ADD NEW ADMIN</h1>
        <form onSubmit={handleAddNewAdmin}>
          <div>
            <input type='text' placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type='text' placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div>
            <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='number' placeholder='Mobile Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div>
            <input type='number' placeholder='NIC' value={nic} onChange={(e) => setNic(e.target.value)} />
            <input type='date' placeholder='Date of Birth' value={dob} onChange={(e) => setDob(e.target.value)} />
          </div>
          <div>
            <select value={gender} onChange={((e) => setGender(e.target.value))}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div>
            <input type='text' placeholder='Hospital Name' value={hospital} onChange={(e) => setHospital(e.target.value)} />
          </div>

          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type='submit'>ADD NEW ADMIN</button>
          </div>

        </form>
      </div>
    </section>
  )
}

export default AddNewAdmin
