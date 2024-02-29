import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signupUser = async (req, res) => {
  const { fullName, username, password, confirmPassword, gender } = req.body;

  if (password !== confirmPassword) {
    return res
      .status(400)
      .json({ success: false, msg: "passwords don't match!" });
  }

  try {
    const user = await User.findOne({ username });

    if (user) {
      return res
        .status(400)
        .json({ success: false, msg: "user is already exists!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyPic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlPic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyPic : girlPic,
    });

    generateTokenAndSetCookie(newUser._id, res);

    await newUser.save();

    return res.status(201).json({
      success: true,
      msg: "generated a new user is done!",
      user: {
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      },
    });
  } catch (error) {
    console.log(`error in signup controller, ${error}`);
    return res
      .status(500)
      .json({ success: false, msg: "Internal server error" });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    const passwordIsCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !passwordIsCorrect) {
      return res
        .status(400)
        .json({ success: false, msg: "Invalid username or password!" });
    }

    generateTokenAndSetCookie(user._id, res);

    console.log(req.cookies.jwt);
    return res.status(200).json({
      success: true,
      msg: "login is successfully!",
      user: {
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        profilePic: user.profilePic,
      },
    });
  } catch (error) {
    console.log(`error in login controller, ${error}`);
    return res
      .status(500)
      .json({ success: false, msg: "Internal server error" });
  }
};

export const logoutUser = (req, res) => {
  try {
    res.cookie("jwt", "", {maxAge: 0})
    return res
    .status(200)
    .json({ success: true, msg: "Logout successfully!" });
  } catch (error) {
    console.log(`error in logout controller, ${error}`);
    return res
      .status(500)
      .json({ success: false, msg: "Internal server error" });
  }};
