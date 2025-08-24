import React from "react";
import trialimg from "../assets/images/trial.png";
import { Link } from "react-router-dom";

export default function Meditation() {
  return (
    <div className="p-8 bg-[#feeeee] font-roboto text-center">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl font-bold text-[#6f145f] mb-4">Meditation</h2>
        <p className="max-w-2xl mx-auto text-gray-950 text-xl mb-6">
          Meditation is a practice of focusing the mind and achieving a state of
          calm and clarity, often through techniques like breathing, mindfulness,
          or visualization.
        </p>

        {/* Free Trial Button */}
        <Link
          to="/free-trial"
          className="bg-black text-white px-6 py-2 rounded-full font-bold mb-10 inline-block"
        >
          Start Your Free Trial
        </Link>

        {/* Featured Meditation Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
          <div className="text-left">
            <h3 className="text-lg text-gray-600">Featured Meditation</h3>
            <h2 className="text-xl font-bold text-[#6f145f] mb-2">
              Sleep Meditation
            </h2>
            <p className="text-gray-950 text-xl mb-4">
              The sleep struggle is very real. Nighttime meditation can help.
              This dreamy practice reduces stress, calms the mind, and improves
              sleep quality, so you can actually get a good night's rest. Try it
              here and tell us how you feel in the morning.
            </p>
            <Link
              to="/free-trial"
              className="bg-black text-white px-6 py-2 rounded-full font-bold inline-block"
            >
              Start Your Free Trial
            </Link>
          </div>

          {/* Image + Audio */}
          <div className="bg-white shadow-md rounded-xl p-4">
            <img
              src={trialimg}
              alt="Meditation"
              className="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <p className="font-semibold text-gray-700 mb-2">
              Soothe Anxiety to Sleep
            </p>
            <audio controls className="w-full">
              {/* Placeholder peaceful audio (replace with your own) */}
              <source
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>

      {/* Daily Themes */}
      <div className="text-left max-w-2xl mx-auto">
        <h3 className="text-lg font-bold text-gray-800 text-center mb-4">
          Daily Themes (5–10 minutes each)
        </h3>
        <ul className="space-y-3 text-gray-950 text-xl">
          <li>
            <b>Day 1 – Gratitude:</b> Focus on 3 things you're thankful for.
            Feel the warmth they bring.
          </li>
          <li>
            <b>Day 2 – Loving-Kindness:</b> Silently repeat: “May I be happy.
            May others be happy.”
          </li>
          <li>
            <b>Day 3 – Present Moment Joy:</b> Notice small joys—breath, light,
            sound—with full attention.
          </li>
          <li>
            <b>Day 4 – Smile Meditation:</b> Gently smile while breathing
            slowly. Let the feeling of ease spread.
          </li>
          <li>
            <b>Day 5 – Positive Memories:</b> Recall a joyful moment.
            Re-experience it with all your senses.
          </li>
          <li>
            <b>Day 6 – Self-Compassion:</b> Send kindness to yourself. Affirm:
            “I am enough. I deserve joy.”
          </li>
          <li>
            <b>Day 7 – Intentional Joy:</b> Visualize a joyful life. Imagine
            waking up smiling, living freely.
          </li>
        </ul>
      </div>
    </div>
  );
}
