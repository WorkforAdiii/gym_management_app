import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";

const pathConfig = {
  "/specific/new_enrollments": {
    title: "New Enrollments",
    subtitle: "newly joined members",
    count: 12,
  },
  "/specific/urgent_renewals": {
    title: "Urgent Renewals",
    subtitle: "members with renewals due in 3 days",
    count: 9,
  },
  "/specific/pending_renewals": {
    title: "Pending Renewals",
    subtitle: "renewals due in 4-7 days",
    count: 15,
  },
  "/specific/lapsed_memberships": {
    title: "Lapsed Memberships",
    subtitle: "expired members",
    count: 6,
  },
  "/specific/dormant_accounts": {
    title: "Dormant Accounts",
    subtitle: "inactive members",
    count: 9,
  },
  "/members": {
    title: "All Members",
    subtitle: "registered members",
    count: 30,
  },
};

const allMembers = [
  {
    name: "Shubham Kumar",
    phone: "+91 72950865190",
    nextBillDate: "31-12-2025",
    image: "https://randomuser.me/api/portraits/men/70.jpg",
    status: "green",
  },
  {
    name: "Anita Sharma",
    phone: "+91 8888888888",
    nextBillDate: "15-11-2024",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    status: "green",
  },
  {
    name: "Ravi Singh",
    phone: "+91 7777777777",
    nextBillDate: "25-12-2024",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    status: "green",
  },
  {
    name: "Priya Mehra",
    phone: "+91 9999111122",
    nextBillDate: "01-08-2024",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    status: "green",
  },
  {
    name: "Gaurav Jain",
    phone: "+91 9812345678",
    nextBillDate: "05-09-2024",
    image: "https://randomuser.me/api/portraits/men/69.jpg",
    status: "green",
  },
  {
    name: "Ajay Dev",
    phone: "+91 8888999988",
    nextBillDate: "10-10-2024",
    image: "https://randomuser.me/api/portraits/men/63.jpg",
    status: "green",
  },
  {
    name: "Neha Singh",
    phone: "+91 8888881234",
    nextBillDate: "20-12-2024",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
    status: "green",
  },
  {
    name: "Vinay D",
    phone: "+91 6295868518",
    nextBillDate: "31-10-2025",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    status: "green",
  },
  {
    name: "Rohit Sharma",
    phone: "+91 9876543210",
    nextBillDate: "12-11-2024",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
    status: "green",
  },
  {
    name: "Sonia Verma",
    phone: "+91 9123456789",
    nextBillDate: "22-12-2024",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    status: "green",
  },
  {
    name: "Amit Patel",
    phone: "+91 9988776655",
    nextBillDate: "15-01-2025",
    image: "https://randomuser.me/api/portraits/men/73.jpg",
    status: "green",
  },
  {
    name: "Meera Joshi",
    phone: "+91 7007007007",
    nextBillDate: "05-11-2025",
    image: "https://i.pravatar.cc/150?img=47",
    status: "green",
  },
  {
    name: "Arjun Reddy",
    phone: "+91 8210012345",
    nextBillDate: "30-09-2025",
    image: "https://i.pravatar.cc/150?img=14",
    status: "green",
  },
  {
    name: "Sneha Nair",
    phone: "+91 7778889990",
    nextBillDate: "01-12-2025",
    image: "https://i.pravatar.cc/150?img=41",
    status: "green",
  },
  {
    name: "Karan Malhotra",
    phone: "+91 8080808080",
    nextBillDate: "15-11-2025",
    image: "https://i.pravatar.cc/150?img=8",
    status: "green",
  },
  {
    name: "Pooja Patel",
    phone: "+91 9212345678",
    nextBillDate: "20-10-2025",
    image: "https://i.pravatar.cc/150?img=38",
    status: "green",
  },
  {
    name: "Harshit Jain",
    phone: "+91 9393939393",
    nextBillDate: "10-12-2025",
    image: "https://i.pravatar.cc/150?img=17",
    status: "green",
  },
  {
    name: "Nikita Sinha",
    phone: "+91 9601234567",
    nextBillDate: "05-11-2025",
    image: "https://i.pravatar.cc/150?img=27",
    status: "green",
  },
  {
    name: "Aarav Sharma",
    phone: "+91 9876543210",
    nextBillDate: "30-09-2025",
    image: "https://i.pravatar.cc/150?img=3",
    status: "green",
  },
  {
    name: "Ananya Mehra",
    phone: "+91 8765432109",
    nextBillDate: "28-08-2025",
    image: "https://i.pravatar.cc/150?img=5",
    status: "green",
  },
  {
    name: "Rohan Verma",
    phone: "+91 9123456789",
    nextBillDate: "01-10-2025",
    image: "https://i.pravatar.cc/150?img=12",
    status: "green",
  },
  {
    name: "Isha Kapoor",
    phone: "+91 9988776655",
    nextBillDate: "15-10-2025",
    image: "https://i.pravatar.cc/150?img=32",
    status: "green",
  },
  {
    name: "Devansh Gupta",
    phone: "+91 9090909090",
    nextBillDate: "10-10-2025",
    image: "https://i.pravatar.cc/150?img=20",
    status: "green",
  },

  // RED (only for dormant accounts)
  {
    name: "Yash Rawat",
    phone: "+91 9000000001",
    nextBillDate: "01-03-2024",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
    status: "red",
  },
  {
    name: "Reena Dubey",
    phone: "+91 9000000002",
    nextBillDate: "10-02-2024",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    status: "red",
  },
  {
    name: "Kushal Sinha",
    phone: "+91 9000000003",
    nextBillDate: "15-01-2024",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    status: "red",
  },
  {
    name: "Tanya Roy",
    phone: "+91 9000000004",
    nextBillDate: "22-12-2023",
    image: "https://randomuser.me/api/portraits/women/92.jpg",
    status: "red",
  },
  {
    name: "Harshita Joshi",
    phone: "+91 9000000005",
    nextBillDate: "10-11-2023",
    image: "https://randomuser.me/api/portraits/women/93.jpg",
    status: "red",
  },
  {
    name: "Niraj Bansal",
    phone: "+91 9000000006",
    nextBillDate: "05-11-2023",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
    status: "red",
  },
  {
    name: "Shruti Das",
    phone: "+91 9000000007",
    nextBillDate: "01-10-2023",
    image: "https://randomuser.me/api/portraits/women/95.jpg",
    status: "red",
  },
];

