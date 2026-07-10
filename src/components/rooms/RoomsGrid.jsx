import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Bed, 
  BookOpen, 
  Lock, 
  Snowflake,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import WhatsAppIcon from '../WhatsAppIcon';
import { 
  lobbyImg, diningImg, sportsImg, kitchenImg, facadeImg, thaliImg,
  rooms3Img, roomsToiletImg, hostelCorridorImg, studyRoomImg, gardenArea2, receptionImg,
  corridorImg, hostelCleaningImg
} from '../../config';

export default function RoomsGrid({ 
  roomsData, 
  handleWhatsAppInquiry 
}) {
  const [activeRoomId, setActiveRoomId] = useState('triple');
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const selectedRoom = roomsData.find(r => r.id === activeRoomId) || roomsData[0];

  // 3 real photos for each room type
  const roomPhotos = {
    triple: [selectedRoom.image, roomsToiletImg, hostelCleaningImg],
    double: [selectedRoom.image, roomsToiletImg, hostelCorridorImg],
    single: [selectedRoom.image, roomsToiletImg, corridorImg]
  };

  const currentPhotos = roomPhotos[activeRoomId] || [selectedRoom.image];

  const handleNextPhoto = () => {
    setActivePhotoIndex((prev) => (prev + 1) % currentPhotos.length);
  };

  const handlePrevPhoto = () => {
    setActivePhotoIndex((prev) => (prev - 1 + currentPhotos.length) % currentPhotos.length);
  };

  // Structured descriptions and detailed highlights for each room type
  const roomDetailedSpecs = {
    triple: {
      tagline: "Ideal for Socializing & Smart Savings",
      layoutInfo: "Spacious layout thoughtfully organized to provide three individual beds with comfort mattresses and dedicated walking paths.",
      studySetup: "Three private study desks equipped with personal shelves and overhead lighting, allowing quiet exam preparation.",
      storageInfo: "Three independent steel lockers with padlock loops to safely store all credentials and belongings."
    },
    double: {
      tagline: "The Perfect Balance of Privacy & Social Life",
      layoutInfo: "Dual occupancy room layout offering extra breathing room, split AC placement, and attached hygienic washroom.",
      studySetup: "Two wide wooden desks arranged side-by-side with dedicated power plugs for study laptops and books.",
      storageInfo: "Two separate steel wardrobes featuring hanger bars and lockable drawers for personal belongings."
    },
    single: {
      tagline: "For Intense Academic Focus & Complete Privacy",
      layoutInfo: "Single occupant room designed for students seeking zero distractions, complete personal space, and quiet rest.",
      studySetup: "Executive-size wooden study desk with premium task lighting and high-back study chair.",
      storageInfo: "Double-door steel wardrobe with built-in locker vault for maximum security and organization."
    }
  };

  const activeSpecs = roomDetailedSpecs[activeRoomId] || roomDetailedSpecs.triple;

  return (
    <section className="py-24 bg-vnsLight text-vnsDark border-t border-vnsDark/10 relative overflow-hidden">
      <div className="max-width-container mx-auto px-5 lg:px-12 flex flex-col gap-12">
        
        {/* Apple-style Sliding Pill Tab Bar */}
        <div className="relative flex bg-vnsDark/5 border border-vnsDark/10 p-1.5 rounded-vns max-w-xl mx-auto gap-2 w-full shadow-inner">
          {roomsData.map((room) => {
            const isActive = activeRoomId === room.id;
            return (
              <button
                key={room.id}
                onClick={() => {
                  setActiveRoomId(room.id);
                  setActivePhotoIndex(0);
                }}
                className={`relative flex-1 py-3 px-3 rounded-vns font-heading text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 z-10 text-center ${
                  isActive
                    ? 'text-vnsBg font-extrabold'
                    : 'text-vnsDark/70 hover:text-vnsDark'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeRoomExplorerTab"
                    className="absolute inset-0 bg-vnsAccent rounded-vns z-[-1] shadow-md"
                    transition={{ type: "spring", stiffness: 350, damping: 26 }}
                  />
                )}
                {room.id === 'triple' ? 'Triple Sharing' : room.id === 'double' ? 'Double Sharing' : 'Single Occupancy'}
              </button>
            );
          })}
        </div>

        {/* Dynamic Showcase Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRoomId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16 bg-vnsSurface text-vnsText-primary rounded-vns p-6 sm:p-8 lg:p-12 border border-vnsBorder shadow-xl"
          >
            {/* Left Column: Slideshow Gallery */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              {/* Main Slideshow Viewport */}
              <div className="relative h-64 sm:h-80 md:h-[380px] rounded-vns overflow-hidden border border-vnsBorder bg-vnsBg group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activePhotoIndex}
                    src={currentPhotos[activePhotoIndex]}
                    alt={`${selectedRoom.name} - View ${activePhotoIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

                {/* Left Arrow */}
                <button
                  onClick={handlePrevPhoto}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-vnsBg/95 text-vnsText-primary border border-vnsBorder flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNextPhoto}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-vnsBg/95 text-vnsText-primary border border-vnsBorder flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 bg-black/30 backdrop-blur-[2px] px-3 py-1.5 rounded-full">
                  {currentPhotos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePhotoIndex(idx)}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        activePhotoIndex === idx ? 'bg-vnsAccent w-3' : 'bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnails Navigation Strip */}
              <div className="flex gap-3 justify-center">
                {currentPhotos.map((photo, idx) => {
                  const isSelected = activePhotoIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActivePhotoIndex(idx)}
                      className={`w-16 h-12 sm:w-20 sm:h-16 rounded-vns overflow-hidden border-2 transition-all shadow-sm ${
                        isSelected 
                          ? 'border-vnsAccent scale-102 shadow-md' 
                          : 'border-vnsBorder opacity-70 hover:opacity-100 hover:scale-[1.01]'
                      }`}
                    >
                      <img 
                        src={photo} 
                        alt="Room thumbnail" 
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Structured Layout Specifications */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <span className="font-heading text-[10px] sm:text-xs font-bold uppercase tracking-widest text-vnsAccent border border-vnsAccent/20 bg-vnsAccent/5 px-3 py-1 rounded-full self-start">
                    {activeSpecs.tagline}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-vnsText-primary mt-1.5 leading-none">
                    {selectedRoom.name}
                  </h3>
                </div>

                <p className="font-body text-xs text-vnsText-secondary leading-relaxed">
                  {selectedRoom.description}
                </p>

                {/* 3 Core Structured Pillars of the Room Layout */}
                <div className="flex flex-col gap-4 mt-2">
                  {/* Spacing Layout */}
                  <div className="flex gap-3.5 items-start">
                    <div className="w-9 h-9 rounded-vns bg-vnsBg border border-vnsBorder flex items-center justify-center text-vnsAccent shrink-0 mt-0.5">
                      <Bed className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-extrabold text-xs uppercase tracking-wider text-vnsText-primary leading-none">Personal Space Layout</h4>
                      <p className="font-body text-[11px] text-vnsText-secondary leading-relaxed mt-1">{activeSpecs.layoutInfo}</p>
                    </div>
                  </div>

                  {/* Study Setup */}
                  <div className="flex gap-3.5 items-start">
                    <div className="w-9 h-9 rounded-vns bg-vnsBg border border-vnsBorder flex items-center justify-center text-vnsAccent shrink-0 mt-0.5">
                      <BookOpen className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-extrabold text-xs uppercase tracking-wider text-vnsText-primary leading-none">Private Study Desk</h4>
                      <p className="font-body text-[11px] text-vnsText-secondary leading-relaxed mt-1">{activeSpecs.studySetup}</p>
                    </div>
                  </div>

                  {/* Lockers Storage */}
                  <div className="flex gap-3.5 items-start">
                    <div className="w-9 h-9 rounded-vns bg-vnsBg border border-vnsBorder flex items-center justify-center text-vnsAccent shrink-0 mt-0.5">
                      <Lock className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-extrabold text-xs uppercase tracking-wider text-vnsText-primary leading-none">Lockable Storage Capacity</h4>
                      <p className="font-body text-[11px] text-vnsText-secondary leading-relaxed mt-1">{activeSpecs.storageInfo}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Inclusions Row & Action Button */}
              <div className="flex flex-col gap-6 pt-6 border-t border-vnsBorder">
                <div className="hidden sm:flex flex-wrap gap-4 items-center text-[10px] font-bold uppercase tracking-wider text-vnsText-secondary">
                  <div className="flex items-center gap-1.5 bg-vnsBg/60 border border-vnsBorder px-2.5 py-1.5 rounded-vns">
                    <Snowflake className="w-3.5 h-3.5 text-vnsAccent" />
                    <span>Independent split AC</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-vnsBg/60 border border-vnsBorder px-2.5 py-1.5 rounded-vns">
                    <ShieldCheck className="w-3.5 h-3.5 text-vnsAccent" />
                    <span>Attached Washroom</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-vnsBg/60 border border-vnsBorder px-2.5 py-1.5 rounded-vns">
                    <Sparkles className="w-3.5 h-3.5 text-vnsAccent" />
                    <span>Daily Cleaning</span>
                  </div>
                </div>

                <button 
                  onClick={() => handleWhatsAppInquiry(selectedRoom.name)}
                  className="w-full sm:w-auto self-start flex items-center justify-center gap-2 bg-gradient-to-r from-vnsAccent to-[#D4A853] hover:from-[#C9933A] hover:to-[#B6842F] text-vnsBg px-8 py-3.5 rounded-vns font-heading text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-[1.01]"
                >
                  <WhatsAppIcon className="w-4 h-4 text-vnsBg fill-current" />
                  <span>Inquire Room Availability</span>
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
