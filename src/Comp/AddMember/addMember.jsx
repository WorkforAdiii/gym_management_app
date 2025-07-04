import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

const AddMember = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    date: "",
    plan: "",
    file: null, // Cloudinary URL
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const [isUploading, setIsUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file" && files.length > 0) {
      uploadImageToCloudinary(files[0]);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const uploadImageToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "gym-management");

    setIsUploading(true);
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dqcz17jse/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const result = await res.json();
      setFormData((prev) => ({ ...prev, file: result.secure_url }));
    } catch (error) {
      setError("Image upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  const handleRegister = async () => {
    console.log(formData);
    setError("");
    setSuccess("");
    const { name, mobile, address, date, plan, file } = formData;
    if (!name || !mobile || !address || !date || !plan || !file) {
      setError("Please fill in all the fields!");
      return;
    }
    setLoading(true);
    try {
      // Simulate API call
      setTimeout(() => {
        setSuccess("Member registered successfully!");
        setFormData({ name: "", mobile: "", address: "", date: "", plan: "", file: null });
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError("Registration failed");
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-10 backdrop-blur-lg text-white p-6 rounded-xl shadow-2xl w-full max-w-4xl mx-auto border border-white/20 transition-all duration-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name of the Joinee"
          className="bg-grey/100 text-white placeholder-white/60 border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 hover:ring-2 hover:ring-blue-400 hover:scale-105"
        />
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Mobile No"
          className="bg-grey/100 text-white placeholder-white/60 border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 hover:ring-2 hover:ring-blue-400 hover:scale-105"
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="bg-grey/100 text-white placeholder-white/60 border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 hover:ring-2 hover:ring-blue-400 hover:scale-105"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="bg-grey/100 text-white placeholder-white/60 border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 hover:ring-2 hover:ring-blue-400 hover:scale-105"
        />
        <select
          name="plan"
          value={formData.plan}
          onChange={handleChange}
          className="bg-grey/100 text-white border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 hover:ring-2 hover:ring-blue-400 hover:scale-105"
        >
          <option value="" disabled hidden>
            Select Membership Plan
          </option>
          {[1, 2, 3, 4, 5, 6].map((m) => (
            <option key={m} className="bg-slate-900 text-white" value={m}>
              {m} Month{m > 1 && "s"}
            </option>
          ))}
        </select>
        {/* File Upload */}
        <label className="flex items-center justify-between bg-grey/100 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 hover:ring-2 hover:ring-blue-400 hover:scale-105 cursor-pointer">
          <span className="mr-4 bg-blue-600 px-3 py-1 rounded text-white text-sm">
            Choose File
          </span>
          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
          <span className="truncate text-white/70 text-sm ml-2">
            {formData.file ? "Image Selected" : "No file chosen"}
          </span>
        </label>
      </div>
      {/* Image + Loader Centered */}
      <div className="flex flex-col items-center justify-center mt-8 space-y-4">
        {isUploading && (
          <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
            <LinearProgress color="secondary" />
          </Stack>
        )}
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white/10 border-2 border-white/30 shadow-lg overflow-hidden">
          <img
            src={
              formData.file
                ? formData.file
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaKv_3uWI17LyXz6dLfGzLAeETYstVDwuCHg&s"
            }
            alt="Profile Preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Register Button */}
      <div className="text-center mt-6">
        <button
          onClick={handleRegister}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 hover:brightness-110 transition-all duration-300"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
        {error && <div className="text-red-400 mt-2">{error}</div>}
        {success && <div className="text-green-400 mt-2">{success}</div>}
      </div>
    </div>
  );
};

export default AddMember; 