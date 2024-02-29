import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ success: false, msg: "no token provided!" });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (!decoded) {
    return res.status(401).json({ success: false, msg: "invalid token!" });
  }

  try {
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ success: false, msg: "user not found!" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log(`error in Protect Route Middleware, ${error}`);
    return res
      .status(500)
      .json({ success: false, msg: "Internal server error" });
  }
};

export default protectRoute;
