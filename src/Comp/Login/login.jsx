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
    <div className="min-h-screen w-full bg-cover bg-center flex flex-col" style={{ backgroundImage: 'url(/image.png)' }}>
      <div className="w-full">
        <div className="bg-black/70 backdrop-blur-md py-6 bg-black text-center shadow-lg rounded-xl mb-8 w-full">
          <h1 className="text-3xl md:text-4xl font-extrabold bg-black tracking-wide animate-slideIn text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 drop-shadow-lg">
            Login to Access Your Dashboard
          </h1>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center" style={{ minHeight: 'calc(100vh - 120px)' }}>
        <div className="w-[600px] h-[600px] w-1/3 p-10 rounded-xl shadow-2xl bg-black/80 backdrop-blur-md border border-white/20 h-fit mb-10 ml-10">
          <h2
            className="text-3xl font-semibold text-center text-white mb-8"
            style={{ fontFamily: '"Times New Roman", serif' }}>
            Login
          </h2>
          <input
            type="text"
            placeholder="Enter username"
            className="w-full mb-6 px-4 py-3 rounded-lg bg-slate-10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full mb-6 px-4 py-3 rounded-lg bg-slate-10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
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
      </div>
    </div>
  );
};

export default Login;