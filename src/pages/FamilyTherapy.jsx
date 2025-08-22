import React from "react";
import { Link } from "react-router-dom";

// Import your images (update paths accordingly)
import family1 from "../assets/images/familytherapy.jpg";
import family2 from "../assets/images/family2.jpg";
import family3 from "../assets/images/family3.jpg";
import family4 from "../assets/images/family4.jpg";
import family5 from "../assets/images/family5.jpg";
import family6 from "../assets/images/family6.jpg";

const therapies = [
  {
    title: "Understanding 'Family Of Origin' Work in Therapy",
    img: family1,
    reviewer: "Rotary - LCP",
  },
  {
    title: "How structural Family Therapy Works",
    img: family2,
    reviewer: "Carno - MD",
  },
  {
    title: "What to Know About Internal Family System (IFS) Therapy",
    img: family3,
    reviewer: "Rotary - LCP",
  },
  {
    title: "What is Filial Therapy?",
    img: family4,
    reviewer: "Rotary - LCP",
  },
  {
    title: "Parent - Child Interaction Therapy",
    img: family5,
    reviewer: "Rotary - LCP",
  },
  {
    title:
      "How to Mentally Prepare for Motherhood, According to Parenting Coach",
    img: family6,
    reviewer: "Rotary - LCP",
  },
];

export default function FamilyTherapy() {
  return (
    <section className="bg-[#feeeee] px-6 md:px-16 py-12 font-roboto">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-bold text-[#B285C0] mb-4">
          Family Therapy
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-10 text-sm md:text-base">
          Family issues can be one of the biggest mental health stressors in a
          person’s life. Seeking help through family therapy can be an important
          step toward healing for you and your loved ones.
        </p>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {therapies.map((therapy, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={therapy.img}
                alt={therapy.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                  {therapy.title}
                </h3>
                <Link to="/approach-form">
  <button className="bg-[#B285C0] text-white px-6 py-2 rounded-lg shadow hover:bg-[#9b6ab0] transition duration-300">
    I Get This
  </button>
</Link>
                <p className="mt-3 text-xs text-gray-600">
                  Medically reviewed by <span className="font-semibold">{therapy.reviewer}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
