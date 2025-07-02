import { useState, useEffect } from "react";
import rawCertificatesData from "../../data/certificates.json";
import rawSkillsData from "../../data/skills.json";

import type {
  Certificate,
  CertificatesData,
} from "../../interface/certificates";
import type { Skill, SkillsData } from "../../interface/skill";

// casting ke tipe sesuai interface
const certificatesData = rawCertificatesData as CertificatesData;
const skillsData = rawSkillsData as SkillsData;

const Skills = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openModal = (skill: Skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const { skills } = skillsData;

  return (
    <>
      {/* Section */}
      <section id="skills" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl font-bold text-center text-gray-900 mb-12 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Interested In
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`bg-[#ffffff8c] md:rounded-3xl rounded-2xl shadow-lg p-8 
                           hover:shadow-2xl hover:scale-105 hover:-translate-y-2
                           transition-all duration-300 ease-out
                           ${
                             isLoaded
                               ? "opacity-100 translate-y-0"
                               : "opacity-0 translate-y-8"
                           }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div className="text-center">
                  <h3 className="text-xl font-regular text-black mb-8 leading-relaxed font-montserrat">
                    {skill.title}
                  </h3>

                  <button
                    onClick={() => openModal(skill)}
                    className="button-color text-white px-6 py-2 rounded-full font-medium font-montserrat 
                                     transition-all duration-200 flex items-center justify-center mx-auto
                                     hover:scale-110 hover:shadow-lg"
                  >
                    details
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedSkill && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-white/30 z-50 flex items-center justify-center p-6"
          onClick={handleOverlayClick}
        >
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl m-4">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b rounded-t-3xl sticky top-0 bg-gray-100">
              <h3 className="text-2xl font-semibold font-montserrat text-gray-900">
                {selectedSkill.title}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
              >
                <svg
                  className="w-6 h-6"
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
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* About Skill */}
              <div>
                <h4 className="text-lg font-semibold font-montserrat text-gray-900 mb-3">
                  About This Skill
                </h4>
                <div
                  className="text-gray-700 font-montserrat leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: selectedSkill.description,
                  }}
                />
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold font-montserrat text-gray-900 mb-3">
                  Technologies & Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSkill.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium font-montserrat"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certificates */}
              <div>
                <h4 className="text-lg font-semibold font-montserrat text-gray-900 mb-4">
                  Certificates
                </h4>
                {certificatesData[selectedSkill.key]?.length > 0 ? (
                  <div className="space-y-4">
                    {certificatesData[selectedSkill.key].map(
                      (cert: Certificate, index: number) => (
                        <div
                          key={index}
                          className="border rounded-xl p-4 bg-gray-50"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                            <div>
                              <p className="text-sm text-gray-600 font-montserrat">
                                Certificate Name
                              </p>
                              <p className="font-medium font-montserrat text-gray-900">
                                {cert.name}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 font-montserrat">
                                From
                              </p>
                              <p className="font-medium font-montserrat text-gray-900">
                                {cert.from}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 font-montserrat">
                                Issued
                              </p>
                              <p className="font-medium font-montserrat text-gray-900">
                                {cert.issued}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 font-montserrat">
                                Expires
                              </p>
                              <p className="font-medium font-montserrat text-gray-900">
                                {cert.expired}
                              </p>
                            </div>
                          </div>
                          <div className="mb-3">
                            <p className="text-sm text-gray-600 font-montserrat">
                              Credential ID
                            </p>
                            <p className="font-mono text-sm text-gray-900 bg-gray-200 px-2 py-1 rounded">
                              {cert.credentialId}
                            </p>
                          </div>
                          <a
                            href={cert.licenseUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-color text-white px-4 py-2 rounded-full font-medium font-montserrat 
                                     transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
                          >
                            View License
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <svg
                      className="w-12 h-12 mx-auto mb-3 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    <p className="font-montserrat">
                      No certificates available yet
                    </p>
                    <p className="text-sm font-montserrat mt-1">
                      I'm currently working on getting certified in this area!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Skills;
