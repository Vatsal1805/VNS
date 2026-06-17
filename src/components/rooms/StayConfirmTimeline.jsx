import { motion } from 'framer-motion';
import DynamicIcon from '../DynamicIcon';

export default function StayConfirmTimeline({ 
  timelineSteps, 
  containerVariants, 
  itemVariants 
}) {
  return (
    <section className="py-20 bg-vnsLight text-vnsDark border-y border-vnsDark/10">
      <div className="max-width-container mx-auto px-5 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-2">
          <span className="font-heading text-xs font-semibold uppercase tracking-widest text-vnsDark/70">Onboarding</span>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-vnsDark">
            How to Confirm Your Stay
          </h2>
          <p className="font-body text-xs text-vnsDark/70 leading-relaxed mt-1">
            Follow these simple steps to secure your premium student room configuration.
          </p>
        </div>

        {/* Timeline Step-by-step Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto relative"
        >
          {timelineSteps.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-vnsText-primary border border-vnsDark/10 rounded-vns p-6 flex flex-col gap-4 relative shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
            >
              <div className="flex justify-between items-center">
                <span className="font-heading font-extrabold text-2xl text-vnsDark/15 leading-none">{item.step}</span>
                <div className="w-9 h-9 rounded-full bg-vnsLight/60 border border-vnsDark/5 flex items-center justify-center text-vnsDark shadow-inner">
                  <DynamicIcon name={item.icon} className="w-4 h-4 text-vnsDark" />
                </div>
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-vnsDark uppercase tracking-wider">{item.title}</h4>
                <p className="font-body text-xs text-vnsDark/70 mt-2 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
