import React, { useState, useEffect } from 'react';
import './reg.css';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

const DEFAULT_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaKv_3uWI17LyXz6dLfGzLAeETYstVDwuCHg&s";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    gender: '',
    gym: '',
    plan: '',
    contact: '',
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(DEFAULT_IMAGE);
  const [isUploading, setIsUploading] = useState(false);

  // Log form on every change
  useEffect(() => {
    console.log("Register form state:", form);
  }, [form]);

  // Upload image to Cloudinary
  const uploadImageToCloudinary = async (file) => {
    console.log("Image uploading to Cloudinary");
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'gym-management');
    setIsUploading(true);
    try {
      const res = await fetch('https://api.cloudinary.com/v1_1/dqcz17jse/image/upload',{
        method: 'POST',
        body: data,
      });
      // Log the full response object
      console.log("Cloudinary upload response:", res);
      const result = await res.json();
      // Log the parsed result as well
      console.log("Cloudinary upload result:", result);
      setForm(prev => {
        const updated = { ...prev, image: result.secure_url };
        console.log("Updated form with image URL:", updated);
        return updated;
      });
      setImagePreview(result.secure_url);
    } catch (err) {
      alert('Image upload failed');
    } finally {
      setIsUploading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file' && files.length > 0) {
      uploadImageToCloudinary(files[0]);
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registering user with details:", form);
    // Simulate successful registration
    navigate('/login');
  };
  const handleLoginRedirect = () => {
    navigate('/login');
  };
  return (
    <div className="customRegister w-[600px] h-[600px] w-1/3 p-10 mt-20 ml-20 rounded-xl shadow-2xl bg-slate-10 backdrop-blur-md border border-white/20 h-[450px] overflow-y-auto">
      <h2 className="text-3xl font-semibold text-center text-white mb-8" style={{ fontFamily: '"Times New Roman", serif' }}> Create Your Member Profile </h2>
      <div className="space-y-4">
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="w-full mb-4 px-4 py-3 rounded-lg bg-slate/10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        <input type="email" name="email" value={form.email} onChange={handleChange} id="email" placeholder="Enter your email" className="w-full mb-4 px-4 py-3 rounded-lg bg-slate-10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" className="w-full mb-4 px-4 py-3 rounded-lg bg-slate-10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Confirm Password" className="w-full mb-6 px-4 py-3 rounded-lg bg-slate-10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        <input type="number" name="age" value={form.age} onChange={handleChange} placeholder="Age" className="w-full mb-4 px-4 py-3 rounded-lg bg-slate-10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        <select name="gender" value={form.gender} onChange={handleChange} className="w-full mb-4 px-4 py-3 rounded-md bg-slate/10 text-white border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
          <option value="" disabled>Select Gender</option>
          <option value="male" className="text-black">Male</option>
          <option value="female" className="text-black">Female</option>
          <option value="other" className="text-black">Other</option>
        </select>
        <input type="text" name="gym" value={form.gym} onChange={handleChange} placeholder="GYM Name" className="w-full mb-4 px-4 py-3 rounded-lg bg-slate-10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        <select name="plan" value={form.plan} onChange={handleChange} className="w-full mb-6 px-4 py-3 rounded-md bg-slate/10 text-white border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
          <option value="" disabled>Select Membership Plan</option>
          <option value="monthly" className="text-black">Monthly</option>
          <option value="quarterly" className="text-black">Quarterly</option>
          <option value="yearly" className="text-black">Yearly</option>
          <option value="premium" className="text-black">Premium</option>
        </select>
        <input type="tel" name="contact" value={form.contact} onChange={handleChange} placeholder="Contact Number" className="w-full mb-4 px-4 py-3 rounded-lg bg-slate-10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        <label className="block mb-4 text-white font-semibold ">Upload Profile Image<input type="file" name="image" accept="image/*" onChange={handleChange} className="mt-2 block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600 transition "/></label>
      </div>
      {/* Image + Loader Centered */}
      <div className="flex flex-col items-center justify-center mt-8 space-y-4 ">
        {isUploading && (
          <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
            <LinearProgress color="secondary" />
          </Stack>
        )}
        <img src={imagePreview} className='mb-5 w-36 h-36 rounded-full object-cover border-2 border-white/30 shadow-lg' />
      </div>
      <button onClick={handleRegister} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition text-lg font-semibold cursor-pointer hover:scale-105">Register</button>
      <h2 className ="text-white text-sm mt-6 text-center"> Already have an account? <span className="text-blue-300 underline cursor-pointer" onClick={handleLoginRedirect}>Login</span></h2>
    </div>
  );
};

export default Register;