import React, { useState } from "react";
import Modal from "../Modal/modal";
import ForgotPassword from "../ForgotPassword/forgotPassword";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleLogin = () => {
    sessionStorage.setItem("isLogin", true);
    navigate("/dashboard");
  };

  const handleClose = () => {
    setForgotPassword((prev) => !prev);
  };

  return (
    <div className="w-[600px] h-[600px] w-1/3 p-10 mt-20 ml-40 rounded-xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 h-fit">
      <h2
        className="text-3xl font-semibold text-center text-white mb-8"
        style={{ fontFamily: '"Times New Roman", serif' }}>
        Login
      </h2>

      <input
        type="text"
        placeholder="Enter username"
        className="w-full mb-6 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"/>

      <input
        type="password"
        placeholder="Enter password"
        className="w-full mb-6 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"/>

      {/* ✅ Correct onClick usage */}
      <button
        onClick={handleLogin}
        className="mb-5 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition text-lg font-semibold cursor-pointer hover:scale-105">
        Login
      </button>

      <button
        onClick={handleClose}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition text-lg font-semibold cursor-pointer hover:scale-105">
        Forgot Password
      </button>

      {forgotPassword && (
        <Modal
          header="Forgot Password"
          handleClose={handleClose}
          content={<ForgotPassword />}
        />
      )}
    </div>
  );
};

export default Login;
