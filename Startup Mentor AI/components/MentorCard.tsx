
import React, { useState } from 'react';
import { Mentor } from '../types';

interface MentorCardProps {
  mentor: Mentor;
  isSelected: boolean;
  onSelect: (mentor: Mentor) => void;
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor, isSelected, onSelect }) => {
  const [imgError, setImgError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fallback initials
  const initials = mentor.name.split(' ').map(n => n[0]).join('').slice(0, 2);

  return (
    <div
      onClick={() => onSelect(mentor)}
      className={`relative cursor-pointer group rounded-[2.5rem] p-6 transition-all duration-300 google-card flex flex-col items-center text-center ${
        isSelected ? 'ring-2 ring-[#1A73E8] bg-blue-50/50' : 'hover:bg-slate-50'
      }`}
    >
      <div className={`relative w-28 h-28 md:w-32 md:h-32 rounded-full mb-6 p-1 bg-gradient-to-br ${mentor.accentColor} overflow-hidden shadow-inner flex items-center justify-center bg-slate-200 group-hover:scale-105 transition-transform duration-300`}>
        <div className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-white flex items-center justify-center relative">
          {!imgError ? (
            <>
              <img
                src={mentor.image}
                alt={mentor.name}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                onError={() => {
                  console.warn(`Mentor image failed: ${mentor.name}`);
                  setImgError(true);
                }}
                className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100 animate-pulse">
                   <div className="w-8 h-8 rounded-full border-2 border-slate-300 border-t-[#1A73E8] animate-spin"></div>
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-50 text-slate-400 font-black text-2xl tracking-tighter">
              {initials}
            </div>
          )}
        </div>
      </div>
      <h3 className="text-lg font-black text-[#1F2933] mb-1 line-clamp-1 group-hover:text-[#1A73E8] transition-colors">{mentor.name}</h3>
      <p className="text-slate-400 text-[10px] font-black mb-4 line-clamp-1 uppercase tracking-[0.2em]">{mentor.role}</p>
      
      <div className="mt-auto flex flex-wrap justify-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
        {mentor.techExpertise.slice(0, 2).map(tech => (
          <span key={tech} className="text-[9px] px-3 py-1.5 border border-slate-100 rounded-xl bg-slate-50 text-slate-500 font-black uppercase">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MentorCard;
