import HeroSection from "../components/landing/HeroSection";
import Navbar from "../components/navbar/Navbar";
import AboutSection from "../components/landing/AboutSection";
import Skills from "../components/landing/Skillts";
import PortoSection from "../components/landing/PortoSection";
import FooterSection from "../components/landing/FooterSection";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Skills />
      <PortoSection />
      <FooterSection />
    </div>
  );
};

export default Hero;
