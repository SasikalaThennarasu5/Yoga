// src/components/OurTeam.jsx
import { useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import team1 from "../assets/images/team1.png";
import team2 from "../assets/images/team2.png";
import team3 from "../assets/images/team3.png";
import team4 from "../assets/images/team4.png";

const teamMembers = [
  { name: "JansiMerry", role: "Clinical Director / Psychologist", img: team1 },
  { name: "Rizza", role: "Psychologist", img: team2 },
  { name: "John Smith", role: "Clinical Director / Psychologist", img: team3 },
  { name: "Brady John", role: "Psychologist", img: team4 },
];

// Custom Arrows
function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="!flex !items-center !justify-center absolute -right-12 top-1/2 -translate-y-1/2 
      bg-[#C8FACC] text-black p-4 rounded-full shadow-md hover:bg-green-300 transition z-20"
    >
      <ChevronRight size={22} />
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="!flex !items-center !justify-center absolute -left-12 top-1/2 -translate-y-1/2 
      bg-[#C8FACC] text-black p-4 rounded-full shadow-md hover:bg-green-300 transition z-20"
    >
      <ChevronLeft size={22} />
    </button>
  );
}

export default function OurTeam() {
  const [current, setCurrent] = useState(0);

  const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 3, // 👈 3 cards on desktop
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  beforeChange: (_, next) => setCurrent(next),
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } }, // tablet
    { breakpoint: 640, settings: { slidesToShow: 1 } },  // mobile
  ],
};

  return (
    <section id="our-team" className="py-16 bg-[#feeeee] font-robotoSerif">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center relative">
        {/* Section Title */}
        <p className="text-gray-950 font-medium text-lg">Meet Our Therapist</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#6f145f] mb-10">
          Our Team
        </h2>

        {/* Slider */}
        <div className="relative">
          <Slider {...settings}>
            {teamMembers.map((member, idx) => (
              <div key={idx} className="px-4">
                <div className="bg-[#E7FFD9] rounded-2xl shadow-md py-6 px-4 transition hover:shadow-xl">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-40 h-44 mx-auto rounded-lg object-cover mb-4"
                  />
                  <h3 className="text-lg font-bold text-black">
                    {member.name}
                  </h3>
                  <p className="text-gray-950 text-lg">{member.role}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Pagination Bars */}
        <div className="flex justify-center mt-6 gap-3">
          {teamMembers.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full cursor-pointer transition-all ${
                current === idx
                  ? "w-10 bg-[#8B5CF6]"
                  : "w-6 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
