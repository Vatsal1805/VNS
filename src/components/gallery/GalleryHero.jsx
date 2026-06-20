import { motion } from 'framer-motion';

export default function GalleryHero({ facadeImg }) {
  return (
    <section className="relative min-h-[65vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Cinematic Ken Burns Background Zoom */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center hero-bg-enhanced"
          style={{ backgroundImage: `url(${facadeImg})` }}
          animate={{ scale: [1, 1.06] }}
          transition={{ duration: 16, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        {/* Dark overlay and gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-vnsBg via-vnsBg/50 to-transparent"></div>
        <div className="absolute inset-0 bg-vnsBg/40"></div>
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
  );
}
