import { useState } from "react";
import { validationMessageInputs } from "../../utils/validationInputs";
import toast from "react-hot-toast";
import useStore from "../store/useStore";

export default function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useStore();

  const sendMessage = async ({ message, imgUrl }) => {
    const validInputs = validationMessageInputs({
      message,
      imgUrl,
    });

    if (!validInputs) return;

    setLoading(true);


    try {
      const res = await fetch(
        `/api/messages/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message, imgUrl }),
        }
      );

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.msg);
      } else {
        toast.success(data.msg);
        setMessages([...messages, data.newMessage]);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
}
