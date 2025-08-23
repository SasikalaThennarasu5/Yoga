import React, { useState } from "react";
import success from "../assets/images/approach-success.png";

export default function ApproachForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    setIsModalOpen(true); // open modal
  };

  return (
    <div className="bg-[#fdeef4] min-h-screen flex flex-col items-center justify-center px-4 py-10 font-robotoSerif">
      {/* Page Title */}
      <h2 className="text-lg md:text-2xl font-semibold text-[#6f145f] text-center mb-6">
        How to Mentally Prepare for Fatherhood, According to a Parenting Coach
      </h2>

      {/* Form Container */}
      <div className="w-full max-w-2xl p-6">
        <h3 className="text-center text-2xl font-bold mb-6">Approach Form</h3>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-normal text-gray-950">First Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-[#B285C0] focus:outline-none focus:ring-2 focus:ring-[#B285C0]"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-normal text-gray-950">Last Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-[#B285C0] focus:outline-none focus:ring-2 focus:ring-[#B285C0]"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-normal text-gray-950">Mobile No</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-[#B285C0] focus:outline-none focus:ring-2 focus:ring-[#B285C0]"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-normal text-gray-950">E-Mail Id</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-[#B285C0] focus:outline-none focus:ring-2 focus:ring-[#B285C0]"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-normal text-gray-950">No. of Therapy Days</label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 bg-[#B285C0] focus:outline-none focus:ring-2 focus:ring-[#B285C0]">
              <option>1 Day</option>
              <option>3 Days</option>
              <option>5 Days</option>
              <option>7 Days</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-normal text-gray-950">Family Members Count</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-[#B285C0] focus:outline-none focus:ring-2 focus:ring-[#B285C0]"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-normal text-gray-950">Address</label>
            <textarea
              rows="3"
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-[#B285C0] focus:outline-none focus:ring-2 focus:ring-[#B285C0]"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-normal text-gray-950">Time Availability</label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 bg-[#B285C0] focus:outline-none focus:ring-2 focus:ring-[#B285C0]">
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-normal text-gray-950">Current City</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-[#B285C0] focus:outline-none focus:ring-2 focus:ring-[#B285C0]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#B285C0] text-white font-semibold py-2 rounded-md hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#f87171] text-center p-6 rounded-lg shadow-lg max-w-sm">
            <img
              src={success}
              alt="Success"
              className="mx-auto mb-4 w-20 h-20"
            />
            <h2 className="text-lg font-bold text-white">
              Your Approach Has been Accepted
            </h2>
            <p className="text-white mt-2">
              Complete your Payment Process Quickly
            </p>
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
