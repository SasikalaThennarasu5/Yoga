import { useNavigate } from "react-router-dom";
import heroImage from "../assets/images/hero.jpg";

export default function HomeHero() {
  const navigate = useNavigate();

  return (
    <section
  className="relative h-[80vh] flex items-center justify-center bg-cover bg-center font-robotoSerif mx-8 my-8"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

  {/* Content */}
  <div className="relative z-10 text-center max-w-3xl px-6 mx-auto">
    <blockquote className="text-2xl md:text-3xl text-white font-medium italic mb-6 drop-shadow-2xl">
      “When you realize nothing is lacking, <br />
      the whole world belongs to you.”
    </blockquote>
    <button
      onClick={() => navigate("/contact")}
      className="px-8 py-3 rounded-full bg-gradient-to-r from-[#B285C0] to-[#5B4FCF] text-white font-semibold shadow-lg hover:opacity-90 transition"
    >
      Join Now
    </button>
  </div>
</section>

  );
}
