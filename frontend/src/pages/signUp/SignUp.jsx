import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignUp from "../../hooks/useSignUp";

export default function SignUp() {
  const { signUp, loading } = useSignUp();
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleChange = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;

    setInputs((prev) => ({ ...prev, [inputName]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signUp(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-emerald-700 font-bold ms-3">Real Chat</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="p-2">
            <label className="label p-2">
              <span className="text-sm text-opacity-75 text-gray-300">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              name="fullName"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="p-2">
            <label className="label p-2">
              <span className="text-sm text-opacity-75 text-gray-300">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="sasuke-san"
              className="w-full input input-bordered h-10"
              name="username"
              value={inputs.username}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="p-2">
            <label className="label p-2">
              <span className="text-sm text-opacity-75 text-gray-300">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              name="password"
              value={inputs.password}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="p-2">
            <label className="label p-2">
              <span className="text-sm text-opacity-75 text-gray-300">
                Confirm password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              name="confirmPassword"
              value={inputs.confirmPassword}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <GenderCheckbox
            handleChange={handleChange}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="text-sm text-gray-300 hover:text-emerald-300 mt-2 inline-block p-2"
          >
            Already have an account?!
          </Link>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-block bg-emerald-700 hover:bg-emerald-900 disabled:bg-emerald-300 hover:border-emerald-700 border-emerald-900 text-white btn-sm mt-2 p-2 h-10"
          >
            {loading ? (
              <span className="loading loading-infinity loading-md bg-black"></span>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
