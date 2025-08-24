import React from "react";

// Import local images
import pascalImg from "../assets/images/pascal.png";
import alexisImg from "../assets/images/alexis.png";
import sharonImg from "../assets/images/sharon.png";
import josephImg from "../assets/images/joseph.png";
import sebeneImg from "../assets/images/sebene.png";

const meditations = [
  {
    id: 1,
    mentor: "Pascal Auclair",
    title: "Rediscover the Familiar",
    desc: "This is the first time you’ve ever been here, now. Pascal invites you to discover the vivid and mysterious experience of this new moment.",
    img: pascalImg,
    duration: "5:00",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 2,
    mentor: "Alexis Santos",
    title: "Natural mindful walking meditation",
    desc: "Taking a relaxed walk mindfully will soothe the nervous system, get you outside, and can refresh you mentally when you’re feeling low or off.",
    img: alexisImg,
    duration: "12:00",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: 3,
    mentor: "Sharon Salzberg",
    title: "Being with Big Emotions",
    desc: "Bring an open minded curiosity to your big emotions and get to know yourself more fully, developing resilience to deal with all the feels.",
    img: sharonImg,
    duration: "9:50",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: 4,
    mentor: "Joseph Goldstein",
    title: "Balanced Compassion",
    desc: "We’re living in challenging times. Try practicing balance, letting you open to the suffering of the world without becoming overwhelmed.",
    img: josephImg,
    duration: "7:00",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    id: 5,
    mentor: "Sebene Selassie",
    title: "Self-kindness for stress",
    desc: "Showing self compassion to ourselves in hard times bolsters our resilience, so we can learn from setbacks rather than getting stuck in rumination.",
    img: sebeneImg,
    duration: "12:09",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
];

export default function FreeTrial() {
  return (
    <div className="p-8 bg-pink-50 font-roboto">
      {/* Header */}
      <h2 className="text-center text-lg font-bold text-purple-800 mb-6">
        Discover popular meditations.
      </h2>

      {/* Meditation List */}
      <div className="space-y-6">
        {meditations.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md p-4 flex gap-4 items-start"
          >
            {/* Mentor Image */}
            <img
              src={item.img}
              alt={item.mentor}
              className="w-20 h-20 rounded-lg object-cover"
            />

            {/* Meditation Details */}
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-700">
                {item.mentor}
              </h3>
              <h2 className="text-lg font-bold text-gray-900 mb-1">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-2">{item.desc}</p>

              {/* Audio Player */}
              <div className="flex items-center gap-3">
                <audio controls className="w-full">
                  <source src={item.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <span className="text-gray-500 text-sm">{item.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Free Trial Button */}
      <div className="text-center mt-8">
        <button className="bg-black text-white px-8 py-3 rounded-full font-bold">
          Get 14 Days Free Trial
        </button>
      </div>
    </div>
  );
}
