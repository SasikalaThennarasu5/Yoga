// src/pages/Home.jsx
import HomeHero from "../components/HomeHero";
import Abbreviation from "../components/Abbreviation";
import Welcome from "../components/Welcome";
import OurServices from "../components/OurServices";
import Testimonials from "../components/Testimonials";
import OurTeam from "../components/OurTeam";
import LatestArticles from "../components/LatestArticles";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <Abbreviation />
      <Welcome />
      <OurServices />
      <Testimonials />
      <OurTeam />
      <LatestArticles />
      <FAQ />
    </div>
  );
}
