import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ for navigation

export default function Payment() {
  const [method, setMethod] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate(); // ✅ navigation hook

  const handlePayment = () => {
    if (!method) {
      alert("Please select a payment method!");
      return;
    }
    setSuccess(true); // ✅ show success screen
  };

  // ✅ Show success screen after payment
  if (success) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-teal-700">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <img
            src="/images/payment-success.png" // put your success image inside public/images
            alt="Payment Success"
            className="w-48 mx-auto mb-6"
          />
          <h2 className="text-2xl font-bold text-green-600 mb-2">
            Payment Success
          </h2>
          <p className="text-gray-700 mb-6">Your Session starts Tomorrow</p>

          {/* ✅ Continue Button */}
          <button
            onClick={() => navigate("/")} // change "/" to any route (like /dashboard)
            className="bg-gradient-to-r from-purple-700 to-pink-500 text-white px-6 py-2 rounded-lg font-bold"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  // ✅ Show payment form before payment
  return (
    <div className="p-6 font-roboto bg-pink-50 min-h-screen">
      {/* Payment Details */}
      <div className="bg-purple-200 p-6 rounded-2xl mb-6">
        <h2 className="text-lg font-bold text-purple-800 text-center mb-4">
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
      <div className="bg-purple-200 p-6 rounded-2xl">
        <h2 className="text-lg font-bold text-purple-800 text-center mb-4">
          Payment Method
        </h2>

        <div className="space-y-4">
          {/* Card */}
          <label className="flex justify-between items-center">
            <span>Debit / Credit Card</span>
            <input
              type="radio"
              name="payment"
              value="Card"
              checked={method === "Card"}
              onChange={(e) => setMethod(e.target.value)}
            />
          </label>

          {/* UPI Methods */}
          {[
            { name: "Google Pay", value: "Google Pay" },
            { name: "Phone Pay", value: "Phone Pay" },
            { name: "Paytm", value: "Paytm" },
            { name: "Amazon Pay", value: "Amazon Pay" },
            { name: "WhatsApp", value: "WhatsApp" },
          ].map((item) => (
            <label
              key={item.value}
              className="flex justify-between items-center"
            >
              <span>{item.name}</span>
              <input
                type="radio"
                name="payment"
                value={item.value}
                checked={method === item.value}
                onChange={(e) => setMethod(e.target.value)}
              />
            </label>
          ))}
        </div>

        {/* Confirm Button */}
        <button
          onClick={handlePayment}
          className="w-full mt-6 bg-gradient-to-r from-purple-700 to-pink-500 text-white py-2 rounded-lg font-bold"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
}
