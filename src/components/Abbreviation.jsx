import yogaImage from "../assets/images/yoga.jpg";

const abbreviationData = [
  { letter: "M", word: "Mindfulness", desc: "Being aware of the present" },
  { letter: "E", word: "Equanimity", desc: "Calm and balanced emotions" },
  { letter: "D", word: "Discipline", desc: "Consistency in practice" },
  { letter: "I", word: "Inner Peace", desc: "A state of deep tranquility" },
  { letter: "T", word: "Tranquility", desc: "Soothing the restless mind" },
  { letter: "A", word: "Awareness", desc: "Conscious observation without reaction" },
  { letter: "T", word: "Transformation", desc: "Gradual personal growth" },
  { letter: "I", word: "Intention", desc: "Clarity of purpose" },
  { letter: "O", word: "Observation", desc: "Watching thoughts without control" },
  { letter: "N", word: "Now", desc: "Anchoring yourself in the present moment" },
];

export default function Abbreviation() {
  return (
    <section className="py-16 bg-[#feeeee] font-robotoSerif">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 
                      grid md:grid-cols-2 gap-12 items-center 
                      md:divide-x md:divide-[#6f145f]">
        
        {/* Left Side - Abbreviation */}
        <div className="p-6 rounded-lg md:pr-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#6f145f] mb-8">
            What DEE PLUS Stands For
          </h2>
          <div className="space-y-1">
            {abbreviationData.map((item, index) => (
              <div key={index} className="p-3 rounded text-center">
                <span className="font-bold text-xl  text-[#6f145f]">
                  {item.letter}{" "}
                </span>
                <span className="font-bold text-xl  text-[#6f145f]">
                  {item.word}
                </span>
                <p className="text-gray-950 font-medium  text-xl">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Yoga Illustration + Therapy Benefits */}
        <div className="flex flex-col items-center text-center md:pl-8">
          <img
            src={yogaImage}
            alt="Yoga Illustration"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-full object-contain mb-6"
          />
          <h3 className="text-xl md:text-2xl font-bold text-[#6f145f] mb-4">
            In Therapy Helps With
          </h3>
          <ul className="text-gray-950 font-medium leading-loose text-2xl space-y-2">
            <li>Reducing stress and anxiety</li>
            <li>Enhancing focus and clarity</li>
            <li>Improving emotional regulation</li>
            <li>Promoting self-awareness</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
