import React, { useEffect, useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Photo } from '../data/photos';

interface FullscreenViewerProps {
  photo: Photo | null;
  allPhotos: Photo[];
  onClose: () => void;
  onNavigatePhoto: (photo: Photo) => void;
}

export const FullscreenViewer: React.FC<FullscreenViewerProps> = ({
  photo,
  allPhotos,
  onClose,
  onNavigatePhoto,
}) => {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  if (!photo) return null;

  const currentIndex = allPhotos.findIndex((p) => p.id === photo.id);
  const totalCount = allPhotos.length;
  const formattedIndex = String(currentIndex + 1).padStart(2, '0');
  const formattedTotal = String(totalCount).padStart(2, '0');

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + totalCount) % totalCount;
    onNavigatePhoto(allPhotos[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % totalCount;
    onNavigatePhoto(allPhotos[nextIndex]);
  };

  // Keyboard navigation & Esc listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [currentIndex, allPhotos]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    // Minimum swipe threshold 50px
    if (deltaX > 50) {
      handlePrev();
    } else if (deltaX < -50) {
      handleNext();
    }
    setTouchStartX(null);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="fixed inset-0 z-[9995] bg-[#050505]/98 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8 animate-fade-in select-none"
    >
      {/* Top Header Bar */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between z-10 pt-2">
        <div className="text-[11px] font-sans tracking-[0.35em] text-zinc-400 uppercase">
          {formattedIndex} / {formattedTotal}
        </div>

        <button
          onClick={onClose}
          aria-label="Close viewer"
          className="text-zinc-400 hover:text-white p-2 focus:outline-none transition-colors rounded-full hover:bg-white/10"
        >
          <X size={24} />
        </button>
      </div>

      {/* Center Image Container */}
      <div className="relative flex-1 flex items-center justify-center py-4 px-2 md:px-12 my-auto">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous photograph"
          className="hidden md:flex absolute left-4 z-20 text-zinc-400 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors focus:outline-none"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Main Photograph */}
        <div className="relative max-h-[75vh] md:max-h-[80vh] max-w-full flex items-center justify-center overflow-hidden">
          <img
            key={photo.id}
            src={photo.image}
            alt={photo.title}
            className="max-h-[75vh] md:max-h-[80vh] max-w-full object-contain shadow-2xl transition-all duration-500 ease-out animate-fade-in"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          aria-label="Next photograph"
          className="hidden md:flex absolute right-4 z-20 text-zinc-400 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors focus:outline-none"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Bottom Metadata & Controls */}
      <div className="w-full max-w-7xl mx-auto border-t border-zinc-900 pt-4 pb-2 z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[9px] font-sans tracking-[0.35em] text-zinc-400 uppercase">
              {photo.category}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-white tracking-widest font-light uppercase">
              {photo.title}
            </h2>
            <p className="text-xs text-zinc-400 tracking-widest font-sans uppercase">
              {photo.location} — {photo.year}
            </p>
          </div>

          <div className="max-w-md">
            <p className="text-xs text-zinc-400 font-sans tracking-wide leading-relaxed">
              {photo.description}
            </p>
          </div>

          {/* Mobile Prev / Next Buttons */}
          <div className="flex md:hidden items-center space-x-6 pt-2">
            <button
              onClick={handlePrev}
              className="text-xs font-sans tracking-widest text-zinc-400 hover:text-white uppercase flex items-center space-x-1"
            >
              <ChevronLeft size={16} /> <span>PREV</span>
            </button>
            <span className="text-zinc-700">|</span>
            <button
              onClick={handleNext}
              className="text-xs font-sans tracking-widest text-zinc-400 hover:text-white uppercase flex items-center space-x-1"
            >
              <span>NEXT</span> <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
