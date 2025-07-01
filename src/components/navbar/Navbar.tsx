const Navbar = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-50 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-center">
          <div className="flex space-x-8">
            {["Home", "About", "Portfolio", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-gray-600 hover:text-[#6C5DBF] hover:bg-[#5361bb62]`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
