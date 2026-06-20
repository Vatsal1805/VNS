import { motion } from 'framer-motion';
import { Shield, AlertCircle } from 'lucide-react';

export default function StayInclusions({ leftSlideVariants, rightSlideVariants }) {
  return (
    <section className="py-20 bg-vnsBg text-vnsText-primary border-y border-vnsBorder">
      <div className="max-width-container mx-auto px-5 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-2">
          <span className="font-heading text-xs font-semibold uppercase tracking-widest text-vnsAccent">Campus Transparency</span>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-vnsText-primary">
            Inclusions & Policies
          </h2>
          <p className="font-body text-xs text-vnsText-secondary leading-relaxed mt-1">
            We maintain absolute transparency. Here is exactly what is covered in your stay and what is billed separately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Included Box (Slides left) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={leftSlideVariants}
            whileHover={{ y: -3, scale: 1.01 }}
            className="bg-vnsSurface border border-vnsBorder rounded-vns p-8 flex flex-col gap-5 shadow-sm transition-all duration-300"
          >
            <h4 className="font-heading font-bold text-vnsText-primary text-lg uppercase tracking-wider border-b border-vnsBorder/40 pb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-vnsAccent" />
              Included In Stay
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-vnsText-secondary">
              <li className="flex gap-3 items-center">
                <span className="w-2 h-2 rounded-full bg-vnsAccent shrink-0"></span>
                <span><strong>3 Homestyle Meals Daily</strong> (Breakfast, Lunch, Dinner served hot)</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-2 h-2 rounded-full bg-vnsAccent shrink-0"></span>
                <span><strong>High-Speed WiFi</strong> (100 Mbps campus-wide connection)</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-2 h-2 rounded-full bg-vnsAccent shrink-0"></span>
                <span><strong>Daily Housekeeping</strong> (Rooms and washrooms cleaned daily)</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-2 h-2 rounded-full bg-vnsAccent shrink-0"></span>
                <span><strong>Hot Water & Laundry</strong> (24/7 geysers and weekly laundry cycles)</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-2 h-2 rounded-full bg-vnsAccent shrink-0"></span>
                <span><strong>RO Drinking Water</strong> (Industrial filtration cooler on each floor)</span>
              </li>
            </ul>
          </motion.div>

          {/* Excluded Box (Slides right) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={rightSlideVariants}
            whileHover={{ y: -3, scale: 1.01 }}
            className="bg-vnsSurface border border-vnsBorder rounded-vns p-8 flex flex-col gap-5 shadow-sm transition-all duration-300"
          >
            <h4 className="font-heading font-bold text-vnsText-primary text-lg uppercase tracking-wider border-b border-vnsBorder/40 pb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-vnsAccent" />
              Not Included (Extra)
            </h4>
            <div className="flex flex-col gap-4">
              <p className="font-body text-xs text-vnsText-secondary leading-relaxed">
                <strong>Room Electricity Consumption:</strong> For fairness, all rooms feature an independent digital sub-meter. Common area electricity is covered by us, but you pay only for the units consumed in your specific room.
              </p>
              <div className="bg-vnsBg/50 border border-vnsBorder p-4 rounded-vns">
                <h5 className="font-heading font-semibold text-xs text-vnsAccent uppercase tracking-wider">Why we do this:</h5>
                <p className="font-body text-[11px] text-vnsText-secondary leading-relaxed mt-1">
                  This stops students who don't use AC from subsidizing the bills of students who leave ACs running 24/7. It encourages energy saving and guarantees fair costs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
