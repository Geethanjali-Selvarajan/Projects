import express from "express";

import authRoutes from "./routes/auth.route.js"
import bookingRoutes from "./routes/booking.route.js"

import {connectDB} from "./lib/db.js"

import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"

dotenv.config()
const app= express();

const Port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use("/api/auth",authRoutes);
app.use("/api/booking",bookingRoutes);

app.listen(Port, () => {
    console.log("server is running on the PORT:"+ Port);
    connectDB()
});