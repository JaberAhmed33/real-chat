import useGetMessage from "../../hooks/useGetMessages";
import Message from "./Message";
import MessageSkeleton from "./../skeletons/MessageSkeleton";
import { useEffect, useRef } from "react";

export default function Messages() {
  const { messages, loading } = useGetMessage();
  const lastMessage = useRef(null);
  
  useEffect(() => {
    const scrollTime = setTimeout(() => {
      if (lastMessage.current) {
        console.log("hi");
        lastMessage.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);

    return () => {
      clearTimeout(scrollTime)
    }
  }, [messages]);

  return (
    <div className="px-4 flex flex-col flex-1 overflow-auto">
      {loading ? (
        [...Array(3)].map((_, i) => <MessageSkeleton key={i} />)
      ) : !loading && messages.length === 0 ? (
        <p className="m-auto text-white">
          No messages, Send message to start a conversation.
        </p>
      ) : (
        messages.map((message) => (
          <div key={message._id} ref={lastMessage}>
            <Message message={message} />
          </div>
        ))
      )}
    </div>
  );
}
