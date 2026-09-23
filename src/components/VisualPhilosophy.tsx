import React from 'react';

export const VisualPhilosophy: React.FC = () => {
  const words = ['Light.', 'Movement.', 'Silence.', 'People.', 'Places.'];

  return (
    <section id="philosophy" className="w-full py-32 md:py-48 bg-[#050505] border-t border-b border-zinc-900 select-none relative overflow-hidden">
      {/* Background Subtle Title Card Vignette */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-16">
        <div className="space-y-2">
          <p className="text-[10px] tracking-[0.4em] font-sans text-zinc-500 uppercase">
            FRAMEWORK & INTENT
          </p>
          <h2 className="font-serif text-xs md:text-sm tracking-[0.35em] text-zinc-400 uppercase">
            VISUAL PHILOSOPHY
          </h2>
        </div>

        {/* Film Title Card Words */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-12 gap-y-6 max-w-4xl mx-auto">
          {words.map((word, idx) => (
            <span
              key={word}
              className="font-serif text-4xl md:text-6xl lg:text-7xl text-zinc-200 font-light tracking-widest transition-all duration-700 hover:text-white hover:scale-105 cursor-default"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {word}
            </span>
          ))}
        </div>

        <div className="pt-8">
          <p className="text-xs md:text-sm font-sans tracking-[0.25em] text-zinc-400 max-w-md mx-auto uppercase leading-relaxed font-light">
            Seeking the unscripted narrative hidden within quiet geometry and fleeting ambient light.
          </p>
        </div>
      </div>
    </section>
  );
};
