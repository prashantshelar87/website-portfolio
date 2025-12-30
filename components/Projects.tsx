
import React from 'react';
import { PROJECTS } from '../data';
import SectionHeader from './SectionHeader';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Key Projects" 
          subtitle="Delivering complex industrial solutions for global brands."
          light
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl group-hover:bg-blue-600/30 transition-all"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:bg-blue-600 transition-colors">
                   <svg className="w-6 h-6 text-blue-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                
                {project.customer && (
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 block">
                    {project.customer}
                  </span>
                )}
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-bold py-1 px-2 rounded bg-slate-700 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
