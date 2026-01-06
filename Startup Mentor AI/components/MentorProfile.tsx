
import React, { useState } from 'react';
import { Mentor } from '../types';
import MentorResponse from './MentorResponse';

interface MentorProfileProps {
  mentor: Mentor;
  onBack: () => void;
  isLoading: boolean;
  error: string | null;
}

const MentorProfile: React.FC<MentorProfileProps> = ({ mentor, onBack, isLoading, error }) => {
  const [isChatActive, setIsChatActive] = useState(false);

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 h-[calc(100vh-160px)] min-h-[700px]">
      {/* Sidebar: Mentor Identity (Visual & Navigation) */}
      <div className="lg:w-1/3 flex flex-col gap-6 shrink-0">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-[#1A73E8] transition-colors group font-black uppercase text-[10px] tracking-widest mb-2"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
          </svg>
          Directory
        </button>

        <div className={`p-1 rounded-[2.5rem] bg-gradient-to-br ${mentor.accentColor} shadow-xl shrink-0`}>
          <div className="bg-white rounded-[2.4rem] overflow-hidden">
            <img src={mentor.image} alt={mentor.name} className="w-full aspect-square object-cover" />
            <div className="p-6 text-center">
              <h1 className="text-2xl font-black text-[#1F2933] mb-1">{mentor.name}</h1>
              <p className="text-[#1A73E8] text-[10px] font-black uppercase tracking-widest">{mentor.role}</p>
            </div>
          </div>
        </div>

        {/* Quick Expertise Tags in Sidebar */}
        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
          {mentor.techExpertise.map(tech => (
            <span key={tech} className="px-3 py-1 bg-white border border-slate-100 rounded-lg text-[9px] text-slate-400 font-black uppercase tracking-tighter shadow-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Main Area: Detailed Description then Chat Initiation */}
      <div className="lg:w-2/3 flex flex-col bg-white border border-slate-200 rounded-[2.5rem] shadow-2xl overflow-hidden relative">
        {!isChatActive ? (
          <div className="flex-1 flex flex-col overflow-y-auto animate-in fade-in duration-500 scrollbar-hide">
            {/* Dossier Content */}
            <div className="p-8 lg:p-12 pb-4">
              <div className="max-w-2xl mx-auto w-full">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-[10px] font-black text-[#1A73E8] uppercase tracking-[0.2em] mb-8">
                  Strategic Dossier
                </div>
                
                <h2 className="text-4xl font-black text-[#1F2933] mb-10 leading-tight">
                  Strategy Review with <span className="text-[#1A73E8]">{mentor.name}</span>
                </h2>
                
                <div className="space-y-10">
                  {/* Background Section */}
                  <section>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Background</h4>
                    <p className="text-lg text-slate-600 font-medium leading-relaxed">
                      {mentor.experience}
                    </p>
                  </section>

                  {/* Philosophy Section */}
                  <section className="bg-slate-50 border border-slate-100 p-8 rounded-[2rem]">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Philosophy</h4>
                    <blockquote className="text-xl text-[#1F2933] font-black italic leading-tight mb-4">
                      "{mentor.description}"
                    </blockquote>
                    <p className="text-xs text-slate-500 font-bold leading-relaxed">
                      {mentor.personality}
                    </p>
                  </section>

                  {/* Focus Areas */}
                  <section>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Mandate Focus</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "First Principles Optimization",
                        "Scalable Systems Engineering",
                        "Venture Growth & Moats",
                        "Engineering Personality Alignment"
                      ].map((item, i) => (
                        <div key={i} className="flex gap-3 items-center">
                          <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                            <span className="text-[#1A73E8] text-[9px] font-black">✓</span>
                          </div>
                          <p className="text-[10px] text-slate-500 font-black uppercase tracking-wider">{item}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>

            {/* Sticky/Bottom-Anchored Action Section */}
            <div className="mt-auto p-8 lg:px-12 lg:py-10 border-t border-slate-100 bg-white/50 backdrop-blur-sm">
              <div className="max-w-2xl mx-auto w-full flex flex-col items-center sm:items-start gap-6">
                <button 
                  onClick={() => setIsChatActive(true)}
                  className="group relative inline-flex items-center gap-4 bg-[#1A73E8] text-white px-12 py-5 rounded-full text-xl font-black shadow-2xl shadow-blue-100 hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95"
                >
                  Start Strategy Chat
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full animate-in fade-in slide-in-from-bottom-5 duration-500">
            <MentorResponse 
              response={null} 
              mentor={mentor} 
              userPitch="" 
            />
          </div>
        )}
        
        {error && (
          <div className="absolute top-24 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-xs font-bold shadow-xl animate-bounce">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorProfile;
