import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useConversation() {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    getConversation();
  }, []);

  const getConversation = async () => {
    setLoading(true);

    try {
        const res = await fetch(`/api/users`);
    
          const data = await res.json();
    
          console.log(data);

          if (!data.success) {
            throw new Error(data.msg);
          } else {
            toast.success(data.msg);
            setConversations(data.users)
          }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { conversations, loading };
}
