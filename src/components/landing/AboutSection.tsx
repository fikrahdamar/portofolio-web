import { useState, useEffect } from "react";
import aboutMeImage from "../../assets/aboutMe.png";
import { scrollToSection } from "../../utils/scroll";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen bg-gray-50 overflow-visible"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full min-h-screen">
          <div className="hidden lg:flex justify-center items-center">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <img src={aboutMeImage} alt="about-me-icon" />
            </div>
          </div>
          <div className="space-y-8 lg:pl-8">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-5xl lg:text-6xl font-montserrat font-semibold text-gray-900 mb-8">
                About me
              </h2>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 font-montserrat">
                Hi, I'm Fikrah Damar Huda, or just Damar — a creative tech
                enthusiast with a passion for web development, machine learning,
                and visual storytelling. As a student at UPN Veteran Jawa Timur,
                I enjoy blending logic and design to build meaningful,
                user-friendly experiences while constantly learning and
                exploring new ideas.
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    scrollToSection("skills");
                  }}
                  className="button-color text-white px-8 py-3 rounded-full font-medium font-montserrat transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  skills
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

                <button
                  onClick={() => {
                    scrollToSection("portfolio");
                  }}
                  className="bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 hover:border-gray-400 px-8 py-3 rounded-full font-medium font-montserrat transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  portofolio
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
