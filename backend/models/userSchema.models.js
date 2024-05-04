import mongoose from "mongoose"
import validator from "validator"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
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
            validate: [validator.isEmail, "Please Provide a valid email"]
        },
        phone: {
            type: String,
            required: true,
            minLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
            maxLength: [10, "Phone Number Must Contain Exact 10 Digits!"]
        },
        nic:{
            type: String,
            required: true,
            minLength: [13, "Nic Must Contain Exact 13 Digits!"],
            maxLength: [13, "Nic Must Contain Exact 13 Digits!"]
        },
        dob: {
            type: Date,
            required: [true, "Dob is required"]
        },
        gender:{
            type: String,
            required: true,
            enum: ["Male", "Female", "Others"]
        },
        password: {
            type: String,
            required: true,
            select: false,
            minLength: [8, "Password must contain atleast 8 characters"]
        },
        role: {
            type: String,
            required: true,
            enum: ["Admin", "Patient", "Doctor", "Manager"]
        },
        doctorDepartment: {
            type: String
        },
        docAvatar: {
            type: String
        },
        hospital: {
            type: String
        },
        experience: {
            type: String
        },
        rating: {
            type: Number
        },
        onlinefees: {
            type: Number
        },
        offlinefees:{
            type: Number
        }
    }, {timestamps: true}
)

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateJsonWebToken = function () {
    return jwt.sign({
        id: this._id
    },
    process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES,
    });
};

export const User = mongoose.model("User", userSchema)