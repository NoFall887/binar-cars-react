import { useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import OurServicesSection from "../components/OurServicesSection";
import WhyUs from "../components/WhyUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <OurServicesSection />
      <WhyUs />
    </div>
  );
}

export default App;
