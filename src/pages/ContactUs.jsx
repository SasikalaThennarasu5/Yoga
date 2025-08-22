// src/components/ContactUs.jsx
import React from "react";
import contactImg from "../assets/images/contact.jpg"; // meditation image

export default function ContactUs() {
  return (
    <section className="w-full bg-[#feeeee] py-12 px-4 sm:px-8 md:px-16 font-robotoSerif text-black">
      {/* Image & Quote */}
      <div className="max-w-5xl mx-auto">
        <img
          src={contactImg}
          alt="Meditation"
          className="w-full rounded-md shadow-md mb-8"
        />
      </div>

      {/* Contact Heading */}
      <h2 className="text-center text-lg sm:text-2xl font-bold mb-8">
        Contact <span className="text-[#B285C0]">DEE PLUS</span>
      </h2>

      {/* Content */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section: Contact Info */}
        <div className="text-gray-950 text-xl leading-tight space-y-4">
          <p>
            <span className="font-bold">Address:</span>
            <br />
            6, Hethendran Street,
            <br />
            Kongu Nagar,
            <br />
            Karur - 26
          </p>

          <p>
            <span className="font-bold">Mobile No:</span> +9532 32556
            <br />
            <span className="font-bold">E-Mail Id:</span>{" "}
            deepluswell@gmail.com
          </p>

          <p>
            <span className="font-bold">General Enquirers</span>
            <br />
            Got a general question?
            <br />
            Please use this Contact Form to reach out to us.
          </p>

          <p>
            <span className="font-bold">Feedback</span>
            <br />
            Do you have something to say about The Guided Meditation Site?
            <br />
            Feel free to give us your feedback via this Contact Form.
          </p>

          <p>
            <span className="font-bold">Opening Time</span>
            <br />
            Monday - Sunday
            <br />
            9.00 AM To 9.00 PM
          </p>
        </div>

        {/* Right Section: Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-950 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#B285C0]"
          />
          <input
            type="text"
            placeholder="Mobile No"
            className="w-full border border-gray-950 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#B285C0]"
          />
          <input
            type="email"
            placeholder="E-Mail"
            className="w-full border border-gray-950 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#B285C0]"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full border border-gray-950 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#B285C0]"
          ></textarea>

          {/* Recaptcha Placeholder */}
          <div className="flex items-center space-x-3 border border-gray-950 rounded-md p-2">
            <input type="checkbox" className="w-5 h-5" />
            <span className="text-gray-700 text-sm">I am Not Robot</span>
            <div className="ml-auto">
              <img
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                alt="captcha"
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#B285C0] text-white font-semibold py-2 rounded-md hover:bg-[#9a6aae] transition"
          >
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
}
