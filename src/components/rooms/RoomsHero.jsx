import { motion } from 'framer-motion';

export default function RoomsHero({ facadeImg }) {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center hero-bg-enhanced"
          style={{ backgroundImage: `url(${facadeImg})` }}
          animate={{ scale: [1, 1.05] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-vnsBg via-vnsBg/50 to-transparent"></div>
        <div className="absolute inset-0 bg-vnsBg/45"></div>
        {/* Dot Pattern Overlay */}
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.25] pointer-events-none"></div>
      </div>

      <div className="max-width-container mx-auto px-5 lg:px-12 z-10 text-center flex flex-col items-center gap-5 max-w-3xl">
        <motion.span 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 15 }}
          className="text-xs lg:text-sm font-semibold tracking-widest text-vnsAccent uppercase border border-vnsAccent/20 bg-vnsAccent/5 px-4 py-1.5 rounded-full"
        >
          Premium Accommodations
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 12, delay: 0.15 }}
          className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-vnsText-primary leading-[1.15]"
        >
          Your Premium Living Space
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 14, delay: 0.3 }}
          className="font-body text-sm sm:text-base text-vnsText-secondary max-w-2xl leading-relaxed"
        >
          All-inclusive comfortable living with transparent pricing, individual study spaces, and split AC units in all sharing options.
        </motion.p>
      </div>
    </section>
  );
}
