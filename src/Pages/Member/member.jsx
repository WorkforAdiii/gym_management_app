import React, { useState } from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CircleIcon from "@mui/icons-material/Circle";
import { Link } from "react-router-dom";
import Modal from "../../Comp/Modal/modal";
import Addmembership from "../../Comp/Addmembership/addmembership";
import AddMember from "../../Comp/AddMember/addMember";

const members = [
  // Green status members
  { name: "Shubham Kumar", phone: "+91 72950865190", nextBillDate: "31-12-2025", image: "https://randomuser.me/api/portraits/men/70.jpg", status: "green" },
  { name: "Anita Sharma", phone: "+91 8888888888", nextBillDate: "15-11-2024", image: "https://randomuser.me/api/portraits/women/65.jpg", status: "green" },
  { name: "Ravi Singh", phone: "+91 7777777777", nextBillDate: "25-12-2024", image: "https://randomuser.me/api/portraits/men/64.jpg", status: "green" },
  { name: "Priya Mehra", phone: "+91 9999111122", nextBillDate: "01-08-2024", image: "https://randomuser.me/api/portraits/women/68.jpg", status: "green" },
  { name: "Gaurav Jain", phone: "+91 9812345678", nextBillDate: "05-09-2024", image: "https://randomuser.me/api/portraits/men/69.jpg", status: "green" },
  { name: "Ajay Dev", phone: "+91 8888999988", nextBillDate: "10-10-2024", image: "https://randomuser.me/api/portraits/men/63.jpg", status: "green" },
  { name: "Neha Singh", phone: "+91 8888881234", nextBillDate: "20-12-2024", image: "https://randomuser.me/api/portraits/women/66.jpg", status: "green" },
  { name: "Vinay D", phone: "+91 6295868518", nextBillDate: "31-10-2025", image: "https://randomuser.me/api/portraits/men/71.jpg", status: "green" },
  { name: "Rohit Sharma", phone: "+91 9876543210", nextBillDate: "12-11-2024", image: "https://randomuser.me/api/portraits/men/72.jpg", status: "green" },
  { name: "Sonia Verma", phone: "+91 9123456789", nextBillDate: "22-12-2024", image: "https://randomuser.me/api/portraits/women/67.jpg", status: "green" },
  { name: "Amit Patel", phone: "+91 9988776655", nextBillDate: "15-01-2025", image: "https://randomuser.me/api/portraits/men/73.jpg", status: "green" },
  { name: "Meera Joshi", phone: "+91 7007007007", nextBillDate: "05-11-2025", image: "https://i.pravatar.cc/150?img=47", status: "green" },
  { name: "Arjun Reddy", phone: "+91 8210012345", nextBillDate: "30-09-2025", image: "https://i.pravatar.cc/150?img=14", status: "green" },
  { name: "Sneha Nair", phone: "+91 7778889990", nextBillDate: "01-12-2025", image: "https://i.pravatar.cc/150?img=41", status: "green" },
  { name: "Karan Malhotra", phone: "+91 8080808080", nextBillDate: "15-11-2025", image: "https://i.pravatar.cc/150?img=8", status: "green" },
  { name: "Pooja Patel", phone: "+91 9212345678", nextBillDate: "20-10-2025", image: "https://i.pravatar.cc/150?img=38", status: "green" },
  { name: "Harshit Jain", phone: "+91 9393939393", nextBillDate: "10-12-2025", image: "https://i.pravatar.cc/150?img=17", status: "green" },
  { name: "Nikita Sinha", phone: "+91 9601234567", nextBillDate: "05-11-2025", image: "https://i.pravatar.cc/150?img=27", status: "green" },
  { name: "Aarav Sharma", phone: "+91 9876543210", nextBillDate: "30-09-2025", image: "https://i.pravatar.cc/150?img=3", status: "green" },
  { name: "Ananya Mehra", phone: "+91 8765432109", nextBillDate: "28-08-2025", image: "https://i.pravatar.cc/150?img=5", status: "green" },
  { name: "Rohan Verma", phone: "+91 9123456789", nextBillDate: "01-10-2025", image: "https://i.pravatar.cc/150?img=12", status: "green" },

  // Red status members (for Dormant)
  { name: "Yash Rawat", phone: "+91 9000000001", nextBillDate: "01-03-2024", image: "https://randomuser.me/api/portraits/men/88.jpg", status: "red" },
  { name: "Reena Dubey", phone: "+91 9000000002", nextBillDate: "10-02-2024", image: "https://randomuser.me/api/portraits/women/90.jpg", status: "red" },
  { name: "Kushal Sinha", phone: "+91 9000000003", nextBillDate: "15-01-2024", image: "https://randomuser.me/api/portraits/men/91.jpg", status: "red" },
  { name: "Tanya Roy", phone: "+91 9000000004", nextBillDate: "22-12-2023", image: "https://randomuser.me/api/portraits/women/92.jpg", status: "red" },
  { name: "Harshita Joshi", phone: "+91 9000000005", nextBillDate: "10-11-2023", image: "https://randomuser.me/api/portraits/women/93.jpg", status: "red" },
  { name: "Niraj Bansal", phone: "+91 9000000006", nextBillDate: "05-11-2023", image: "https://randomuser.me/api/portraits/men/94.jpg", status: "red" },
  { name: "Shruti Das", phone: "+91 9000000007", nextBillDate: "01-10-2023", image: "https://randomuser.me/api/portraits/women/95.jpg", status: "red" },
  { name: "Ritika Chauhan", phone: "+91 9000000008", nextBillDate: "20-09-2023", image: "https://randomuser.me/api/portraits/women/96.jpg", status: "red" },
  { name: "Manoj Thakur", phone: "+91 9000000009", nextBillDate: "10-08-2023", image: "https://randomuser.me/api/portraits/men/97.jpg", status: "red" },
];

