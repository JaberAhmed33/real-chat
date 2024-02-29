import { useState } from "react";
import { validationSignUpInputs } from "../../utils/validationInputs";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

export default function useSignUp() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signUp = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const validInputs = validationSignUpInputs({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!validInputs) return;

    setLoading(true);

    try {
      const res = await fetch(`/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
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

  return { signUp, loading };
}
