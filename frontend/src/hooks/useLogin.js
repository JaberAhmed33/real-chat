import { useState } from "react";
import { validationLoginInputs } from "../../utils/validationInputs";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async ({
    username,
    password,
  }) => {
    const validInputs = validationLoginInputs({
      username,
      password,
    });

    if (!validInputs) return;

    setLoading(true);

    try {
      const res = await fetch(`/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.msg);
      } else {
        toast.success(data.msg);
        localStorage.setItem("user-info", JSON.stringify(data.user));
        setAuthUser(data.user);
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
}
