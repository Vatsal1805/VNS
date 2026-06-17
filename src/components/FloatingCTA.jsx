import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../config';

export default function FloatingCTA() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi VNS Hostel, I'm visiting your website and want to inquire about room availability.");
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <>

      {/* Global WhatsApp CTA (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={handleWhatsAppClick}
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba5a] transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(37, 211, 102, 0.4)",
              "0 0 0 15px rgba(37, 211, 102, 0)",
              "0 0 0 0 rgba(37, 211, 102, 0)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <MessageCircle className="w-8 h-8 fill-current" />
        </motion.button>
      </div>
    </>
  );
}
