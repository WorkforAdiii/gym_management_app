import React,{useState,useEffect} from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    const [greeting,setGreeting]=useState("");
    const navigate = useNavigate();
    const location = useLocation();
    
    const greetingMessage = () => {
        const currentHour = new Date().getHours();

        if (currentHour < 12) {
            setGreeting("Time to Lift the Day Buddy! ☀️");
  }     else if (currentHour < 18) {
            setGreeting("Afternoon Hustle Time! 🚴‍♂️");
  }     else if (currentHour < 21) {
            setGreeting("Good Evening, Warrior! 🛡️");
  }     else {
            setGreeting("Recovery is Strength..Good Night Buddy 🌙 !");
  }
};
useEffect(()=>{
    greetingMessage()
},[])

  const handleLogout = () => {
    // Add logout logic here
    navigate('/');
  };

  return (
    <div className="w-1/4 min-h-screen h-auto bg-slate-950 backdrop-blur-lg border border-white/20 text-white p-6 shadow-xl">
      <div className="text-center text-3xl font-semibold mb-6 tracking-wide drop-shadow-md border border-white p-4">
        Power Zone
      </div>

      <div className="flex gap-5 my-10">
        <div className="w-28 h-28 rounded-full border-2 border-white/30 shadow-md">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaKv_3uWI17LyXz6dLfGzLAeETYstVDwuCHg&s"
            alt="Gym Pic"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="text-white text-left ">
          <div className="text-xl font-medium text-white/90">{greeting}</div>
          <div className="text-xl font-bold tracking-wide mt-1 text-blue-400">
            Admin
          </div>
        </div>
      </div>
      <div className="mt-10 py-8 border-t-2 border-gray-700 space-y-4">
        {/* Dashboard */}
        <Link to="/dashboard">
          <div className={`flex items-center gap-5 font-semibold mt-7 text-white text-lg px-4 py-3 rounded-xl 
                    backdrop-blur-md border border-white/10 
                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] 
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] 
                    transition duration-300 cursor-pointer hover:bg-white/70 hover:text-black ${
                      location.pathname === '/dashboard' ? 'bg-white/20' : 'bg-white/10'
                    }`}>
            <HomeIcon className="text-xl" />
            <span>Dashboard</span>
          </div>
        </Link>

        {/* Members */}
        <Link to="/members">
          <div className={`flex items-center gap-5 font-semibold mt-8 text-white text-lg px-4 py-3 rounded-xl 
                    backdrop-blur-md border border-white/10 
                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] 
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] 
                    transition duration-300 cursor-pointer hover:bg-white/70 hover:text-black ${
                      location.pathname === '/members' ? 'bg-white/20' : 'bg-white/10'
                    }`}>
            <GroupIcon className="text-xl" />
            <span>Members</span>
          </div>
        </Link>

        {/* Logout */}
        <div 
          onClick={handleLogout}
          className="flex items-center gap-5 font-semibold mt-8 text-white text-lg px-4 py-3 rounded-xl 
                    bg-white/10 backdrop-blur-md border border-white/10 
                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] 
                    hover:shadow-[0_0_10px_rgba(255,0,0,0.3)] 
                    transition duration-300 cursor-pointer hover:bg-red-500/20 hover:text-white">
          <LogoutIcon className="text-xl" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;