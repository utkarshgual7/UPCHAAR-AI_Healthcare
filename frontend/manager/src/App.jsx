import { useContext, useEffect } from 'react'
import { Context } from './main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard"
import AddNewAdmin from "./components/AddNewAdmin"
import Login from "./components/Login"
import Messages from "./components/Messages"
import SideBar from "./components/SideBar"
import { ToastContainer } from 'react-toastify';
import "./App.css"
import axios from 'axios';

function App() {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async() => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/manager/me",
          {
            withCredentials: true
          });
          setIsAuthenticated(true);
          setUser(response.data.user)
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated])

  return (
    <>
      <Router>
        <SideBar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/admin/addnew' element={<AddNewAdmin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/messages' element={<Messages />} />
        </Routes>
        <ToastContainer position='top-center' />
      </Router>

    </>
  )
}

export default App
