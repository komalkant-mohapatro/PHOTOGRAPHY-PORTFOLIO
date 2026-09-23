export type Category =
  | 'ALL'
  | 'PORTRAITS'
  | 'CINEMATIC'
  | 'TRAVEL'
  | 'STREET'
  | 'LANDSCAPE'
  | 'VISUAL STORIES';

export interface Photo {
  id: string;
  title: string;
  category: Exclude<Category, 'ALL'>;
  location: string;
  year: string;
  description: string;
  image: string;
  aspectRatio: 'full' | 'wide' | 'portrait' | 'landscape' | 'tall' | 'square';
  isBestWork?: boolean;
  featured?: boolean;
  hero?: boolean;
  objectPosition?: string;
}

export const CATEGORIES: Category[] = [
  'ALL',
  'PORTRAITS',
  'CINEMATIC',
  'TRAVEL',
  'STREET',
  'LANDSCAPE',
  'VISUAL STORIES'
];

/**
 * 1ST SECTION: BEST WORK PHOTOS (from `/images/beST WORK'/`)
 */
export const BEST_WORK_PHOTOS: Photo[] = [
  {
    id: 'best-01',
    title: 'CINEMA',
    category: 'VISUAL STORIES',
    location: 'ODISHA, INDIA',
    year: '2026',
    description: 'A collection of contrasting moments, people, landscapes, and details brought together to represent the many fragments that make up life. Each frame becomes a scene, and every scene carries a story of its own.',
    image: "/images/beST WORK'/6 Years Later.jpg",
    aspectRatio: 'full',
    isBestWork: true,
    featured: true
  },
  {
    id: 'best-02',
    title: 'MASK',
    category: 'PORTRAITS',
    location: 'INDIA',
    year: '2026',
    description: 'A mysterious figure emerging from the earth against a warm fading sky, exploring themes of identity, memory, mystery, and what remains hidden beneath the surface.',
    image: "/images/beST WORK'/MASK.jpg",
    aspectRatio: 'full',
    isBestWork: true,
    featured: true
  },
  {
    id: 'best-03',
    title: 'A TRAP',
    category: 'CINEMATIC',
    location: 'INDIA',
    year: '2026',
    description: 'A cinematic macro composition of an ant navigating a leaf, using scale, darkness, and isolation to create a sense of uncertainty and tension.',
    image: "/images/beST WORK'/A TRAP.jpg",
    aspectRatio: 'full',
    isBestWork: true,
    featured: true
  },
  {
    id: 'best-04',
    title: 'NATURAL SATELLITE',
    category: 'CINEMATIC',
    location: 'INDIA',
    year: '2026',
    description: 'A solitary moon surrounded by deep darkness, portraying loneliness, distance, and the timeless beauty of the night.',
    image: "/images/beST WORK'/NATURAL SATTELITE.png",
    aspectRatio: 'full',
    isBestWork: true,
    featured: true
  },
  {
    id: 'best-05',
    title: 'RURAL PEOPLE IN URBAN',
    category: 'STREET',
    location: 'BERHAMPUR, INDIA',
    year: '2026',
    description: 'A quiet rural figure standing within a misty landscape, portraying simplicity, solitude, and the enduring connection between people and nature.',
    image: "/images/beST WORK'/Rural  People In Urbam.jpg",
    aspectRatio: 'full',
    isBestWork: true,
    featured: true
  },
  {
    id: 'best-06',
    title: 'THE LAST WITNESS',
    category: 'CINEMATIC',
    location: 'INDIA',
    year: '2026',
    description: 'A weathered skull-like mask rests alone in the darkness, surrounded by silence and decay. The photograph explores memory, identity, and the traces left behind by something that once existed.',
    image: "/images/beST WORK'/THE LAST WITNESS.jpg",
    aspectRatio: 'full',
    isBestWork: true,
    featured: true
  },
  {
    id: 'best-07',
    title: 'NATURAL',
    category: 'LANDSCAPE',
    location: 'ODISHA, INDIA',
    year: '2026',
    description: 'A cinematic landscape capturing the quiet connection between mountains, fields, water, and sky, creating a sense of stillness, openness, and escape.',
    image: "/images/beST WORK'/NATURAL.png",
    aspectRatio: 'full',
    isBestWork: true,
    featured: true
  },
  {
    id: 'best-08',
    title: 'THE THREE CROWNS',
    category: 'CINEMATIC',
    location: 'INDIA',
    year: '2026',
    description: 'A visual study of three distinct natural forms brought together in a single composition, symbolizing strength, balance, and the quiet hierarchy found within nature.',
    image: "/images/beST WORK'/The Three Crowns.jpg",
    aspectRatio: 'full',
    isBestWork: true,
    featured: true
  },
  {
    id: 'best-09',
    title: 'GREEN SOULS',
    category: 'LANDSCAPE',
    location: 'ODISHA, INDIA',
    year: '2026',
    description: 'A rain-soaked landscape where people quietly move through lush greenery beneath mist-covered mountains. The photograph captures the harmony between human life and nature, creating a peaceful, cinematic atmosphere of solitude, movement, and belonging.',
    image: "/images/beST WORK'/Green Souls.jpg",
    aspectRatio: 'full',
    isBestWork: true,
    featured: true
  },
  {
    id: 'best-10',
    title: 'SOLITUDE',
    category: 'VISUAL STORIES',
    location: 'INDIA',
    year: '2026',
    description: 'A lone bird rests among tall grass, surrounded by warm evening light and deep shadows. The photograph captures the quiet beauty of being alone, where nature becomes a place of stillness, reflection, and peace.',
    image: "/images/beST WORK'/SOLTITUDE.jpg",
    aspectRatio: 'full',
    isBestWork: true,
    featured: true
  }
];

