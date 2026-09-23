import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ABOUT_DATA } from '../data/photos';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="w-full py-28 md:py-44 bg-[#070707] select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Large Headline */}
          <div className="lg:col-span-8 space-y-6">
            <p className="text-[10px] tracking-[0.4em] font-sans text-zinc-500 uppercase">
              INQUIRIES & COMMISSIONS
            </p>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-light uppercase tracking-tight leading-[0.95]">
              LET'S CREATE<br />
              <span className="italic font-normal text-zinc-300">SOMETHING</span><br />
              VISUAL.
            </h2>
          </div>

          {/* Right Contact Link & Socials */}
          <div className="lg:col-span-4 space-y-12 lg:pt-16 border-t lg:border-t-0 lg:border-l border-zinc-800 lg:pl-12">
            <div className="space-y-3">
              <span className="text-[10px] tracking-[0.35em] font-sans text-zinc-500 uppercase block">
                DIRECT EMAIL
              </span>
              <a
                href={`mailto:${ABOUT_DATA.email}`}
                className="group font-serif text-2xl md:text-3xl text-white hover:text-zinc-300 transition-colors flex items-center space-x-2 border-b border-zinc-800 pb-2"
              >
                <span>{ABOUT_DATA.email}</span>
                <ArrowUpRight size={20} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.35em] font-sans text-zinc-500 uppercase block">
                CONNECT & SOCIAL
              </span>
              <ul className="space-y-2 text-xs font-sans tracking-[0.25em] text-zinc-300 uppercase">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center justify-between py-1 border-b border-zinc-900"
                  >
                    <span>INSTAGRAM</span>
                    <span className="text-zinc-600 text-[10px]">@KOMALKANT.VISUALS</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://vimeo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center justify-between py-1 border-b border-zinc-900"
                  >
                    <span>VIMEO / REEL</span>
                    <span className="text-zinc-600 text-[10px]">CINEMATOGRAPHY</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center justify-between py-1 border-b border-zinc-900"
                  >
                    <span>EXHIBITIONS</span>
                    <span className="text-zinc-600 text-[10px]">SERIES</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-1 pt-4">
              <span className="text-[10px] tracking-[0.3em] font-sans text-zinc-500 uppercase block">
                STUDIO BASE
              </span>
              <p className="text-xs font-sans tracking-wider text-zinc-400 uppercase">
                {ABOUT_DATA.location}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
