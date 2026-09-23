import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'best-work', label: 'BEST WORK' },
    { id: 'all-works', label: 'ALL WORKS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[9900] transition-all duration-700 ${
          scrolled
            ? 'bg-[#070707]/80 backdrop-blur-md py-4 border-b border-white/5'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <button
            onClick={() => handleNavClick('hero')}
            className="text-left group focus:outline-none"
          >
            <span className="font-serif text-lg md:text-xl tracking-[0.25em] text-white font-medium block">
              KOMALKANT
            </span>
            <span className="text-[9px] tracking-[0.35em] text-zinc-400 block -mt-1 uppercase opacity-80 group-hover:opacity-100 transition-opacity">
              PHOTOGRAPHY / VISUALS
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-[11px] tracking-[0.3em] font-medium transition-all duration-300 relative py-1 focus:outline-none ${
                  activeSection === item.id
                    ? 'text-white font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform origin-left transition-transform duration-300" />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden text-zinc-300 hover:text-white p-2 focus:outline-none transition-colors"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Fullscreen Overlay */}
      <div
        className={`fixed inset-0 bg-[#070707] z-[9890] flex flex-col justify-between p-8 md:hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="pt-24 flex flex-col space-y-8">
          <p className="text-[10px] tracking-[0.35em] text-zinc-500 uppercase border-b border-zinc-800 pb-3">
            NAVIGATION
          </p>
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-left font-serif text-3xl tracking-[0.15em] text-zinc-200 hover:text-white transition-colors py-2 flex items-center justify-between border-b border-zinc-900/60"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span>{item.label}</span>
              <span className="text-xs text-zinc-600 font-sans tracking-widest">0{index + 1}</span>
            </button>
          ))}
        </div>

        <div className="border-t border-zinc-900 pt-6 flex flex-col space-y-2">
          <span className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase">
            KOMALKANT MOHAPATRO
          </span>
          <span className="text-xs text-zinc-400 tracking-wider">
            BERHAMPUR / NEW DELHI, INDIA
          </span>
        </div>
      </div>
    </>
  );
};
