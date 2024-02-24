import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  const { id: currentUser } = req.user;

  try {
    const allUsers = await User.find({ _id: { $ne: currentUser } }).select("-password");

    return res
      .status(200)
      .json({
        success: true,
        msg: "get all users successfully!",
        users: allUsers,
      });
  } catch (error) {
    console.log(`error in get users controller, ${error}`);
    return res
      .status(500)
      .json({ success: false, msg: "Internal server error" });
  }
};
