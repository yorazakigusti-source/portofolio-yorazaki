import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
      <div className="mb-16 text-center" data-aos="fade-up">
        <p className="text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase mb-2">PORTFOLIO</p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">Featured Projects</h2>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div
            key={project.id || index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer relative bg-[#141416] border border-neutral-800/80 rounded-2xl p-6 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {project.image && (
                <div className="w-full h-48 rounded-xl overflow-hidden mb-6 bg-neutral-900 border border-neutral-800 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-cyan-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-xs font-bold text-cyan-300 bg-neutral-900/90 px-3 py-1.5 rounded-full border border-cyan-500/30">
                      View Details →
                    </span>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags?.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-md bg-neutral-900 text-cyan-400 border border-neutral-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-3">
                {project.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-light mb-6 line-clamp-3">
                {project.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-neutral-800/60 mt-auto text-xs text-neutral-400 group-hover:text-cyan-400 transition-colors">
              <span className="font-semibold uppercase tracking-wider">Case Study</span>
              <i className="fas fa-arrow-right text-xs transform group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        ))}
      </div>

      {/* Pop-up Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-[#141416] border border-neutral-800 w-full max-w-2xl rounded-2xl p-6 md:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white bg-neutral-900 w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            <div className="flex flex-wrap gap-2 mb-3">
              {selectedProject.tags?.map((tag, idx) => (
                <span key={idx} className="text-[10px] font-mono px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {selectedProject.title}
            </h3>

            {selectedProject.image && (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-xl mb-6 border border-neutral-800"
              />
            )}

            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              {selectedProject.longDescription || selectedProject.description}
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-neutral-800">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-bold text-xs rounded-lg flex items-center gap-2 uppercase tracking-wider transition-colors"
                >
                  <i className="fab fa-github"></i> Source Code
                </a>
              )}
              {selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold text-xs rounded-lg flex items-center gap-2 uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  Live Demo <i className="fas fa-external-link-alt"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}