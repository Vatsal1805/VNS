import { motion } from 'framer-motion';
import { MessageCircle, Phone, AlertTriangle } from 'lucide-react';

export default function StayCTA({ 
  contactInfo, 
  handleWhatsAppInquiry, 
  textEntranceVariants 
}) {
  return (
    <section className="py-20 bg-vnsBg border-t border-vnsBorder relative overflow-hidden">
      <div className="max-width-container mx-auto px-5 lg:px-12 text-center flex flex-col items-center gap-6 relative z-10 max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textEntranceVariants}
          className="flex flex-col items-center gap-6"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-vnsText-primary leading-tight">
            Ready to Lock Your Accommodation?
          </h2>
          <p className="font-body text-xs sm:text-sm text-vnsText-secondary leading-relaxed max-w-xl">
            Give your son a secure, clean, and disciplined environment close to Parul University and Sumandeep Vidyapeeth. Secure your configurations today.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto">
            <button 
              onClick={() => handleWhatsAppInquiry("General Room Inquiry")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-vnsAccent to-[#D4A853] hover:from-[#C9933A] hover:to-[#B6842F] text-vnsBg px-8 py-3.5 rounded-vns font-heading text-sm font-semibold tracking-wider hover:scale-105 active:scale-95 transition-all shadow-md uppercase"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Book A Visit</span>
            </button>
            <a 
              href={`tel:${contactInfo.phone}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent hover:bg-vnsBg/30 text-vnsText-primary px-8 py-3.5 rounded-vns border border-vnsText-primary/20 transition-colors uppercase font-heading text-sm font-semibold tracking-wider"
            >
              <Phone className="w-4 h-4 text-vnsAccent" />
              <span>Call Warden Uncle</span>
            </a>
          </div>
          <p className="font-body text-[10px] text-vnsAccent uppercase tracking-widest mt-2 flex items-center justify-center gap-1.5 animate-pulse font-semibold">
            <AlertTriangle className="w-3.5 h-3.5 text-vnsAccent" />
            <span>Limited Seats remaining for the upcoming semester</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
