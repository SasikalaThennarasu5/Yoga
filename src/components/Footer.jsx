// src/components/Footer.jsx
import React from "react";
import logo from "../assets/images/logo.png";
import meditationImg from "../assets/images/footerimage.png";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#B285C0] text-white py-6 px-6 rounded-t-3xl font-robotoSerif">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Logo + Brand */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="DEE PLUS Logo" className="w-50 mb-2" />
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-base font-semibold mb-2">Menu</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/happiness-week" className="hover:underline">Happiness Week</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/course" className="hover:underline">Course</a></li>
            <li><a href="/meditation" className="hover:underline">Meditation</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="/help" className="hover:underline">Help Center</a></li>
            <li><a href="/partnership" className="hover:underline">Partnership</a></li>
          </ul>
        </div>

        {/* Opening Time + Meditation Image */}
        <div className="flex flex-col items-center">
          <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
            <Clock size={16} /> Opening Time
          </h3>
          <p className="text-sm">Mon - Sun</p>
          <p className="text-sm">9.00 AM - 9.00 PM</p>
          <img
            src={meditationImg}
            alt="Meditation"
            className="w-20 mt-4"
          />
        </div>

        {/* Contact */}
        <div className="space-y-1 text-sm">
          <h3 className="text-base font-semibold mb-2">Contact</h3>
          <p className="flex items-start gap-2">
            <MapPin size={16} />
            6, Hethendran Street,<br />Kongu Nagar,<br />Karur - 26
          </p>
          <p className="flex items-center gap-2">
            <Phone size={16} /> +9532 32556
          </p>
          <p className="flex items-center gap-2">
            <Mail size={16} /> deepluswell@gmail.com
          </p>
        </div>
      </div>

      {/* Copy Rights */}
      <div className="text-center mt-4 text-xs text-purple-100">
        © {new Date().getFullYear()} DEE PLUS. All Rights Reserved.
      </div>
    </footer>
  );
}
