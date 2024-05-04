import express from "express";
import {config} from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import {errorMiddleware} from "./middlewares/errorMiddleware.js"

const app = express()
config({ path: "./config/config.env"})

app.use(                             // frontend sei connect hone ke liye
    cors({
        origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL, process.env.DOCTOR_URL, process.env.MANAGER_URL],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
)
app.use(cookieParser()),    
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
}));

// routes import 
import messageRouter from "./router/messageRouter.js"
import userRouter from "./router/userRouter.js"
import appointmentRouter from "./router/appointmentRouter.js"
import paymentRoute from "./router/paymentRoutes.js";

// routes declaration
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);
app.use("/api", paymentRoute);

app.get("/api/getkey", (req, res) => {
    res.status(200).json({ key: process.env.RAZOR_API_KEY})
})

app.use(errorMiddleware);
export default app;