import { MapPin, Phone, Mail } from "lucide-react";
import logo from "../assets/images/logo.png";
import footerImage from "../assets/images/footerimage.png";

const Footer = () => {
  return (
    <footer className="bg-[#B285C0] text-white font-robotoSerif py-10 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Logo" className="h-16 w-auto mb-4" />
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Links</h3>
          <ul className="space-y-2">
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
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="/help" className="hover:underline">Help Center</a></li>
            <li><a href="/partnership" className="hover:underline">Partnership</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="flex items-center justify-center md:justify-start"><MapPin className="mr-2" />6, Hethendran Street, Kongu Nagar, Karur - 26</p>
          <p className="flex items-center justify-center md:justify-start mt-2"><Phone className="mr-2" />+9532 32556</p>
          <p className="flex items-center justify-center md:justify-start mt-2"><Mail className="mr-2" />deepluswell@gmail.com</p>
        </div>
      </div>

      {/* Center Image */}
      <div className="flex justify-center mt-6">
        <img src={footerImage} alt="Meditation" className="h-20 w-auto" />
      </div>

      {/* Bottom Note */}
      <div className="text-center text-sm mt-6 opacity-80">
        © {new Date().getFullYear()} Dee Plus. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
