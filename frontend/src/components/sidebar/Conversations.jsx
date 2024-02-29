import useConversation from "../../hooks/useConversation.js";
import Conversation from "./Conversation.jsx";
import getEmoji from "./../../../utils/genEmoji.js";

export default function Conversations() {
  const { conversations, loading } = useConversation();
 
  return (
    <div className="py-2 flex flex-col overflow-auto h-full">
      {loading ? (
        <span className="loading loading-infinity my-auto w-72 bg-slate-700"></span>
      ) : (
        conversations.map((conversation, i) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getEmoji()}
            lastIndex={i === conversations.length - 1}
          />
        ))
      )}
    </div>
  );
}
