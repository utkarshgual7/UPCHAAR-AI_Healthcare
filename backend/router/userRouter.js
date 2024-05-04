import express from "express"
import {patientRegister, loginUser, addNewAdmin, getAllDoctors, getUserDetails, logoutAdmin, logoutPatient, addNewDoctor, logoutDoctor, updateDoctorDetails, logoutManager, addNewManager, getAllAdmins, getDoctorsOfHospital} from "../controller/userController.js"
import {isAdminAuthenticated, isPatientAuthenticated, isDoctorAuthenticated, isManagerAuthenticated} from "../middlewares/auth.js"

const router = express.Router();

router.get("/doctors", getAllDoctors);
router.get("/admin/me", isAdminAuthenticated, getUserDetails );
router.get("/patient/me", isPatientAuthenticated, getUserDetails );
router.get("/doctor/me", isDoctorAuthenticated, getUserDetails);
router.get("/doctor/logout", isDoctorAuthenticated, logoutDoctor)
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
router.post("/patient/register", patientRegister);
router.post("/login", loginUser);
router.post("/admin/addNew", isAdminAuthenticated, addNewAdmin);
router.post("/doctor/addnew",isAdminAuthenticated, addNewDoctor);
router.post("/manager/addnew", addNewManager);
router.put("/updateProfile",isDoctorAuthenticated, updateDoctorDetails);
router.get("/manager/me",isManagerAuthenticated, getUserDetails);
router.get("/manager/logout", isManagerAuthenticated, logoutManager);
router.get("/alladmins", isManagerAuthenticated, getAllAdmins)
router.get("/hospital/doctor", isAdminAuthenticated, getDoctorsOfHospital);
export default router;