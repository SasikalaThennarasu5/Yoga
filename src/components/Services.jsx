import React from "react";
import { Link } from "react-router-dom";

// Import service images (update paths as needed)
import individualImg from "../assets/images/individual.jpg";
import coupleImg from "../assets/images/coupletherapy.jpeg";
import familyImg from "../assets/images/familytherapy.jpg";
import groupImg from "../assets/images/grouptherapy.jpg";
import onlineImg from "../assets/images/online.jpg";

const services = [
  { title: "Individual Therapy", img: individualImg },
  { title: "Couple Therapy", img: coupleImg },
  { title: "Family Therapy", img: familyImg },
  { title: "Group Therapy", img: groupImg },
  { title: "Online Therapy", img: onlineImg },
];

export default function Services() {
  return (
    <section className="bg-[#feeeee] px-6 md:px-16 py-12 font-robotoSerif">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-xl md:text-2xl font-bold text-[#B285C0] mb-12">
          Our Services
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          {services.map((service, idx) => (
  <div key={idx} className="text-center">
    <div className="overflow-hidden rounded-2xl shadow-xl">
      {service.title === "Family Therapy" ? (
        <Link to="/family-therapy">
          <img
            src={service.img}
            alt={service.title}
            className="w-64 h-64 object-cover rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </Link>
      ) : (
        <img
          src={service.img}
          alt={service.title}
          className="w-64 h-64 object-cover rounded-2xl"
        />
      )}
    </div>
    <h3 className="mt-4 text-lg font-semibold text-gray-900">
      {service.title}
    </h3>
  </div>
))}

        </div>
      </div>
    </section>
  );
}
