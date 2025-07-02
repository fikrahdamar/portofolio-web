import HeroSection from "../components/landing/HeroSection";
import Navbar from "../components/navbar/Navbar";
import AboutSection from "../components/landing/AboutSection";
import Skills from "../components/landing/Skillts";
import PortoSection from "../components/landing/PortoSection";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Skills />
      <PortoSection />
    </div>
  );
};

export default Hero;
