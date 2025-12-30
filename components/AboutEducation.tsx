
import React from 'react';
import { EDUCATION, PERSONAL_INFO } from '../data';
import SectionHeader from './SectionHeader';

const AboutEducation: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* About Column */}
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Professional Philosophy</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {PERSONAL_INFO.about}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              My approach focuses on <span className="text-blue-600 font-semibold italic">Lean methodologies</span> and 
              <span className="text-blue-600 font-semibold italic"> sustainable growth</span>. Whether it's setting up a Green Field plant 
              from scratch or optimizing a legacy production line, I believe in bridging the gap between 
              engineering design and real-world shop-floor efficiency.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
               <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <span className="text-3xl block mb-2">🤝</span>
                <h4 className="font-bold text-slate-800">Stakeholder Mgmt</h4>
                <p className="text-sm text-slate-500 mt-1">Liaising with customers like Ford, Eicher, and BHAIL.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <span className="text-3xl block mb-2">⚙️</span>
                <h4 className="font-bold text-slate-800">Operational Excellence</h4>
                <p className="text-sm text-slate-500 mt-1">Specialized in TPM, 5S, and process standardization.</p>
              </div>
            </div>
          </div>
          
          {/* Education & Hobbies Column */}
          <div id="education">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Academic Background</h2>
            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="relative pl-8 border-l-4 border-blue-600 py-2">
                  <h4 className="text-xl font-bold text-slate-800">{edu.degree}</h4>
                  <p className="text-blue-600 font-medium mb-2">{edu.institution}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 italic">{edu.year}</span>
                    <span className="bg-blue-50 text-blue-700 font-bold px-3 py-1 rounded-full">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Beyond Engineering</h2>
              <div className="flex flex-wrap gap-4">
                {['Sketching', 'Playing Guitar', 'Music Production', 'Playing Casio', 'Continuous Learning'].map((hobby, idx) => (
                  <span key={idx} className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700 hover:bg-blue-600 hover:text-white transition-colors cursor-default">
                    {hobby}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-slate-500 italic text-sm">
                "Maintaining a balance between technical precision and creative expression drives my innovative spirit."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEducation;
