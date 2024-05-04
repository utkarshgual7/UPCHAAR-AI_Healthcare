import { asyncHandler } from "../middlewares/asyncHandler.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import {User} from "../models/userSchema.models.js"
import {generateToken} from "../utils/jwtToken.js"
import cloudinary from "cloudinary";
import bcrypt from "bcrypt";

const patientRegister = asyncHandler( async(req, res, next) => {
    const {firstName, lastName, email, phone, nic, dob, gender, password, role} = req.body

    if((!firstName || !lastName || !email || !phone || !nic || !dob || !gender || !password || !role)){
        return next(new ErrorHandler("Please Fill Full Form", 400));
    }

    const user = await User.findOne({email});
    if(user) {
        return next(new ErrorHandler("User Already Registered", 400))
    }

    const patient = await User.create({
        firstName,
        lastName,
        email,
        phone,
        nic,
        dob,
        gender,
        password,
        role
    })

    if(!patient) {
        return next(new ErrorHandler(" Patient User is not created"))
    }

    generateToken(patient, "Patient Registered Successfully", 200, res)

})

const loginUser = asyncHandler( async(req, res, next) => {
    const {email, password, confirmPassword, role} = req.body

    if(!email || !password || !confirmPassword || !role ){
        return next(new ErrorHandler("All fields are required", 400))
    }

    if(password !== confirmPassword){
        return next(new ErrorHandler("Password and ConfirmPassword must  be same", 400))
    }

    const user = await User.findOne({email}).select("+password")

    if(!user){
        return next(new ErrorHandler("user does not exist", 400))
    }

    const isPasswordValid = await user.comparePassword(password)

    if(!isPasswordValid){
        return next(new ErrorHandler("Invalid User Credentials", 401))
    }

    if(role !== user.role){
        return next(new ErrorHandler("User with this role not found!", 400))
    }

    generateToken(user, "User LoggedIn Successfully", 200, res)

})

const addNewAdmin = asyncHandler( async(req,res,next) => {
    const {firstName, lastName, email, phone, nic, dob, gender, password, hospital} = req.body

    if( !(firstName && lastName && email && phone && nic && dob && gender && password && hospital)){
        return next(new ErrorHandler("Please Fill Full Form", 400));
    }
    const isRegistered = await User.findOne({email});

    if(isRegistered){
        return next(new ErrorHandler(`${isRegistered.role} with this email already exist!`, 400));
    }

    const admin = await User.create({
        firstName,lastName,email,phone,nic,dob,gender,password,role:"Admin",hospital
    })

    if(!admin) {
        return next(new ErrorHandler("Admin not registered", 400));
    }

    return res 
    .status(200)
    .json({
        success: true,
        message: "Admin Registered Successfully",
        admin
    })
})

const addNewManager = asyncHandler( async(req, res, next) => {
    const {firstName, lastName, email, phone, gender, password} = req.body

    if( !(firstName && lastName && email && phone && gender && password )){
        return next(new ErrorHandler("Please Fill Full Form", 400));
    }

    const manager = await User.create({
        firstName,lastName,email,phone,gender,password,role:"Manager"
    })

    if(!manager) {
        return next(new ErrorHandler("Admin not registered", 400));
    }

    return res 
    .status(200)
    .json({
        success: true,
        message: "Manager Registered Successfully",
        manager
    })
})

const getAllDoctors = asyncHandler( async(req, res, next) => {

    const doctors = await User.find({ role: "Doctor"})

    if(!doctors){
        return next(new ErrorHandler("Doctors Not Found", 400))
    }

    return res 
    .status(200)
    .json({
        success: true,
        doctors
    })
})

const getAllAdmins = asyncHandler( async(req, res, next) => {

    const admins = await User.find({ role: "Admin"})

    if(!admins){
        return next(new ErrorHandler("Admins not found", 400))
    }
    return res
    .status(200)
    .json({
        success: true,
        admins
    })
})

const getUserDetails = asyncHandler( async (req, res, next) => {
    const user = req.user

    return res
    .status(200)
    .json({
        success: true,
        user
    })
})

