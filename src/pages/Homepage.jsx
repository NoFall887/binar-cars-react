import React from "react";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import OurServicesSection from "../../components/OurServicesSection";
import RentNow from "../../components/RentNow";
import Testimony from "../../components/Testimony";
import WhyUs from "../../components/WhyUs";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OurServicesSection />
      <WhyUs />
      <Testimony />
      <RentNow />
      <FAQ />
      <Footer />
    </>
  );
};

export default Homepage;
