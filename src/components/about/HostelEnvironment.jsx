import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

export default function HostelEnvironment({ 
  envTabs, 
  activeEnvTab, 
  setActiveEnvTab, 
  leftSlideVariants, 
  rightSlideVariants 
}) {
  return (
    <section className="py-20 bg-vnsBg text-vnsText-primary">
      <div className="max-width-container mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Tab selectors & details */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={leftSlideVariants}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <span className="font-heading text-xs font-semibold uppercase tracking-widest text-vnsAccent">Purpose-Built Advantage</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-vnsText-primary leading-tight">
                Designed Specifically For Student Life
              </h2>
            </div>
            
            {/* Apple-Style Sliding Pill Tab Bar */}
            <div className="relative flex flex-col sm:flex-row bg-vnsSurface border border-vnsBorder p-1 rounded-vns w-full gap-1">
              {envTabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveEnvTab(idx)}
                  className={`relative px-4 py-2.5 rounded-vns font-heading text-xs font-bold uppercase tracking-wider transition-all duration-300 w-full text-center z-10 ${
                    activeEnvTab === idx
                      ? 'text-vnsBg font-extrabold'
                      : 'text-vnsText-secondary hover:text-vnsText-primary font-bold'
                  }`}
                >
                  {activeEnvTab === idx && (
                    <motion.div
                      layoutId="activeEnvTabPill"
                      className="absolute inset-0 bg-vnsAccent rounded-vns z-[-1]"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Tab content panel */}
            <div className="flex flex-col gap-3 min-h-[120px]">
              <p className="font-body text-sm text-vnsText-secondary leading-relaxed">
                {envTabs[activeEnvTab].desc}
              </p>
              <ul className="flex flex-col gap-2 mt-1">
                <li className="flex items-center gap-2 text-xs text-vnsAccent font-semibold">
                  <Check className="w-3.5 h-3.5" />
                  <span>{envTabs[activeEnvTab].badge}</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-vnsText-secondary">
                  <Check className="w-3.5 h-3.5 text-vnsAccent" />
                  <span>Designed for high-traffic hygiene standards</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Tab Image Display with cross-fade */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={rightSlideVariants}
            className="lg:col-span-6"
          >
            <div className="relative rounded-vns overflow-hidden border border-vnsBorder shadow-xl h-64 sm:h-80 md:h-[360px] w-full">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeEnvTab}
                  src={envTabs[activeEnvTab].image}
                  alt={envTabs[activeEnvTab].title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="w-full h-full object-cover absolute inset-0 hover:scale-[1.03] transition-transform duration-700"
                />
              </AnimatePresence>
              {/* Absolute overlay indicator */}
              <div className="absolute top-4 right-4 bg-vnsBg/90 backdrop-blur-sm border border-vnsAccent/30 px-3 py-1.5 rounded-vns text-[10px] text-vnsText-primary font-heading font-semibold shadow-sm pointer-events-none uppercase tracking-wider">
                {envTabs[activeEnvTab].title}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
