import { useState, useEffect } from "react";
import profileImage from "/profile.png";
import { scrollToSection } from "../../utils/scroll";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 w-1/2 h-full bg-gray-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen">
            <div className="space-y-6 pt-16 lg:pt-20 text-center lg:text-left order-2 lg:order-1">
              <div
                className={`transition-all duration-1000 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-light text-gray-800 mb-2">
                  Hello,
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold font-montserrat text-gray-900 mb-4">
                  I am Fikrah Damar Huda
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 font-regular font-montserrat">
                  Programmer
                </p>
              </div>

              <div
                className={`transition-all duration-1000 delay-300 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <button
                  onClick={() => scrollToSection("about")}
                  className="button-color text-white px-6 sm:px-8 py-3 rounded-full font-medium font-montserrat transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto lg:mx-0"
                >
                  about me
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
            <div
              className={`flex justify-center lg:justify-center transition-all duration-1000 delay-500 order-1 lg:order-2 pt-20 sm:pt-24 lg:pt-0 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] relative">
                  <div className="w-full h-full relative overflow-hidden">
                    <svg width="0" height="0" className="absolute">
                      <defs>
                        <clipPath
                          id="wave-bubble-clip"
                          clipPathUnits="objectBoundingBox"
                        >
                          <path d="M0.15 0.08C0.25 0.02 0.45 0.01 0.65 0.05C0.82 0.08 0.92 0.18 0.96 0.32C0.98 0.48 0.95 0.68 0.88 0.82C0.78 0.92 0.62 0.96 0.52 0.98C0.38 0.99 0.23 0.97 0.15 0.88C0.08 0.78 0.02 0.65 0.03 0.52C0.04 0.38 0.08 0.25 0.12 0.15C0.13 0.12 0.14 0.10 0.15 0.08Z" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div
                      className="w-full h-full relative"
                      style={{
                        clipPath: "url(#wave-bubble-clip)",
                        WebkitClipPath: "url(#wave-bubble-clip)",
                      }}
                    >
                      <img
                        src={profileImage}
                        alt="Fikrah Damar Huda"
                        className="w-full h-full object-cover object-center"
                        style={{ transform: "scale(1.05)" }}
                      />
                    </div>

                    <div className="absolute inset-0 -z-10">
                      <svg
                        className="w-full h-full drop-shadow-lg"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 8C25 2 45 1 65 5C82 8 92 18 96 32C98 48 95 68 88 82C78 92 62 96 52 98C38 99 23 97 15 88C8 78 2 65 3 52C4 38 8 25 12 15C13 12 14 10 15 8Z"
                          fill="url(#paint0_linear_wave_bubble)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_wave_bubble"
                            x1="50"
                            y1="0"
                            x2="50"
                            y2="100"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#7E87D9" />
                            <stop offset="1" stopColor="#785CC0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 sm:-top-6 right-0 sm:right-1 w-8 h-8 sm:w-12 sm:h-12 bg-[#5361BB] rounded-full animate-bounce shadow-lg"></div>
                <div className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-4 w-6 h-6 sm:w-10 sm:h-10 bg-[#7E5CBA] rounded-full animate-pulse shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
