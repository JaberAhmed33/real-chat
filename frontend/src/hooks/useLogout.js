import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

export default function useLogout() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);

    try {
        const res = await fetch(`/api/auth/logout`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          });
    
          const data = await res.json();
    
          if (!data.success) {
            throw new Error(data.msg);
          } else {

            
            toast.success(data.msg);
            localStorage.removeItem("user-info");
            setAuthUser(null);
          }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading };
}
