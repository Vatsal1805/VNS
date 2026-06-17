import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Star, Quote, Phone, MessageCircle, 
  MapPin, Check, Wifi, Shield, Users, Award, Coffee,
  Sun, Cookie, Moon, GraduationCap, School, Bus, Utensils
} from 'lucide-react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { 
  CONTACT_INFO, GOOGLE_RATING, ROOMS_DATA, AMENITIES_LIST, 
  GOOGLE_REVIEWS,
  facadeImg, lobbyImg, sportsImg, holiImg, thaliImg, diningImg
} from '../config';

// Helper component to render Lucide icon dynamically
function DynamicIcon({ name, className }) {
  const IconComponent = Icons[name] || Icons.HelpCircle;
  return <IconComponent className={className} />;
}

// CountUp component to animate stats in viewport
function CountUp({ value, duration = 1.2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = parseFloat(value);
    if (isNaN(end)) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = 30; // ms
    const totalSteps = Math.ceil(totalMiliseconds / incrementTime);
    const stepIncrement = (end - start) / totalSteps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      } else {
        const next = start + stepIncrement * currentStep;
        setCount(end % 1 === 0 ? Math.floor(next) : parseFloat(next.toFixed(1)));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// Bento Card Component with Mouse Spotlight hover effect
function BentoCard({ children, className = "" }) {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden rounded-vns border border-vnsBorder bg-vnsSurface p-6 transition-all duration-300 group ${className}`}
    >
      {/* Spotlight overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "radial-gradient(250px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(201, 147, 58, 0.08), transparent 80%)"
        }}
      />
      {/* Spotlight border glow */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-vnsAccent/30 rounded-vns"
        style={{
          maskImage: "radial-gradient(120px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), black 100%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(120px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), black 100%, transparent 100%)"
        }}
      />
      <div className="relative z-10 flex flex-col h-full justify-between gap-4">
        {children}
      </div>
    </div>
  );
}

// Slide Variants for wizard card transitions
const slideVariants = {
  enter: (direction) => ({
    x: direction === 'left' ? 100 : -100,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 180, damping: 20 }
  },
  exit: (direction) => ({
    x: direction === 'left' ? -100 : 100,
    opacity: 0,
    transition: { duration: 0.15 }
  })
};

export default function Home() {
  const [activeLandmarkIndex, setActiveLandmarkIndex] = useState(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Interactive Inquiry Wizard States
  const [wizardStep, setWizardStep] = useState(1);
  const [wizardDirection, setWizardDirection] = useState('right');
  const [studentName, setStudentName] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [roomInterest, setRoomInterest] = useState('Triple Sharing AC');
  const [wizardError, setWizardError] = useState('');

  // Animation Variants
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 15 }
    }
  };



  const leftSlideVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 14 }
    }
  };

  const rightSlideVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 14 }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % GOOGLE_REVIEWS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppInquiry = (roomType) => {
    const message = encodeURIComponent(`Hi VNS Hostel, I'm interested in booking a ${roomType} AC Room. Can you share availability details?`);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="overflow-x-hidden bg-vnsBg text-vnsText-primary">
      
      {/* 1. HERO SECTION (Centered Flow, Tinted Dark Overlay) */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
        {/* Cinematic Ken Burns Background Zoom with Image Enhancements */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            className="absolute inset-0 bg-cover bg-center hero-bg-enhanced"
            style={{ backgroundImage: `url(${facadeImg})` }}
            animate={{ scale: [1, 1.05] }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          {/* Dark overlay with lower opacity to show the building background clearly and support future video */}
          <div className="absolute inset-0 bg-gradient-to-t from-vnsBg via-vnsBg/55 to-transparent"></div>
          <div className="absolute inset-0 bg-vnsBg/45"></div>
          {/* Premium Dot Pattern Overlay to mask low-res blur */}
          <div className="absolute inset-0 bg-dot-pattern opacity-[0.25] pointer-events-none"></div>
        </div>

        {/* Hero Content */}
        <div className="max-width-container mx-auto px-5 lg:px-12 z-10 text-center flex flex-col items-center gap-6 max-w-4xl">
          {/* Tagline Badge */}
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 15 }}
            className="text-xs lg:text-sm font-semibold tracking-widest text-vnsAccent uppercase border border-vnsAccent/20 bg-vnsAccent/5 px-4 py-1.5 rounded-full"
          >
            Premium Student Living
          </motion.span>

          {/* Centered Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 12, delay: 0.15 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-vnsText-primary leading-[1.15]"
          >
            Safe. <br />
            Comfortable. <br />
            Parent Trusted. <br />
            Student Approved.
          </motion.h1>

          {/* Hero Features Strip (Wireframe-16 Aligned) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 13, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-6 my-2 text-vnsText-primary font-body text-xs font-bold uppercase tracking-wider"
          >
            <div className="flex items-center gap-2">
              <Wifi className="w-4 h-4 text-vnsAccent" />
              <span>High Speed WiFi</span>
            </div>
            <div className="flex items-center gap-2">
              <Coffee className="w-4 h-4 text-vnsAccent" />
              <span>Nutritious Food</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-vnsAccent" />
              <span>24/7 Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-vnsAccent" />
              <span>Peaceful Environment</span>
            </div>
          </motion.div>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 14, delay: 0.4 }}
            className="font-body text-sm sm:text-base md:text-lg text-vnsText-secondary max-w-2xl leading-relaxed mt-2"
          >
            A 12-state family-like campus for dynamic and comfortable student living that helps boys focus on their study and feel at home.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 13, delay: 0.5 }}
            className="flex flex-row items-center justify-center gap-4 mt-2 w-full sm:w-auto"
          >
            <motion.button 
              onClick={() => handleWhatsAppInquiry("General")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-vnsAccent to-[#D4A853] hover:from-[#C9933A] hover:to-[#B6842F] text-vnsBg px-8 py-4 rounded-vns shadow-lg active:scale-95 transition-all duration-200 border-none"
            >
              <span className="font-heading font-bold tracking-wider text-sm">Book A Visit</span>
              <ArrowRight className="w-4 h-4 text-vnsBg" />
            </motion.button>
            <Link 
              to="/rooms"
              className="flex items-center justify-center gap-3 bg-transparent hover:bg-vnsBg/30 text-vnsText-primary px-8 py-4 rounded-vns border border-vnsText-primary/20 shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span className="font-heading font-bold tracking-wider text-sm">View Rooms</span>
              <ArrowRight className="w-4 h-4 text-vnsText-primary" />
            </Link>
          </motion.div>

          {/* Overlapping Avatars & Happy Students Badge */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 40, damping: 12, delay: 0.65 }}
            className="flex items-center gap-4 mt-6"
          >
            {/* Overlapping circular avatars */}
            <div className="flex -space-x-3">
              <div className="w-9 h-9 rounded-full border-2 border-vnsBorder bg-vnsBg flex items-center justify-center text-[10px] font-bold text-vnsText-primary shadow-sm font-heading">A</div>
              <div className="w-9 h-9 rounded-full border-2 border-vnsBorder bg-vnsSurface flex items-center justify-center text-[10px] font-bold text-vnsText-primary shadow-sm font-heading">P</div>
              <div className="w-9 h-9 rounded-full border-2 border-vnsBorder bg-vnsBg flex items-center justify-center text-[10px] font-bold text-vnsText-primary shadow-sm font-heading">S</div>
            </div>
            <div className="text-left leading-tight">
              <p className="font-heading font-extrabold text-lg text-vnsText-primary leading-none">
                <CountUp value="1000" suffix="+" />
              </p>
              <p className="font-body text-[10px] text-vnsText-secondary font-bold uppercase tracking-wider mt-1">Happy Students</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST STRIP (Light Sand Background, 6-Pillar Layout with Scroll Fade-In) */}
      <section className="relative z-10 bg-vnsText-primary border-y border-vnsDark/10 py-6 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-width-container mx-auto px-5 lg:px-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center"
        >
          
          <motion.div 
            whileHover={{ y: -3, scale: 1.02 }}
            className="flex flex-col items-center gap-2 hover:cursor-default transition-all"
          >
            <Wifi className="w-5 h-5 text-vnsDark" />
            <div>
              <p className="font-heading text-xs font-bold text-vnsDark leading-tight uppercase">High Speed</p>
              <p className="font-body text-[10px] text-vnsDark/70 leading-tight mt-0.5 font-semibold">WiFi</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3, scale: 1.02 }}
            className="flex flex-col items-center gap-2 hover:cursor-default transition-all"
          >
            <Shield className="w-5 h-5 text-vnsDark" />
            <div>
              <p className="font-heading text-xs font-bold text-vnsDark leading-tight uppercase">24/7</p>
              <p className="font-body text-[10px] text-vnsDark/70 leading-tight mt-0.5 font-semibold">Security</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3, scale: 1.02 }}
            className="flex flex-col items-center gap-2 hover:cursor-default transition-all"
          >
            <MapPin className="w-5 h-5 text-vnsDark" />
            <div>
              <p className="font-heading text-xs font-bold text-vnsDark leading-tight uppercase">Prime</p>
              <p className="font-body text-[10px] text-vnsDark/70 leading-tight mt-0.5 font-semibold">Location</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3, scale: 1.02 }}
            className="flex flex-col items-center gap-2 hover:cursor-default transition-all"
          >
            <Users className="w-5 h-5 text-vnsDark" />
            <div>
              <p className="font-heading text-xs font-bold text-vnsDark leading-tight uppercase">
                <CountUp value="1000" suffix="+" />
              </p>
              <p className="font-body text-[10px] text-vnsDark/70 leading-tight mt-0.5 font-semibold">Happy Students</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3, scale: 1.02 }}
            className="flex flex-col items-center gap-2 hover:cursor-default transition-all"
          >
            <Star className="w-5 h-5 text-vnsDark fill-current" />
            <div>
              <p className="font-heading text-xs font-bold text-vnsDark leading-tight uppercase">
                <CountUp value={GOOGLE_RATING.score} suffix="★" />
              </p>
              <p className="font-body text-[10px] text-vnsDark/70 leading-tight mt-0.5 font-semibold">Google Ratings</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3, scale: 1.02 }}
            className="flex flex-col items-center gap-2 hover:cursor-default transition-all"
          >
            <Award className="w-5 h-5 text-vnsDark" />
            <div>
              <p className="font-heading text-xs font-bold text-vnsDark leading-tight uppercase">
                <CountUp value="12" suffix="+" />
              </p>
              <p className="font-body text-[10px] text-vnsDark/70 leading-tight mt-0.5 font-semibold">Years Legacy</p>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* 3. ABOUT SNIPPET (Deep Chocolate Background, Real Images with Sliding Entrances) */}
      <section className="py-20 bg-vnsBg text-vnsText-primary">
        <div className="max-width-container mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Text (Slides in left) */}
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
                Vraj Nidhi Samanvay (VNS) was constructed specifically to address the daily struggles of students living away from home. We don’t run a converted home; we manage a state-of-the-art facility featuring architectural safety and community warmth.
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

            {/* Right Column Grid Cluster (Slides in right) */}
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

      {/* 4. ROOM TYPES PREVIEW (Light Sand Background, Dark Text) */}
      <section className="py-20 bg-vnsLight text-vnsDark">
        <div className="max-width-container mx-auto px-5 lg:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div className="flex flex-col gap-2">
              <span className="font-heading text-xs font-semibold uppercase tracking-widest text-vnsDark/70">Accommodation Options</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-vnsDark">
                Rooms That Feel Like Home
              </h2>
            </div>
            <Link 
              to="/rooms"
              className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-vnsDark hover:underline uppercase tracking-wider"
            >
              View Room Specs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Staggered Cards Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {ROOMS_DATA.map((room) => (
              <motion.div
                key={room.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                className="flex flex-col bg-vnsSurface border border-vnsBorder rounded-vns overflow-hidden group hover:border-vnsAccent/40 transition-all duration-300 shadow-lg cursor-default"
              >
                {/* Photo container */}
                <div className="h-56 relative overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Absolute price badge */}
                  <div className="absolute bottom-4 left-4 bg-vnsBg border border-vnsAccent/40 text-vnsText-primary px-3 py-1 rounded-vns shadow-md">
                    <p className="font-heading text-[10px] text-vnsAccent font-semibold leading-none">Starting from</p>
                    <p className="font-heading text-lg font-bold text-vnsText-primary leading-none mt-1">₹{room.price}<span className="text-xs font-normal text-vnsText-secondary font-body">/mo</span></p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow gap-4 text-vnsText-primary">
                  <h3 className="font-heading text-xl font-bold text-vnsText-primary group-hover:text-vnsAccent transition-colors">
                    {room.name}
                  </h3>
                  
                  <p className="font-body text-xs text-vnsText-secondary leading-relaxed flex-grow">
                    {room.description}
                  </p>

                  {/* Bullet features list */}
                  <ul className="flex flex-col gap-2 my-2">
                    {room.features.slice(0, 4).map((feat, idx) => (
                      <li key={idx} className="flex gap-2 items-center text-xs text-vnsText-secondary">
                        <Check className="w-3.5 h-3.5 text-vnsAccent shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Inquiry CTA */}
                  <button 
                    onClick={() => handleWhatsAppInquiry(room.name)}
                    className="w-full flex items-center justify-center gap-2 bg-vnsBg hover:bg-vnsCardHover text-vnsText-primary py-3 rounded-vns border border-vnsBorder hover:border-vnsAccent transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4 text-vnsAccent fill-current" />
                    <span className="font-heading text-xs font-semibold uppercase tracking-wider">Inquire Now</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4b. WHY CHOOSE VNS (Bento Grid) - LIGHT SAND BACKGROUND */}
      <section className="py-20 bg-vnsLight text-vnsDark border-t border-vnsDark/10">
        <div className="max-width-container mx-auto px-5 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-2">
            <span className="font-heading text-xs font-semibold uppercase tracking-widest text-vnsDark/70">Why Choose VNS</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-vnsDark leading-tight">
              Designed For Focus. <br />Built For Community.
            </h2>
            <div className="h-[2px] w-12 bg-vnsAccent mx-auto mt-2"></div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Card 1: Location (col-span-2) */}
            <BentoCard className="md:col-span-2 bg-vnsSurface border-vnsBorder text-vnsText-primary">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-vns bg-vnsBg border border-vnsBorder flex items-center justify-center text-vnsAccent shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-vnsText-primary uppercase tracking-wider">Prime Location</h3>
                    <p className="font-body text-[10px] text-vnsAccent uppercase font-bold tracking-wider mt-0.5">Waghodia Road Student Hub</p>
                  </div>
                </div>
                <p className="font-body text-xs text-vnsText-secondary leading-relaxed mt-1">
                  VNS is strategically located right between Parul University and Sumandeep Vidyapeeth, saving you valuable commute time every day.
                </p>
              </div>

              {/* Distance strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                {[
                  { name: "Parul University", dist: "2.0 Km", time: "4 min scooter" },
                  { name: "Sumandeep", dist: "2.0 Km", time: "4 min scooter" },
                  { name: "Dhiraj Hospital", dist: "2.0 Km", time: "4 min scooter" },
                  { name: "Bus Stop", dist: "300 Mtr", time: "3 min walk" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-vnsBg border border-vnsBorder rounded-vns p-3 text-center shadow-sm">
                    <p className="font-heading font-extrabold text-xs text-vnsText-primary leading-none">{item.dist}</p>
                    <p className="font-body text-[10px] font-bold text-vnsText-secondary mt-1">{item.name}</p>
                    <p className="font-body text-[9px] text-vnsAccent uppercase font-bold tracking-tight mt-0.5">{item.time}</p>
                  </div>
                ))}
              </div>
            </BentoCard>

            {/* Card 2: Community (col-span-1) */}
            <BentoCard className="md:col-span-1 bg-vnsSurface border-vnsBorder text-vnsText-primary">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-vns bg-vnsBg border border-vnsBorder flex items-center justify-center text-vnsAccent shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-vnsText-primary uppercase tracking-wider">Hostel Family</h3>
                    <p className="font-body text-[10px] text-vnsAccent uppercase font-bold tracking-wider mt-0.5">Community Life</p>
                  </div>
                </div>
                <p className="font-body text-xs text-vnsText-secondary leading-relaxed mt-1">
                  We celebrate Indian festivals together so students never feel homesick.
                </p>
              </div>

              {/* Celebration Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {["Holi Colors", "Dandiya Night", "VNS Cricket League", "DJ Nights", "Sunday Feasts"].map((tag, idx) => (
                  <span key={idx} className="bg-vnsAccent/10 border border-vnsAccent/20 text-vnsAccent font-heading text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </BentoCard>

            {/* Card 3: Safety (col-span-1) */}
            <BentoCard className="md:col-span-1 bg-vnsSurface border-vnsBorder text-vnsText-primary">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-vns bg-vnsBg border border-vnsBorder flex items-center justify-center text-vnsAccent shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-vnsText-primary uppercase tracking-wider">Uncompromised Safety</h3>
                    <p className="font-body text-[10px] text-vnsAccent uppercase font-bold tracking-wider mt-0.5">Parent Approved Security</p>
                  </div>
                </div>
                <p className="font-body text-xs text-vnsText-secondary leading-relaxed mt-1">
                  Absolute peace of mind for parents with professional surveillance and strict discipline.
                </p>
              </div>

              {/* Curfew log UI mock */}
              <div className="bg-vnsBg border border-vnsBorder rounded-vns p-3 mt-3 shadow-inner flex flex-col gap-2">
                <div className="flex justify-between items-center text-[10px]">
                  <span className="font-body font-bold text-vnsText-primary">Biometric Face Scanner</span>
                  <span className="font-heading font-bold text-emerald-500 uppercase">Active 24/7</span>
                </div>
                <div className="h-[1px] bg-vnsBorder"></div>
                <div className="flex justify-between items-center text-[10px]">
                  <span className="font-body font-bold text-vnsText-primary">Main Curfew Gate Lock</span>
                  <span className="font-heading font-bold text-vnsAccent uppercase">10:00 PM</span>
                </div>
              </div>
            </BentoCard>

            {/* Card 4: Value (col-span-2) */}
            <BentoCard className="md:col-span-2 bg-vnsSurface border-vnsBorder text-vnsText-primary">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-vns bg-vnsBg border border-vnsBorder flex items-center justify-center text-vnsAccent shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-vnsText-primary uppercase tracking-wider">Transparent Value</h3>
                    <p className="font-body text-[10px] text-vnsAccent uppercase font-bold tracking-wider mt-0.5">No Hidden Policies</p>
                  </div>
                </div>
                <p className="font-body text-xs text-vnsText-secondary leading-relaxed mt-1">
                  We maintain absolute transparency. You get full value for your stay, split AC control, and fair utility billing.
                </p>
              </div>

              {/* Value Lists */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="font-heading text-[10px] font-bold text-emerald-400 uppercase tracking-wider border-b border-vnsBorder/40 pb-1 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    Included in Rent
                  </h4>
                  <ul className="flex flex-col gap-1.5 mt-2 text-[10px] text-vnsText-secondary font-body">
                    <li>• 3 Homestyle Veg Meals Daily</li>
                    <li>• High-Speed 100 Mbps WiFi</li>
                    <li>• Weekly In-House Laundry</li>
                    <li>• Daily Professional Cleaning</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-[10px] font-bold text-amber-500 uppercase tracking-wider border-b border-vnsBorder/40 pb-1 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-amber-500" />
                    Room Electricity
                  </h4>
                  <p className="font-body text-[9.5px] text-vnsText-secondary leading-normal mt-2">
                    Digital sub-meters per room ensure students only pay for their personal AC consumption. COMMON area power is paid by us.
                  </p>
                </div>
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* 5. FACILITIES GRID (Deep Chocolate Background, Compact Grid Scroll Fade-In) */}
      <section className="py-20 bg-vnsBg text-vnsText-primary">
        <div className="max-width-container mx-auto px-5 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-2">
            <span className="font-heading text-xs font-semibold uppercase tracking-widest text-vnsAccent">Modern Amenities</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-vnsText-primary">
              Everything You Need.<br />All In One Place.
            </h2>
            <div className="h-[2px] w-12 bg-vnsAccent mx-auto mt-2"></div>
          </div>

          {/* 2-Column Amenities Grid on mobile, 5-Column on desktop (Fades in on scroll) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 items-stretch"
          >
            
            {/* Row 1 (5 items: WiFi, AC, RO Water, Hot Water, Mess Facilities) */}
            {AMENITIES_LIST.slice(0, 5).map((amenity) => (
              <motion.div 
                key={amenity.id}
                whileHover={{ y: -3, scale: 1.02, border: "1px solid rgba(201, 147, 58, 0.3)" }}
                className="bg-vnsSurface border border-vnsBorder rounded-vns p-4 md:p-6 flex flex-col gap-2 md:gap-3 group transition-all shadow-sm cursor-default"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-vns bg-vnsBg border border-vnsBorder flex items-center justify-center text-vnsText-primary group-hover:text-vnsAccent group-hover:border-vnsAccent/30 group-hover:rotate-6 transition-all shrink-0">
                  <DynamicIcon name={amenity.icon} className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <h4 className="font-heading font-semibold text-vnsText-primary text-xs md:text-sm mt-1">{amenity.name}</h4>
                <p className="font-body text-[10px] md:text-xs text-vnsText-secondary leading-relaxed">{amenity.desc}</p>
              </motion.div>
            ))}

            {/* Row 2 - Column 1: Laundry Service */}
            <motion.div 
              whileHover={{ y: -3, scale: 1.02, border: "1px solid rgba(201, 147, 58, 0.3)" }}
              className="bg-vnsSurface border border-vnsBorder rounded-vns p-4 md:p-6 flex flex-col gap-2 md:gap-3 group transition-all shadow-sm cursor-default"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-vns bg-vnsBg border border-vnsBorder flex items-center justify-center text-vnsText-primary group-hover:text-vnsAccent group-hover:border-vnsAccent/30 group-hover:rotate-6 transition-all shrink-0">
                <DynamicIcon name={AMENITIES_LIST[5].icon} className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <h4 className="font-heading font-semibold text-vnsText-primary text-xs md:text-sm mt-1">{AMENITIES_LIST[5].name}</h4>
              <p className="font-body text-[10px] md:text-xs text-vnsText-secondary leading-relaxed">{AMENITIES_LIST[5].desc}</p>
            </motion.div>

            {/* Row 2 - Columns 2, 3 & 4 (Merged center card: "Amenities By VNS" - Spans 2 cols on mobile, 3 cols on desktop) */}
            <div className="bg-gradient-to-br from-vnsPrimary/85 to-[#2A1608]/95 border border-vnsAccent rounded-vns p-4 md:p-6 flex flex-col items-center justify-center text-center shadow-lg min-h-[140px] md:min-h-[180px] md:col-span-3 col-span-2">
              <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-12 md:h-12 text-vnsAccent fill-current mb-2 md:mb-3">
                <path d="M12 2C11.5 2 6 4 6 9c0 5.5 4.5 9.5 5.7 10.7.2.2.4.3.3.3s.1-.1.3-.3C13.5 18.5 18 14.5 18 9c0-5-5.5-7-6-7zm0 15c-3.1-2.9-6-6.6-6-9 0-3.1 3-4.4 6-5.1 3 .7 6 2 6 5.1 0 2.4-2.9 6.1-6 9z" />
                <path d="M12 6a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
              <h3 className="font-heading text-sm md:text-lg font-bold text-vnsText-primary uppercase tracking-wider">Amenities By VNS</h3>
              <p className="font-body text-[9px] md:text-[10px] text-vnsAccent tracking-widest uppercase mt-0.5 md:mt-1">Curated For Student Life</p>
            </div>

            {/* Row 2 - Column 5: Housekeeping */}
            <motion.div 
              whileHover={{ y: -3, scale: 1.02, border: "1px solid rgba(201, 147, 58, 0.3)" }}
              className="bg-vnsSurface border border-vnsBorder rounded-vns p-4 md:p-6 flex flex-col gap-2 md:gap-3 group transition-all shadow-sm cursor-default"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-vns bg-vnsBg border border-vnsBorder flex items-center justify-center text-vnsText-primary group-hover:text-vnsAccent group-hover:border-vnsAccent/30 group-hover:rotate-6 transition-all shrink-0">
                <DynamicIcon name={AMENITIES_LIST[6].icon} className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <h4 className="font-heading font-semibold text-vnsText-primary text-xs md:text-sm mt-1">{AMENITIES_LIST[6].name}</h4>
              <p className="font-body text-[10px] md:text-xs text-vnsText-secondary leading-relaxed">{AMENITIES_LIST[6].desc}</p>
            </motion.div>

            {/* Row 3 (Remaining 5 items: Study Area, Parking, First Aid, CCTV Security, Warden / Security) */}
            {AMENITIES_LIST.slice(7).map((amenity) => (
              <motion.div 
                key={amenity.id}
                whileHover={{ y: -3, scale: 1.02, border: "1px solid rgba(201, 147, 58, 0.3)" }}
                className="bg-vnsSurface border border-vnsBorder rounded-vns p-4 md:p-6 flex flex-col gap-2 md:gap-3 group transition-all shadow-sm cursor-default"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-vns bg-vnsBg border border-vnsBorder flex items-center justify-center text-vnsText-primary group-hover:text-vnsAccent group-hover:border-vnsAccent/30 group-hover:rotate-6 transition-all shrink-0">
                  <DynamicIcon name={amenity.icon} className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <h4 className="font-heading font-semibold text-vnsText-primary text-xs md:text-sm mt-1">{amenity.name}</h4>
                <p className="font-body text-[10px] md:text-xs text-vnsText-secondary leading-relaxed">{amenity.desc}</p>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </section>

      {/* 6. LIFE AT VNS (Light Sand Background, Two-Row Figma Wireframe-13 Structure) */}
      <section id="life-at-vns" className="py-20 bg-vnsLight text-vnsDark scroll-mt-20">
        <div className="max-width-container mx-auto px-5 lg:px-12 flex flex-col gap-12">
          
          {/* Row 1: Text on Left, Horizontal Lobby Image on Right */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Text Content */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="font-heading text-xs font-semibold uppercase tracking-widest text-vnsDark/70">Hostel Community</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-vnsDark leading-tight">
                Where Friendships<br />Turn Into Family
              </h2>
              <p className="font-body text-sm text-vnsDark/85 leading-relaxed">
                More than just a place to stay, VNS Hostel is where memories are made, friendships are forged, and students become family. Experience a vibrant community that celebrates, learns, and grows together.
              </p>
            </div>
            
            {/* Horizontal Lobby Image */}
            <div className="lg:col-span-7 h-48 md:h-72 rounded-vns overflow-hidden border border-vnsDark/10 shadow-md">
              <img 
                src={lobbyImg} 
                alt="VNS Hostel Lobby Entrance Area" 
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Row 2: Vertical Cricket Image Left, Stack of 2 Images Middle, Checklist Right */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Left Col: Vertical Sports Image (Hidden on mobile, keeping 3 images total) */}
            <div className="lg:col-span-4 h-96 rounded-vns overflow-hidden border border-vnsDark/10 shadow-md hidden lg:block">
              <img 
                src={sportsImg} 
                alt="Students playing sports at VNS" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Middle Col: Stack of 2 Images (Holi & Dining) - Side-by-side on mobile, stacked on desktop */}
            <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="h-32 md:h-[182px] rounded-vns overflow-hidden border border-vnsDark/10 shadow-sm">
                <img 
                  src={holiImg} 
                  alt="Holi Celebration at VNS" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="h-32 md:h-[182px] rounded-vns overflow-hidden border border-vnsDark/10 shadow-sm">
                <img 
                  src={diningImg} 
                  alt="Student Dining Gathering" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Right Col: Activities Checklist (Card wrapper removed) */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-4 py-2">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-vnsDark border-b border-vnsDark/10 pb-2 mb-2">Our Community Highlights</h4>
              <ul className="flex flex-col gap-4">
                {[
                  "Study Sessions & Group Learning",
                  "Community Activities & Events",
                  "Festival Celebrations Together",
                  "Student Gatherings & Fun Times",
                  "Common Areas for Bonding"
                ].map((activity, idx) => (
                  <li key={idx} className="flex gap-3 items-center text-sm font-semibold text-vnsDark/80">
                    <ArrowRight className="w-4 h-4 text-vnsDark shrink-0" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 7. FOOD & MESS TIMINGS (Dark Theme, Figma Wireframe-11 Structure) */}
      <section className="py-20 bg-vnsBg text-vnsText-primary border-t border-vnsBorder">
        <div className="max-width-container mx-auto px-5 lg:px-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            
            {/* Left Column: Description & 2x2 Timing Grid */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="font-heading text-xs font-semibold uppercase tracking-widest text-vnsAccent">Food & Mess</span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-vnsText-primary">
                  Fresh. Healthy.<br />Made For Students.
                </h2>
              </div>
              <p className="font-body text-sm text-vnsText-secondary leading-relaxed">
                Our in-house mess serves delicious, nutritious meals prepared fresh daily. With a focus on hygiene and taste, we ensure every student gets the energy they need to succeed. We source fresh, local ingredients daily and maintain the highest cleanliness standards in our kitchen. From warm breakfast items to healthy, filling dinners, our menu is designed to feel like home cooking while providing balanced nutrition to help students stay active and focused on their studies.
              </p>

              {/* Time Clocks 2x2 Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Breakfast", time: "7:00 – 9:00 AM", icon: Coffee },
                  { title: "Lunch", time: "12:00 – 2:00 PM", icon: Sun },
                  { title: "High-Tea", time: "5:00 – 6:00 PM", icon: Cookie },
                  { title: "Dinner", time: "8:00 – 10:00 PM", icon: Moon }
                ].map((meal, idx) => {
                  const IconComponent = meal.icon;
                  return (
                    <motion.div 
                      key={idx}
                      whileHover={{ y: -3, scale: 1.02 }}
                      className="bg-vnsSurface border border-vnsBorder rounded-vns p-5 flex flex-col gap-3 items-start hover:border-vnsAccent/30 hover:shadow-md transition-all duration-300 shadow-sm cursor-default"
                    >
                      <IconComponent className="w-5 h-5 text-vnsAccent" />
                      <div>
                        <h4 className="font-heading font-bold text-sm text-vnsText-primary uppercase tracking-wider">{meal.title}</h4>
                        <p className="font-body text-xs text-vnsText-secondary mt-1">{meal.time}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: What We Offer & Thali Image */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* What We Offer Container */}
              <div className="pb-4">
                <h4 className="font-heading font-bold text-vnsText-primary text-base uppercase border-b border-vnsBorder/40 pb-2 mb-3">
                  What We Offer
                </h4>
                <ul className="flex flex-col gap-3 text-xs text-vnsText-secondary">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-vnsAccent shrink-0"></span>
                    <span>Vegetarian food only.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-vnsAccent shrink-0"></span>
                    <span>Hygienic kitchen with RO water.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-vnsAccent shrink-0"></span>
                    <span>Balanced nutrition for students.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-vnsAccent shrink-0"></span>
                    <span>Home-style cooking with quality ingredients.</span>
                  </li>
                </ul>
              </div>

              {/* Thali Image */}
              <div className="relative rounded-vns overflow-hidden border border-vnsBorder/40 shadow-xl h-[360px] group">
                <img 
                  src={thaliImg} 
                  alt="Hygienic Vegetarian Hostel Meals" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay badge */}
                <div className="absolute top-4 right-4 bg-vnsBg/90 backdrop-blur-sm px-4 py-2 border border-vnsAccent/30 rounded-vns text-xs text-vnsText-primary">
                  💯 Clean & Healthy Mess
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 8. MERGED COMMUTE & TESTIMONIAL PORTAL (Light Sand Background, side-by-side Figma Wireframe-12 Structure) */}
      <section className="py-20 bg-vnsLight text-vnsDark border-t border-vnsDark/10">
        <div className="max-width-container mx-auto px-5 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Location Portal (7/12 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 w-full">
            
            {/* Header (slides in from left) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={leftSlideVariants}
              className="flex flex-col gap-2"
            >
              <span className="font-heading text-xs font-semibold uppercase tracking-widest text-vnsDark/70">Our Location</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-vnsDark leading-tight">
                Prime Location. <br />Everything Nearby.
              </h2>
            </motion.div>
            
            {/* Live Interactive Google Map (Static, no motion wrapper to prevent iframe rendering stutter) */}
            <div className="relative w-full h-[320px] rounded-vns overflow-hidden border border-vnsDark/10 shadow-md">
              <iframe
                title="VNS Hostel Location Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://maps.google.com/maps?q=VNS%20Boys%20Hostel,%20Waghodia%20Road,%20Vadodara,%20Gujarat&t=&z=15&ie=UTF8&iwloc=&output=embed"
              ></iframe>
              <div className="absolute top-3 left-3 bg-vnsBg/90 backdrop-blur-sm border border-vnsAccent/30 px-3 py-1 rounded-vns text-[10px] text-vnsText-primary font-heading font-semibold shadow-sm pointer-events-none">
                📍 VNS Boys Hostel Location
              </div>
            </div>

            {/* Landmark Cards 2x2 Grid (slides in from left) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={leftSlideVariants}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { index: 0, name: "Parul University", distance: "2 Km", icon: GraduationCap },
                { index: 1, name: "Sumandeep Vidyapeeth", distance: "2 Km", icon: School },
                { index: 3, name: "Bus Stop", distance: "300 Mtr", icon: Bus },
                { index: 4, name: "Restaurant & Resort", distance: "100 Mtr", icon: Utensils }
              ].map((landmark) => {
                const IconComponent = landmark.icon;
                const isSelected = activeLandmarkIndex === landmark.index;
                return (
                  <button
                    key={landmark.index}
                    onClick={() => setActiveLandmarkIndex(landmark.index)}
                    className={`text-left p-5 rounded-vns border flex flex-col gap-3 transition-all duration-200 shadow-sm ${
                      isSelected
                        ? 'bg-vnsText-primary border-vnsDark bg-vnsText-primary/90 shadow-md translate-y-[-2px]'
                        : 'bg-vnsText-primary/60 border-vnsDark/10 hover:border-vnsDark/20 hover:bg-vnsText-primary/80'
                    }`}
                  >
                    <IconComponent className={`w-6 h-6 ${isSelected ? 'text-vnsDark' : 'text-vnsDark/60'}`} />
                    <div>
                      <h4 className="font-heading font-bold text-sm text-vnsDark leading-tight">{landmark.name}</h4>
                      <p className="font-body text-xs text-vnsDark/60 mt-1 font-semibold">{landmark.distance}</p>
                    </div>
                  </button>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Social Proof & Testimonial Carousel (5/12 cols) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={rightSlideVariants}
            className="lg:col-span-5 flex flex-col gap-6 w-full"
          >
            <div className="flex flex-col gap-2">
              <span className="font-heading text-xs font-semibold uppercase tracking-widest text-vnsDark/70">Trusted by Students & Parents</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-vnsDark leading-tight">
                What Our <br />Students Say
              </h2>
            </div>

            {/* Google Rating card */}
            <div className="bg-vnsText-primary border border-vnsDark/10 rounded-vns p-6 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-vnsLight/60 flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 text-vnsDark fill-current" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-vnsDark leading-none">
                  <CountUp value={GOOGLE_RATING.score} />★ Google Ratings
                </h4>
                <p className="font-body text-xs text-vnsDark/60 mt-1.5 font-semibold">
                  Based on <CountUp value={GOOGLE_RATING.reviewsCount} />+ verified student reviews
                </p>
              </div>
            </div>

            {/* Rotating Featured Testimonial card */}
            <div className="min-h-[190px] bg-vnsText-primary border border-vnsDark/10 rounded-vns p-6 shadow-sm flex flex-col justify-between overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReviewIndex}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col gap-4 h-full justify-between"
                >
                  <div className="flex gap-2.5">
                    <Quote className="w-5 h-5 text-vnsDark/20 shrink-0 transform rotate-180" />
                    <p className="font-body text-xs text-vnsDark/80 leading-relaxed italic">
                      "{GOOGLE_REVIEWS[currentReviewIndex].review}"
                    </p>
                  </div>
                  <div className="border-t border-vnsDark/5 pt-3.5 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-vnsLight/60 border border-vnsDark/10 flex items-center justify-center font-heading font-extrabold text-xs text-vnsDark shadow-inner">
                      {GOOGLE_REVIEWS[currentReviewIndex].name.split(' ').map(n=>n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-xs text-vnsDark">{GOOGLE_REVIEWS[currentReviewIndex].name}</h4>
                      <p className="font-body text-[10px] text-vnsDark/60 mt-0.5">{GOOGLE_REVIEWS[currentReviewIndex].college}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Call Us button */}
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center justify-center gap-3 bg-vnsDark hover:bg-[#4E2813] text-[#F5EDD8] py-4 rounded-vns shadow-lg font-heading font-bold tracking-wider text-sm uppercase transition-all duration-200 hover:scale-[1.01]"
            >
              <Phone className="w-4 h-4 text-vnsAccent" />
              <span>Call Us</span>
            </a>

          </motion.div>
        </div>
      </section>

      {/* 10. INTERACTIVE WIZARD & DIRECT CONTACT SECTION */}
      <section className="py-20 bg-gradient-to-br from-vnsSurface to-vnsBg border-t border-vnsBorder relative overflow-hidden">
        {/* Pattern Mask */}
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.15] pointer-events-none"></div>

        <div className="max-width-container mx-auto px-5 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
            
            {/* Left Column: 2-Step WhatsApp Inquiry Wizard (7/12 cols) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="bg-vnsText-primary border border-vnsDark/10 rounded-vns p-6 md:p-8 flex flex-col justify-between flex-grow shadow-xl text-vnsDark select-none">
                
                {/* Wizard Title & Step Indicator */}
                <div className="flex justify-between items-center border-b border-vnsDark/10 pb-4 mb-6">
                  <div>
                    <h3 className="font-heading font-bold text-xl uppercase tracking-wider text-vnsDark">WhatsApp Seat Booking</h3>
                    <p className="font-body text-[10px] text-vnsAccent font-bold uppercase tracking-wider mt-0.5">Quick 2-Step Availability Wizard</p>
                  </div>
                  <span className="font-heading font-extrabold text-sm text-vnsAccent bg-vnsDark/5 px-3 py-1 rounded-full border border-vnsAccent/20 animate-pulse">
                    Step {wizardStep}/2
                  </span>
                </div>

                {/* Form Content Slider */}
                <div className="relative overflow-hidden min-h-[200px] flex flex-col justify-center">
                  <AnimatePresence mode="wait" custom={wizardDirection}>
                    <motion.div
                      key={wizardStep}
                      custom={wizardDirection}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="w-full flex flex-col gap-5"
                    >
                      {wizardStep === 1 ? (
                        <div className="flex flex-col gap-4">
                          <p className="font-body text-xs text-vnsDark/80 leading-relaxed mb-1">
                            Enter your details to verify availability.
                          </p>
                          <div className="flex flex-col gap-1.5">
                            <label className="font-heading font-bold text-[10px] uppercase tracking-wider text-vnsDark/70">Student Name</label>
                            <input 
                              type="text"
                              placeholder="e.g. Aman Patel"
                              value={studentName}
                              onChange={(e) => {
                                setStudentName(e.target.value);
                                if (wizardError) setWizardError('');
                              }}
                              className="w-full bg-vnsLight/40 border border-vnsDark/20 rounded-vns px-4 py-3 text-xs font-body focus:outline-none focus:border-vnsAccent focus:ring-1 focus:ring-vnsAccent transition-all text-vnsDark placeholder-vnsDark/40"
                            />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label className="font-heading font-bold text-[10px] uppercase tracking-wider text-vnsDark/70">College / University</label>
                            <input 
                              type="text"
                              placeholder="e.g. Parul University"
                              value={collegeName}
                              onChange={(e) => {
                                setCollegeName(e.target.value);
                                if (wizardError) setWizardError('');
                              }}
                              className="w-full bg-vnsLight/40 border border-vnsDark/20 rounded-vns px-4 py-3 text-xs font-body focus:outline-none focus:border-vnsAccent focus:ring-1 focus:ring-vnsAccent transition-all text-vnsDark placeholder-vnsDark/40"
                            />
                          </div>
                          {wizardError && (
                            <p className="text-[10px] font-heading font-semibold text-rose-700 uppercase tracking-wide animate-pulse">
                              ⚠️ {wizardError}
                            </p>
                          )}
                        </div>
                      ) : (
                        <div className="flex flex-col gap-4">
                          <p className="font-body text-xs text-vnsDark/80 leading-relaxed mb-1">
                            Choose your sharing preference to get rent details.
                          </p>
                          <div className="flex flex-col gap-2">
                            <label className="font-heading font-bold text-[10px] uppercase tracking-wider text-vnsDark/70">Select Sharing Interest</label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-1">
                              {["Triple Sharing AC", "Double Sharing AC", "Single Occupancy AC"].map((opt) => {
                                const isSelected = roomInterest === opt;
                                return (
                                  <button
                                    key={opt}
                                    type="button"
                                    onClick={() => setRoomInterest(opt)}
                                    className={`py-3 px-2 text-[10px] font-heading font-bold uppercase tracking-wider rounded-vns border transition-all ${
                                      isSelected
                                        ? 'bg-vnsDark text-[#F5EDD8] border-vnsDark shadow-md scale-[1.02]'
                                        : 'bg-vnsLight/30 border-vnsDark/15 hover:bg-vnsLight/60 text-vnsDark'
                                    }`}
                                  >
                                    {opt}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Wizard Navigation */}
                <div className="flex gap-4 border-t border-vnsDark/10 pt-5 mt-6">
                  {wizardStep === 2 && (
                    <button
                      type="button"
                      onClick={() => {
                        setWizardDirection('right');
                        setWizardStep(1);
                      }}
                      className="flex-1 py-3 px-4 border border-vnsDark/20 rounded-vns font-heading text-xs font-semibold uppercase tracking-wider hover:bg-vnsLight/40 active:scale-95 transition-all text-vnsDark"
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      if (wizardStep === 1) {
                        if (!studentName.trim() || !collegeName.trim()) {
                          setWizardError('Please fill out both fields to proceed');
                          return;
                        }
                        setWizardDirection('left');
                        setWizardStep(2);
                      } else {
                        // Submit to WhatsApp
                        const text = `Hi VNS, I'm ${studentName} from ${collegeName}. I'm interested in booking a ${roomInterest} AC Room. Please share availability details.`;
                        window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
                      }
                    }}
                    className={`flex-grow py-3 px-6 rounded-vns font-heading text-xs font-bold uppercase tracking-widest text-[#F5EDD8] active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 ${
                      wizardStep === 1
                        ? 'bg-vnsDark hover:bg-[#4E2813]'
                        : 'bg-gradient-to-r from-vnsAccent to-[#D4A853] hover:from-[#C9933A] hover:to-[#B6842F] text-vnsBg'
                    }`}
                  >
                    {wizardStep === 1 ? (
                      <span>Next Step</span>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4 fill-current text-vnsBg" />
                        <span>Submit via WhatsApp</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            </div>

            {/* Right Column: Direct Contact Details Card (5/12 cols) */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-vnsSurface border border-vnsBorder rounded-vns p-6 md:p-8 flex flex-col justify-between flex-grow shadow-xl text-vnsText-primary">
                <div className="flex flex-col gap-5">
                  <div className="border-b border-vnsBorder pb-4">
                    <h3 className="font-heading font-bold text-xl uppercase tracking-wider text-vnsText-primary">Direct Contact</h3>
                    <p className="font-body text-[10px] text-vnsAccent font-semibold uppercase tracking-wider mt-0.5">Warden Uncle Office</p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-vns bg-vnsBg border border-vnsBorder flex items-center justify-center text-vnsAccent shrink-0 mt-0.5">
                        <Icons.User className="w-4 h-4 text-vnsAccent" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-vnsAccent">Resident Warden</h4>
                        <p className="font-body text-xs text-vnsText-secondary mt-0.5">Mr. Patel (Warden Uncle)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-vns bg-vnsBg border border-vnsBorder flex items-center justify-center text-vnsAccent shrink-0 mt-0.5">
                        <Icons.MapPin className="w-4 h-4 text-vnsAccent" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-vnsAccent">Hostel Location</h4>
                        <p className="font-body text-[11px] text-vnsText-secondary leading-relaxed mt-0.5">
                          Alwa Road, Dattapura, Waghodia Road, Vadodara, Gujarat 391760
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-vns bg-vnsBg border border-vnsBorder flex items-center justify-center text-vnsAccent shrink-0 mt-0.5">
                        <Icons.Mail className="w-4 h-4 text-vnsAccent" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-vnsAccent">Email Address</h4>
                        <p className="font-body text-xs text-vnsText-secondary mt-0.5">{CONTACT_INFO.email}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-8 border-t border-vnsBorder pt-6">
                  <a 
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-vnsAccent to-[#D4A853] hover:from-[#C9933A] hover:to-[#B6842F] text-vnsBg py-3.5 rounded-vns font-heading text-xs font-semibold uppercase tracking-wider active:scale-95 transition-all shadow-md"
                  >
                    <Phone className="w-4 h-4 text-vnsBg fill-current" />
                    <span>Call Warden Uncle</span>
                  </a>
                  <p className="font-body text-[9px] text-vnsText-secondary text-center uppercase tracking-widest mt-1">
                    ⏰ Office Hours: 8:00 AM - 10:00 PM
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
