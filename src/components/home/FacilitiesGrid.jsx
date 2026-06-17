import { motion } from 'framer-motion';
import DynamicIcon from '../DynamicIcon';

export default function FacilitiesGrid({ amenitiesList }) {
  return (
    <section className="py-20 bg-vnsBg text-vnsText-primary">
      <div className="max-width-container mx-auto px-5 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-2">
          <span className="font-heading text-xs font-semibold uppercase tracking-widest text-vnsAccent">Modern Amenities</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-vnsText-primary">
            Everything You Need.<br />All In One Place.
          </h2>
          <div className="h-[2px] w-12 bg-vnsAccent mx-auto mt-2"></div>
        </div>

        {/* Grid Container */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 items-stretch"
        >
          {/* Row 1 (5 items) */}
          {amenitiesList.slice(0, 5).map((amenity) => (
            <motion.div 
              key={amenity.id}
              whileHover={{ y: -3, scale: 1.02, border: "1px solid rgba(201, 147, 58, 0.3)" }}
              className="bg-vnsSurface border border-vnsBorder rounded-vns p-4 md:p-6 flex flex-col gap-2 md:gap-3 group transition-all shadow-sm cursor-default"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-vns bg-vnsBg border border-vnsBorder flex items-center justify-center text-vnsText-primary group-hover:text-vnsAccent group-hover:border-vnsAccent/30 group-hover:rotate-6 transition-all shrink-0">
                <DynamicIcon name={amenity.icon} className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <h4 className="font-heading font-semibold text-vnsText-primary text-xs md:text-sm mt-1">{amenity.name}</h4>
              <p className="font-body text-[10px] md:text-xs text-vnsText-secondary leading-relaxed">{amenity.desc}</p>
            </motion.div>
          ))}

          {/* Row 2 - Column 1 */}
          <motion.div 
            whileHover={{ y: -3, scale: 1.02, border: "1px solid rgba(201, 147, 58, 0.3)" }}
            className="bg-vnsSurface border border-vnsBorder rounded-vns p-4 md:p-6 flex flex-col gap-2 md:gap-3 group transition-all shadow-sm cursor-default"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-vns bg-vnsBg border border-vnsBorder flex items-center justify-center text-vnsText-primary group-hover:text-vnsAccent group-hover:border-vnsAccent/30 group-hover:rotate-6 transition-all shrink-0">
              <DynamicIcon name={amenitiesList[5].icon} className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <h4 className="font-heading font-semibold text-vnsText-primary text-xs md:text-sm mt-1">{amenitiesList[5].name}</h4>
            <p className="font-body text-[10px] md:text-xs text-vnsText-secondary leading-relaxed">{amenitiesList[5].desc}</p>
          </motion.div>

          {/* Row 2 - Columns 2, 3 & 4 (Merged center card) */}
          <div className="bg-gradient-to-br from-vnsPrimary/85 to-[#2A1608]/95 border border-vnsAccent rounded-vns p-4 md:p-6 flex flex-col items-center justify-center text-center shadow-lg min-h-[140px] md:min-h-[180px] md:col-span-3 col-span-2">
            <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-12 md:h-12 text-vnsAccent fill-current mb-2 md:mb-3">
              <path d="M12 2C11.5 2 6 4 6 9c0 5.5 4.5 9.5 5.7 10.7.2.2.4.3.3.3s.1-.1.3-.3C13.5 18.5 18 14.5 18 9c0-5-5.5-7-6-7zm0 15c-3.1-2.9-6-6.6-6-9 0-3.1 3-4.4 6-5.1 3 .7 6 2 6 5.1 0 2.4-2.9 6.1-6 9z" />
              <path d="M12 6a3 3 0 100 6 3 3 0 000-6z" />
            </svg>
            <h3 className="font-heading text-sm md:text-lg font-bold text-vnsText-primary uppercase tracking-wider">Amenities By VNS</h3>
            <p className="font-body text-[9px] md:text-[10px] text-vnsAccent tracking-widest uppercase mt-0.5 md:mt-1">Curated For Student Life</p>
          </div>

          {/* Row 2 - Column 5 */}
          <motion.div 
            whileHover={{ y: -3, scale: 1.02, border: "1px solid rgba(201, 147, 58, 0.3)" }}
            className="bg-vnsSurface border border-vnsBorder rounded-vns p-4 md:p-6 flex flex-col gap-2 md:gap-3 group transition-all shadow-sm cursor-default"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-vns bg-vnsBg border border-vnsBorder flex items-center justify-center text-vnsText-primary group-hover:text-vnsAccent group-hover:border-vnsAccent/30 group-hover:rotate-6 transition-all shrink-0">
              <DynamicIcon name={amenitiesList[6].icon} className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <h4 className="font-heading font-semibold text-vnsText-primary text-xs md:text-sm mt-1">{amenitiesList[6].name}</h4>
            <p className="font-body text-[10px] md:text-xs text-vnsText-secondary leading-relaxed">{amenitiesList[6].desc}</p>
          </motion.div>

          {/* Row 3 (Remaining items) */}
          {amenitiesList.slice(7).map((amenity) => (
            <motion.div 
              key={amenity.id}
              whileHover={{ y: -3, scale: 1.02, border: "1px solid rgba(201, 147, 58, 0.3)" }}
              className="bg-vnsSurface border border-vnsBorder rounded-vns p-4 md:p-6 flex flex-col gap-2 md:gap-3 group transition-all shadow-sm cursor-default"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-vns bg-vnsBg border border-vnsBorder flex items-center justify-center text-vnsText-primary group-hover:text-vnsAccent group-hover:border-vnsAccent/30 group-hover:rotate-6 transition-all shrink-0">
                <DynamicIcon name={amenity.icon} className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <h4 className="font-heading font-semibold text-vnsText-primary text-xs md:text-sm mt-1">{amenity.name}</h4>
              <p className="font-body text-[10px] md:text-xs text-vnsText-secondary leading-relaxed">{amenity.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
