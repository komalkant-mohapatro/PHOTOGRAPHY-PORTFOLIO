import React, { useState } from 'react';
import { Photo, Category } from '../data/photos';

interface PortfolioProps {
  photos: Photo[];
  selectedCategory: Category;
  onPhotoClick: (photo: Photo) => void;
  setHoveringPhoto: (hovering: boolean) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  photos,
  onPhotoClick,
  setHoveringPhoto,
}) => {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  if (photos.length === 0) {
    return (
      <div className="py-24 text-center">
        <p className="text-zinc-500 font-serif italic text-lg tracking-widest">
          No photographs available in this category yet.
        </p>
      </div>
    );
  }

  return (
    <section id="all-works" className="w-full pb-32 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24 md:space-y-40">
        {/*
          Art-Directed Sequence Logic:
          We map photos using custom visual rhythm templates according to index.
        */}
        {photos.map((photo, index) => {
          // Layout Variant 1: Full-bleed / Full-width cinematic photograph
          if (index % 5 === 0) {
            return (
              <div key={photo.id} className="w-full space-y-4">
                <div
                  onClick={() => onPhotoClick(photo)}
                  onMouseEnter={() => setHoveringPhoto(true)}
                  onMouseLeave={() => setHoveringPhoto(false)}
                  className="relative w-full aspect-[21/9] md:aspect-[2.4/1] overflow-hidden bg-[#0d0d0d] cursor-pointer reveal-mask group"
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    loading="lazy"
                    onLoad={() => handleImageLoad(photo.id)}
                    className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
                      loadedImages[photo.id] ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                  />
                  {/* Subtle Darkening & Info Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 md:p-12 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 space-y-1">
                      <p className="text-[10px] tracking-[0.35em] text-zinc-400 font-sans uppercase">
                        {photo.category} — {photo.year}
                      </p>
                      <h3 className="font-serif text-2xl md:text-4xl text-white tracking-widest font-light uppercase">
                        {photo.title}
                      </h3>
                      <p className="text-xs text-zinc-400 tracking-wider font-sans uppercase">
                        {photo.location}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-[10px] tracking-[0.3em] text-zinc-500 uppercase px-1">
                  <span>0{index + 1} — {photo.title}</span>
                  <span>{photo.location}</span>
                </div>
              </div>
            );
          }

          // Layout Variant 2: Asymmetric Two-Column Pair (Vertical + Square/Landscape)
          if (index % 5 === 1 && index + 1 < photos.length) {
            const nextPhoto = photos[index + 1];
            return (
              <div key={photo.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
                {/* Large Vertical Photo (7 cols) */}
                <div className="md:col-span-7 space-y-3">
                  <div
                    onClick={() => onPhotoClick(photo)}
                    onMouseEnter={() => setHoveringPhoto(true)}
                    onMouseLeave={() => setHoveringPhoto(false)}
                    className="relative w-full aspect-[3/4] overflow-hidden bg-[#0d0d0d] cursor-pointer reveal-mask group"
                  >
                    <img
                      src={photo.image}
                      alt={photo.title}
                      loading="lazy"
                      onLoad={() => handleImageLoad(photo.id)}
                      className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
                        loadedImages[photo.id] ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                      <h3 className="font-serif text-2xl text-white tracking-widest uppercase">
                        {photo.title}
                      </h3>
                      <p className="text-[10px] text-zinc-400 tracking-widest font-sans uppercase mt-1">
                        {photo.location} · {photo.year}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-[10px] tracking-[0.25em] text-zinc-500 uppercase px-1">
                    <span>{photo.title}</span>
                    <span>{photo.year}</span>
                  </div>
                </div>

                {/* Offset Smaller Secondary Photo (5 cols) */}
                <div className="md:col-span-5 space-y-3 md:-translate-y-12">
                  <div
                    onClick={() => onPhotoClick(nextPhoto)}
                    onMouseEnter={() => setHoveringPhoto(true)}
                    onMouseLeave={() => setHoveringPhoto(false)}
                    className="relative w-full aspect-[4/5] overflow-hidden bg-[#0d0d0d] cursor-pointer reveal-mask group"
                  >
                    <img
                      src={nextPhoto.image}
                      alt={nextPhoto.title}
                      loading="lazy"
                      onLoad={() => handleImageLoad(nextPhoto.id)}
                      className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
                        loadedImages[nextPhoto.id] ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
                      <h3 className="font-serif text-xl text-white tracking-widest uppercase">
                        {nextPhoto.title}
                      </h3>
                      <p className="text-[10px] text-zinc-400 tracking-widest font-sans uppercase mt-1">
                        {nextPhoto.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-[10px] tracking-[0.25em] text-zinc-500 uppercase px-1">
                    <span>{nextPhoto.title}</span>
                    <span>{nextPhoto.year}</span>
                  </div>
                </div>
              </div>
            );
          }

          // Skip index % 5 === 2 because it was rendered as pair with index % 5 === 1
          if (index % 5 === 2) {
            return null;
          }

          // Layout Variant 3: Editorial Quote + Portrait Photo Composition
          if (index % 5 === 3) {
            return (
              <div key={photo.id} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center py-12">
                <div className="md:col-span-5 space-y-6 pr-0 md:pr-8">
                  <p className="text-[10px] tracking-[0.4em] font-sans text-zinc-500 uppercase">
                    VISUAL ESSAY
                  </p>
                  <blockquote className="font-serif text-3xl md:text-4xl text-zinc-200 font-light leading-snug tracking-wide italic">
                    "A STUDY OF LIGHT, PEOPLE AND PLACE."
                  </blockquote>
                  <p className="text-xs tracking-[0.2em] font-sans text-zinc-400 uppercase leading-relaxed">
                    Captured on 35mm format across rural and urban landscapes.
                  </p>
                </div>

                <div className="md:col-span-7 space-y-3">
                  <div
                    onClick={() => onPhotoClick(photo)}
                    onMouseEnter={() => setHoveringPhoto(true)}
                    onMouseLeave={() => setHoveringPhoto(false)}
                    className="relative w-full aspect-[16/10] overflow-hidden bg-[#0d0d0d] cursor-pointer reveal-mask group"
                  >
                    <img
                      src={photo.image}
                      alt={photo.title}
                      loading="lazy"
                      onLoad={() => handleImageLoad(photo.id)}
                      className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
                        loadedImages[photo.id] ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                      <h3 className="font-serif text-2xl text-white tracking-widest uppercase">
                        {photo.title}
                      </h3>
                      <p className="text-[10px] text-zinc-400 tracking-widest font-sans uppercase mt-1">
                        {photo.location} · {photo.year}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-[10px] tracking-[0.25em] text-zinc-500 uppercase px-1">
                    <span>{photo.title}</span>
                    <span>{photo.location}</span>
                  </div>
                </div>
              </div>
            );
          }

          // Layout Variant 4: Wide Panoramic Landscape
          return (
            <div key={photo.id} className="w-full space-y-4">
              <div
                onClick={() => onPhotoClick(photo)}
                onMouseEnter={() => setHoveringPhoto(true)}
                onMouseLeave={() => setHoveringPhoto(false)}
                className="relative w-full aspect-[16/9] md:aspect-[2.1/1] overflow-hidden bg-[#0d0d0d] cursor-pointer reveal-mask group"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  onLoad={() => handleImageLoad(photo.id)}
                  className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
                    loadedImages[photo.id] ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                  <h3 className="font-serif text-3xl text-white tracking-widest uppercase">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-zinc-400 tracking-widest font-sans uppercase mt-1">
                    {photo.location} · {photo.year}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center text-[10px] tracking-[0.25em] text-zinc-500 uppercase px-1">
                <span>0{index + 1} — {photo.title}</span>
                <span>{photo.category}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
