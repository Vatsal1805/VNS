import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ 
  lightboxIndex, 
  filteredPhotos, 
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
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 border border-white/10 rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-md transition-colors cursor-pointer z-55"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left navigation arrow */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 lg:left-8 text-white/70 hover:text-white p-3 border border-white/10 rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-md transition-colors cursor-pointer z-55"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main content slider */}
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            className="max-w-5xl max-h-[85vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          >
            <img
              src={filteredPhotos[lightboxIndex].url}
              alt={filteredPhotos[lightboxIndex].title}
              className="max-h-[85vh] max-w-full object-contain rounded-vns shadow-2xl"
            />
          </motion.div>

          {/* Right navigation arrow */}
          <button
            onClick={nextPhoto}
            className="absolute right-4 lg:right-8 text-white/70 hover:text-white p-3 border border-white/10 rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-md transition-colors cursor-pointer z-55"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
