import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ 
  lightboxIndex, 
  filteredPhotos, 
  filterTabs, 
  closeLightbox, 
  prevPhoto, 
  nextPhoto 
}) {
  return (
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
  );
}
