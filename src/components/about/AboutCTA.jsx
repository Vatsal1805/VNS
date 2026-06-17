import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

export default function AboutCTA({ contactInfo }) {
  return (
    <section className="py-16 bg-gradient-to-br from-vnsSurface to-vnsBg border-t border-vnsBorder relative overflow-hidden">
      <div className="max-width-container mx-auto px-5 lg:px-12 text-center flex flex-col items-center gap-6 relative z-10 max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
          className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight text-vnsText-primary leading-tight"
        >
          Book A Visit & Tour Our Campus Today
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.1 }}
          className="font-body text-xs sm:text-sm text-vnsText-secondary leading-relaxed"
        >
          Witness the secure gates, hygienic dining facilities, and peaceful room settings first-hand. Call Warden Uncle to schedule your visit.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto"
        >
          <a
            href={`https://wa.me/${contactInfo.whatsapp}?text=Hi%20VNS%20Hostel,%20I'm%20interested%20in%20visiting%20your%20campus.`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-vnsAccent to-[#D4A853] text-vnsBg px-8 py-3.5 rounded-vns font-heading text-sm font-semibold tracking-wider hover:scale-105 active:scale-95 transition-all shadow-md"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span className="uppercase tracking-wider">Schedule On WhatsApp</span>
          </a>
          <a 
            href={`tel:${contactInfo.phone}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent hover:bg-vnsBg/30 text-vnsText-primary px-8 py-3.5 rounded-vns border border-vnsText-primary/20 transition-colors"
          >
            <Phone className="w-4 h-4 text-vnsAccent" />
            <span className="font-heading text-sm font-semibold tracking-wider uppercase">Call Warden Uncle</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
