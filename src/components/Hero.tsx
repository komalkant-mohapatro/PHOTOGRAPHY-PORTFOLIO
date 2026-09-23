import React, { useEffect, useState } from 'react';
import { Photo } from '../data/photos';

interface HeroProps {
  heroPhoto: Photo;
  onExplore: () => void;
  onPhotoClick: (photo: Photo) => void;
}

export const Hero: React.FC<HeroProps> = ({ heroPhoto, onExplore, onPhotoClick }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute smooth parallax offset (subtle, slow movement)
  const parallaxOffsetY = scrollY * 0.25;
  const opacityFade = Math.max(0, 1 - scrollY / 600);

  return (
    <section id="hero" className="relative w-full h-[100vh] h-[100dvh] overflow-hidden bg-black select-none">
      {/* Background Hero Image with Slow Parallax */}
      <div 
        className="absolute inset-0 w-full h-[120%] -top-[10%] cursor-pointer group"
        onClick={() => onPhotoClick(heroPhoto)}
        style={{
          transform: `translate3d(0, ${parallaxOffsetY}px, 0)`,
          willChange: 'transform'
        }}
      >
        <img
          src={heroPhoto.image}
          alt={heroPhoto.title}
          className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.05] transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
          style={{ objectPosition: heroPhoto.objectPosition || 'center 85%' }}
        />
        {/* Subtle dark gradient vignetting at edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 pointer-events-none" />
      </div>

      {/* Subtle Hero Overlay Content */}
      <div 
        className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between pt-32 pb-12 pointer-events-none"
        style={{ opacity: opacityFade }}
      >
        {/* Top Spacer / Minimal Title Tag */}
        <div className="pt-4">
          <p className="text-[10px] md:text-[11px] tracking-[0.4em] font-sans text-zinc-300 uppercase opacity-90">
            CINEMATOGRAPHY & VISUAL ARTS
          </p>
        </div>

        {/* Bottom Minimal Hero Text */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-white/10">
          <div className="space-y-2">
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-[0.15em] text-white font-light uppercase">
              KOMALKANT MOHAPATRO
            </h1>
            <p className="text-xs md:text-sm tracking-[0.3em] font-sans text-zinc-300 uppercase">
              PHOTOGRAPHY / VISUAL STORIES
            </p>
          </div>

          <div className="hidden lg:block text-right">
            <p className="text-[11px] tracking-[0.25em] font-sans text-zinc-400 uppercase">
              {heroPhoto.location} — {heroPhoto.year}
            </p>
            <p className="text-xs font-serif italic text-zinc-300 mt-1">
              "{heroPhoto.title}"
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={onExplore}
        aria-label="Scroll to portfolio"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-2 text-zinc-400 hover:text-white transition-colors cursor-pointer group focus:outline-none"
        style={{ opacity: opacityFade }}
      >
        <span className="text-[9px] tracking-[0.4em] font-sans uppercase text-zinc-400 group-hover:text-white transition-colors">
          SCROLL
        </span>
        <span className="text-sm font-sans animate-pulse-subtle group-hover:translate-y-1 transition-transform">
          ↓
        </span>
      </button>
    </section>
  );
};
