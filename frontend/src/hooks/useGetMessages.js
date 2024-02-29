import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useStore from "../store/useStore";

export default function useGetMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useStore();

  useEffect(() => {

    const getMessages = async () => {
        setLoading(true);
    
        try {
          const res = await fetch(`/api/messages/${selectedConversation._id}`);
    
          const data = await res.json();
    
          if (!data.success) {
            setMessages([]);
            throw new Error(data.msg);
          } else {
            toast.success(data.msg);
            setMessages(data.messages);
          }
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    if (selectedConversation?._id) {
        getMessages();
    }
  }, [selectedConversation?._id, setMessages]);


  

  return { messages, loading };
}
