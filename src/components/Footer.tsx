import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 border-t border-zinc-900 bg-[#050505] text-zinc-500 text-[10px] font-sans tracking-[0.3em] uppercase select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <span className="text-zinc-300 font-serif text-sm tracking-widest font-normal">
            KOMALKANT MOHAPATRO
          </span>
          <span className="text-zinc-700">|</span>
          <span>PHOTOGRAPHY / VISUALS</span>
        </div>

        <div className="flex items-center space-x-8">
          <span>© 2026 ALL RIGHTS RESERVED</span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            INSTAGRAM
          </a>
        </div>
      </div>
    </footer>
  );
};
