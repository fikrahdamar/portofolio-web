import { useState } from "react";
import rawPortoData from "../../data/portofolio.json";
import { useNavigate } from "react-router-dom";

import type { Portfolio, PortfolioData } from "../../interface/portfolio";

const portfolioData = rawPortoData as PortfolioData;

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Portfolio | null>(
    null
  );
  const navigate = useNavigate();

  const displayedProjects = portfolioData.Portfolio.slice(0, 4);

  const handleSeeMore = () => {
    navigate("/portfolio");
  };

  const openModal = (project: Portfolio) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-black mb-4">Portfolio</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Discover my latest projects and creative endeavors
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-purple-600 to-pink-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-white/30">📱</div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openModal(project)}
                    className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/30 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                  {project.desc}
                </p>

                {/* Roles */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.role.map((role, roleIndex) => (
                    <span
                      key={roleIndex}
                      className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20"
                    >
                      {role}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button
                  onClick={() => openModal(project)}
                  className="w-full button-color text-white py-3 rounded-xl font-semibold  transition-all duration-300 transform hover:scale-105"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center">
          <button
            onClick={handleSeeMore}
            className="bg-white/10 backdrop-blur-sm text-black px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30 transform hover:scale-105"
          >
            See More Projects
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-slate-800/90 backdrop-blur-xl border border-white/20 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="relative h-64 bg-gradient-to-br from-purple-600 to-pink-600 rounded-t-3xl overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl text-white/30">🚀</div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h2>

              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                {selectedProject.desc}
              </p>

              {/* Roles */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">
                  My Role
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.role.map((role, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/10 text-white rounded-xl border border-white/20 font-medium"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-3"
                >
                  🐙 View Code
                </a>

                {selectedProject.publicationLink && (
                  <a
                    href={selectedProject.publicationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r button-color text-white py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-3"
                  >
                    🚀 Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
