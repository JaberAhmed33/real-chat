import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import useStore from "../../store/useStore";
import { getTheTime } from "./../../../utils/getTheTime";

export default function Message({ message }) {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useStore();
  const [imgLoaded, setImgLoaded] = useState(false);

  const isMe = message.senderId === authUser._id;

  return (
    <div className={`chat  ${isMe ? "chat-end" : "chat-start"}`}>
      <div className={`chat-image ${!isMe ? "self-start" : ""} avatar`}>
        <div className="w-10 rounded-full ">
          <img
            alt="avatar"
            src={isMe ? authUser?.profilePic : selectedConversation?.profilePic}
          />
        </div>
      </div>

      {message.message && (
        <div
          className={`chat-bubble max-w-[70%] text-black ${
            isMe ? " bg-emerald-200" : " bg-yellow-200"
          } 
            ${message.shake ? "shake" : ""}
            `}
        >
          <article className="break-all">
            <p className="font-semibold text-base">{message.message}</p>
          </article>
        </div>
      )}

      {message.image && (
        <div
          className={`chat-bubble before:hidden mx-fit mt-2 text-black ${
            isMe ? " bg-emerald-200" : " bg-yellow-200"
          } 
            ${message.shake ? "shake" : ""}
            `}
        >
          <div className="relative w-60 h-60">
            <img
              src={message.image}
              onLoad={() => setImgLoaded(true)}
              alt="user image"
              className=" w-60 max-h-[inherit] rounded-lg absolute top-1/2 -translate-y-1/2 bg-cover"
            />
            <div
              className={`skeleton w-60 h-60 absolute top-0 ${
                imgLoaded ? "hidden" : ""
              }`}
            ></div>
          </div>
        </div>
      )}

      <div className="chat-footer text-white opacity-50 text-xs pb-2 flex gap-1 items-center">
        {getTheTime(message.createdAt)}
      </div>
    </div>
  );
}