const logoutAdmin = asyncHandler( async( req, res, next) => {
    return res
    .status(200)
    .cookie("adminToken", "" ,{
        httpOnly: true,
        expires: new Date(Date.now()),
    })
    .json({
        success: true,
        message: "Admin LoggedOut Successfully"
    })
})

const logoutPatient = asyncHandler( async( req, res, next) => {
    return res
    .status(200)
    .cookie("patientToken", "" ,{
        httpOnly: true,
        expires: new Date(Date.now()),
    })
    .json({
        success: true,
        message: "Patient LoggedOut Successfully"
    })
})

const logoutDoctor = asyncHandler( async(req, res, next) => {
    return res
    .status(200)
    .cookie("doctorToken", "",{
        httpOnly: true,
        expires: new Date(Date.now()),
    })
    .json({
        success: true,
        message: "Doctor LoggedOut Successfully"
    })
})

const logoutManager = asyncHandler( async(req, res, next) => {
    return res
    .status(200)
    .cookie("managerToken","",{
        httpOnly: true,
        expires: new Date(Date.now()),
    })
    .json({
        success: true,
        message: "Manager LoggedOut Successfully"
    })
})


const addNewDoctor = asyncHandler( async(req, res, next) => {
    const {firstName, lastName, email, phone, nic, dob, gender, password, doctorDepartment, experience, rating, onlinefees, offlinefees, hospital} = req.body

    if (!(firstName && lastName && email && phone && nic && dob && gender && password && doctorDepartment && experience && rating && hospital && onlinefees && offlinefees)){
        return next(new ErrorHandler("All fields must required", 400))
    }

    const isRegistered = await User.findOne({email})

    if(isRegistered){
        return next(new ErrorHandler(`${isRegistered.role} already registered with this email`,400))
    }

    const avatarLocalPath = req.files?.docAvatar?.tempFilePath;
    console.log("Avatar is",avatarLocalPath)

    if(!avatarLocalPath){
        return next(new ErrorHandler("Avatar file is required", 400))
    }

    const avatar = await cloudinary.uploader.upload(avatarLocalPath)

    if(!avatar){
        return next(new ErrorHandler("Avatar file not uploaded on cloudinary", 400))
    }

    const doctor = await User.create({
        firstName, lastName, email, phone, nic, dob, gender, password, role: "Doctor", docAvatar: avatar.url, doctorDepartment, experience , rating , hospital, onlinefees, offlinefees
    })

    if(!doctor){
        return next(new ErrorHandler("Doctor profile not created", 400))
    }

    return res
    .status(200)
    .json({
        success: true,
        message: "New Doctor Registered!",
        doctor
    })
})

const updateDoctorDetails = asyncHandler( async( req, res, next) => {
    const {firstName, lastName, email, phone, nic, dob, gender, password, doctorDepartment } = req.body

    const avatarLocalPath = req.files?.docAvatar?.tempFilePath;

    const avatar = await cloudinary.uploader.upload(avatarLocalPath)

    let hashedPassword;
    if (password) {
        hashedPassword = await bcrypt.hash(password, 10);
    }

    const update = await User.findByIdAndUpdate(req.user?._id,
    {
        $set: {
            firstName, lastName, email,  phone, nic , dob, password: hashedPassword, docAvatar: avatar.url, gender, doctorDepartment
        }
    },
    {
        new: true
    }
    )

    return res
    .status(200)
    .json({
        success: true,
        message: "Profile updated Successfully",
        update
    })
})

const getDoctorsOfHospital = asyncHandler( async( req, res, next) => {

    const username = req.user;

    const hospitalName = username.hospital;
    console.log("HospitalName", hospitalName);

    const doctors = await User.find({
        role: "Doctor",
        hospital: hospitalName
    })

    return res
    .status(200)
    .json({
        success: true,
        message: " Getting List Of all Doctors",
        doctors
    })
})


export {patientRegister, loginUser, addNewAdmin, getAllDoctors, getUserDetails,getDoctorsOfHospital,
    logoutAdmin, logoutPatient, addNewDoctor, logoutDoctor, updateDoctorDetails, logoutManager, addNewManager, getAllAdmins}