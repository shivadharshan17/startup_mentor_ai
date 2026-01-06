
import React from 'react';

interface LearnMoreProps {
  onBack: () => void;
  onGoToMentors: () => void;
}

const LearnMore: React.FC<LearnMoreProps> = ({ onBack, onGoToMentors }) => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto animate-in fade-in slide-in-from-right-5 duration-500">
      <button 
        onClick={onBack}
        className="mb-12 flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </button>

      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold text-white mb-6">How It Works</h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Unveiling the intelligence behind the platform. We combine the power of Google Gemini with a massive corpus of verified mentor data.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <div className="text-center p-8">
          <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">🔍</div>
          <h3 className="text-xl font-bold text-white mb-4">Data Synthesis</h3>
          <p className="text-slate-500">We analyze thousands of public statements, interviews, and letters to shareholders to map mentor personality traits.</p>
        </div>
        <div className="text-center p-8">
          <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">🧠</div>
          <h3 className="text-xl font-bold text-white mb-4">Gemini 3 Pro</h3>
          <p className="text-slate-500">Your ideas are processed by Gemini 3 Pro, utilizing large context windows to provide coherent, multi-step strategic plans.</p>
        </div>
        <div className="text-center p-8">
          <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">📦</div>
          <h3 className="text-xl font-bold text-white mb-4">Scalable Infra</h3>
          <p className="text-slate-500">Built on Firebase, ensuring your sessions are fast, secure, and available anywhere in the world.</p>
        </div>
      </div>

      <div className="glass rounded-[3rem] p-12 mb-20">
         <h2 className="text-3xl font-bold text-white mb-10 text-center">Core Capabilities</h2>
         <div className="space-y-8">
            <div className="flex gap-6 items-start">
               <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white shrink-0">1</div>
               <div>
                  <h4 className="text-xl font-bold text-white mb-2">Detailed Tech Stack Recommendations</h4>
                  <p className="text-slate-400">Each mentor suggests specific tools—from frontend frameworks to AI models—that align with their proven philosophies.</p>
               </div>
            </div>
            <div className="flex gap-6 items-start">
               <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white shrink-0">2</div>
               <div>
                  <h4 className="text-xl font-bold text-white mb-2">Step-by-Step Launch Plan</h4>
                  <p className="text-slate-400">Receive a curated 5-step roadmap taking you from 'Idea' to 'Scale' based on battle-tested methodologies.</p>
               </div>
            </div>
            <div className="flex gap-6 items-start">
               <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white shrink-0">3</div>
               <div>
                  <h4 className="text-xl font-bold text-white mb-2">Critical Viability Analysis</h4>
                  <p className="text-slate-400">Get honest, sometimes brutal, feedback on whether your idea has the potential for global dominance.</p>
               </div>
            </div>
         </div>
      </div>

      <div className="text-center">
         <button 
           onClick={onGoToMentors}
           className="rounded-full bg-white text-slate-950 px-12 py-5 text-xl font-bold hover:bg-blue-500 hover:text-white transition-all shadow-2xl"
         >
           Choose Your Mentor Now
         </button>
      </div>
    </div>
  );
};

export default LearnMore;
