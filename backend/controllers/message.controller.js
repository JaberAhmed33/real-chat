import { getReceiverId, io } from "../socket/socket.js";
import Conversation from "./../models/conversation.model.js";
import Message from "./../models/message.model.js";

export const sendMessage = async (req, res) => {
  const { message } = req.body;
  const { id: receiverId } = req.params;
  const senderId = req.user._id;

  try {
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    const socketReceiverId = getReceiverId(receiverId);

    if (socketReceiverId) {
      io.to(socketReceiverId).emit("newMessage", newMessage);
    }

    return res
      .status(201)
      .json({ success: true, msg: "send message successfully!", newMessage });
  } catch (error) {
    console.log(`error in send message controller, ${error}`);
    return res
      .status(500)
      .json({ success: false, msg: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  const { id: receiverId } = req.params;
  const senderId = req.user._id;

  try {
    const { messages } = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");

    if (!messages)
      res
        .status(400)
        .json({ success: false, msg: "no chat to found!", messages: [] });

    return res.status(200).json({
      success: true,
      msg: "user messages!",
      messages: messages,
    });
  } catch (error) {
    console.log(`error in send message controller, ${error}`);
    return res
      .status(500)
      .json({ success: false, msg: "Internal server error" });
  }
};
