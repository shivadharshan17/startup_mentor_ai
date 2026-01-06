
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <div id="features" className="py-24 sm:py-32 bg-white border-y border-[#E2E8F0]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-black leading-7 text-[#1A73E8] uppercase tracking-[0.3em] mb-4">The Platform</h2>
          <p className="mt-2 text-4xl font-black tracking-tight text-[#1F2933] sm:text-5xl">
            Modern Mentorship for the Next Decacorn Idea
          </p>
        </div>
        <div className="mx-auto mt-20 max-w-2xl sm:mt-24 lg:mt-32 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center text-center p-8 rounded-3xl group hover:bg-slate-50 transition-colors duration-300">
                <dt className="text-5xl mb-8 transform group-hover:scale-125 transition-transform duration-300">
                  {feature.icon}
                </dt>
                <dt className="text-xl font-black leading-7 text-[#1F2933] mb-4">
                  {feature.title}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-relaxed text-slate-500 font-medium">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
