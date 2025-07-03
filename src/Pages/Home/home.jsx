import React from "react";
import Register from "../../Comp/Register/reg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-black backdrop-blur-md py-6 text-center shadow-lg">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide animate-slideIn text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 drop-shadow-lg">
          WELCOME TO GYM MANAGEMENT SYSTEM
        </h1>
      </div>

      <div className='flex-1 bg-cover bg-center bg-no-repeat flex items-start justify-center pt-0.5 bg-[url("https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?cs=srgb&dl=pexels-anush-1229356.jpg&fm=jpg")]'>
        <div className="w-full lg:flex gap-50 items-start px-10 mt-1 justify-center items-center">
          <div className="-mt-6">
            <Register className="border-4 border-white-500 rounded-lg p-4 pt-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
