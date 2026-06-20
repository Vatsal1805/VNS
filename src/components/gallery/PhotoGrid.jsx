import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2 } from 'lucide-react';

export default function PhotoGrid({ filteredPhotos, filterTabs, openLightbox }) {
  return (
    <section className="py-20 bg-vnsLight text-vnsDark">
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
                className="bg-white border border-vnsDark/10 rounded-vns overflow-hidden group hover:border-vnsAccent/40 transition-all duration-300 shadow-md hover:shadow-xl md:cursor-pointer cursor-default relative flex flex-col break-inside-avoid mb-6"
                onClick={() => {
                  if (window.innerWidth >= 768) {
                    openLightbox(index);
                  }
                }}
              >
                {/* Photo Container */}
                <div className="relative overflow-hidden w-full h-full">
                  <img 
                    src={photo.url} 
                    alt={photo.title} 
                    className="w-full h-auto object-cover group-hover:scale-[1.03] transition-all duration-500"
                  />
                  {/* Category Chip in corner */}
                  <div className="absolute top-3 right-3 bg-vnsDark/85 backdrop-blur-sm border border-vnsAccent/30 text-vnsText-primary text-[10px] uppercase font-heading font-semibold tracking-wider px-2.5 py-1 rounded shadow-sm z-20">
                    {filterTabs.find(tab => tab.id === photo.category)?.name || photo.category}
                  </div>
                  {/* Fullscreen icon on hover (Desktop only) */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 md:group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-10">
                    <div className="w-10 h-10 rounded-full bg-vnsAccent/20 border border-vnsAccent flex items-center justify-center">
                      <Maximize2 className="w-5 h-5 text-vnsAccent" />
                    </div>
                  </div>

                  {/* Glassmorphic Caption Drawer Overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-[2px] p-5 text-left z-20">
                    <h4 className="font-heading font-bold text-xs text-vnsText-primary uppercase tracking-widest">
                      {photo.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
