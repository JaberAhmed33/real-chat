import { useEffect } from "react";
import { useSocketContext } from "../context/socketContext";
import useStore from "../store/useStore";

import notificationSound from "../assets/sounds/livechat-129007.mp3"

export default function useSocketMessages() {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useStore();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shake = true;
      const notify = new Audio(notificationSound);
      notify.play();
      setMessages([...messages, newMessage]);
    });

    return () => {
      socket?.off("newMessage");
    };
  }, [socket, setMessages, messages]);
}
