import HeroSection from "../components/landing/HeroSection";
import Navbar from "../components/navbar/Navbar";
import AboutSection from "../components/landing/AboutSection";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default Hero;
