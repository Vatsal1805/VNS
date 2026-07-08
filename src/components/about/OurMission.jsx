import { motion } from 'framer-motion';
import { Shield, Award } from 'lucide-react';

export default function OurMission({ textEntranceVariants }) {
  const pillars = [
    {
      num: "01",
      title: "Academic Sanctuary",
      desc: "Dedicated quiet study rooms, high-speed Wi-Fi, and a strict curfew environment — every detail is managed to ensure students can focus on their academics without distractions.",
      isDark: false
    },
    {
      num: "02",
      title: "Shield of Protection",
      desc: "24/7 on-site security, biometric gate entry, CCTV surveillance, and strict visitor management to guarantee complete safety — giving parents full peace of mind.",
      isDark: true
    },
    {
      num: "03",
      title: "Family-Like Bond",
      desc: "A warm, nurturing hostel community where students celebrate festivals, share nutritious meals, build lifelong friendships, and develop independence far from home.",
      isDark: false
    }
  ];

  return (
    <section className="py-24 bg-vnsLight text-vnsDark border-b border-vnsDark/10 relative overflow-hidden">
      {/* Subtle decorative background circles */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-vnsAccent/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-vnsDark/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-width-container mx-auto px-5 lg:px-12">
        {/* Central Header & Bold Statement */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textEntranceVariants}
          className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3"
        >
          <span className="font-heading text-xs font-bold uppercase tracking-widest text-vnsDark/60 border border-vnsDark/10 bg-vnsDark/5 px-4 py-1.5 rounded-full mx-auto">
            Our Core Mission
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-vnsDark mt-2">
            Empowering Students. <br />Reassuring Parents.
          </h2>
          <div className="h-[2px] w-12 bg-vnsAccent mx-auto mt-2"></div>
          <p className="font-body text-sm text-vnsDark/85 leading-relaxed max-w-xl mx-auto mt-3">
            To provide a safe, comfortable, and inspiring living environment that empowers students to focus on their education, achieve their goals, and enjoy a memorable hostel experience.
          </p>
        </motion.div>

        {/* Staggered Offset Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-stretch pt-4 pb-12 max-w-6xl mx-auto">
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className={`relative rounded-vns p-8 flex flex-col justify-between border transition-all duration-300 shadow-lg cursor-default group md:hover:-translate-y-1 hover:border-vnsAccent/40 hover:shadow-2xl overflow-hidden ${
                pillar.isDark 
                  ? 'bg-vnsSurface text-vnsText-primary border-vnsAccent/25 md:translate-y-6 md:scale-105 z-10 shadow-2xl' 
                  : 'bg-vnsBg text-vnsText-primary border-vnsBorder'
              }`}
            >
              {/* Gold Top Border accent line */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-vnsAccent rounded-t-vns" />

              <div className="flex flex-col gap-6">
                {/* Card Header (Num only) */}
                <div className="flex justify-between items-center">
                  <span className="font-heading font-extrabold text-3xl tracking-tight text-vnsAccent select-none">
                    {pillar.num}
                  </span>
                </div>

                {/* Title & Desc */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-heading font-extrabold text-lg uppercase tracking-wider text-vnsAccent">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-xs leading-relaxed text-vnsText-secondary">
                    {pillar.desc}
                  </p>
                </div>
              </div>

              {/* Sub-label decoration */}
              <div className={`mt-8 pt-4 border-t text-[10px] uppercase font-bold tracking-widest flex items-center gap-1.5 ${
                pillar.isDark ? 'border-vnsBorder/40 text-vnsAccent' : 'border-vnsBorder/20 text-vnsAccent/80'
              }`}>
                {pillar.isDark ? (
                  <>
                    <Shield className="w-3.5 h-3.5" />
                    <span>VNS Security Shield</span>
                  </>
                ) : (
                  <>
                    <Award className="w-3.5 h-3.5" />
                    <span>Core Value</span>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
