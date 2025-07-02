import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const stats = [
  { title: "Member Registry", subtitle: "Joined Members", icon: "👥", to: "/members" },
  { title: "New Enrollments", subtitle: "Monthly Joined", icon: "📊", to: "/specific/new_enrollments" },
  { title: "Urgent Renewals", subtitle: "Expiring within 3 days", icon: "⏰", to: "/specific/urgent_renewals" },
  {
    title: "Pending Renewals",
    subtitle: "Expiring within 4–7 days",
    icon: "⏳",
    to: "/specific/pending_renewals",
  },
  { title: "Lapsed Memberships", subtitle: "Expired", icon: "❗", to: "/specific/lapsed_memberships" },
  { title: "Dormant Accounts", subtitle: "Inactive Members", icon: "🚫", to: "/specific/dormant_accounts" },
];

const Dashboard = () => {
  const [showMessage, setShowMessage] = useState(false);
  const messageRef = useRef();

  // Function to set sessionStorage value when a card is clicked
  const handleCardClick = (value) => {
    sessionStorage.setItem("userType", value);
    // You can also log or use the value here if needed
    // console.log('Set userType:', value);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        showMessage &&
        messageRef.current &&
        !messageRef.current.contains(e.target)
      ) {
        setShowMessage(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMessage]);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 flex flex-col items-center">
      {/* Top Bar */}
      <div className="w-full bg-slate-950 rounded-lg flex p-4 justify-between items-center shadow-lg">
        <div className="flex items-center gap-2">
          <MenuIcon
            onClick={() => setShowMessage((prev) => !prev)}
            className="cursor-pointer"
          />
          <span className="text-white font-medium">Menu</span>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAmc6O_uNAiPZOhZdLj7Lc_dFoXBaf2p3rtQ&s"
          alt="Profile"
          className="w-8 h-8 rounded-full border-2 border-white"
        />
      </div>

      {/* Welcome Message */}
      {showMessage && (
        <div
          ref={messageRef}
          className="w-full mt-4 p-4 border border-white rounded-xl bg-slate-900 shadow-md transition duration-300"
        >
          <h3 className="text-xl font-semibold mb-2">
            👋 Welcome to Power Zone Gym Management
          </h3>
          <p className="text-white/80">
            Manage your gym members, renewals, and activities easily. For help,
            feel free to reach out!
          </p>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 mt-16 w-full">
        {stats.map((stat, index) => (
          <Link
            to={stat.to}
            key={index}
            onClick={() => handleCardClick(stat.title)}
            className={`rounded-2xl min-h-[220px] p-8 bg-slate-950 border border-white/30 backdrop-blur-md shadow-xl flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 cursor-pointer group hover:bg-white/70 hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]`}
          >
            <div className="text-6xl mb-5 transition-all duration-300 group-hover:scale-110">
              {stat.icon}
            </div>
            <h2 className="text-2xl font-semibold">{stat.title}</h2>
            <h3 className="text-lg text-gray-400 group-hover:text-black mt-1">
              {stat.subtitle}
            </h3>
          </Link>
        ))}
      </div>

      {/* Developer Footer */}
      <div className="w-full mt-12 p-4 bg-black text-white rounded-xl text-center text-lg shadow-md">
        Contact Developer for Technical Support:{" "}
        <span className="font-semibold text-blue-400 hover:underline cursor-pointer">
          +91 9876543210
        </span>
      </div>
    </div>
  );
};

export default Dashboard;
