import { useLayoutEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const [bg, setBg] = useState("/bg1.webp");

  const { authUser } = useAuthContext();

  useLayoutEffect(() => {
    const newBg = "/bg" + (Math.floor(Math.random() * 7) + 1) + ".webp";

    setBg(newBg);
  }, []);

  return (
    <main
      className={`w-full relative min-h-screen bg-[url('${bg}')] bg-fixed bg-center z-0 bg-no-repeat	bg-cover after:absolute after:top-0 after:z-[-1] after:w-full after:h-full after:bg-gradient-to-r from-gray-900/20 to-gray-900/20`}
    >
      <section className="p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/sighup"
            element={authUser ? <Navigate to="/" /> : <SignUp />}
          />
        </Routes>
      </section>
      <div>
        <Toaster />
      </div>
    </main>
  );
}

export default App;
