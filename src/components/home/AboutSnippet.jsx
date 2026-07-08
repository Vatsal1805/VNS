import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

export default function AboutSnippet({ 
  facadeImg, 
  lobbyImg, 
  sportsImg, 
  leftSlideVariants, 
  rightSlideVariants 
}) {
  return (
    <section className="py-20 bg-vnsBg text-vnsText-primary">
      <div className="max-width-container mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={leftSlideVariants}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <span className="font-heading text-xs font-semibold uppercase tracking-widest text-vnsAccent">About VNS Hostel</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-vnsText-primary">
                More Than A Hostel.<br />A Place to Grow.
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-vnsText-secondary leading-relaxed">
              VNS Hostel has become a trusted choice for students and parents seeking quality accommodation. We understand that moving away from home is a significant step, which is why we focus on creating a secure, friendly, and supportive community where students can thrive academically and personally.
            </p>
            
            {/* Core Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-vnsAccent/10 border border-vnsAccent/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-vnsAccent" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-vnsText-primary text-sm">Hygienic Rooms</h4>
                  <p className="font-body text-xs text-vnsText-secondary mt-1">Clean, split AC rooms cleaned daily.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-vnsAccent/10 border border-vnsAccent/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-vnsAccent" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-vnsText-primary text-sm">Trusted By Parents</h4>
                  <p className="font-body text-xs text-vnsText-secondary mt-1">Professional security & biometric gates.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-vnsAccent/10 border border-vnsAccent/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-vnsAccent" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-vnsText-primary text-sm">Study Focused Environment</h4>
                  <p className="font-body text-xs text-vnsText-secondary mt-1">Peaceful study desks & curfew discipline.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-vnsAccent/10 border border-vnsAccent/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-vnsAccent" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-vnsText-primary text-sm">Cultural Celebrations</h4>
                  <p className="font-body text-xs text-vnsText-secondary mt-1">Festivals celebrated like a large family.</p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 bg-vnsSurface hover:bg-vnsCardHover text-vnsText-primary px-6 py-3.5 rounded-vns border border-vnsBorder transition-colors font-heading text-sm font-semibold tracking-wider uppercase"
              >
                Read More About Us
                <ArrowRight className="w-4 h-4 text-vnsAccent" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column Grid Cluster */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={rightSlideVariants}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Top Large Facade Image */}
            <div className="h-64 rounded-vns overflow-hidden border border-vnsBorder shadow-lg">
              <img 
                src={facadeImg} 
                alt="VNS Hostel Building Facade" 
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
            {/* Bottom Two Images Side-by-Side */}
            <div className="grid grid-cols-2 gap-4">
              <div className="h-40 rounded-vns overflow-hidden border border-vnsBorder shadow-md">
                <img 
                  src={lobbyImg} 
                  alt="Lobby receptionist and entrance area" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="h-40 rounded-vns overflow-hidden border border-vnsBorder shadow-md">
                <img 
                  src={sportsImg} 
                  alt="Students playing sports at VNS" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
