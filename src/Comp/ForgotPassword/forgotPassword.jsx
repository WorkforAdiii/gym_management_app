import React, { useState } from "react";

const ForgotPassword = () => {
  const [emailSubmit, setEmailSubmit] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSendOtp = () => {
    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(randomOtp);
    setEmailSubmit(true);

    // Simulate sending the OTP
    alert(`OTP sent: ${randomOtp}`);
  };

  const handleVerifyOtp = () => {
    if (otp === generatedOtp) {
      setOtpVerified(true);
    } else {
      alert("Invalid OTP");
    }
  };

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert("Password reset successfully!");
      onclose();
    }
  };

  

  return (
    <div className="w-full text-white p-6 max-w-xl mx-auto">
      {/* Email Input */}
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">
          Enter Your Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-5 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Send OTP Button */}
      {!emailSubmit && (
        <button
          onClick={handleSendOtp}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold transition hover:scale-105 shadow-md cursor-pointer"
        >
          Send OTP
        </button>
      )}

      {/* OTP Input and Verify */}
      {emailSubmit && !otpVerified && (
        <div className="mt-6">
          <label className="block text-lg font-semibold mb-2">
            Enter Your OTP
          </label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full px-5 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleVerifyOtp}
            className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-lg font-semibold"
          >
            Verify OTP
          </button>
        </div>
      )}

      {/* Reset Password Section */}
      {otpVerified && (
        <div className="mt-8 space-y-4">
          <label className="block text-lg font-semibold text-center">
            Reset Your Password
          </label>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-5 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/30"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-5 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/30"
          />
          <button
            onClick={handleResetPassword}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold"
          >
            Reset Password
          </button>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
