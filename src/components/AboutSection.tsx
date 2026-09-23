import React from 'react';
import { ABOUT_DATA } from '../data/photos';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full py-28 md:py-44 border-t border-zinc-900 bg-[#070707] select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Portrait Photograph */}
          <div className="lg:col-span-5 space-y-4 relative z-[10000]">
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#070707] group rounded-sm shadow-2xl">
              <img
                src={ABOUT_DATA.image}
                alt={ABOUT_DATA.name}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-all duration-1000 ease-out group-hover:scale-105"
              />
              {/* Soft Gradient Fade Overlays (Edge Vignette into dark background) */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/70 opacity-90" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#070707]/60 via-transparent to-[#070707]/60" />
            </div>
            <p className="text-[10px] tracking-[0.3em] font-sans text-zinc-500 uppercase text-right">
              SELF PORTRAIT / FIELD NOTE — 2026
            </p>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-7 space-y-8 lg:pl-6">
            <div className="space-y-3">
              <span className="text-[10px] tracking-[0.4em] font-sans text-zinc-500 uppercase block">
                ABOUT THE ARTIST
              </span>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-light leading-tight tracking-wide">
                KOMALKANT MOHAPATRO
              </h2>
            </div>

            <blockquote className="font-serif text-2xl md:text-3xl text-zinc-200 font-light italic leading-snug border-l border-zinc-700 pl-6 py-2">
              "{ABOUT_DATA.tagline}"
            </blockquote>

            <div className="space-y-4 text-zinc-400 font-sans text-sm md:text-base leading-relaxed font-light tracking-wide max-w-xl">
              <p>{ABOUT_DATA.bioParagraph1}</p>
              <p>{ABOUT_DATA.bioParagraph2}</p>
            </div>

            <div className="pt-4 border-t border-zinc-900 grid grid-cols-2 gap-6 text-xs font-sans tracking-widest text-zinc-400 uppercase">
              <div>
                <span className="text-[9px] text-zinc-600 block mb-1">LOCATION</span>
                <span>{ABOUT_DATA.location}</span>
              </div>
              <div>
                <span className="text-[9px] text-zinc-600 block mb-1">PRIMARY FORMATS</span>
                <span>35mm Film / Digital Cinema</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
