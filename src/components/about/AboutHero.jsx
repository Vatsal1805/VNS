import { motion } from 'framer-motion';

export default function AboutHero({ facadeImg }) {
  return (
    <section className="relative min-h-[65vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Cinematic zoom background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center hero-bg-enhanced"
          style={{ backgroundImage: `url(${facadeImg})` }}
          animate={{ scale: [1, 1.05] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-vnsBg via-vnsBg/50 to-transparent"></div>
        <div className="absolute inset-0 bg-vnsBg/40"></div>
        {/* Dot Pattern Overlay */}
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.25] pointer-events-none"></div>
      </div>

      {/* Hero Content */}
      <div className="max-width-container mx-auto px-5 lg:px-12 z-10 text-center flex flex-col items-center gap-5 max-w-3xl">
        <motion.span 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs lg:text-sm font-semibold tracking-widest text-vnsAccent uppercase border border-vnsAccent/20 bg-vnsAccent/5 px-4 py-1.5 rounded-full"
        >
          Established 2013
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-vnsText-primary leading-[1.15]"
        >
          Our Legacy.<br />Your Peace of Mind.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-body text-sm sm:text-base text-vnsText-secondary max-w-xl leading-relaxed"
        >
          Over a decade of providing dedicated hostel housing for students to live, eat, celebrate, and study in Vadodara.
        </motion.p>
      </div>
    </section>
  );
}
