import express from "express"
import { getAllAppointment, postAppointment, updateAppointmentStatus, deleteAppointment, findAppointmentUser, getAllAppointmentOfDoctor } from "../controller/appointmentController.js";
import { isPatientAuthenticated, isAdminAuthenticated, isDoctorAuthenticated } from "../middlewares/auth.js"

const router = express.Router();

router.post("/post",isPatientAuthenticated, postAppointment )
router.get("/all",isAdminAuthenticated, getAllAppointment)
router.put("/update/:id", isAdminAuthenticated, updateAppointmentStatus)
router.delete("/delete/:id",isAdminAuthenticated, deleteAppointment)
router.get("/slip", findAppointmentUser)
router.get("/doctor/all",isDoctorAuthenticated, getAllAppointmentOfDoctor )

export default router