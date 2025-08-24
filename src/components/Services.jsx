import React from "react";
import { Link } from "react-router-dom";

// Import service images
import individualImg from "../assets/images/indi.jpg";
import coupleImg from "../assets/images/couple.jpeg";
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
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#6f145f] mb-12">
          Our Services
        </h2>

        {/* Grid Layout (3 top, 2 bottom) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 place-items-center">
          {services.map((service, idx) => (
            <div key={idx} className="text-center">
              <div
                className="
                  overflow-hidden 
                  rounded-t-2xl rounded-tr-2xl rounded-bl-none rounded-br-2xl 
                  shadow-[0_8px_30px_rgba(0,0,0,0.3)] 
                  border-r-8 border-b-8 border-[#8e2828]
                "
              >
                {service.title === "Family Therapy" ? (
                  <Link to="/family-therapy">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-78 h-64 object-cover 
                        hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </Link>
                ) : (
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-78 h-64 object-cover"
                  />
                )}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
