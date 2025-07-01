import { useState, useEffect } from "react";
import profileImage from "/profile.png";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        {/* Background with SVG Wave */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Left side - Light background */}
          <div className="absolute left-0 top-0 w-1/2 h-full bg-gray-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
            {/* Left Content */}
            <div className="space-y-6 pt-20">
              <div
                className={`transition-all duration-1000 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h1 className="text-5xl lg:text-6xl font-light text-gray-800 mb-2">
                  Hello,
                </h1>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  I am Fikrah Damar Huda
                </h2>
                <p className="text-xl lg:text-2xl text-gray-600 mb-8">
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
                <button className="bg-linear-to-r from-[#5361BB] via-[#6C5DBF] to-[#7E5CBA] hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
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

            {/* Right Content - Profile Image */}
            <div
              className={`flex justify-center lg:justify-center transition-all duration-1000 delay-500 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="relative">
                {/* Profile Image Container - SVG area diperbesar */}
                <div className="w-96 h-96 lg:w-[450px] lg:h-[450px] relative">
                  <div className="w-full h-full relative overflow-hidden">
                    {/* SVG Clipping Path - wave bubble shape */}
                    <svg width="0" height="0" className="absolute">
                      <defs>
                        <clipPath
                          id="wave-bubble-clip"
                          clipPathUnits="objectBoundingBox"
                        >
                          <path d="M0.15 0.08C0.25 0.02 0.45 0.01 0.65 0.05C0.82 0.08 0.92 0.18 0.96 0.32C0.98 0.48 0.95 0.68 0.88 0.82C0.78 0.92 0.62 0.96 0.48 0.98C0.32 0.99 0.18 0.95 0.08 0.88C0.02 0.78 0.01 0.65 0.03 0.52C0.05 0.38 0.08 0.25 0.12 0.15C0.13 0.12 0.14 0.1 0.15 0.08Z" />
                        </clipPath>
                      </defs>
                    </svg>

                    {/* Image dengan wave bubble clipping - posisi di bawah */}
                    <div
                      className="w-full h-full relative flex items-end justify-center"
                      style={{
                        clipPath: "url(#wave-bubble-clip)",
                        WebkitClipPath: "url(#wave-bubble-clip)",
                      }}
                    >
                      <img
                        src={profileImage}
                        alt="Fikrah Damar Huda"
                        className="w-full h-full object-cover object-bottom relative -bottom-[50px]"
                      />
                    </div>

                    {/* Background wave bubble shape untuk efek shadow */}
                    <div className="absolute inset-0 -z-10 scale-105">
                      <svg
                        className="w-full h-full drop-shadow-lg"
                        viewBox="0 0 400 400"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M60 32C100 8 180 4 260 20C328 32 368 72 384 128C392 192 380 272 352 328C312 368 260 384 208 392C152 396 92 388 60 352C32 312 8 260 12 208C16 152 28 100 48 60C52 48 56 40 60 32Z"
                          fill="url(#paint0_linear_wave_bubble)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_wave_bubble"
                            x1="200"
                            y1="0"
                            x2="200"
                            y2="400"
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

                <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#5361BB] rounded-full animate-bounce shadow-lg"></div>
                <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-[#7E5CBA] rounded-full animate-pulse shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
