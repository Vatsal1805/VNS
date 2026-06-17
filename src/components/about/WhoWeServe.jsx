import { motion } from 'framer-motion';
import DynamicIcon from '../DynamicIcon';

export default function WhoWeServe({ 
  targetColleges, 
  containerVariants, 
  itemVariants, 
  textEntranceVariants 
}) {
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
          <span className="font-heading text-xs font-semibold uppercase tracking-widest text-vnsDark/60">Our Commute Scope</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-vnsDark">
            Who We Serve
          </h2>
          <div className="h-[2px] w-12 bg-vnsDark mx-auto mt-2"></div>
        </motion.div>

        {/* Responsive Badges Grid: 2 cols on mobile, 4 cols on desktop */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {targetColleges.map((college, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.05)" }}
              className="bg-vnsText-primary border border-vnsDark/10 rounded-vns p-5 flex flex-col items-center text-center gap-3 hover:border-vnsDark/20 transition-all duration-200 cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-vnsLight/60 flex items-center justify-center text-vnsDark transition-transform group-hover:scale-105">
                <DynamicIcon name={college.icon} className="w-5 h-5 text-vnsDark" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-vnsDark leading-tight">{college.name}</h4>
                <p className="font-body text-[10px] text-vnsDark/60 mt-1 font-semibold uppercase tracking-wider">{college.distance}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
