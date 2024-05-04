import mongoose from "mongoose"
import validator from "validator"

const appointmentSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            validate: [validator.isEmail, "Please provide a valid email"]
        },
        phone: {
            type: String,
            required: true,
            minLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
            maxLength: [10, "Phone Number Must Contain Exact 10 Digits!"]
        },
        nic: {
            type: String,
            required: true,
            minLength: [13, "Nic Must Contain Exact 13 Digits!"],
            maxLength: [13, "Nic Must Contain Exact 13 Digits!"]
        },
        dob: {
            type: Date,
            required: [true, "Dob is required"]
        },
        gender: {
            type: String,
            required: true,
            enum: ["Male", "Female", "Others"]
        },
        appointmentDate: {
            type: Date,
            required: [true, "Appointment date must required"]
        },
        appointmentTime: {
            type: String,
            required: [true, "Appointment Time must required"]
        },
        department: {
            type: String,
            required: true
        },
        doctor: {
            firstName: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: true
            }
        },
        hospital: {
            type: String
        },
        hasVisited: {
            type: Boolean,
            default: false
        },
        doctorId:{
            type: mongoose.Schema.ObjectId,
            required: true
        },
        patientId: {
            type: mongoose.Schema.ObjectId,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ["Pending", "Accepted", "Rejected"],
            default: "Pending"
        },
        height: {
            type: String,
        },
        weight: {
            type: String,
        },
        bloodType: {
            type: String,
        },
        allergies: {
            type: String,
        }


    }
)

export const Appointment = mongoose.model("Appointment", appointmentSchema)