const Member = () => {
  const [addMembership, setAddMembership] = useState(false);
  const [addMember, setAddMember] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const limit = 9;
  const totalData = members.length;
  const noOfPages = Math.ceil(totalData / limit);
  const startFrom = (currentPage - 1) * limit;
  const endTo = Math.min(currentPage * limit, totalData);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < noOfPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="text-white p-6 flex-1 bg-slate-900 flex flex-col h-screen">
      {/* Top Actions */}
      <div className="border border-white/50 bg-slate-950 backdrop-blur-lg flex justify-between w-full rounded-xl p-5 shadow-lg mb-6">
        <button
          className="flex items-center gap-2 border border-white/60 px-4 py-2 rounded-2xl font-medium hover:bg-white/80 hover:text-black transition"
          onClick={() => setAddMember(true)}
        >
          <span>Add Member</span>
          <FitnessCenterIcon fontSize="small" />
        </button>
        <button
          className="flex items-center gap-2 border border-white/60 px-4 py-2 rounded-2xl font-medium hover:bg-white/80 hover:text-black transition"
          onClick={() => setAddMembership(true)}
        >
          <span>Membership</span>
          <AddIcon fontSize="small" />
        </button>
      </div>

      {/* Back to Dashboard */}
      <Link
        to="/dashboard"
        className="inline-flex items-center bg-slate-950 gap-2 backdrop-blur-md border border-white/20 px-3 py-2 rounded-xl text-white hover:bg-white/80 hover:text-black transition mb-6 w-fit"
      >
        <ArrowBackIcon fontSize="small" />
        Back to Dashboard
      </Link>

      {/* Search Bar */}
      <div className="w-1/2 flex items-center bg-slate-950 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 shadow-md">
        <input
          type="text"
          className="w-full bg-transparent text-white placeholder-white/60 focus:outline-none"
          placeholder="Search by name or mobile number"
        />
        <div className="text-white p-2 cursor-pointer hover:bg-white/70 hover:text-black rounded-full transition ml-2">
          <SearchIcon />
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-between items-center w-full text-xl">
        <div className="font-semibold ml-6">Total Members</div>
        <div className="flex items-center gap-4">
          <span>
            {startFrom + 1}-{endTo} of {totalData} Members
          </span>
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`p-1 rounded-md border border-white/20 bg-white/10 transition ${
              currentPage === 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-white/70 hover:text-black"
            }`}
          >
            <ChevronLeftIcon fontSize="small" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === noOfPages}
            className={`p-1 rounded-md border border-white/20 bg-white/10 transition ${
              currentPage === noOfPages ? "opacity-30 cursor-not-allowed" : "hover:bg-white/70 hover:text-black"
            }`}
          >
            <ChevronRightIcon fontSize="small" />
          </button>
        </div>
      </div>

      {/* Member Cards */}
      <div className="bg-slate-900 p-5 mt-3 rounded-lg grid gap-6 grid-cols-3 max-h-[540px] overflow-y-auto customMemberScrollbar">
        {members.slice(startFrom, endTo).map((member, index) => (
          <Link
            to={`/member/${index}`}
            key={index}
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
            <div className="mt-5 text-center text-xl font-semibold font-[Times New Roman]">{member.name}</div>
            <div className="mt-2 text-center text-lg">{member.phone}</div>
            <div className="mt-2 text-center text-md">Next Bill Date: {member.nextBillDate}</div>
          </Link>
        ))}
      </div>

      {/* Modals */}
      {addMembership && (
        <Modal header="Add Membership" handleClose={() => setAddMembership(false)} content={<Addmembership />} />
      )}
      {addMember && (
        <Modal header="Add New Member" handleClose={() => setAddMember(false)} content={<AddMember />} />
      )}
    </div>
  );
};

export default Member;
