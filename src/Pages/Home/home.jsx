import React from 'react';
import Register from '../../Comp/Register/reg';
import Login from '../../Comp/Login/login';

const Home = () => {
  return (
    <div className='w-full h-[100vh]'>
      <div className="flex items-center justify-center bg-gradient-to-br from-black via-gray-800 to-black border-1 border-black text-white p-6 rounded shadow-md animate-slideIn">
  <h1 className="text-3xl font-bold tracking-wider">WELCOME TO GYM MANAGEMENT SYSTEM</h1>
</div>


      <div className='w-full bg-cover h-[100%] flex justify-center bg-[url("https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?cs=srgb&dl=pexels-anush-1229356.jpg&fm=jpg")]'>
        <div className='w-full lg:flex gap-110'>
          <Register />
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Home;
