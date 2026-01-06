
import React from 'react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="relative overflow-hidden pt-40 pb-20 lg:pt-52 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {/* Decorative Background Element */}
        <div className="absolute -top-40 left-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#1A73E8]/5 blur-[100px]"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-black text-[#1A73E8] uppercase tracking-[0.2em] mb-10">
          ✨ Powered by Google Gemini 3
        </div>

        <h1 className="text-6xl font-black tracking-tight text-[#1F2933] sm:text-7xl mb-10 leading-[1.05]">
          Startup Mentor AI <br />
          <span className="text-[#1A73E8]">Build Smarter with AI</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-slate-500 font-medium">
          Personalized startup mentorship inspired by the world’s top tech leaders. 
          Bridge the gap between vision and execution.
        </p>
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={onStart}
            className="w-full sm:w-auto rounded-full bg-[#1A73E8] px-14 py-5 text-lg font-bold text-white shadow-xl hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95"
          >
            Start Your Journey
          </button>
          <button 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="text-sm font-bold leading-6 text-slate-500 hover:text-[#1A73E8] transition-colors flex items-center gap-2"
          >
            Explore Features <span className="text-xl">↓</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
