import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const [method, setMethod] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    if (!method) {
      alert("Please select a payment method!");
      return;
    }
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-teal-700">
        <div className="bg-white p-8 shadow-lg text-center max-w-md w-full rounded-none">
          <img
            src="/images/payment-success.png"
            alt="Payment Success"
            className="w-40 mx-auto mb-6"
          />
          <h2 className="text-2xl font-bold text-green-600 mb-2">
            Payment Success
          </h2>
          <p className="text-gray-700 mb-6">Your Session starts Tomorrow</p>

          <button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-purple-700 to-pink-500 text-white px-6 py-2 font-bold w-full rounded-none"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 font-roboto bg-pink-50 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md space-y-6">
        {/* Payment Details */}
        <div className="bg-purple-200 p-6 rounded-none shadow-md">
          <h2 className="text-lg font-bold text-[#6f145f] text-center mb-4">
            Payment Details
          </h2>
          <div className="flex justify-between">
            <span>Therapist Fee Per Session</span>
            <span>Rs.2,500.00</span>
          </div>
          <div className="flex justify-between">
            <span>No. of Session 25</span>
            <span>Rs.62,500.00</span>
          </div>
          <div className="flex justify-between">
            <span>Vehicle Fees</span>
            <span>Rs.1,500.00</span>
          </div>
          <div className="flex justify-between">
            <span>Counselling Fees</span>
            <span>Rs.4,500.00</span>
          </div>
          <div className="flex justify-between font-bold mt-2">
            <span>Total</span>
            <span>Rs.68,500.00</span>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-purple-200 p-6 rounded-none shadow-md">
          <h2 className="text-lg font-bold text-[#6f145f] text-center mb-4">
            Payment Method
          </h2>

          <div className="space-y-4">
            {[
              { name: "Debit / Credit Card", value: "Card" },
              { name: "Google Pay", value: "Google Pay" },
              { name: "Phone Pay", value: "Phone Pay" },
              { name: "Paytm", value: "Paytm" },
              { name: "Amazon Pay", value: "Amazon Pay" },
              { name: "WhatsApp", value: "WhatsApp" },
            ].map((item) => (
              <label
                key={item.value}
                className="flex justify-between items-center cursor-pointer"
              >
                <span>{item.name}</span>
                <input
                  type="radio"
                  name="payment"
                  value={item.value}
                  checked={method === item.value}
                  onChange={(e) => setMethod(e.target.value)}
                  className="appearance-none w-5 h-5 border border-gray-600 checked:bg-purple-700 checked:border-purple-700 
                             checked:before:content-['✔'] checked:before:text-white checked:before:flex 
                             checked:before:items-center checked:before:justify-center"
                />
              </label>
            ))}
          </div>

          <button
            onClick={handlePayment}
            className="w-full mt-6 bg-[#6f145f] text-white py-2 font-bold rounded-none"
          >
            Confirm Payment 
          </button>
        </div>
      </div>
    </div>
  );
}
