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
      <nav className="sticky top-0 z-50 bg-[#B285C0] px-6 py-3 rounded-[50px] mx-2 lg:mx-8 mt-2 shadow-md">
        <div className="flex items-center justify-between">
          {/* Logo (scroll to top) */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={scrollToTop}
          >
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 font-robotoSerif text-white text-lg">
            <Link to="/" className=" hover:text-[#6f145f] transition">
              Home
            </Link>
            <Link to="/therapy" className="hover:text-[#6f145f] transition">
              Therapy
            </Link>
            <Link to="/about" className="hover:text-[#6f145f] transition">
              About Us
            </Link>
            <Link to="/meditation" className="hover:text-[#6f145f] transition">
              Meditation
            </Link>
            <Link to="/contact" className="hover:text-[#6f145f] transition">
              Contact Us
            </Link>
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center space-x-6 text-white">
            <Search className="cursor-pointer" />
            <User className="cursor-pointer" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 font-roboto text-white text-lg">
            <Link
              to="/"
              className="block text-[#cde3b4] hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/therapy"
              className="block hover:text-[#6f145f]"
              onClick={() => setIsOpen(false)}
            >
              Therapy
            </Link>
            <Link
              to="/about"
              className="block hover:text-[#6f145f]"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/meditation"
              className="block hover:text-[#6f145f]"
              onClick={() => setIsOpen(false)}
            >
              Meditation
            </Link>
            <Link
              to="/contact"
              className="block hover:text-[#6f145f]"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>

            <div className="flex space-x-6 pt-4">
              <Search className="cursor-pointer" />
              <User className="cursor-pointer" />
            </div>
          </div>
        )}
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
