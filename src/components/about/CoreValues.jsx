import { motion } from 'framer-motion';
import DynamicIcon from '../DynamicIcon';

export default function CoreValues({ 
  coreValues, 
  containerVariants, 
  itemVariants, 
  textEntranceVariants 
}) {
  return (
    <section className="py-20 bg-vnsBg text-vnsText-primary">
      <div className="max-width-container mx-auto px-5 lg:px-12">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textEntranceVariants}
          className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-2"
        >
          <span className="font-heading text-xs font-semibold uppercase tracking-widest text-vnsAccent">Core Beliefs</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-vnsText-primary">
            What We Believe In
          </h2>
          <div className="h-[2px] w-12 bg-vnsAccent mx-auto mt-2"></div>
        </motion.div>

        {/* Staggered Grid: 2-column mobile, 4-column desktop */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {coreValues.map((value, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 25px -5px rgba(201, 147, 58, 0.08)" }}
              className="bg-vnsSurface border border-vnsBorder rounded-vns p-5 md:p-6 flex flex-col gap-3 group hover:border-vnsAccent/30 transition-all shadow-sm cursor-default"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-vns bg-vnsBg border border-vnsBorder flex items-center justify-center text-vnsText-primary group-hover:text-vnsAccent group-hover:border-vnsAccent/30 group-hover:rotate-6 transition-all shrink-0">
                <DynamicIcon name={value.icon} className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <h4 className="font-heading font-semibold text-vnsText-primary text-xs md:text-sm mt-1">{value.title}</h4>
              <p className="font-body text-[10px] md:text-xs text-vnsText-secondary leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
