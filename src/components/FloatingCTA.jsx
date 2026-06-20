import { motion } from 'framer-motion';
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
          <svg className="w-7 h-7 fill-current text-white shrink-0" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.019-5.101-2.875-6.958C16.604 1.927 14.133.916 11.5.916c-5.437 0-9.863 4.42-9.866 9.863-.001 1.816.48 3.59 1.39 5.169l-.971 3.548 3.639-.955zM17.5 14.75c-.08-.13-.3-.2-.65-.38-.35-.18-2.07-1.02-2.39-1.14-.32-.12-.55-.18-.78.15-.23.33-.88 1.14-1.08 1.37-.2.23-.4.25-.75.07-.35-.18-1.48-.55-2.81-1.74-1.03-.92-1.73-2.06-1.93-2.41-.2-.35-.02-.54.15-.71.16-.16.35-.4.53-.6.18-.2.23-.33.35-.55.12-.22.06-.4-.03-.58-.09-.18-.78-1.88-1.07-2.58-.28-.68-.56-.59-.78-.6-.2-.01-.43-.01-.66-.01-.23 0-.6.09-.91.43-.31.34-1.18 1.15-1.18 2.8s1.2 3.25 1.37 3.47c.17.22 2.36 3.6 5.72 5.05.8.35 1.43.56 1.92.72.8.25 1.53.22 2.11.13.65-.1 2.01-.82 2.29-1.58.28-.76.28-1.41.2-1.56z"/>
          </svg>
        </motion.button>
      </div>
    </>
  );
}
