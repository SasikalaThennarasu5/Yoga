import React from "react";
import TherapySection from "../components/TherapySection";
import Services from "../components/Services";

export default function Therapy() {
  return (
    <div className="font-roboto">
      {/* Therapy Section */}
      <TherapySection />

      {/* Services Section */}
      <Services />
    </div>
  );
}
