
import React from 'react';
import { SKILL_GROUPS } from '../data';
import SectionHeader from './SectionHeader';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Core Competencies" 
          subtitle="A fusion of industrial expertise, digital tools, and leadership."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_GROUPS.map((group, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full mr-3"></span>
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.items.map((skill, sIdx) => (
                  <div key={sIdx} className="group flex flex-col">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-slate-600 group-hover:text-blue-600 transition-colors">{skill}</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Expert</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                      <div 
                        className="bg-blue-600 h-full rounded-full transition-all duration-1000" 
                        style={{ width: `${Math.floor(Math.random() * 20) + 80}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
