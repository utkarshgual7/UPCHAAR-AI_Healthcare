import app from "./app.js"
import connectDB from "./db/index.js"
import cloudinary from  "cloudinary"
import Razorpay from "razorpay";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export const instance = new Razorpay({
    key_id: process.env.RAZOR_API_KEY,
    key_secret: process.env.RAZOR_SECRET_KEY,
  });


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server listening on Port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MongoDB connection failed")
})
