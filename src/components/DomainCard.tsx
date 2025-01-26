import React from 'react';
import { Domain } from '../types/domain';
import { TypewriterText } from './TypewriterText';

interface DomainCardProps {
  domain: Domain;
}

const DomainCard: React.FC<DomainCardProps> = ({ domain }) => {
  const handleClick = () => {
    if (domain.url) {
      window.open(domain.url, '_blank');
    } else {
      window.open('https://t.me/netycia', '_blank');
    }
  };

  return (
    <div
      className="relative bg-white/5 backdrop-blur-lg rounded-xl p-8 transition-all duration-500 
                hover:transform hover:scale-[1.02] hover:bg-white/10 cursor-pointer 
                border border-white/10 hover:border-blue-500/30
                hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] group
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent 
                before:via-white/5 before:to-transparent before:translate-x-[-200%] 
                hover:before:translate-x-[200%] before:transition-transform before:duration-1000
                overflow-hidden"
      onClick={handleClick}
    >
      <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 
                   bg-clip-text text-transparent mb-6 group-hover:scale-105 transition-transform">
        <TypewriterText text={domain.name} />
      </h3>
      <div className="flex justify-between items-center">
        <span className={`
          px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-500
          group-hover:scale-110 group-hover:shadow-lg relative
          after:absolute after:inset-0 after:rounded-full after:bg-current after:opacity-10
          after:transition-opacity after:duration-500 group-hover:after:opacity-20
          ${domain.category === 'kaspa' ? 'bg-green-500/20 text-green-300' : 
            domain.category === 'sompi' ? 'bg-purple-500/20 text-purple-300' :
            'bg-blue-500/20 text-blue-300'}
        `}>
          {domain.category}
        </span>
        {domain.url && (
          <span className="text-sm text-blue-400 group-hover:translate-x-2 transition-transform duration-500
                         flex items-center gap-1">
            Click to visit →
          </span>
        )}
      </div>
    </div>
  );
};

export default DomainCard;