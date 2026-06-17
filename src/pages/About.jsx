import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, Sparkles, Coffee, BookOpen, Award, Users, 
  GraduationCap, School, Bus, HeartPulse, 
  Phone, MessageCircle, Check, Quote
} from 'lucide-react';
import { 
  CONTACT_INFO, facadeImg, lobbyImg, sportsImg, diningImg 
} from '../config';

export default function About() {
  const [activeEnvTab, setActiveEnvTab] = useState(0);

  // Animation Variants for Staggered Grids
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 15 }
    }
  };

  const textEntranceVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 14, duration: 0.6 }
    }
  };

  const leftSlideVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 14 }
    }
  };

  const rightSlideVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 14 }
    }
  };

  const coreValues = [
    {
      title: "Absolute Safety",
      desc: "Gate access logs, 24/7 CCTV monitoring, and strict 10:00 PM curfew managed by on-site warden.",
      icon: Shield
    },
    {
      title: "Clean Hygiene",
      desc: "Daily professional housekeeping for rooms, clean toilets, and sanitization of common spaces.",
      icon: Sparkles
    },
    {
      title: "Nutritious Meals",
      desc: "In-house vegetarian mess serving healthy, fresh food prepared with high-grade RO water.",
      icon: Coffee
    },
    {
      title: "Study Discipline",
      desc: "Peaceful environment with dedicated quiet study desks to support academic focus and growth.",
      icon: BookOpen
    }
  ];

  const envTabs = [
    {
      title: "Cooler Interiors",
      desc: "Built with 10ft+ high ceilings that allow hot air to rise, keeping rooms naturally cooler during summer.",
      image: facadeImg,
      badge: "❄️ Smart Architecture"
    },
    {
      title: "Hygienic RO Grid",
      desc: "Centralized commercial RO filtration plants installed on every floor, tested monthly for absolute purity.",
      image: diningImg,
      badge: "💧 Pure Drinking Water"
    },
    {
      title: "Sports & Recreation",
      desc: "Open spaces and play areas that encourage physical fitness, bonding, and healthy relaxation after study hours.",
      image: sportsImg,
      badge: "⚽ Active Student Life"
    }
  ];

  const targetColleges = [
    { name: "Parul University", distance: "2 Km away", icon: GraduationCap },
    { name: "Sumandeep Vidyapeeth", distance: "2 Km away", icon: School },
    { name: "Dhiraj Hospital Interns", distance: "2 Km away", icon: HeartPulse },
    { name: "Waghodia Road Colleges", distance: "Nearby Area", icon: Bus }
  ];

  return (
    <div className="overflow-x-hidden bg-vnsBg text-vnsText-primary font-body">
      
      {/* 1. HERO SECTION (Centered Flow, Parallax Tinted Zoom, Dot Overlay) */}
      <section className="relative min-h-[75vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        {/* Cinematic zoom background */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            className="absolute inset-0 bg-cover bg-center hero-bg-enhanced"
            style={{ backgroundImage: `url(${facadeImg})` }}
            animate={{ scale: [1, 1.05] }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-vnsBg via-vnsBg/50 to-transparent"></div>
          <div className="absolute inset-0 bg-vnsBg/40"></div>
          {/* Dot Pattern Overlay */}
          <div className="absolute inset-0 bg-dot-pattern opacity-[0.25] pointer-events-none"></div>
        </div>

        {/* Hero Content */}
        <div className="max-width-container mx-auto px-5 lg:px-12 z-10 text-center flex flex-col items-center gap-5 max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs lg:text-sm font-semibold tracking-widest text-vnsAccent uppercase border border-vnsAccent/20 bg-vnsAccent/5 px-4 py-1.5 rounded-full"
          >
            Established 2013
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-vnsText-primary leading-[1.15]"
          >
            Our Legacy.<br />Your Peace of Mind.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-sm sm:text-base md:text-lg text-vnsText-secondary max-w-2xl leading-relaxed"
          >
            Providing a secure, structured, and nurturing ecosystem in Vadodara for over a decade. Built on trust, maintained with discipline, and loved by students.
          </motion.p>
        </div>
      </section>

      {/* 2. OUR STORY & MISSION (Light Sand Background, Two-Column Narrative) */}
      <section className="py-20 bg-vnsLight text-vnsDark border-t border-vnsDark/10">
        <div className="max-width-container mx-auto px-5 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Story Text */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={leftSlideVariants}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <span className="font-heading text-xs font-semibold uppercase tracking-widest text-vnsDark/60">Our Story & Mission</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-vnsDark leading-tight">
                A Hostel Created Out Of Real Purpose
              </h2>
            </div>
            
            <p className="font-body text-sm text-vnsDark/80 leading-relaxed">
              In 2013, Vraj Nidhi Samanvay (VNS) Hostel was founded with a singular focus: to address the daily struggles of students living far from home. We recognized that most PGs and hostels in Waghodia were converted residential spaces, lacking safety infrastructure, clean dining, and structural cooling.
            </p>
            <p className="font-body text-sm text-vnsDark/80 leading-relaxed">
              Our mission is to provide a dedicated, purpose-built housing facility that eliminates home-sickness and structural stresses. By offering professional security, daily housekeeping, RO filtration, and nutritious food, we allow boys to focus entirely on their studies and career goals.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-vnsDark/5 flex items-center justify-center text-vnsDark shrink-0">
                  <Award className="w-4 h-4 text-vnsDark" />
                </div>
                <span className="font-heading font-bold text-xs uppercase tracking-wider text-vnsDark">12+ Years Legacy</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-vnsDark/5 flex items-center justify-center text-vnsDark shrink-0">
                  <Users className="w-4 h-4 text-vnsDark" />
                </div>
                <span className="font-heading font-bold text-xs uppercase tracking-wider text-vnsDark">1000+ Alumni</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column Lobby Image */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={rightSlideVariants}
            className="lg:col-span-5 h-64 sm:h-80 md:h-[400px] rounded-vns overflow-hidden border border-vnsDark/10 shadow-lg relative"
          >
            <img 
              src={lobbyImg} 
              alt="VNS Hostel Lobby Area" 
              className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. WHAT WE BELIEVE IN (Deep Chocolate Background, 4-Column Grid) */}
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
            {coreValues.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 25px -5px rgba(201, 147, 58, 0.08)" }}
                  className="bg-vnsSurface border border-vnsBorder rounded-vns p-5 md:p-6 flex flex-col gap-3 group hover:border-vnsAccent/30 transition-all shadow-sm cursor-default"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-vns bg-vnsBg border border-vnsBorder flex items-center justify-center text-vnsText-primary group-hover:text-vnsAccent group-hover:border-vnsAccent/30 group-hover:rotate-6 transition-all shrink-0">
                    <IconComponent className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <h4 className="font-heading font-semibold text-vnsText-primary text-xs md:text-sm mt-1">{value.title}</h4>
                  <p className="font-body text-[10px] md:text-xs text-vnsText-secondary leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 4. MANAGEMENT & CARE (Light Sand Background, Side-by-Side Profiles) */}
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

      {/* 5. OUR HOSTEL ENVIRONMENT (Deep Chocolate Background, Interactive Tabs) */}
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
                  <li className="flex items-center gap-2 text-xs text-vnsAccent font-semibold animate-fade-in">
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

      {/* 6. WHO WE SERVE (Light Sand Background, minimal grid) */}
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
            {targetColleges.map((college, idx) => {
              const IconComponent = college.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.05)" }}
                  className="bg-vnsText-primary border border-vnsDark/10 rounded-vns p-5 flex flex-col items-center text-center gap-3 hover:border-vnsDark/20 transition-all duration-200 cursor-default"
                >
                  <div className="w-10 h-10 rounded-full bg-vnsLight/60 flex items-center justify-center text-vnsDark transition-transform group-hover:scale-105">
                    <IconComponent className="w-5 h-5 text-vnsDark" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-vnsDark leading-tight">{college.name}</h4>
                    <p className="font-body text-[10px] text-vnsDark/60 mt-1 font-semibold uppercase tracking-wider">{college.distance}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 7. PRE-FOOTER CALL TO ACTION (Deep Chocolate Background) */}
      <section className="py-16 bg-gradient-to-br from-vnsSurface to-vnsBg border-t border-vnsBorder relative overflow-hidden">
        <div className="max-width-container mx-auto px-5 lg:px-12 text-center flex flex-col items-center gap-6 relative z-10 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
            className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight text-vnsText-primary leading-tight"
          >
            Book A Visit & Tour Our Campus Today
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.1 }}
            className="font-body text-xs sm:text-sm text-vnsText-secondary leading-relaxed"
          >
            Witness the secure gates, hygienic dining facilities, and peaceful room settings first-hand. Call Warden Uncle to schedule your visit.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto"
          >
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%20VNS%20Hostel,%20I'm%20interested%20in%20visiting%20your%20campus.`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-vnsAccent to-[#D4A853] text-vnsBg px-8 py-3.5 rounded-vns font-heading text-sm font-semibold tracking-wider hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span className="uppercase tracking-wider">Schedule On WhatsApp</span>
            </a>
            <a 
              href={`tel:${CONTACT_INFO.phone}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent hover:bg-vnsBg/30 text-vnsText-primary px-8 py-3.5 rounded-vns border border-vnsText-primary/20 transition-colors"
            >
              <Phone className="w-4 h-4 text-vnsAccent" />
              <span className="font-heading text-sm font-semibold tracking-wider uppercase">Call Warden Uncle</span>
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
