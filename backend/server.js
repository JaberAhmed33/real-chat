import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import usersRoutes from "./routes/users.route.js";
import messageRoutes from "./routes/message.route.js";
import connectToDB from "./db/connect.js";
import { app, server } from "./socket/socket.js"; 

dotenv.config();

// const app = express();
const port = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => res.send("بسم الله الرحمن الرحيم"));

app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/messages", messageRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/dist/index.html"))
})

server.listen(port, () => {
  connectToDB();
  console.log(`server is running on port ${port}`);
});
