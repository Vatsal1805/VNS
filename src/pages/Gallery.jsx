import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { 
  doubleNonAcImg, doubleAcImg, facadeImg, lobbyImg, 
  sportsImg, holiImg, thaliImg, kitchenImg, diningImg 
} from '../config';

const GALLERY_PHOTOS = [
  {
    id: 1,
    category: "rooms",
    title: "Premium Double Sharing Room (Non-AC)",
    desc: "Clean room setup with individual study desks and dedicated lockers.",
    url: doubleNonAcImg
  },
  {
    id: 2,
    category: "mess",
    title: "Hygienic Dining Area",
    desc: "Clean kitchen and steel tables serving fresh meals daily.",
    url: diningImg
  },
  {
    id: 3,
    category: "festivals",
    title: "Holi Utsav Celebration",
    desc: "Colorful, vibrant celebrations organized by students together on campus.",
    url: holiImg
  },
  {
    id: 4,
    category: "campus",
    title: "Hostel Lobby & Reception",
    desc: "Welcoming reception foyer featuring elevator, staircase, and prayer shrine.",
    url: lobbyImg
  },
  {
    id: 5,
    category: "campus",
    title: "VNS Hostel Exterior Facade",
    desc: "Modern multi-story purpose-built structure with optimal ventilation.",
    url: facadeImg
  },
  {
    id: 6,
    category: "festivals",
    title: "Sports Tournaments",
    desc: "Students enjoying sports like cricket matches nearby.",
    url: sportsImg
  },
  {
    id: 7,
    category: "rooms",
    title: "Double Sharing AC Room Layout",
    desc: "Premium AC room with comfortable beds, independent study workspace, and balcony access.",
    url: doubleAcImg
  },
  {
    id: 8,
    category: "mess",
    title: "Commercial Kitchen Facility",
    desc: "State-of-the-art clean kitchen showing hygienic steel setups.",
    url: kitchenImg
  },
  {
    id: 9,
    category: "mess",
    title: "Hygienic Vegetarian Thali",
    desc: "Hot, homestyle nutritious vegetarian meals served daily.",
    url: thaliImg
  }
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filterTabs = [
    { id: 'all', name: 'All' },
    { id: 'rooms', name: 'Rooms & Study' },
    { id: 'mess', name: 'Food & Mess' },
    { id: 'festivals', name: 'Festivals & Events' },
    { id: 'campus', name: 'Campus & Security' },
  ];

  const filteredPhotos = activeTab === 'all' 
    ? GALLERY_PHOTOS 
    : GALLERY_PHOTOS.filter(photo => photo.category === activeTab);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) => 
      prevIndex === 0 ? filteredPhotos.length - 1 : prevIndex - 1
    );
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) => 
      prevIndex === filteredPhotos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="pt-24 bg-vnsBg text-vnsText-primary min-h-screen">
      
      {/* 1. HERO HEADER (Cinematic Dark Theme with Zoom facade image) */}
      <section className="relative py-24 md:py-32 overflow-hidden flex items-center justify-center border-b border-vnsBorder">
        {/* Cinematic Ken Burns Background Zoom */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            className="absolute inset-0 bg-cover bg-center hero-bg-enhanced"
            style={{ backgroundImage: `url(${facadeImg})` }}
            animate={{ scale: [1, 1.06] }}
            transition={{ duration: 16, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          {/* Dark overlay and gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-vnsBg via-vnsBg/60 to-transparent"></div>
          <div className="absolute inset-0 bg-vnsBg/50"></div>
          {/* Premium Dot Pattern Overlay */}
          <div className="absolute inset-0 bg-dot-pattern opacity-[0.22] pointer-events-none"></div>
        </div>

        <div className="max-width-container mx-auto px-5 lg:px-12 text-center relative z-10 max-w-3xl flex flex-col gap-5">
          <motion.span 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-xs lg:text-sm font-semibold uppercase tracking-widest text-vnsAccent border border-vnsAccent/20 bg-vnsAccent/5 px-4 py-1.5 rounded-full mx-auto"
          >
            VNS Visual Tour
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-vnsText-primary leading-tight"
          >
            Hostel Life in Focus
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-sm sm:text-base text-vnsText-secondary leading-relaxed max-w-2xl mx-auto"
          >
            Take a virtual tour of our premium rooms, hygienic dining mess, campus security gates, and student event celebrations.
          </motion.p>
        </div>
      </section>

      {/* 2. FILTER TABS (Dark Surface Background) */}
      <section className="py-8 bg-vnsSurface text-vnsText-primary border-b border-vnsBorder">
        <div className="max-width-container mx-auto px-5 lg:px-12 flex flex-wrap justify-center gap-3">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full font-heading text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                activeTab === tab.id
                  ? 'bg-vnsAccent text-vnsBg border-vnsAccent shadow-lg shadow-vnsAccent/10'
                  : 'bg-vnsBg border border-vnsBorder text-vnsText-secondary hover:text-vnsText-primary hover:border-vnsAccent/30'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </section>

      {/* 3. PHOTO GRID (Deep Chocolate Background, Masonry Layout) */}
      <section className="py-20 bg-vnsBg text-vnsText-primary border-t border-vnsBorder">
        <div className="max-width-container mx-auto px-5 lg:px-12">
          <motion.div 
            className="columns-1 sm:columns-2 lg:columns-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-vnsSurface border border-vnsBorder rounded-vns overflow-hidden group hover:border-vnsAccent/40 transition-all duration-300 shadow-md cursor-pointer relative flex flex-col break-inside-avoid mb-6"
                  onClick={() => openLightbox(index)}
                >
                  {/* Photo Container */}
                  <div className="relative overflow-hidden w-full h-full bg-black/20">
                    <img 
                      src={photo.url} 
                      alt={photo.title} 
                      className="w-full h-auto object-cover group-hover:scale-[1.03] transition-all duration-500"
                    />
                    {/* Category Chip in corner */}
                    <div className="absolute top-3 right-3 bg-vnsBg/90 backdrop-blur-sm border border-vnsAccent/30 text-vnsText-primary text-[10px] uppercase font-heading font-semibold tracking-wider px-2.5 py-1 rounded shadow-sm z-20">
                      {filterTabs.find(tab => tab.id === photo.category)?.name || photo.category}
                    </div>
                    {/* Fullscreen icon on hover */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-10">
                      <div className="w-10 h-10 rounded-full bg-vnsAccent/20 border border-vnsAccent flex items-center justify-center">
                        <Maximize2 className="w-5 h-5 text-vnsAccent" />
                      </div>
                    </div>

                    {/* Glassmorphic Caption Drawer Overlay */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/75 to-transparent backdrop-blur-[2px] p-5 text-left border-t border-vnsAccent/15 z-20 transition-all duration-500 ease-out md:translate-y-[calc(100%-60px)] md:group-hover:translate-y-0">
                      <h4 className="font-heading font-bold text-xs text-vnsText-primary uppercase tracking-wider">
                        {photo.title}
                      </h4>
                      <p className="font-body text-[11px] text-vnsText-secondary mt-2 leading-relaxed md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {photo.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 4. LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-vnsText-secondary hover:text-vnsText-primary p-2 border border-vnsBorder/40 rounded-full bg-vnsBg/50 hover:bg-vnsSurface transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left navigation arrow */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 lg:left-8 text-vnsText-secondary hover:text-vnsText-primary p-3 border border-vnsBorder/40 rounded-full bg-vnsBg/50 hover:bg-vnsSurface transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main content slider */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-w-4xl w-full flex flex-col gap-4"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking card
            >
              <div className="relative rounded-vns overflow-hidden border border-vnsBorder max-h-[60vh] bg-vnsBg shadow-2xl flex items-center justify-center">
                <img
                  src={filteredPhotos[lightboxIndex].url}
                  alt={filteredPhotos[lightboxIndex].title}
                  className="max-h-[60vh] w-full object-contain"
                />
              </div>

              {/* Text captions */}
              <div className="bg-vnsSurface border border-vnsBorder rounded-vns p-5 flex flex-col gap-1 text-left shadow-xl">
                <span className="text-[10px] text-vnsAccent uppercase font-heading font-semibold tracking-wider">
                  {filterTabs.find(tab => tab.id === filteredPhotos[lightboxIndex].category)?.name || filteredPhotos[lightboxIndex].category}
                </span>
                <h3 className="font-heading text-lg font-bold text-vnsText-primary uppercase tracking-wide">
                  {filteredPhotos[lightboxIndex].title}
                </h3>
                <p className="font-body text-xs text-vnsText-secondary leading-relaxed mt-1">
                  {filteredPhotos[lightboxIndex].desc}
                </p>
              </div>
            </motion.div>

            {/* Right navigation arrow */}
            <button
              onClick={nextPhoto}
              className="absolute right-4 lg:right-8 text-vnsText-secondary hover:text-vnsText-primary p-3 border border-vnsBorder/40 rounded-full bg-vnsBg/50 hover:bg-vnsSurface transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