const GeneralUser = () => {
  const { pathname } = useLocation();
  const { title, subtitle, count } =
    pathConfig[pathname] || pathConfig["/members"];

  const filteredMembers =
    pathname === "/specific/dormant_accounts"
      ? allMembers.filter((m) => m.status === "red").slice(0, count)
      : allMembers.filter((m) => m.status === "green").slice(0, count);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;
  const totalData = filteredMembers.length;
  const noOfPages = Math.ceil(totalData / pageSize);
  const startFrom = (currentPage - 1) * pageSize;
  const endTo = Math.min(currentPage * pageSize, totalData);

  return (
    <div className="text-white p-6 bg-slate-900 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
        {title}
      </h1>
      <h2 className="text-2xl text-center font-semibold font-[Times New Roman] mt-5">
        {totalData <= 9
          ? `Showing ${totalData} out of ${totalData} ${subtitle}`
          : `Showing ${startFrom + 1}-${endTo} of ${totalData} ${subtitle}`}
      </h2>

      {totalData > 9 && (
        <div className="mt-5 flex justify-center items-center gap-4 text-xl mr-6">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-1 rounded-md border border-white/20 bg-white/10 transition ${
              currentPage === 1
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-white/70 hover:text-black"
            }`}
          >
            &#8592;
          </button>
          <span>
            Page {currentPage} of {noOfPages}
          </span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === noOfPages}
            className={`p-1 rounded-md border border-white/20 bg-white/10 transition ${
              currentPage === noOfPages
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-white/70 hover:text-black"
            }`}
          >
            &#8594;
          </button>
        </div>
      )}

      <div className="bg-slate-900 p-5 mt-5 rounded-lg grid gap-6 grid-cols-3 max-h-[540px] overflow-y-auto customMemberScrollbar">
        {filteredMembers.slice(startFrom, endTo).map((member, index) => {
          // Find the global index in allMembers
          const globalIndex = allMembers.findIndex(m => m.name === member.name && m.phone === member.phone);
          return (
            <Link
              to={`/members/${globalIndex + 1}`}
              key={globalIndex}
              className="bg-slate-950 text-white border border-white/40 rounded-xl p-4 shadow-lg hover:bg-white/30 hover:scale-105 transition-all duration-300"
            >
              <div className="w-28 h-28 mx-auto relative border-2 p-1 rounded-full">
                <img
                  src={member.image}
                  className="w-full h-full rounded-full object-cover"
                  alt={member.name}
                />
                <CircleIcon
                  className="absolute top-0 left-0"
                  sx={{
                    color: member.status === "green" ? "greenyellow" : "red",
                  }}
                />
              </div>
              <div className="mt-5 text-center text-xl font-semibold font-[Times New Roman]">
                {member.name}
              </div>
              <div className="mt-2 text-center text-lg">{member.phone}</div>
              <div className="mt-2 text-center text-md">
                Next Bill Date: {member.nextBillDate}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default GeneralUser;
