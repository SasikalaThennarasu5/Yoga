// src/components/Testimonials.jsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // npm install lucide-react
import client1 from "../assets/images/client1.jpeg";
import client2 from "../assets/images/client2.jpeg";
import client3 from "../assets/images/client3.jpeg";
import client4 from "../assets/images/client4.jpeg";

const testimonials = [
  {
    name: "Daniel M.",
    text: "I never thought I could quiet my mind, but the guidance and support made it possible. I now look forward to each session.",
    image: client1,
  },
  {
    name: "Sarah K.",
    text: "Therapy has truly transformed my outlook on life. I feel more confident and resilient every day.",
    image: client2,
  },
  {
    name: "James L.",
    text: "The safe space provided allowed me to express myself openly and heal from past struggles.",
    image: client3,
  },
  {
    name: "Emily R.",
    text: "The therapist helped me and my partner strengthen our relationship in ways I never imagined.",
    image: client4,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 font-robotoSerif bg-gradient-to-b from-sky-100 to-green-100">
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Heading */}
        <p className="text-gray-700 text-sm mb-2">Testimonials</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#B285C0] mb-6">
          What Our Clients Says
        </h2>

        {/* Quote */}
        <blockquote className="text-lg sm:text-xl italic font-medium text-gray-800 mb-4">
          “{testimonials[current].text}”
        </blockquote>
        <p className="text-gray-900 font-semibold">
          — {testimonials[current].name}
        </p>

        {/* Client Image */}
        <img
          src={testimonials[current].image}
          alt={testimonials[current].name}
          className="w-20 h-20 rounded-full object-cover mx-auto mt-6 border-4 border-white shadow-md"
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-black/10 transition"
        >
          <ChevronLeft size={32} strokeWidth={2.5} className="text-black" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-black/10 transition"
        >
          <ChevronRight size={32} strokeWidth={2.5} className="text-black" />
        </button>

        {/* Pagination Bars */}
        <div className="flex justify-center mt-6 gap-3">
          {testimonials.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full cursor-pointer transition-all ${
                current === idx
                  ? "w-10 bg-gradient-to-r from-purple-500 to-[#B285C0]"
                  : "w-6 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
