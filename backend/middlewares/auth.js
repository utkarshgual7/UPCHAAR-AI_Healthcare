import { User } from "../models/userSchema.models.js"
import { asyncHandler } from "./asyncHandler.js"
import ErrorHandler from "./errorMiddleware.js"
import jwt from "jsonwebtoken"

export const isAdminAuthenticated = asyncHandler(async(req, res, next) => {
    const token = req.cookies.adminToken;
    if(!token){
        return next(new ErrorHandler("Admin Not Authenticated", 400))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decoded.id); 
    console.log("Role is", req.user ) ;                    // for authorization
    if(req.user.role !== "Admin"){
        return next( new ErrorHandler(`${req.user.role} not authorized for this resource`,403));
    }
    next();
});

export const isPatientAuthenticated = asyncHandler(async(req, res, next) => {
    const token = req.cookies.patientToken;
    if(!token){
        return next(new ErrorHandler("Patient Not Authenticated", 400))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decoded.id);                      // for authorization
    if(req.user.role !== "Patient"){
        return next( new ErrorHandler(`${req.user.role} not authorized for this resource`,403));
    }
    next();
});

export const isDoctorAuthenticated = asyncHandler(async(req, res, next) => {
    const token = req.cookies.doctorToken;
    if(!token){
        return next(new ErrorHandler("Doctor Not Authenticated", 400))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decoded.id);                      // for authorization
    if(req.user.role !== "Doctor"){
        return next( new ErrorHandler(`${req.user.role} not authorized for this resource`,403));
    }
    next();
});

export const isManagerAuthenticated = asyncHandler(async(req, res, next) => {
    const token = req.cookies.managerToken;
    if(!token){
        return next(new ErrorHandler("Manager Not Authenticated", 400))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decoded.id);                      // for authorization
    if(req.user.role !== "Manager"){
        return next( new ErrorHandler(`${req.user.role} not authorized for this resource`,403));
    }
    next();
});