// src/components/OurServices.jsx
import React from "react";
import individualImg from "../assets/images/individual.jpg";
import familyImg from "../assets/images/family.jpg";
import groupImg from "../assets/images/group.jpg";

// Icon images (you can replace these with your actual images)
import iconIndividual from "../assets/images/icon1.png";
import iconCouples from "../assets/images/icon2.png";
import iconGroup from "../assets/images/icon3.png";
import iconFamily from "../assets/images/icon4.png";
import iconOnline from "../assets/images/icon5.png";
import iconSession from "../assets/images/group.jpg";

const services = [
  {
    title: "Individual Therapy",
    description:
      "A private, one-on-one session with a therapist to explore personal challenges, improve mental health, and support emotional well-being.",
    link: "#",
    image: individualImg,
    iconImg: iconIndividual,
  },
  {
    title: "Couples Therapy",
    description:
      "A type of counseling that helps partners improve communication, resolve conflicts, and strengthen their relationship in a supportive, guided setting.",
    link: "#",
    bg: "bg-[#B285C0] text-white",
    iconImg: iconCouples,
  },
  {
    title: "Group Therapy",
    description:
      "A form of therapy where individuals with similar issues meet together with a therapist to share experiences, gain support, and develop coping skills in a safe, group setting.",
    link: "#",
    iconImg: iconGroup,
  },
  {
    title: "Family Therapy",
    description:
      "A type of counseling that helps families improve communication, resolve conflicts, and strengthen relationships by working together with a licensed therapist.",
    link: "#",
    image: familyImg,
    iconImg: iconFamily,
  },
  {
    title: "Online Therapy",
    description:
      "Mental health support provided remotely through video, phone, or messaging, allowing individuals to connect with a licensed therapist from the comfort of their own space.",
    link: "#",
    iconImg: iconOnline,
  },
  {
    title: "Group Session",
    description:
      "Collaborative group-based therapy sessions to build support systems, share experiences, and practice healthy coping strategies together.",
    link: "#",
    image: groupImg,
    iconImg: iconSession,
  },
];

export default function OurServices() {
  return (
    <section className="py-12 px-4 sm:px-8 md:px-16 font-robotoSerif bg-[#feeeee]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#711C91] mb-10">
        Our Services
      </h2>

      {/* Grid with 4 per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`rounded-lg shadow-md border border-gray-200 overflow-hidden flex flex-col justify-between hover:shadow-xl transition duration-300 ${
              service.bg ? service.bg : "bg-white"
            }`}
          >
            {/* Image Section */}
            {service.image && (
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover"
              />
            )}

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3
                className={`text-lg font-bold mb-3 ${
                  service.bg ? "text-white" : "text-gray-800"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm leading-relaxed flex-grow ${
                  service.bg ? "text-white/90" : "text-gray-600"
                }`}
              >
                {service.description}
              </p>

              {/* Bottom row: Read More + Image Icon */}
              <div className="flex items-center justify-between mt-4">
                <a
                  href={service.link}
                  className={`text-sm font-medium ${
                    service.bg
                      ? "text-white underline"
                      : "text-[#711C91] hover:underline"
                  }`}
                >
                  Read more
                </a>
                {service.iconImg && (
                  <img
                    src={service.iconImg}
                    alt="icon"
                    className="w-6 h-6 object-contain"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
