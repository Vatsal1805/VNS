import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Wifi, Coffee, Shield, Users } from 'lucide-react';
import CountUp from '../CountUp';

export default function HeroSection({ facadeImg, handleWhatsAppInquiry }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Cinematic Ken Burns Background Zoom with Image Enhancements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center hero-bg-enhanced"
          style={{ backgroundImage: `url(${facadeImg})` }}
          animate={{ scale: [1, 1.05] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        {/* Dark overlay with lower opacity to show the building background clearly and support future video */}
        <div className="absolute inset-0 bg-gradient-to-t from-vnsBg via-vnsBg/55 to-transparent"></div>
        <div className="absolute inset-0 bg-vnsBg/45"></div>
        {/* Premium Dot Pattern Overlay to mask low-res blur */}
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.25] pointer-events-none"></div>
      </div>

      {/* Hero Content */}
      <div className="max-width-container mx-auto px-5 lg:px-12 z-10 text-center flex flex-col items-center gap-6 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 15 }}
          className="text-xs lg:text-sm font-semibold tracking-widest text-vnsAccent uppercase border border-vnsAccent/20 bg-vnsAccent/5 px-4 py-1.5 rounded-full"
        >
          Trusted Since 2015
        </motion.span>

        {/* Centered Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 12, delay: 0.15 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-vnsText-primary leading-[1.15]"
        >
          Safe. <br />
          Comfortable. <br />
          Parent Trusted. <br />
          Student Approved.
        </motion.h1>

        {/* Hero Features Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 13, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-6 my-2 text-vnsText-primary font-body text-xs font-bold uppercase tracking-wider"
        >
          <div className="flex items-center gap-2">
            <Wifi className="w-4 h-4 text-vnsAccent" />
            <span>High Speed WiFi</span>
          </div>
          <div className="flex items-center gap-2">
            <Coffee className="w-4 h-4 text-vnsAccent" />
            <span>Nutritious Food</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-vnsAccent" />
            <span>24/7 Security</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-vnsAccent" />
            <span>Peaceful Environment</span>
          </div>
        </motion.div>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 14, delay: 0.4 }}
          className="font-body text-sm sm:text-base md:text-lg text-vnsText-secondary max-w-2xl leading-relaxed mt-2"
        >
          A safe, comfortable, and welcoming environment that truly feels like a home away from home — trusted by students and parents for over a decade.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 13, delay: 0.5 }}
          className="flex flex-row items-center justify-center gap-4 mt-2 w-full sm:w-auto"
        >
          <motion.button 
            onClick={() => handleWhatsAppInquiry("General")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-vnsAccent to-[#D4A853] hover:from-[#C9933A] hover:to-[#B6842F] text-vnsBg px-8 py-4 rounded-vns shadow-lg active:scale-95 transition-all duration-200 border-none"
          >
            <span className="font-heading font-bold tracking-wider text-sm">Book A Visit</span>
            <ArrowRight className="w-4 h-4 text-vnsBg" />
          </motion.button>
          <Link 
            to="/rooms"
            className="flex items-center justify-center gap-3 bg-transparent hover:bg-vnsBg/30 text-vnsText-primary px-8 py-4 rounded-vns border border-vnsText-primary/20 shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span className="font-heading font-bold tracking-wider text-sm">View Rooms</span>
            <ArrowRight className="w-4 h-4 text-vnsText-primary" />
          </Link>
        </motion.div>

        {/* Overlapping Avatars & Happy Students Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 40, damping: 12, delay: 0.65 }}
          className="flex items-center gap-4 mt-6"
        >
          {/* Overlapping circular avatars */}
          <div className="flex -space-x-3">
            <div className="w-9 h-9 rounded-full border-2 border-vnsBorder bg-vnsBg flex items-center justify-center text-[10px] font-bold text-vnsText-primary shadow-sm font-heading">A</div>
            <div className="w-9 h-9 rounded-full border-2 border-vnsBorder bg-vnsSurface flex items-center justify-center text-[10px] font-bold text-vnsText-primary shadow-sm font-heading">P</div>
            <div className="w-9 h-9 rounded-full border-2 border-vnsBorder bg-vnsBg flex items-center justify-center text-[10px] font-bold text-vnsText-primary shadow-sm font-heading">S</div>
          </div>
          <div className="text-left leading-tight">
            <p className="font-heading font-extrabold text-lg text-vnsText-primary leading-none">
              <CountUp value="1000" suffix="+" />
            </p>
            <p className="font-body text-[10px] text-vnsText-secondary font-bold uppercase tracking-wider mt-1">Happy Students</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
