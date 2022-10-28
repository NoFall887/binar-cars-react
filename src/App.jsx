import { useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import OurServicesSection from "../components/OurServicesSection";
import Testimony from "../components/Testimony";
import WhyUs from "../components/WhyUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <OurServicesSection />
      <WhyUs />
      <Testimony />
    </div>
  );
}

export default App;
