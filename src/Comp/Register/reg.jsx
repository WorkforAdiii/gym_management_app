import React from 'react';
import './reg.css';

const Register = () => {
  return (
    <div className="customRegister w-[600px] h-[600px] w-1/3 p-10 mt-20 ml-20 rounded-xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 h-[450px] overflow-y-auto">
              <h2 className="text-3xl font-semibold text-center text-white mb-8" style={{ fontFamily: '"Times New Roman", serif' }}> Create Your Member Profile </h2>
              <input type="text" placeholder="Full Name" className="w-full mb-4 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
              <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full mb-4 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
              <input type="password" placeholder="Password" className="w-full mb-4 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
              <input type="password" placeholder="Confirm Password" className="w-full mb-6 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
              <input type="number" placeholder="Age" className="w-full mb-4 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
              <select className="w-full mb-4 px-4 py-3 rounded-md bg-white/10 text-white border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" defaultValue="">
              <option value="" disabled>Select Gender</option>
              <option value="male" className="text-black">Male</option>
              <option value="female" className="text-black">Female</option>
              <option value="other" className="text-black">Other</option>
              </select>
              <input type="text" placeholder="GYM Name" className="w-full mb-4 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
              <select className="w-full mb-6 px-4 py-3 rounded-md bg-white/10 text-white border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" defaultValue="">
              <option value="" disabled>Select Membership Plan</option>
              <option value="monthly" className="text-black">Monthly</option>
              <option value="quarterly" className="text-black">Quarterly</option>
              <option value="yearly" className="text-black">Yearly</option>
              <option value="premium" className="text-black">Premium</option>
              </select>
              <input type="tel" placeholder="Contact Number" className="w-full mb-4 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
              <label className="block mb-4 text-white font-semibold">Upload Profile Image<input type="file" accept="image/*" className="mt-2 block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600 transition"/></label>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaKv_3uWI17LyXz6dLfGzLAeETYstVDwuCHg&s" className='mb-5 w-[250px] h-[200px]' />
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition text-lg font-semibold cursor-pointer hover:scale-105">Register</button>
              <h2 className ="text-white text-sm mt-6 text-center"> Already have an account? <span className="text-blue-300 underline cursor-pointer">Login</span></h2>
              
    </div>
  );
};

export default Register;
