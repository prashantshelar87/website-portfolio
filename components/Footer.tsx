
import React from 'react';
import { PERSONAL_INFO } from '../data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-16 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Prashant Shelar</h3>
            <p className="text-slate-500 leading-relaxed mb-8 max-w-sm">
              Industrial and Projects Engineer with 15+ years of experience delivering high-impact engineering solutions.
            </p>
            <div className="flex space-x-4">
              {/* Professional placeholder icons */}
              <a href="https://www.linkedin.com/in/prashant-shelar-123456789/" target="_blank" className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-6">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </span>
                <span className="text-slate-600 text-sm">{PERSONAL_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </span>
                <span className="text-slate-600 text-sm">{PERSONAL_INFO.phone}</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </span>
                <span className="text-slate-600 text-sm">Mon - Sat: 9am - 7pm</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-4">Let's Collaborate</h4>
            <p className="text-slate-500 text-xs mb-6">I am open to new senior-level roles and freelance industrial consulting projects.</p>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="inline-block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all active:scale-95"
            >
              Send Message
            </a>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} Prashant Shelar. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 text-xs hover:text-blue-600 transition-colors">Resume Download</a>
            <a href="#" className="text-slate-400 text-xs hover:text-blue-600 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
