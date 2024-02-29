import { useAuthContext } from "../../context/AuthContext";
import useStore from "../../store/useStore";
import { getTheTime } from './../../../utils/getTheTime';

export default function Message({ message }) {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useStore();

  const isMe = message.senderId === authUser._id;

  return (
    <div className={`chat  ${isMe ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={isMe ? authUser?.profilePic : selectedConversation?.profilePic}
          />
        </div>
      </div>
      <div
        className={`chat-bubble text-black ${
          isMe ? " bg-emerald-200" : " bg-yellow-200"
        }`}
      >
        {message.message}
      </div>
      <div className="chat-footer text-white opacity-50 text-xs pb-2 flex gap-1 items-center">
        {getTheTime(message.createdAt)}
      </div>
    </div>
  );
}
