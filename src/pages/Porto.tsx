import { useState } from "react";
import rawPortoData from "../data/portofolio.json";
import { useNavigate } from "react-router-dom";
import { renderMedia } from "../utils/media";

import type { Portfolio, PortfolioData } from "../interface/portfolio";

const portfolioData = rawPortoData as PortfolioData;

const Porto = () => {
  const [selectedProject, setSelectedProject] = useState<Portfolio | null>(
    null
  );
  const navigate = useNavigate();
  const allProjects = portfolioData.Portfolio;

  const handleGoBack = () => {
    navigate("/");
  };

  const openModal = (project: Portfolio) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };
  const hasVideoContent = (project: Portfolio) => {
    return (
      project.image &&
      project.image.some(
        (media) =>
          media.toLowerCase().includes(".mp4") ||
          media.toLowerCase().includes(".webm") ||
          media.toLowerCase().includes(".mov") ||
          media.toLowerCase().includes("video")
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-16">
          <button
            onClick={handleGoBack}
            className="mb-6 bg-white/10 backdrop-blur-sm text-black px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30 transform hover:scale-105"
          >
            ← Back to Home
          </button>
          <h1 className="text-6xl font-bold text-black mb-4">All Projects</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Explore my complete collection of projects and creative work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {allProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 shadow-lg backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col"
            >
              <div className="relative h-64 bg-gradient-to-br from-purple-600 to-pink-600 overflow-hidden">
                {project.image && project.image.length > 0 ? (
                  renderMedia(
                    project.image[0],
                    project.title,
                    "w-full h-full object-cover"
                  )
                ) : (
                  <>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl text-white/30">📱</div>
                    </div>
                  </>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/10 to-transparent"></div>

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openModal(project)}
                    className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/30 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-500 mb-3 group-hover:text-gray-800 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-700 font-montserrat font-regular text-sm line-clamp-3 mb-4">
                  {project.shortDesc}
                </p>
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
                <div className="flex-grow"></div>
                <button
                  onClick={() => openModal(project)}
                  className="w-full button-color text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-lg">
            Showing {allProjects.length} projects
          </p>
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={closeModal}
          ></div>
          <div className="relative bg-slate-800/90 backdrop-blur-xl border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={closeModal}
              className="sticky top-4 left-full -translate-x-8 z-[60] bg-white/10 hover:bg-white text-white hover:text-black rounded-full p-3 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/20 hover:scale-110 mb-4"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Video Warning Banner */}
            {hasVideoContent(selectedProject) && (
              <div className="mx-4 mb-4 bg-amber-500/20 border border-amber-500/30 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="text-amber-400 text-xl">📹</div>
                  <div>
                    <p className="text-amber-200 font-medium text-sm">
                      Video Content Notice
                    </p>
                    <p className="text-amber-100/80 text-xs mt-1">
                      Videos may appear cropped. Use Picture-in-Picture mode or
                      click fullscreen for optimal viewing experience.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="relative rounded-t-3xl overflow-hidden">
              {selectedProject.image && selectedProject.image.length > 0 ? (
                <div className="grid grid-cols-2 gap-2 p-4">
                  {selectedProject.image.slice(0, 4).map((media, index) => (
                    <div
                      key={index}
                      className="relative h-48 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl overflow-hidden"
                    >
                      {renderMedia(
                        media,
                        `${selectedProject.title} - Media ${index + 1}`,
                        "w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      )}
                    </div>
                  ))}
                  {selectedProject.image.length < 4 && (
                    <>
                      {Array.from({
                        length: 4 - selectedProject.image.length,
                      }).map((_, index) => (
                        <div
                          key={`placeholder-${index}`}
                          className="relative h-48 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl overflow-hidden flex items-center justify-center"
                        >
                          <div className="text-4xl text-white/30">📱</div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              ) : (
                <div className="relative h-64 bg-gradient-to-br from-purple-600 to-pink-600 rounded-t-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl text-white/30">🚀</div>
                  </div>
                </div>
              )}
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h2>

              <div
                className="text-slate-300 mb-8 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedProject.desc }}
              />
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

              <div className="flex gap-4">
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-3"
                  >
                    🐙 View Code
                  </a>
                )}

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

export default Porto;
