import teamImage from "../assets/images/team.jpg";

export default function Welcome() {
  // Smooth scroll function
  const scrollToTeam = () => {
    const section = document.getElementById("our-team");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 bg-gradient-to-b from-[#E6F4E6] to-[#D9F1D9] font-robotoSerif">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={teamImage}
              alt="Our Team"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-gray-950 font-medium text-lg">Welcome To</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#6f145f] mb-4">
              Private Psychiatry <br /> & Therapy Clinic
            </h2>
            <p className="text-gray-950 text-xl font-medium leading-relaxed mb-6">
              A specialized healthcare facility offering confidential,
              personalized mental health services, including psychiatric
              evaluations, medication management, and psychotherapy. Designed to
              provide discreet, compassionate care for individuals seeking
              support for emotional, behavioral, or psychological challenges.
            </p>
            <button
              onClick={scrollToTeam}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#B285C0] to-[#5B4FCF] text-white font-semibold shadow-md hover:opacity-90 transition"
            >
              Meet Our Team
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 bg-[#4CB1C8] text-white rounded-lg shadow-lg py-8 px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl md:text-3xl font-bold">1586</p>
            <p className="mt-2 text-sm md:text-base">Session Per Year</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold">20</p>
            <p className="mt-2 text-sm md:text-base">Year Experience</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold">5000+</p>
            <p className="mt-2 text-sm md:text-base">Successful Therapy</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold">18</p>
            <p className="mt-2 text-sm md:text-base">Specialist in Our Team</p>
          </div>
        </div>
      </div>
    </section>
  );
}
