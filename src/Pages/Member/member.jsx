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
  {
    name: "Shubham Kumar",
    phone: "+91 72950865190",
    nextBillDate: "31-12-2025",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaKv_3uWI17LyXz6dLfGzLAeETYstVDwuCHg&s",
    status: "green",
  },
  {
    name: "Vinay D",
    phone: "+91 6295868518",
    nextBillDate: "31-10-2025",
    image: "https://randomuser.me/api/portraits/men/70.jpg",
    status: "green",
  },
  {
    name: "Within 3 Days Guy",
    phone: "01234567890",
    nextBillDate: "30-06-2025",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    status: "green",
  },
  {
    name: "Expired Guy",
    phone: "+91 9999999999",
    nextBillDate: "01-05-2025",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
    status: "red",
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
    name: "Ajay Dev",
    phone: "+91 8888999988",
    nextBillDate: "10-10-2024",
    image: "https://randomuser.me/api/portraits/men/63.jpg",
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
        <div className="font-semibold">Total Members</div>
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
      <div className="bg-slate-900 p-5 mt-5 rounded-lg grid gap-6 grid-cols-3 max-h-[540px] overflow-y-auto customMemberScrollbar">
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

// Reusable member list component
export const MemberList = ({ members }) => (
  <div className="bg-slate-900 p-5 mt-5 rounded-lg grid gap-6 grid-cols-3 max-h-[540px] overflow-y-auto customMemberScrollbar">
    {members.map((member, index) => (
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
);
