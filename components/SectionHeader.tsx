
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, light }) => {
  return (
    <div className="mb-12 text-center">
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-slate-800'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl mx-auto text-lg ${light ? 'text-blue-100' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-24 h-1.5 mx-auto mt-6 rounded-full ${light ? 'bg-white' : 'bg-blue-600'}`}></div>
    </div>
  );
};

export default SectionHeader;
