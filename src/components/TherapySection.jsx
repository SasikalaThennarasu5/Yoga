import React from "react";
import therapyImg from "../assets/images/therapy.png"; // <-- update path if needed

export default function TherapySection() {
  return (
    <section className="bg-[#feeeee] px-6 md:px-16 py-12 font-robotoSerif">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold text-[#6f145f] mb-6">
            DEE PLUS Therapy
          </h2>
          <p className="text-gray-950 leading-relaxed">
            Therapy is a process where a person works with a trained
            professional to explore thoughts, feelings, and behaviors in order
            to improve mental health, cope with challenges, and promote personal
            growth. It can include talking, practicing new skills, or using
            specific techniques to heal, understand oneself better, or manage
            life more effectively.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src={therapyImg}
            alt="Therapy session"
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
