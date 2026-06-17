import { motion } from 'framer-motion';
import { Check, MessageCircle } from 'lucide-react';

export default function RoomsGrid({ 
  roomsData, 
  handleWhatsAppInquiry, 
  containerVariants, 
  itemVariants 
}) {
  return (
    <section className="py-20 bg-vnsLight text-vnsDark border-t border-vnsDark/10">
      <div className="max-width-container mx-auto px-5 lg:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {roomsData.map((room) => (
            <motion.div 
              key={room.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              className="bg-vnsSurface border border-vnsBorder rounded-vns overflow-hidden group hover:border-vnsAccent/40 transition-all duration-300 flex flex-col shadow-lg cursor-default"
            >
              {/* Photo Container */}
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Price badge overlay */}
                <div className="absolute top-4 left-4 bg-vnsBg/90 border border-vnsAccent/30 text-vnsText-primary px-3.5 py-1.5 rounded-vns shadow-md">
                  <p className="font-heading text-[10px] text-vnsAccent font-bold uppercase tracking-wider leading-none">Starting AC Rent</p>
                  <p className="font-heading text-lg font-bold text-vnsText-primary leading-none mt-1">₹{room.price}<span className="text-xs font-normal text-vnsText-secondary font-body">/mo</span></p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow gap-5">
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-heading text-2xl font-bold text-vnsText-primary group-hover:text-vnsAccent transition-colors">{room.name}</h3>
                  <p className="font-body text-xs text-vnsText-secondary leading-relaxed">{room.description}</p>
                </div>

                {/* Rent Matrix Comparison */}
                <div className="bg-vnsBg border border-vnsBorder rounded-vns p-4 flex justify-between items-center shadow-inner text-vnsText-primary">
                  <div>
                    <span className="font-body text-[9px] text-vnsAccent uppercase font-bold tracking-wider">AC Rent</span>
                    <p className="font-heading text-lg font-bold text-vnsText-primary mt-0.5">₹{room.price}<span className="text-xs font-normal text-vnsText-secondary font-body">/mo</span></p>
                  </div>
                  <div className="w-[1px] h-8 bg-vnsBorder"></div>
                  <div className="text-right">
                    <span className="font-body text-[9px] text-vnsText-secondary uppercase font-bold tracking-wider">Non-AC Rent</span>
                    <p className="font-heading text-lg font-bold text-vnsText-primary mt-0.5">₹{room.nonAcPrice}<span className="text-xs font-normal text-vnsText-secondary font-body">/mo</span></p>
                  </div>
                </div>

                {/* Inclusions list */}
                <div className="flex flex-col gap-3">
                  <h4 className="font-heading font-bold text-vnsText-primary text-xs uppercase tracking-wider border-b border-vnsBorder/40 pb-1.5">Room Inclusions</h4>
                  <ul className="flex flex-col gap-2">
                    {room.features.map((feat, idx) => (
                      <li key={idx} className="flex gap-2 items-center text-xs text-vnsText-secondary">
                        <Check className="w-3.5 h-3.5 text-vnsAccent shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp Action */}
                <button 
                  onClick={() => handleWhatsAppInquiry(room.name)}
                  className="w-full flex items-center justify-center gap-2 bg-vnsBg hover:bg-vnsCardHover text-vnsText-primary py-3.5 rounded-vns border border-vnsBorder hover:border-vnsAccent transition-all duration-300 font-heading text-xs font-semibold uppercase tracking-wider mt-auto"
                >
                  <MessageCircle className="w-4 h-4 text-vnsAccent fill-current" />
                  <span>Inquire Now</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
