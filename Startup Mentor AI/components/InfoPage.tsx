
import React from 'react';

interface InfoPageProps {
  onBack: () => void;
}

const InfoPage: React.FC<InfoPageProps> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-500">
      <button 
        onClick={onBack}
        className="mb-12 flex items-center gap-2 text-slate-500 hover:text-[#1A73E8] transition-colors group font-black uppercase text-[10px] tracking-widest"
      >
        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
        </svg>
        Return Home
      </button>

      <div className="space-y-24">
        {/* Pitch Summary Slide Content */}
        <section className="bg-slate-950 text-white p-12 lg:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8">
            <div className="w-12 h-12 bg-[#1A73E8] rounded-xl flex items-center justify-center font-black text-xl">S</div>
          </div>
          
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1A73E8] mb-8">Executive Summary</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
                  <span className="text-red-500">01.</span> The Problem
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed font-medium">
                  High-level strategic mentorship is currently a <span className="text-white">gated privilege</span>. Founders face "Executive Isolation" where elite wisdom from industry legends is inaccessible, while standard AI provides generic, shallow advice.
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
                  <span className="text-green-500">02.</span> The Solution
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed font-medium">
                  <span className="text-white">Startup Mentor AI</span> democratizes elite intelligence. Using Gemini 3, we simulate high-fidelity mental models of pioneers to deliver <span className="text-[#1A73E8]">Persona-Driven Strategic Dossiers</span> and battle-tested roadmaps.
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#1A73E8]/20 blur-[100px] rounded-full"></div>
        </section>

        {/* Infrastructure Deep Dive (Requested Update) */}
        <section>
          <div className="mb-12">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1A73E8] mb-4 text-center">Infrastructure Stack</h2>
            <h3 className="text-4xl font-black text-[#1F2933] text-center">Powered by Google Cloud & Firebase</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="google-card p-10 rounded-[2.5rem] border-t-4 border-t-[#4285F4]">
              <div className="text-3xl mb-6">🌐</div>
              <h4 className="text-xl font-black text-[#1F2933] mb-4">Global Delivery</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Deployed on <strong>Firebase Hosting</strong>, utilizing Google's Global CDN. Static assets are served from Edge PoPs closest to the user, ensuring sub-second load times worldwide.
              </p>
            </div>
            
            <div className="google-card p-10 rounded-[2.5rem] border-t-4 border-t-[#34A853]">
              <div className="text-3xl mb-6">🔒</div>
              <h4 className="text-xl font-black text-[#1F2933] mb-4">SSL Security</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Automatic end-to-end encryption via <strong>SSL/TLS certificates</strong>. Firebase enforces HTTPS by default, protecting sensitive startup vision data across every session.
              </p>
            </div>
            
            <div className="google-card p-10 rounded-[2.5rem] border-t-4 border-t-[#FBBC05]">
              <div className="text-3xl mb-6">🧠</div>
              <h4 className="text-xl font-black text-[#1F2933] mb-4">Edge Performance</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Real-time streaming via the <strong>@google/genai SDK</strong>. We bypass traditional server bottlenecks by communicating directly with Gemini's high-performance inference nodes.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Header */}
        <section className="text-center">
          <h1 className="text-6xl font-black text-[#1F2933] mb-8 leading-tight">
            The Intelligence Behind <br /><span className="text-[#1A73E8]">Startup Success</span>
          </h1>
          <p className="text-2xl text-slate-500 leading-relaxed max-w-3xl mx-auto font-medium">
            Bridging the gap between ambitious founders and the mental models of technical legends.
          </p>
        </section>

        {/* Pillars Segment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-20">
           <div className="google-card p-12 rounded-[2.5rem]">
              <div className="w-16 h-16 bg-[#1A73E8]/10 rounded-2xl flex items-center justify-center text-3xl mb-8">💡</div>
              <h3 className="text-2xl font-black text-[#1F2933] mb-6">Democratizing Access</h3>
              <p className="text-slate-500 leading-relaxed text-lg font-medium">
                Mentorship should not be restricted by zip code or social status. Every builder on Earth deserves the strategic clarity of a Silicon Valley veteran.
              </p>
           </div>
           <div className="google-card p-12 rounded-[2.5rem]">
              <div className="w-16 h-16 bg-[#34A853]/10 rounded-2xl flex items-center justify-center text-3xl mb-8">🚀</div>
              <h3 className="text-2xl font-black text-[#1F2933] mb-6">Actionable Growth</h3>
              <p className="text-slate-500 leading-relaxed text-lg font-medium">
                We go beyond generic advice. Each session produces a detailed launch roadmap and a specific technology stack recommended by your chosen pioneer.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
