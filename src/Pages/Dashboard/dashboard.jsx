import React ,{useState,useEffect,useRef} from "react";
import MenuIcon from "@mui/icons-material/Menu";

const stats = [
  { title: "Member Registry", subtitle: "Joined Members", icon: "👥" },
  { title: "New Enrollments", subtitle: "Monthly Joined", icon: "📊" },
  { title: "Urgent Renewals", subtitle: "Expiring within 3 days", icon: "⏰" },
  {
    title: "Pending Renewals",
    subtitle: "Expiring within 4–7 days",
    icon: "⏳",
  },
  { title: "Lapsed Memberships", subtitle: "Expired", icon: "❗" },
  { title: "Dormant Accounts", subtitle: "Inactive Members", icon: "🚫" },
];

const Dashboard = () => {
  const [accordianDashboard,setAccordianDashboard]=useState(false);
  const ref = useRef();

useEffect(() => {
  const checkIfClickedOutside = (e) => {
    if (
      accordianDashboard &&
      ref.current &&
      !ref.current.contains(e.target)
    ) {
      setAccordianDashboard(false);
    }
  };

  document.addEventListener("mousedown", checkIfClickedOutside);

  return () => {
    document.removeEventListener("mousedown", checkIfClickedOutside);
  };
}, [accordianDashboard]);

  return (
    <div className="min-h-screen w-3/4 bg-slate-900 text-white p-6 flex flex-col items-center">
      {/* Top bar */}
      <div className="w-3/4 bg-slate-950 text-white rounded-lg flex p-4 justify-between items-center shadow-lg">
        <MenuIcon
          onClick={() => {
            setAccordianDashboard((prev) => !prev);
             
          }}
          sx={{ cursor: "pointer" }}
        />
        <span className="text-white text-lg font-medium text-">Menu</span>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAmc6O_uNAiPZOhZdLj7Lc_dFoXBaf2p3rtQ&s"
          className="w-8 h-8 rounded-full border-2 border-white"
          alt="Profile"
        />
      </div>
      {
      accordianDashboard && <div ref={ref} className="w-3/4 mt-4 p-3 bg-slate-900 text-white rounded-xl text-lg font-light shadow-md transition-all duration-300 border border-white">
        <h3 className="text-xl font-semibold mb-2">
          👋 Welcome to Our Gym Management System
        </h3>
        <p>
          We're excited to have you onboard. This platform helps you keep track
          of members, manage renewals, and streamline operations. If you have
          any queries or need support, feel free to reach out!
        </p>
      </div>
}

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 mt-16 w-3/4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-2xl min-h-[220px] p-8 bg-slate-950 border border-white/30 backdrop-blur-md shadow-xl flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 cursor-pointer group hover:bg-white/70 hover:text-black"
          >
            <div className="text-6xl mb-5 transition-all duration-300 group-hover:scale-110">
              {stat.icon}
            </div>
            <h2 className="text-2xl font-semibold transition-colors duration-300">
              {stat.title}
            </h2>
            <h3 className="text-lg text-gray-400 group-hover:text-black mt-1">
              {stat.subtitle}
            </h3>
          </div>
        ))}
      </div>

      {/* Contact Footer */}
      <div className="w-3/4 mt-12 p-4 bg-black text-white rounded-xl text-center text-lg shadow-md">
        Contact Developer for any Technical Error at{" "}
        <span className="font-semibold text-blue-400 hover:underline cursor-pointer">
          +91 9876543210
        </span>
      </div>
    </div>
  );
};

export default Dashboard;
