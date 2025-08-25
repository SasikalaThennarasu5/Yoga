// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, User, ArrowUp } from "lucide-react";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show button after scrolling 200px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#B285C0] px-8 py-5 rounded-[50px] mx-2 lg:mx-8 mt-2 shadow-lg">
  <div className="flex items-center justify-between">
    {/* Logo */}
    <div
      className="flex items-center space-x-2 cursor-pointer"
      onClick={scrollToTop}
    >
      <img src={logo} alt="Logo" className="h-14 w-auto" /> {/* bigger logo */}
    </div>

    {/* Desktop Menu */}
    <div className="hidden md:flex space-x-12 font-robotoSerif text-white text-xl">
      <Link to="/" className="hover:text-[#6f145f] transition">Home</Link>
      <Link to="/therapy" className="hover:text-[#6f145f] transition">Therapy</Link>
      <Link to="/about" className="hover:text-[#6f145f] transition">About Us</Link>
      <Link to="/meditation" className="hover:text-[#6f145f] transition">Meditation</Link>
      <Link to="/contact" className="hover:text-[#6f145f] transition">Contact Us</Link>
    </div>

    {/* Right Icons */}
    <div className="hidden md:flex items-center space-x-8 text-white text-xl">
      <Search className="cursor-pointer" size={26} />
      <User className="cursor-pointer" size={26} />
    </div>
  </div>
</nav>


      {/* Back-to-Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#B285C0] text-white p-3 rounded-full shadow-lg hover:bg-[#9d6eb0] transition"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
}
