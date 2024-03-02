import { Schema, model } from "mongoose";

const messageSchema = new Schema(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    receiverId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    message: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Message = model("Message", messageSchema);
export default Message;
