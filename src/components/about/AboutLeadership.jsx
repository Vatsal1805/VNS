import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function AboutLeadership({ 
  leftSlideVariants, 
  rightSlideVariants, 
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
          <span className="font-heading text-xs font-semibold uppercase tracking-widest text-vnsDark/60">Hostel Leadership</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-vnsDark">
            Management & Care
          </h2>
          <div className="h-[2px] w-12 bg-vnsDark mx-auto mt-2"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Founder */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={leftSlideVariants}
            whileHover={{ y: -8, scale: 1.01, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.05)" }}
            className="bg-vnsText-primary border border-vnsDark/10 rounded-vns p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start shadow-sm transition-all duration-300"
          >
            <div className="w-20 h-20 rounded-full bg-vnsLight/60 border border-vnsDark/10 flex items-center justify-center font-heading font-extrabold text-xl text-vnsDark shrink-0 shadow-inner group-hover:scale-105 transition-transform">
              FS
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <h4 className="font-heading font-bold text-base text-vnsDark leading-none">Mrs. Falguni Sheth</h4>
                <p className="font-body text-[10px] text-vnsAccent uppercase tracking-widest font-bold mt-1.5">Founder & Director</p>
              </div>
              <div className="flex gap-2">
                <Quote className="w-4 h-4 text-vnsDark/20 shrink-0 transform rotate-180" />
                <p className="font-body text-xs text-vnsDark/80 leading-relaxed italic">
                  "We built VNS on the principles of family. We treat every hostelite like our own son, ensuring they get the security, healthy meals, and environment they need to succeed in their studies."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Warden Uncle */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={rightSlideVariants}
            whileHover={{ y: -8, scale: 1.01, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.05)" }}
            className="bg-vnsText-primary border border-vnsDark/10 rounded-vns p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start shadow-sm transition-all duration-300"
          >
            <div className="w-20 h-20 rounded-full bg-vnsLight/60 border border-vnsDark/10 flex items-center justify-center font-heading font-extrabold text-xl text-vnsDark shrink-0 shadow-inner group-hover:scale-105 transition-transform">
              MP
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <h4 className="font-heading font-bold text-base text-vnsDark leading-none">Mr. Patel</h4>
                <p className="font-body text-[10px] text-vnsAccent uppercase tracking-widest font-bold mt-1.5">On-Site Resident Warden</p>
              </div>
              <div className="flex gap-2">
                <Quote className="w-4 h-4 text-vnsDark/20 shrink-0 transform rotate-180" />
                <p className="font-body text-xs text-vnsDark/80 leading-relaxed italic">
                  "Residing full-time on campus enables me to watch over the boys 24/7. Whether it is ensuring curfew discipline at 10 PM or managing quick responses to emergencies, safety remains our highest priority."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
