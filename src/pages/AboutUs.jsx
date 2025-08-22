import React from "react";
import About from "../components/About";
import Teachers from "../components/Teachers";

export default function AboutUs() {
  return (
    <div className="font-roboto">
      {/* About Section */}
      <About />

      {/* Teachers Section */}
      <Teachers />
    </div>
  );
}
