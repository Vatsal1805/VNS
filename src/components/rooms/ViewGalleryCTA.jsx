import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Image, ArrowRight } from 'lucide-react';

export default function ViewGalleryCTA({ 
  lobbyImg, 
  holiImg, 
  diningImg, 
  textEntranceVariants 
}) {
  return (
    <section className="py-16 bg-gradient-to-br from-vnsSurface to-vnsBg border-t border-vnsBorder relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.15] pointer-events-none"></div>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={textEntranceVariants}
        className="max-width-container mx-auto px-5 lg:px-12 text-center flex flex-col items-center gap-6 relative z-10 max-w-5xl"
      >
        <div className="w-12 h-12 rounded-full bg-vnsAccent/10 border border-vnsAccent/30 flex items-center justify-center shrink-0">
          <Image className="w-6 h-6 text-vnsAccent" />
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight text-vnsText-primary leading-tight">
          Want to See More of the VNS Environment?
        </h2>
        <p className="font-body text-xs sm:text-sm text-vnsText-secondary leading-relaxed max-w-xl">
          Browse high-resolution photographs of our study areas, dining room gatherings, biometric gates, and festival celebrations.
        </p>

        {/* 3 Preview Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl my-4">
          <div className="h-48 rounded-vns overflow-hidden border border-vnsBorder/40 shadow-lg relative group">
            <img src={lobbyImg} alt="Lobby Area" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-3 left-3 bg-vnsBg/90 backdrop-blur-sm border border-vnsAccent/30 px-3 py-1 rounded-vns text-[10px] text-vnsText-primary font-heading font-semibold shadow-sm">
              Reception Lobby
            </div>
          </div>
          <div className="h-48 rounded-vns overflow-hidden border border-vnsBorder/40 shadow-lg relative group">
            <img src={holiImg} alt="Holi Celebration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-3 left-3 bg-vnsBg/90 backdrop-blur-sm border border-vnsAccent/30 px-3 py-1 rounded-vns text-[10px] text-vnsText-primary font-heading font-semibold shadow-sm">
              Holi Celebration
            </div>
          </div>
          <div className="h-48 rounded-vns overflow-hidden border border-vnsBorder/40 shadow-lg relative group">
            <img src={diningImg} alt="Dining Area" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-3 left-3 bg-vnsBg/90 backdrop-blur-sm border border-vnsAccent/30 px-3 py-1 rounded-vns text-[10px] text-vnsText-primary font-heading font-semibold shadow-sm">
              Dining Hall
            </div>
          </div>
        </div>

        <Link 
          to="/gallery"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-vnsAccent to-[#D4A853] hover:from-vnsAccent hover:to-[#C29546] text-vnsBg px-8 py-3.5 rounded-vns font-heading font-bold text-sm tracking-wider hover:scale-105 active:scale-95 transition-all shadow-lg uppercase"
        >
          Explore Photo Gallery
          <ArrowRight className="w-4 h-4 text-vnsBg" />
        </Link>
      </motion.div>
    </section>
  );
}
