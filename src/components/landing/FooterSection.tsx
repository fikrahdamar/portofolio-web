import {
  Mail,
  Instagram,
  Linkedin,
  Github,
  DollarSign,
  Gamepad2,
  Music,
} from "lucide-react";

const FooterSection = () => {
  return (
    <section id="contact">
      <footer className="relative bg-gradient-to-r from-[#5361BB] via-[#6C5DBF] to-[#7E5CBA] text-white">
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-16 md:h-12"
            viewBox="0 0 1920 736"
            preserveAspectRatio="none"
          >
            <path
              d="M246.5 11.6406C15.7 -39.9594 -236.167 93.3072 -360.5 151.14L-385 1031.64L2106 1041.64V758.14C2126 509.474 2307.5 11.641 1941 11.6406C1415.61 11.64 1416.5 281.64 1072 281.64C773.974 281.64 535 76.1406 246.5 11.6406Z"
              fill="url(#paint0_linear_18_191)"
            />
          </svg>
        </div>

        <div className="pt-20 md:pt-16 pb-12 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="space-y-4">
                <h3 className="text-lg font-normal text-white/80 mb-4">
                  Get in touch
                </h3>
                <a
                  href="mailto:fikrahdamar7@gmail.com"
                  className="flex items-center gap-3 text-white hover:text-white/80 transition-colors duration-200"
                >
                  <Mail size={20} />
                  <span>fikrahdamar7@gmail.com</span>
                </a>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-normal text-white/80 mb-4">
                  contact me
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <a
                      href="https://www.instagram.com/fikrahdamars/"
                      className="flex items-center gap-2 text-white hover:text-white/80 transition-colors duration-200"
                    >
                      <Instagram size={18} />
                      <span>instagram</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/fikrah-damar-011653248"
                      className="flex items-center gap-2 text-white hover:text-white/80 transition-colors duration-200"
                    >
                      <Linkedin size={18} />
                      <span>linkedIn</span>
                    </a>
                    <a
                      href="https://github.com/fikrahdamar"
                      className="flex items-center gap-2 text-white hover:text-white/80 transition-colors duration-200"
                    >
                      <Github size={18} />
                      <span>gitHub</span>
                    </a>
                  </div>
                  <div className="space-y-3">
                    <a
                      href="https://payhip.com/fdamars"
                      className="flex items-center gap-2 text-white hover:text-white/80 transition-colors duration-200"
                    >
                      <DollarSign size={18} />
                      <span>payhip</span>
                    </a>
                    <a
                      href="https://steamcommunity.com/id/damar123/"
                      className="flex items-center gap-2 text-white hover:text-white/80 transition-colors duration-200"
                    >
                      <Gamepad2 size={18} />
                      <span>steam</span>
                    </a>
                    <a
                      href="https://open.spotify.com/user/jhnrid7agyopmsyf9nr05p63r?trackId=4uqeKoMtmbl1FTlRMdXKx5"
                      className="flex items-center gap-2 text-white hover:text-white/80 transition-colors duration-200"
                    >
                      <Music size={18} />
                      <span>spotify</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:text-right">
                <p className="text-white/80 mb-2 text-sm">contact me</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  LETS TALK
                </h2>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterSection;
