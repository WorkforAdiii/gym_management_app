import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Switch from 'react-switch';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Copy the full members array from member.jsx (add address/joinedDate for demo)
const members = [
  { name: "Shubham Kumar", phone: "+91 72950865190", nextBillDate: "31-12-2025", image: "https://randomuser.me/api/portraits/men/70.jpg", status: "green", address: "Patna, Bihar", joinedDate: "01-01-2024", membership: "6 Month Membership" },
  { name: "Anita Sharma", phone: "+91 8888888888", nextBillDate: "15-11-2024", image: "https://randomuser.me/api/portraits/women/65.jpg", status: "green", address: "Delhi", joinedDate: "15-05-2024", membership: "3 Month Membership" },
  { name: "Ravi Singh", phone: "+91 7777777777", nextBillDate: "25-12-2024", image: "https://randomuser.me/api/portraits/men/64.jpg", status: "green", address: "Lucknow, UP", joinedDate: "10-03-2024", membership: "1 Month Membership" },
  { name: "Priya Mehra", phone: "+91 9999111122", nextBillDate: "01-08-2024", image: "https://randomuser.me/api/portraits/women/68.jpg", status: "green", address: "Mumbai, MH", joinedDate: "20-02-2024", membership: "12 Month Membership" },
  { name: "Gaurav Jain", phone: "+91 9812345678", nextBillDate: "05-09-2024", image: "https://randomuser.me/api/portraits/men/69.jpg", status: "green", address: "Jaipur, RJ", joinedDate: "12-04-2024", membership: "6 Month Membership" },
  { name: "Ajay Dev", phone: "+91 8888999988", nextBillDate: "10-10-2024", image: "https://randomuser.me/api/portraits/men/63.jpg", status: "green", address: "Chennai, TN", joinedDate: "18-06-2024", membership: "3 Month Membership" },
  { name: "Neha Singh", phone: "+91 8888881234", nextBillDate: "20-12-2024", image: "https://randomuser.me/api/portraits/women/66.jpg", status: "green", address: "Kolkata, WB", joinedDate: "25-07-2024", membership: "1 Month Membership" },
  { name: "Vinay D", phone: "+91 6295868518", nextBillDate: "31-10-2025", image: "https://randomuser.me/api/portraits/men/71.jpg", status: "green", address: "Munger, Bihar", joinedDate: "01-10-2024", membership: "1 Month Membership" },
  { name: "Rohit Sharma", phone: "+91 9876543210", nextBillDate: "12-11-2024", image: "https://randomuser.me/api/portraits/men/72.jpg", status: "green", address: "Bhopal, MP", joinedDate: "10-01-2024", membership: "3 Month Membership" },
  { name: "Sonia Verma", phone: "+91 9123456789", nextBillDate: "22-12-2024", image: "https://randomuser.me/api/portraits/women/67.jpg", status: "green", address: "Pune, MH", joinedDate: "15-03-2024", membership: "6 Month Membership" },
  { name: "Amit Patel", phone: "+91 9988776655", nextBillDate: "15-01-2025", image: "https://randomuser.me/api/portraits/men/73.jpg", status: "green", address: "Ahmedabad, GJ", joinedDate: "20-04-2024", membership: "12 Month Membership" },
  { name: "Meera Joshi", phone: "+91 7007007007", nextBillDate: "05-11-2025", image: "https://i.pravatar.cc/150?img=47", status: "green", address: "Surat, GJ", joinedDate: "25-05-2024", membership: "1 Month Membership" },
  { name: "Arjun Reddy", phone: "+91 8210012345", nextBillDate: "30-09-2025", image: "https://i.pravatar.cc/150?img=14", status: "green", address: "Hyderabad, TS", joinedDate: "01-06-2024", membership: "3 Month Membership" },
  { name: "Sneha Nair", phone: "+91 7778889990", nextBillDate: "01-12-2025", image: "https://i.pravatar.cc/150?img=41", status: "green", address: "Kochi, KL", joinedDate: "10-07-2024", membership: "6 Month Membership" },
  { name: "Karan Malhotra", phone: "+91 8080808080", nextBillDate: "15-11-2025", image: "https://i.pravatar.cc/150?img=8", status: "green", address: "Delhi", joinedDate: "15-08-2024", membership: "12 Month Membership" },
  { name: "Pooja Patel", phone: "+91 9212345678", nextBillDate: "20-10-2025", image: "https://i.pravatar.cc/150?img=38", status: "green", address: "Vadodara, GJ", joinedDate: "20-09-2024", membership: "1 Month Membership" },
  { name: "Harshit Jain", phone: "+91 9393939393", nextBillDate: "10-12-2025", image: "https://i.pravatar.cc/150?img=17", status: "green", address: "Indore, MP", joinedDate: "25-10-2024", membership: "3 Month Membership" },
  { name: "Nikita Sinha", phone: "+91 9601234567", nextBillDate: "05-11-2025", image: "https://i.pravatar.cc/150?img=27", status: "green", address: "Ranchi, JH", joinedDate: "01-11-2024", membership: "6 Month Membership" },
  { name: "Aarav Sharma", phone: "+91 9876543210", nextBillDate: "30-09-2025", image: "https://i.pravatar.cc/150?img=3", status: "green", address: "Gurgaon, HR", joinedDate: "10-12-2024", membership: "12 Month Membership" },
  { name: "Ananya Mehra", phone: "+91 8765432109", nextBillDate: "28-08-2025", image: "https://i.pravatar.cc/150?img=5", status: "green", address: "Noida, UP", joinedDate: "15-01-2025", membership: "1 Month Membership" },
  { name: "Rohan Verma", phone: "+91 9123456789", nextBillDate: "01-10-2025", image: "https://i.pravatar.cc/150?img=12", status: "green", address: "Chandigarh", joinedDate: "20-02-2025", membership: "3 Month Membership" },
  // Red status members (for Dormant)
  { name: "Yash Rawat", phone: "+91 9000000001", nextBillDate: "01-03-2024", image: "https://randomuser.me/api/portraits/men/88.jpg", status: "red", address: "Dehradun, UK", joinedDate: "01-03-2023", membership: "1 Month Membership" },
  { name: "Reena Dubey", phone: "+91 9000000002", nextBillDate: "10-02-2024", image: "https://randomuser.me/api/portraits/women/90.jpg", status: "red", address: "Kanpur, UP", joinedDate: "10-02-2023", membership: "3 Month Membership" },
  { name: "Kushal Sinha", phone: "+91 9000000003", nextBillDate: "15-01-2024", image: "https://randomuser.me/api/portraits/men/91.jpg", status: "red", address: "Patna, Bihar", joinedDate: "15-01-2023", membership: "6 Month Membership" },
  { name: "Tanya Roy", phone: "+91 9000000004", nextBillDate: "22-12-2023", image: "https://randomuser.me/api/portraits/women/92.jpg", status: "red", address: "Kolkata, WB", joinedDate: "22-12-2022", membership: "12 Month Membership" },
  { name: "Harshita Joshi", phone: "+91 9000000005", nextBillDate: "10-11-2023", image: "https://randomuser.me/api/portraits/women/93.jpg", status: "red", address: "Lucknow, UP", joinedDate: "10-11-2022", membership: "1 Month Membership" },
  { name: "Niraj Bansal", phone: "+91 9000000006", nextBillDate: "05-11-2023", image: "https://randomuser.me/api/portraits/men/94.jpg", status: "red", address: "Delhi", joinedDate: "05-11-2022", membership: "3 Month Membership" },
  { name: "Shruti Das", phone: "+91 9000000007", nextBillDate: "01-10-2023", image: "https://randomuser.me/api/portraits/women/95.jpg", status: "red", address: "Bhubaneswar, OD", joinedDate: "01-10-2022", membership: "6 Month Membership" },
  { name: "Ritika Chauhan", phone: "+91 9000000008", nextBillDate: "20-09-2023", image: "https://randomuser.me/api/portraits/women/96.jpg", status: "red", address: "Jaipur, RJ", joinedDate: "20-09-2022", membership: "12 Month Membership" },
  { name: "Manoj Thakur", phone: "+91 9000000009", nextBillDate: "10-08-2023", image: "https://randomuser.me/api/portraits/men/97.jpg", status: "red", address: "Pune, MH", joinedDate: "10-08-2022", membership: "1 Month Membership" },
];

const MemberDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = members[(id ? parseInt(id, 10) - 1 : 0)] || members[0];
  const [status, setStatus] = useState(member.status === 'green');
  const [renew, setRenew] = useState(false);
  const [membership, setMembership] = useState(member.membership || '1 Month Membership');

  useEffect(() => {
    console.log({ status, renew, membership });
  }, [status, renew, membership]);

  // Show the second section only if both status and renew are ON
  const showMembershipSection = status && renew;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1026] via-[#131a2e] to-[#181f36] flex flex-col">
      {/* Go Back Button */}
      <div className="pt-2 pb-4 px-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 px-4 py-2 bg-slate-950 border border-white/60 text-white rounded-lg shadow cursor-pointer group hover:bg-white/70 hover:text-black transition">
          <ArrowBackIcon /> Go Back
        </button>
      </div>
      {/* Main Content */}
      <div className="flex flex-col items-center flex-1 mt-4">
        <div className="flex flex-col md:flex-row gap-10 bg-slate-950 rounded-2xl shadow-2xl p-8 border border-white/60 text-white">
          {/* Member Image */}
          <img
            src={member.image}
            alt={member.name}
            className="w-[350px] h-[400px] object-cover rounded-xl border-2 border-slate-200 shadow-lg"
          />
          {/* Details */}
          <div className="flex flex-col justify-center gap-4 min-w-[320px]">
            <div className="text-xl font-semibold mb-2">Name : <span className="font-normal">{member.name}</span></div>
            <div className="text-xl font-semibold mb-2">Mobile : <span className="font-normal">{member.phone}</span></div>
            <div className="text-xl font-semibold mb-2">Address : <span className="font-normal">{member.address}</span></div>
            <div className="text-xl font-semibold mb-2">Joined Date : <span className="font-normal">{member.joinedDate}</span></div>
            <div className="text-xl font-semibold mb-2">Next Bill Date : <span className="font-normal">{member.nextBillDate}</span></div>
            <div className="text-xl font-semibold mb-2 flex items-center gap-2">Status :
              <Switch
                onChange={setStatus}
                checked={status}
                onColor="#7c3aed"
                offColor="#e5e7eb"
                checkedIcon={false}
                uncheckedIcon={false}
                height={24}
                width={48}
              />
            </div>
            <button
              className={`mt-4 w-full py-3 rounded-xl border text-lg font-semibold shadow transition ${renew ? 'bg-gradient-to-r from-purple-500 to-pink-400 text-white border-0' : 'bg-white text-black border-black'}`}
              onClick={() => setRenew(r => !r)}
            >
              Renew
            </button>
          </div>
        </div>
        {/* Membership Section (only if both status and renew are ON) */}
        {showMembershipSection && (
          <div className="w-full max-w-xl mt-6 bg-slate-950 rounded-xl shadow-lg p-8 flex flex-col gap-6 hover:border-white/60 border border-white/60 text-white">
            <label className="text-lg font-semibold mb-2">Membership
              <select
                className="block w-full mt-2 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-white"
                value={membership}
                onChange={e => setMembership(e.target.value)}
              >
                <option className='text-white bg-slate-950'>1 Month Membership</option>
                <option className='text-white bg-slate-950'>3 Month Membership</option>
                <option className='text-white bg-slate-950'>6 Month Membership</option>
                <option className='text-white bg-slate-950'>12 Month Membership</option>
              </select>
            </label>
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-400 text-white font-bold text-lg shadow-lg hover:scale-105 transition" onClick={() => console.log({ status, renew, membership })}>Save</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberDetails;