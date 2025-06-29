import React, { useState } from "react";

const Addmembership = () => {
  const [formData, setformData] = useState({
    months: "",
    price: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddMembership = async () => {
    setError("");
    setSuccess("");
    if (!formData.months || !formData.price) {
      setError("Please enter both months and price.");
      return;
    }
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setSuccess("Membership plan added successfully!");
      setformData({ months: "", price: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center text-white text-center">
      {/* Static Membership Boxes */}
      {[1, 2, 3, 4, 5, 6].map((month) => (
        <div
          key={month}
          className="text-lg w-full max-w-xs bg-white/10 text-white border border-white/20 px-4 py-5 rounded-xl font-semibold hover:bg-white/90 hover:text-black backdrop-blur-md transition"
        >
          <div>{month} Month Membership</div>
          <div className="text-md mt-2">Rs {month * 1000}</div>
        </div>
      ))}

      {/* Divider */}
      <hr className="border-t border-white/20 mt-6 col-span-full w-full" />

      {/* Form Section */}
      <div className="mt-4 w-full flex flex-col sm:flex-row gap-4 col-span-full">
        {/* Number of Months */}
        <input
          type="number"
          name="months"
          value={formData.months}
          onChange={handleChange}
          placeholder="Add No. of Months"
          className="flex-1 bg-white/10 backdrop-blur-md text-white placeholder-white/60 border border-white/60 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="flex-1 bg-white/10 backdrop-blur-md text-white placeholder-white/60 border border-white/60 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        {/* Add Button */}
        <button
          onClick={handleAddMembership}
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 hover:brightness-110 transition whitespace-nowrap"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add +"}
        </button>
      </div>
      {error && <div className="text-red-400 mt-2 col-span-full">{error}</div>}
      {success && <div className="text-green-400 mt-2 col-span-full">{success}</div>}
    </div>
  );
};

export default Addmembership;
