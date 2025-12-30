
import React from 'react';
import { PERSONAL_INFO } from '../data';
import profileImage from "../assets/images/profile1.png";


const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-16 mt-32 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-16 mb-20 w-80 h-80 bg-slate-100 rounded-full blur-3xl opacity-60 -z-10"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-widest">Available for Senior Projects</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 leading-tight">
            Engineering <br />
            <span className="gradient-text">Efficiency</span> & Value.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
            Hi, I'm <span className="font-semibold text-slate-900">{PERSONAL_INFO.name}</span>. 
            An Industrial Engineer & Program Manager specializing in Greenfield project execution, 
            process optimization, and engineering excellence.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95">
              View My Work
            </a>
            <a href="#about" className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm active:scale-95">
              Learn More
            </a>
          </div>
          
          <div className="mt-12 flex items-center space-x-6 text-slate-400">
            <div className="flex flex-col">
              <span className="text-slate-900 font-bold text-xl">15+</span>
              <span className="text-xs uppercase font-medium">Years Exp</span>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div className="flex flex-col">
              <span className="text-slate-900 font-bold text-xl">10+</span>
              <span className="text-xs uppercase font-medium">Key Projects</span>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div className="flex flex-col">
              <span className="text-slate-900 font-bold text-xl">SAP</span>
              <span className="text-xs uppercase font-medium">MM Expert</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src={profileImage} 
              alt="Industrial Engineering" 
              className="w-full h-auto object-cover hover:hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Engineering Blueprint pattern overlay (simulated) */}
          <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-slate-200 rounded-2xl -z-10"></div>
          <div className="absolute -top-6 -right-6 w-48 h-48 bg-blue-600/5 rounded-full -z-10 flex items-center justify-center">
            <div className="w-32 h-32 bg-blue-600/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
