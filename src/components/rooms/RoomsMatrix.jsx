import { motion } from 'framer-motion';

const MATRIX_ROWS = [
  { metric: "AC Rent (Monthly)", triple: "₹6,500", double: "₹8,500", single: "₹12,000" },
  { metric: "Non-AC Rent (Monthly)", triple: "₹5,500", double: "₹7,200", single: "₹10,000" },
  { metric: "Privacy Level", triple: "Shared (3 Residents)", double: "Moderate (2 Residents)", single: "High (Private Room)" },
  { metric: "Study Desk", triple: "Personal desk per resident", double: "Personal desk per resident", single: "Executive desk & workspace" },
  { metric: "Wardrobe Size", triple: "Personal locker cabinet", double: "Personal locker cabinet", single: "Double-door steel wardrobe" },
  { metric: "AC Unit Type", triple: "Split AC (1.5 Ton)", double: "Split AC (1.5 Ton)", single: "Split AC (1.0 Ton)" },
];

export default function RoomsMatrix({ textEntranceVariants }) {
  return (
    <section className="py-20 bg-vnsLight text-vnsDark border-t border-vnsDark/10">
      <div className="max-width-container mx-auto px-5 lg:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textEntranceVariants}
          className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-2"
        >
          <span className="font-heading text-xs font-semibold uppercase tracking-widest text-vnsDark/70">Compare Specs</span>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-vnsDark">
            Room Sharing Matrix
          </h2>
          <p className="font-body text-xs text-vnsDark/70 leading-relaxed mt-1">
            Compare all three sharing options to find the perfect fit for your budget and privacy.
          </p>
        </motion.div>

        {/* ===== DESKTOP TABLE (hidden on mobile) ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="hidden md:block max-w-4xl mx-auto rounded-vns border border-vnsDark/10 shadow-xl overflow-hidden"
        >
          <table className="w-full text-left border-collapse bg-vnsText-primary font-body text-xs text-vnsDark/80">
            <thead>
              <tr className="bg-vnsLight/80 border-b border-vnsDark/15 text-vnsDark font-heading uppercase text-[10px] tracking-widest">
                <th className="p-5">Metric</th>
                <th className="p-5">Triple Sharing</th>
                <th className="p-5">Double Sharing</th>
                <th className="p-5">Single Occupancy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-vnsDark/10">
              {MATRIX_ROWS.map((row, idx) => (
                <tr key={idx} className="hover:bg-vnsDark/5 transition-colors duration-150">
                  <td className="p-5 font-semibold text-vnsDark">{row.metric}</td>
                  <td className="p-5">{row.triple}</td>
                  <td className="p-5">{row.double}</td>
                  <td className="p-5">{row.single}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* ===== MOBILE CARD LAYOUT (hidden on desktop) ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="md:hidden flex flex-col gap-5"
        >
          {/* Triple Sharing Card */}
          <div className="bg-vnsText-primary border border-vnsDark/10 rounded-vns shadow-lg overflow-hidden">
            <div className="bg-vnsDark text-vnsText-primary px-5 py-3.5 flex items-center justify-between">
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider">Triple Sharing</h3>
              <span className="font-heading font-extrabold text-vnsAccent text-sm">₹6,500<span className="text-[10px] font-normal text-vnsText-secondary">/mo</span></span>
            </div>
            <div className="divide-y divide-vnsDark/10">
              {MATRIX_ROWS.slice(1).map((row, idx) => (
                <div key={idx} className="flex justify-between items-center px-5 py-3.5">
                  <span className="font-heading font-semibold text-[11px] text-vnsDark uppercase tracking-wide">{row.metric}</span>
                  <span className="font-body text-xs text-vnsDark/75 text-right max-w-[55%]">{row.triple}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Double Sharing Card */}
          <div className="bg-vnsText-primary border border-vnsAccent/40 rounded-vns shadow-lg overflow-hidden ring-2 ring-vnsAccent/20">
            <div className="bg-gradient-to-r from-vnsAccent to-[#D4A853] text-vnsBg px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-bold text-sm uppercase tracking-wider">Double Sharing</h3>
                <span className="text-[9px] font-heading font-bold bg-vnsBg/20 text-vnsBg px-2 py-0.5 rounded-full uppercase tracking-wider">Popular</span>
              </div>
              <span className="font-heading font-extrabold text-vnsBg text-sm">₹8,500<span className="text-[10px] font-normal text-vnsBg/70">/mo</span></span>
            </div>
            <div className="divide-y divide-vnsDark/10">
              {MATRIX_ROWS.slice(1).map((row, idx) => (
                <div key={idx} className="flex justify-between items-center px-5 py-3.5">
                  <span className="font-heading font-semibold text-[11px] text-vnsDark uppercase tracking-wide">{row.metric}</span>
                  <span className="font-body text-xs text-vnsDark/75 text-right max-w-[55%]">{row.double}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Single Occupancy Card */}
          <div className="bg-vnsText-primary border border-vnsDark/10 rounded-vns shadow-lg overflow-hidden">
            <div className="bg-vnsDark text-vnsText-primary px-5 py-3.5 flex items-center justify-between">
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider">Single Occupancy</h3>
              <span className="font-heading font-extrabold text-vnsAccent text-sm">₹12,000<span className="text-[10px] font-normal text-vnsText-secondary">/mo</span></span>
            </div>
            <div className="divide-y divide-vnsDark/10">
              {MATRIX_ROWS.slice(1).map((row, idx) => (
                <div key={idx} className="flex justify-between items-center px-5 py-3.5">
                  <span className="font-heading font-semibold text-[11px] text-vnsDark uppercase tracking-wide">{row.metric}</span>
                  <span className="font-body text-xs text-vnsDark/75 text-right max-w-[55%]">{row.single}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
