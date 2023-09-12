import express from "express";
import { config } from "dotenv";
import cors from "cors";
import paymentRoute from "./routes/Paymentroute.js"

config({path:"./config.env"})


export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", paymentRoute);

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
    
);