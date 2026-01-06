
import React, { useState, useMemo, useEffect } from 'react';
import Hero from './components/Hero';
import MentorCard from './components/MentorCard';
import Features from './components/Features';
import MentorProfile from './components/MentorProfile';
import { MENTORS } from './constants';
import { Mentor } from './types';

type Page = 'home' | 'mentors' | 'profile';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedMentor, setSelectedMentor] = useState<Mentor>(MENTORS[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Sync scroll on navigate
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  const filteredMentors = useMemo(() => {
    return MENTORS.filter(m => 
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.techExpertise.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  const handleMentorClick = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setCurrentPage('profile');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="animate-in fade-in duration-500">
            <Hero onStart={() => setCurrentPage('mentors')} />
            <Features />
            <div className="max-w-7xl mx-auto px-6 py-32 text-center">
              <h2 className="text-4xl font-black text-[#1F2933] mb-8">Access the Wisdom of Industry Pioneers.</h2>
              <button 
                onClick={() => setCurrentPage('mentors')}
                className="rounded-full bg-[#1A73E8] px-14 py-5 text-xl font-black text-white hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
              >
                Choose Your Mentor
              </button>
            </div>
          </div>
        );
      case 'mentors':
        return (
          <div className="pt-32 px-6 max-w-7xl mx-auto pb-24 animate-in fade-in slide-in-from-bottom-5 duration-500">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-black text-[#1F2933] mb-4 tracking-tight text-balance">Select a Pioneer</h1>
              <p className="text-slate-500 max-w-2xl mx-auto text-xl font-medium">Choose a legend whose philosophy aligns with your vision.</p>
            </div>
            
            <div className="max-w-2xl mx-auto mb-20">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search by name, expertise, or company..."
                  className="w-full bg-white border border-[#E2E8F0] rounded-[2rem] py-6 px-16 text-[#1F2933] placeholder:text-slate-400 focus:ring-2 focus:ring-[#1A73E8] transition-all outline-none shadow-sm hover:shadow-md"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg className="absolute left-6 top-1/2 -translate-y-1/2 w-7 h-7 text-[#1A73E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredMentors.map((mentor) => (
                <MentorCard
                  key={mentor.id}
                  mentor={mentor}
                  isSelected={selectedMentor.id === mentor.id}
                  onSelect={handleMentorClick}
                />
              ))}
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="pt-28 pb-10 px-6 animate-in fade-in slide-in-from-right-5 duration-500 overflow-hidden">
            <MentorProfile 
              mentor={selectedMentor} 
              onBack={() => setCurrentPage('mentors')}
              isLoading={isLoading}
              error={error}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <nav className="fixed top-0 w-full z-50 glass-nav px-6 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="w-10 h-10 bg-[#1A73E8] rounded-xl flex items-center justify-center font-black text-white shadow-xl group-hover:scale-105 transition-transform">
              S
            </div>
            <span className="font-black text-xl tracking-tight text-[#1F2933] hidden sm:block uppercase">Startup Mentor AI</span>
          </div>
          <div className="flex gap-4 sm:gap-10 items-center">
            <button onClick={() => setCurrentPage('home')} className={`text-xs font-black uppercase tracking-widest transition-colors ${currentPage === 'home' ? 'text-[#1A73E8]' : 'text-slate-500 hover:text-[#1F2933]'}`}>Home</button>
            <button 
              onClick={() => setCurrentPage('mentors')} 
              className={`text-xs px-7 py-3 rounded-full font-black uppercase tracking-widest transition-all ${currentPage === 'mentors' ? 'bg-[#1A73E8] text-white shadow-xl shadow-blue-100' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              Mentors
            </button>
          </div>
        </div>
      </nav>

      {renderPage()}

      {currentPage !== 'profile' && (
        <footer className="border-t border-[#E2E8F0] py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="col-span-1">
               <div className="flex items-center gap-3 mb-8">
                  <div className="w-9 h-9 bg-slate-950 rounded-lg flex items-center justify-center font-black text-white text-sm">S</div>
                  <span className="text-[#1F2933] font-black uppercase tracking-tight">Startup Mentor AI</span>
               </div>
               <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                 Professional strategic clarity for global founders through high-fidelity AI simulations of industry pioneers.
               </p>
               <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">© 2025 Startup Mentor AI • Build Smarter.</p>
            </div>
            <div className="md:text-center">
               <h4 className="text-[#1F2933] font-black mb-8 uppercase text-xs tracking-widest">Navigation</h4>
               <ul className="space-y-5 text-sm text-slate-500 font-bold">
                 <li className="hover:text-[#1A73E8] cursor-pointer" onClick={() => setCurrentPage('mentors')}>Mentor Directory</li>
                 <li className="hover:text-[#1A73E8] cursor-pointer">Platform Privacy</li>
               </ul>
            </div>
            <div className="md:text-right">
               <h4 className="text-[#1F2933] font-black mb-8 uppercase text-xs tracking-widest">Built With</h4>
               <ul className="space-y-5 text-sm text-slate-500 font-bold">
                 <li>Google technology</li>
               </ul>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;
