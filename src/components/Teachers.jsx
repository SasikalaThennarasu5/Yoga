import React from "react";
import teacher1 from "../assets/images/teacher1.jpeg";
import teacher2 from "../assets/images/teacher2.jpeg";
import teacher3 from "../assets/images/teacher3.jpeg";
import teacher4 from "../assets/images/teacher4.jpeg";

const teachers = [
  {
    name: "Kessonga",
    image: teacher1,
    desc: "Kessonga is a meditation teacher, therapist, and acupuncturist who has worked with populations of all ages and backgrounds.",
  },
  {
    name: "Andy",
    image: teacher2,
    desc: "A former Buddhist monk and co-founder of the DEE PLUS app, Andy has guided people in meditation for over 20 years.",
  },
  {
    name: "Eve",
    image: teacher3,
    desc: "Eve has been with DEE PLUS since the beginning, teaching mindfulness and overseeing our meditation curriculum.",
  },
  {
    name: "Dora",
    image: teacher4,
    desc: "Dora is a meditation teacher and former psychiatric nurse who is passionate about the healing powers of connection and community.",
  },
];

export default function Teachers() {
  return (
    <section className="bg-[#feeeee] py-12 px-4 md:px-8 lg:px-16 font-robotoSerif">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-10 text-gray-900">
        Meet <span className="text-brandPurple">DEE PLUS</span> Teachers
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-center flex flex-col items-center 
                       transform transition-all duration-300 hover:-translate-y-2 
                       hover:shadow-lg hover:shadow-[#B285C0]/40 group"
          >
            <div className="w-28 h-28 mb-4 rounded-full overflow-hidden shadow-sm">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="font-bold text-lg mb-2">{teacher.name}</h3>
            <p className="text-sm text-gray-700">{teacher.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
