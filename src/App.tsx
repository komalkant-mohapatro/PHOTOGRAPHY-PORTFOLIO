import { useState, useEffect } from 'react';
import { PHOTOS, Category, Photo } from './data/photos';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { Portfolio } from './components/Portfolio';
import { AboutSection } from './components/AboutSection';
import { BestWorkSection } from './components/BestWorkSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { FullscreenViewer } from './components/FullscreenViewer';

export function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('ALL');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [hoveringPhoto, setHoveringPhoto] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Filter photos based on category
  const filteredPhotos = selectedCategory === 'ALL'
    ? PHOTOS
    : PHOTOS.filter((p) => p.category === selectedCategory);

  const heroPhoto = PHOTOS.find((p) => p.hero) || PHOTOS[0];

  // Smooth Navigation Handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll Observer to track active section for Navbar underline
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'best-work', 'all-works', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#070707] text-[#f4f4f5] selection:bg-white selection:text-black">
      {/* Desktop Custom Cursor */}
      <CustomCursor hoveringPhoto={hoveringPhoto} />

      {/* Header & Navigation */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Hero Section */}
      <Hero
        heroPhoto={heroPhoto}
        onExplore={() => handleNavigate('best-work')}
        onPhotoClick={(photo) => setSelectedPhoto(photo)}
      />

      {/* Main Content Area */}
      <main className="relative z-10">
        {/* About Section */}
        <AboutSection />

        {/* 1ST SECTION: BEST WORK */}
        <BestWorkSection
          onPhotoClick={(photo) => setSelectedPhoto(photo)}
          setHoveringPhoto={setHoveringPhoto}
        />

        {/* 2ND SECTION: ALL WORKS ARCHIVE */}
        <div id="all-works-container" className="pt-16 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
            <h2 className="font-serif text-3xl md:text-5xl text-white font-light uppercase tracking-wide">
              ALL WORKS ARCHIVE
            </h2>
            <p className="text-xs text-zinc-400 font-sans tracking-widest uppercase mt-2">
              BROWSE BY CATEGORY & VISUAL ESSAYS
            </p>
          </div>

          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => setSelectedCategory(cat)}
          />

          <Portfolio
            photos={filteredPhotos}
            selectedCategory={selectedCategory}
            onPhotoClick={(photo) => setSelectedPhoto(photo)}
            setHoveringPhoto={setHoveringPhoto}
          />
        </div>

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fullscreen Lightbox Gallery Viewer */}
      <FullscreenViewer
        photo={selectedPhoto}
        allPhotos={filteredPhotos}
        onClose={() => setSelectedPhoto(null)}
        onNavigatePhoto={(photo) => setSelectedPhoto(photo)}
      />
    </div>
  );
}

export default App;
