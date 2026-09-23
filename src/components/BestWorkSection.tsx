import React, { useState } from 'react';
import { Photo, BEST_WORK_PHOTOS } from '../data/photos';
import { Star, Maximize2, ArrowUpRight } from 'lucide-react';

interface BestWorkSectionProps {
  onPhotoClick: (photo: Photo) => void;
  setHoveringPhoto: (hovering: boolean) => void;
}

export const BestWorkSection: React.FC<BestWorkSectionProps> = ({
  onPhotoClick,
  setHoveringPhoto,
}) => {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="best-work" className="w-full py-24 md:py-36 bg-[#070707] border-t border-zinc-900 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24 md:space-y-36">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800/80 pb-8 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-[10px] tracking-[0.4em] font-sans text-amber-400/90 uppercase bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20 backdrop-blur-sm">
              <Star size={12} className="fill-amber-400" />
              <span>FEATURED SELECTION · {BEST_WORK_PHOTOS.length} WORKS</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-white font-light tracking-wide uppercase">
              BEST WORK
            </h2>
          </div>
          <p className="text-xs md:text-sm font-sans text-zinc-400 max-w-md tracking-wider leading-relaxed font-light">
            A curated portfolio of full-ratio cinematic frames, capturing moments of quiet connection, depth, and atmospheric story.
          </p>
        </div>

        {/* Best Work Photography List - Alternating & Full Ratio */}
        <div className="space-y-28 md:space-y-40">
          {BEST_WORK_PHOTOS.map((photo, index) => {
            // Index 0 (1st Photo): Description Left, Photo Right
            // Index 1 (2nd Photo): Photo Left, Description Right
            // Index 2 (3rd Photo): Description Left, Photo Right
            const isPhotoRight = index % 2 === 0;

            return (
              <div
                key={photo.id}
                className={`flex flex-col ${
                  isPhotoRight ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-10 md:gap-16 border-b border-zinc-900/80 pb-20 md:pb-28 last:border-b-0`}
              >
                {/* Description Column */}
                <div className="w-full md:w-5/12 space-y-6 flex flex-col justify-center">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-xs font-mono tracking-widest text-amber-400 font-semibold">
                        ★ {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="h-px w-8 bg-zinc-800" />
                      <span className="text-[10px] tracking-[0.3em] font-sans text-zinc-500 uppercase">
                        {photo.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl md:text-5xl text-white font-light tracking-wide uppercase pt-2 leading-tight">
                      {photo.title}
                    </h3>
                  </div>

                  <p className="text-sm md:text-base font-sans text-zinc-300 font-light leading-relaxed tracking-wide">
                    {photo.description}
                  </p>

                  <div className="pt-4 flex items-center justify-between border-t border-zinc-900 text-xs text-zinc-500 font-mono">
                    <span className="tracking-widest uppercase">{photo.location}</span>
                    <span>{photo.year}</span>
                  </div>

                  <div>
                    <button
                      onClick={() => onPhotoClick(photo)}
                      onMouseEnter={() => setHoveringPhoto(true)}
                      onMouseLeave={() => setHoveringPhoto(false)}
                      className="inline-flex items-center space-x-2 text-xs font-sans tracking-widest uppercase text-amber-400/90 hover:text-amber-300 transition-colors pt-2 group cursor-pointer"
                    >
                      <span>VIEW FULL FRAME</span>
                      <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Photo Column - Uncropped Full Ratio */}
                <div className="w-full md:w-7/12 flex justify-center items-center">
                  <div
                    onClick={() => onPhotoClick(photo)}
                    onMouseEnter={() => setHoveringPhoto(true)}
                    onMouseLeave={() => setHoveringPhoto(false)}
                    className="relative group cursor-pointer w-full flex justify-center items-center rounded-sm bg-[#0a0a0a] p-2 md:p-3 border border-zinc-800/40 shadow-2xl transition-all duration-700 hover:border-amber-400/40"
                  >
                    <div className="relative overflow-hidden w-full flex justify-center items-center">
                      <img
                        src={photo.image}
                        alt={photo.title}
                        loading="lazy"
                        onLoad={() => handleImageLoad(photo.id)}
                        className={`w-auto h-auto max-h-[75vh] max-w-full object-contain transition-all duration-700 ease-out ${
                          loadedImages[photo.id] ? 'opacity-100 scale-100' : 'opacity-0 scale-102'
                        } group-hover:scale-[1.01]`}
                      />

                      {/* Subtle hover overlay with indicator */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                        <div className="bg-black/80 text-white text-xs font-sans tracking-widest uppercase px-4 py-2 rounded-full border border-amber-400/30 flex items-center space-x-2 backdrop-blur-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <Maximize2 size={13} className="text-amber-400" />
                          <span>EXPAND PHOTO</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

