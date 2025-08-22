// src/components/About.jsx
import React from "react";
import aboutImg from "../assets/images/about.png";
import whoImg from "../assets/images/who.png";
import whatImg from "../assets/images/what.png";
import howImg from "../assets/images/how.png";

export default function About() {
  return (
    <section className="w-full bg-[#feeeee] py-12 px-4 sm:px-8 md:px-16 font-robotoSerif">
      {/* Heading */}
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-10">
        About <span className="text-[#B285C0]">DEE PLUS</span>
      </h2>

      <div className="max-w-5xl mx-auto space-y-12">
        {/* Our Mission */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={aboutImg}
            alt="Meditation"
            className="w-full md:w-1/3 rounded-md shadow-md"
          />
          <div className="flex-1 text-gray-950 text-2xl">
            <h3 className="font-semibold mb-2 text-center">Our Mission</h3>
            <p className="text-xl font-normal leading-relaxed">
              Our mission is to provide a valuable resource of information and
              downloads to people who want to evolve mentally, emotionally and
              spiritually, and to help people become healthier, happier and more
              peaceful.
            </p>
          </div>
        </div>

        {/* Who we are */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <img
            src={whoImg}
            alt="Who we are"
            className="w-28 h-28 object-cover rounded-full shadow-md"
          />
          <div className="flex-1 text-center md:text-left text-gray-950 text-2xl">
            <h3 className="font-semibold mb-2 text-center">Who we are</h3>
            <p className="text-xl font-normal leading-relaxed">
              Think of DEE PLUS as your lifelong guide to better mental health.
              We’re here for you whenever you need us, wherever you are, helping
              you get through tough times and find joy in every day.
            </p>
          </div>
        </div>

        {/* What we do */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <img
            src={whatImg}
            alt="What we do"
            className="w-28 h-28 object-cover rounded-full shadow-md"
          />
          <div className="flex-1 text-center md:text-left text-gray-950 text-2xl">
            <h3 className="font-semibold mb-2 text-center">What we do</h3>
            <p className="text-xl font-normal leading-relaxed">
              Through evidence-based meditation and mindfulness tools, mental
              health coaching, therapy, psychiatry, Headspace helps you create
              life-changing habits to support your mental health and find a
              healthier, happier you.
            </p>
          </div>
        </div>

        {/* How we do it */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <img
            src={howImg}
            alt="How we do it"
            className="w-28 h-28 object-cover rounded-full shadow-md"
          />
          <div className="flex-1 text-center md:text-left text-gray-950 text-2xl">
            <h3 className="font-semibold mb-2 text-center">How we do it</h3>
            <p className="text-xl font-normal leading-relaxed">
              Our four values inform our decisions and how we operate
              day-to-day: put members first; bring a beginner's mind; seek
              truth, speak truth; embrace ownership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
