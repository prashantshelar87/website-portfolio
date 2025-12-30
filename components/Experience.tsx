
import React from 'react';
import { EXPERIENCES } from '../data';
import SectionHeader from './SectionHeader';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Career Journey" 
          subtitle="15 years of technical leadership and industrial growth."
        />
        
        <div className="max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0 mb-16 last:mb-0">
              {/* Timeline line */}
              <div className="absolute top-0 bottom-0 left-0 md:left-1/2 w-0.5 bg-slate-100 hidden md:block"></div>
              
              <div className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-5/12">
                   <div className={`p-6 rounded-2xl border border-slate-100 shadow-sm bg-slate-50 hover:shadow-md transition-shadow ${idx % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-slate-800 mb-1">{exp.role}</h3>
                    <div className="flex items-center text-blue-600 font-semibold text-sm mb-4">
                      <span>{exp.company}</span>
                      <span className="mx-2 opacity-30">•</span>
                      <span className="text-slate-500 font-normal">{exp.location}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.responsibilities.slice(0, 3).map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start text-sm text-slate-600">
                          <span className="mr-2 text-blue-500 mt-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Central Point */}
                <div className="absolute md:relative left-0 md:left-auto w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md z-10 md:mx-12"></div>
                
                <div className="hidden md:block w-5/12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
