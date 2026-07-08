import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Image, ArrowRight } from 'lucide-react';
import { 
  doubleNonAcImg, doubleAcImg, facadeImg, hostelHeroImg, droneViewImg,
  lobbyImg, receptionImg, sportsImg, volleyballImg,
  holiImg, diningImg, kitchenImg, thaliImg, messEntryImg,
  gardenArea1, gardenArea2, corridorImg, studyRoomImg, securityOfficeImg
} from '../../config';

export default function ViewGalleryCTA({ textEntranceVariants }) {
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  const marqueeImages = [
    { src: doubleNonAcImg, label: "Sharing Room" },
    { src: diningImg, label: "Dining Hall" },
    { src: facadeImg, label: "Hostel Exterior" },
    { src: gardenArea1, label: "Garden Area" },
    { src: sportsImg, label: "Cricket Grounds" },
    { src: holiImg, label: "Holi Celebrations" },
    { src: studyRoomImg, label: "Study Room" },
    { src: receptionImg, label: "Manager Office" },
    { src: kitchenImg, label: "Fresh Roti Making" },
    { src: corridorImg, label: "Hostel Corridor" },
    { src: hostelHeroImg, label: "VNS Hostel" },
    { src: thaliImg, label: "Vegetarian Thali" },
    { src: messEntryImg, label: "Mess Entry" },
    { src: gardenArea2, label: "Campus Garden" },
    { src: volleyballImg, label: "Volleyball" },
    { src: securityOfficeImg, label: "Security Office" },
    { src: doubleAcImg, label: "Double Sharing Room" },
    { src: droneViewImg, label: "Aerial View" },
  ];

  const handleTouchStart = () => {
    setIsPaused(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleTouchEnd = () => {
    // Mobile Resume: Auto-starts scrolling again after 2.5 seconds of inactivity
    timeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 2500);
  };

  return (
    <section className="py-20 bg-vnsLight text-vnsDark relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.15] pointer-events-none"></div>
      
      <div className="flex flex-col items-center gap-6 relative z-10 w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textEntranceVariants}
          className="max-width-container mx-auto px-5 lg:px-12 text-center flex flex-col items-center gap-6"
        >
          <div className="w-12 h-12 rounded-full bg-vnsDark/5 border border-vnsDark/10 flex items-center justify-center shrink-0">
            <Image className="w-6 h-6 text-vnsDark" />
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight text-vnsDark leading-tight">
            Want to See More of the VNS Environment?
          </h2>
          <p className="font-body text-xs sm:text-sm text-vnsDark/80 leading-relaxed max-w-xl mx-auto">
            Browse high-resolution photographs of our study areas, dining room gatherings, biometric gates, and festival celebrations.
          </p>
        </motion.div>
 
        {/* Infinite Scrolling Image Marquee (Full Screen Width) */}
        <div className="relative w-full overflow-hidden py-6 select-none flex">
 
          <div 
            className="flex gap-0 animate-marquee w-max"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Loop Copy 1 */}
            <div className="flex gap-0 shrink-0">
              {marqueeImages.map((img, idx) => (
                <div key={`c1-${idx}`} className="pr-6 shrink-0">
                  <div className="w-60 h-40 sm:w-64 sm:h-44 rounded-vns overflow-hidden border border-vnsBorder relative group shadow-lg">
                    <img 
                      src={img.src} 
                      alt={img.label} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      loading="lazy"
                    />
                    <div className="absolute bottom-3 left-3 bg-vnsBg/90 backdrop-blur-sm border border-vnsAccent/30 px-3 py-1 rounded-vns text-[9px] sm:text-[10px] text-vnsText-primary font-heading font-semibold shadow-sm">
                      {img.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
 
            {/* Loop Copy 2 (Seamless Resets) */}
            <div className="flex gap-0 shrink-0">
              {marqueeImages.map((img, idx) => (
                <div key={`c2-${idx}`} className="pr-6 shrink-0">
                  <div className="w-60 h-40 sm:w-64 sm:h-44 rounded-vns overflow-hidden border border-vnsBorder relative group shadow-lg">
                    <img 
                      src={img.src} 
                      alt={img.label} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      loading="lazy"
                    />
                    <div className="absolute bottom-3 left-3 bg-vnsBg/90 backdrop-blur-sm border border-vnsAccent/30 px-3 py-1 rounded-vns text-[9px] sm:text-[10px] text-vnsText-primary font-heading font-semibold shadow-sm">
                      {img.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
 
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textEntranceVariants}
          className="text-center"
        >
          <Link 
            to="/gallery"
            className="inline-flex items-center gap-2 bg-vnsDark hover:bg-[#4a2613] text-vnsText-primary px-8 py-3.5 rounded-vns border border-vnsDark font-heading font-bold text-sm tracking-wider hover:scale-105 active:scale-95 transition-all shadow-md uppercase mt-2"
          >
            Explore Photo Gallery
            <ArrowRight className="w-4 h-4 text-vnsText-primary" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
