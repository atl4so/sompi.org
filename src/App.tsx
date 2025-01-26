import React, { useState } from 'react';
import { Domain } from './types/domain';
import { domains } from './data/domains';
import DomainCard from './components/DomainCard';
import ParticleBackground from './components/ParticleBackground';
import { Globe, MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-gray-900 to-black text-white">
      <ParticleBackground />
      
      <header className="pt-24 pb-16 px-4 text-center relative animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 animate-ping-slow rounded-full bg-blue-500/20"></div>
              <Globe className="w-16 h-16 text-blue-400 animate-float relative" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-gradient bg-clip-text text-transparent 
                       bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
            Premium Blockchain Domains
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-up">
            Curated collection of premium domain names for the Kaspa ecosystem
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {domains.map((domain) => (
            <DomainCard
              key={domain.name}
              domain={domain}
            />
          ))}
        </div>
      </main>

      <footer className="py-12 px-4 text-center text-gray-400">
        <div className="flex items-center justify-center gap-2 mb-4">
          <a
            href="https://t.me/netycia"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 
                     border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300
                     hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="font-medium">Contact on Telegram</span>
          </a>
        </div>
        <p className="text-gray-500">© {new Date().getFullYear()} sompi.org. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;