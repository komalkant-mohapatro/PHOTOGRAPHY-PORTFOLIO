import React, { useEffect, useState } from 'react';

interface CustomCursorProps {
  hoveringPhoto: boolean;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ hoveringPhoto }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if touch device
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9990] transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full mix-blend-difference ${
        hoveringPhoto
          ? 'w-16 h-16 bg-white text-black font-sans text-[10px] tracking-[0.2em] font-semibold scale-100'
          : 'w-3 h-3 bg-white scale-100'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: 'width 0.3s ease, height 0.3s ease, transform 0.15s ease-out, background-color 0.3s ease'
      }}
    >
      {hoveringPhoto && <span className="animate-fade-in uppercase">VIEW</span>}
    </div>
  );
};