/**
 * 2ND SECTION: ALL OTHER PHOTOGRAPHY WORKS (from `/images/`)
 */
export const OTHER_WORK_PHOTOS: Photo[] = [
  {
    id: 'photo-01',
    title: 'SUN WITH CAMERA',
    category: 'CINEMATIC',
    location: 'BERHAMPUR, INDIA',
    year: '2026',
    description: 'Capturing sunset light through the lens, exploring natural warmth and shadows.',
    image: '/images/sandc.jpg',
    aspectRatio: 'full',
    hero: true,
    objectPosition: 'center 85%'
  },
  {
    id: 'photo-02',
    title: 'LET THE SHADOWS SPEAK',
    category: 'CINEMATIC',
    location: 'INDIA',
    year: '2026',
    description: 'Cinematic shadow composition capturing high contrast ambient lighting.',
    image: '/images/Let The Shadows Speak.jpg',
    aspectRatio: 'portrait'
  },
  {
    id: 'photo-03',
    title: 'MOUNTAIN BEYOND THE PINES',
    category: 'LANDSCAPE',
    location: 'EASTERN GHATS, INDIA',
    year: '2025',
    description: 'Layered mountain ridges emerging through morning fog.',
    image: '/images/Mountain Beyond The Pines.jpg',
    aspectRatio: 'wide'
  },
  {
    id: 'photo-04',
    title: 'TWILIGHT EK PREM KATHA',
    category: 'VISUAL STORIES',
    location: 'INDIA',
    year: '2025',
    description: 'Moody evening sky palette capturing dusk atmosphere.',
    image: '/images/Twilight Ek Prem Katha.jpg',
    aspectRatio: 'full'
  },
  {
    id: 'photo-05',
    title: 'SURAJ CHUPA PAHADON MEIN',
    category: 'LANDSCAPE',
    location: 'INDIA',
    year: '2026',
    description: 'Golden hour sunset dipping behind distant mountain silhouettes.',
    image: '/images/Suraj Chupa Pahadon Mein.jpg',
    aspectRatio: 'landscape'
  },
  {
    id: 'photo-06',
    title: 'YEH KARWAN',
    category: 'TRAVEL',
    location: 'INDIA',
    year: '2025',
    description: 'Street travel capture observing human rhythm and movement.',
    image: '/images/Yeh Karwan.jpg',
    aspectRatio: 'portrait'
  },
  {
    id: 'photo-07',
    title: 'CAMPUS DROPS',
    category: 'STREET',
    location: 'INDIA',
    year: '2026',
    description: 'Minimalist street capture exploring urban textures and raindrops.',
    image: '/images/Campus Drops.jpg',
    aspectRatio: 'square'
  },
  {
    id: 'photo-08',
    title: 'DOPPELGANGER',
    category: 'CINEMATIC',
    location: 'INDIA',
    year: '2025',
    description: 'Reflection and duality captured through glass reflections.',
    image: '/images/Dopalanger.jpg',
    aspectRatio: 'portrait'
  },
  {
    id: 'photo-09',
    title: 'GREEN SOULS',
    category: 'LANDSCAPE',
    location: 'ODISHA, INDIA',
    year: '2026',
    description: 'Lush green foliage under diffused natural canopy.',
    image: '/images/Green Souls.jpg',
    aspectRatio: 'landscape'
  },
  {
    id: 'photo-10',
    title: 'LIFE BETWEEN BUILDINGS',
    category: 'STREET',
    location: 'BERHAMPUR, INDIA',
    year: '2026',
    description: 'Architectural geometry framing human activity in alleyways.',
    image: '/images/LIfe Between Building.jpg',
    aspectRatio: 'tall'
  },
  {
    id: 'photo-11',
    title: "LET'S GO HOME",
    category: 'TRAVEL',
    location: 'INDIA',
    year: '2025',
    description: 'Dusk travel silhouette capturing commuters heading home.',
    image: "/images/Let's Go Home.jpg",
    aspectRatio: 'landscape'
  },
  {
    id: 'photo-12',
    title: 'LIVELY SHEPHERDS',
    category: 'TRAVEL',
    location: 'ODISHA, INDIA',
    year: '2025',
    description: 'Rural documentary capture of shepherds in early morning fields.',
    image: '/images/Lively Sheperds.jpg',
    aspectRatio: 'wide'
  },
  {
    id: 'photo-13',
    title: 'MARINE BOAT',
    category: 'LANDSCAPE',
    location: 'GOPALPUR, INDIA',
    year: '2025',
    description: 'Coastal morning light illuminating wooden fishing boats.',
    image: '/images/Marine Boat.jpg',
    aspectRatio: 'full'
  },
  {
    id: 'photo-14',
    title: 'ONCE A CAR',
    category: 'STREET',
    location: 'INDIA',
    year: '2026',
    description: 'Vintage abandoned vehicle rusting in quiet overgrown surroundings.',
    image: '/images/Once a Car.jpg',
    aspectRatio: 'landscape'
  },
  {
    id: 'photo-15',
    title: 'OWNER OF THE UNIVERSE',
    category: 'PORTRAITS',
    location: 'INDIA',
    year: '2026',
    description: 'Expressive environmental portrait in natural ambient lighting.',
    image: '/images/Owner of the Universe.jpg',
    aspectRatio: 'portrait'
  },
  {
    id: 'photo-16',
    title: "THAT'S WHY QUEEN",
    category: 'PORTRAITS',
    location: 'INDIA',
    year: '2025',
    description: 'Candid portrait capture highlighting posture and grace.',
    image: "/images/That's Why Queen.jpg",
    aspectRatio: 'portrait'
  },
  {
    id: 'photo-17',
    title: 'THE THREE CROWNS',
    category: 'CINEMATIC',
    location: 'INDIA',
    year: '2026',
    description: 'Architectural crowns framed against dramatic sky.',
    image: '/images/The Three Crowns.jpg',
    aspectRatio: 'wide'
  },
  {
    id: 'photo-18',
    title: 'TOASTED IN RUST',
    category: 'VISUAL STORIES',
    location: 'INDIA',
    year: '2025',
    description: 'Industrial rust textures warmed by low sunset illumination.',
    image: '/images/Toasted in Rust.jpg',
    aspectRatio: 'landscape'
  }
];

export const PHOTOS: Photo[] = [...BEST_WORK_PHOTOS, ...OTHER_WORK_PHOTOS];

export const ABOUT_DATA = {
  name: 'KOMALKANT MOHAPATRO',
  role: 'Cinematographer & Visual Artist',
  tagline: "Every frame has a story, I'm here to find the light within it, which the world calls Cinema.",
  bioParagraph1: 'Based in Odisha, India, I love to explore the delicate balance between atmospheric light, human emotion, and architectural geometry. My work spans cinematic visual stories, fine-art portraiture, and documentary travel sequences.',
  bioParagraph2: 'Working predominantly with natural light and analog-inspired tones, my goal is to capture subtle, unscripted moments that linger beyond the frame.',
  image: '/images/me.jpg',
  location: 'Berhampur / New Delhi, India',
  email: 'contact@komalkant.com',
  instagram: 'https://instagram.com'
};
