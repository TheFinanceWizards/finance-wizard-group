import React from "react";
import Navbar from "../components/home/Navbar";
import HeroSection from "../components/home/HeroSection";
import StatsBar from "../components/home/StatsBar";
import PainPoints from "../components/home/PainPoints";
import ValuePillars from "../components/home/ValuePillars";
import PlatformTools from "../components/home/PlatformTools";
import Testimonials from "../components/home/Testimonials";
import ApplicationSection from "../components/home/ApplicationSection";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <PainPoints />
      <ValuePillars />
      <PlatformTools />
      <Testimonials />
      <ApplicationSection />
      <Footer />
    </div>
  );
}