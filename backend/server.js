import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import usersRoutes from "./routes/users.route.js";
import messageRoutes from "./routes/message.route.js";
import connectToDB from "./db/connect.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
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

app.listen(port, () => {
  connectToDB();
  console.log(`server is running on port ${port}`);
});
