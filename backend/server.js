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

app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));

app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/messages", messageRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({
    msg: `there was some server error, ${err.type}.`,
    result: false,
  });
});

server.listen(port, () => {
  connectToDB();
  console.log(`server is running on port ${port}`);
});
