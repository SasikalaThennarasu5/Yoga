import React, { useState } from "react";

export default function ApproachForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    setIsModalOpen(true); // open modal
  };

  return (
    <div className="bg-[#fdeef4] min-h-screen flex flex-col items-center justify-center px-4 py-10 font-robotoSerif">
      {/* Page Title */}
      <h2 className="text-lg md:text-xl font-semibold text-[#B285C0] text-center mb-6">
        How to Mentally Prepare for Fatherhood, According to a Parenting Coach
      </h2>

      {/* Form Container */}
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        <h3 className="text-center text-lg font-bold mb-6">Approach Form</h3>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="w-full border border-gray-300 rounded-md px-3 py-2 bg-[#e7c7ef] focus:outline-none focus:ring-2 focus:ring-[#B285C0]" />
            <input type="text" placeholder="Last Name" className="w-full border border-gray-300 rounded-md px-3 py-2 bg-[#e7c7ef] focus:outline-none focus:ring-2 focus:ring-[#B285C0]" />
          </div>

          <input type="text" placeholder="Mobile No" className="w-full border border-gray-300 rounded-md px-3 py-2 bg-[#e7c7ef] focus:outline-none focus:ring-2 focus:ring-[#B285C0]" />
          <input type="email" placeholder="E- Mail Id" className="w-full border border-gray-300 rounded-md px-3 py-2 bg-[#e7c7ef] focus:outline-none focus:ring-2 focus:ring-[#B285C0]" />

          <select className="w-full border border-gray-300 rounded-md px-3 py-2 bg-[#e7c7ef] focus:outline-none focus:ring-2 focus:ring-[#B285C0]">
            <option>No. Of Therapy Day</option>
            <option>1 Day</option>
            <option>3 Days</option>
            <option>5 Days</option>
            <option>7 Days</option>
          </select>

          <input type="number" placeholder="Family Members Count" className="w-full border border-gray-300 rounded-md px-3 py-2 bg-[#e7c7ef] focus:outline-none focus:ring-2 focus:ring-[#B285C0]" />
          <textarea placeholder="Address" rows="3" className="w-full border border-gray-300 rounded-md px-3 py-2 bg-[#e7c7ef] focus:outline-none focus:ring-2 focus:ring-[#B285C0]" />

          <select className="w-full border border-gray-300 rounded-md px-3 py-2 bg-[#e7c7ef] focus:outline-none focus:ring-2 focus:ring-[#B285C0]">
            <option>Time Availability</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>

          <input type="text" placeholder="Current City" className="w-full border border-gray-300 rounded-md px-3 py-2 bg-[#e7c7ef] focus:outline-none focus:ring-2 focus:ring-[#B285C0]" />

          <button type="submit" className="w-full bg-gradient-to-r from-[#B285C0] to-purple-600 text-white font-semibold py-2 rounded-md hover:opacity-90 transition">
            Submit
          </button>
        </form>
      </div>

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#f87171] text-center p-6 rounded-lg shadow-lg max-w-sm">
            <img src="/images/approach-success.png" alt="Success" className="mx-auto mb-4" />
            <h2 className="text-lg font-bold text-white">Your Approach Has been Accepted</h2>
            <p className="text-white mt-2">Complete your Payment Process Quickly</p>
            <a
              href="/payment"
              className="block mt-4 bg-white text-red-600 px-4 py-2 rounded font-semibold hover:bg-gray-100"
            >
              Click Here
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
