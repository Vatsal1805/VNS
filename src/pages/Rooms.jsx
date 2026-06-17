import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, AlertCircle, ArrowRight, MessageCircle, Phone,
  Calendar, FileText, CheckCircle2, Shield, Image
} from 'lucide-react';
import { CONTACT_INFO, ROOMS_DATA, facadeImg, lobbyImg, holiImg, diningImg } from '../config';

export default function Rooms() {
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

  const handleWhatsAppInquiry = (roomName) => {
    const message = encodeURIComponent(`Hi VNS Hostel, I want to inquire about a seat in the ${roomName}.`);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, '_blank');
  };

  const timelineSteps = [
    {
      step: "01",
      title: "Check Availability",
      desc: "Connect directly with Warden Uncle on WhatsApp or phone to check current occupancy levels.",
      icon: MessageCircle
    },
    {
      step: "02",
      title: "Tour the Campus",
      desc: "Schedule a physical visit to see the rooms, hygienic mess, RO plants, and recreational areas.",
      icon: Calendar
    },
    {
      step: "03",
      title: "Document Check",
      desc: "Submit your college admission letter, national ID (Aadhaar Card), and passport-size photos.",
      icon: FileText
    },
    {
      step: "04",
      title: "Lock Your Bed",
      desc: "Pay the initial security deposit to secure your preferred sharing configuration.",
      icon: CheckCircle2
    }
  ];

  return (
    <div className="bg-vnsBg text-vnsText-primary min-h-screen">
      
      {/* 1. HERO HEADER (Centered Flow, Parallax Tinted Zoom, Dot Overlay) - DARK */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div 
            className="absolute inset-0 bg-cover bg-center hero-bg-enhanced"
            style={{ backgroundImage: `url(${facadeImg})` }}
            animate={{ scale: [1, 1.05] }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-vnsBg via-vnsBg/50 to-transparent"></div>
          <div className="absolute inset-0 bg-vnsBg/45"></div>
          {/* Dot Pattern Overlay */}
          <div className="absolute inset-0 bg-dot-pattern opacity-[0.25] pointer-events-none"></div>
        </div>

        <div className="max-width-container mx-auto px-5 lg:px-12 z-10 text-center flex flex-col items-center gap-5 max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 15 }}
            className="text-xs lg:text-sm font-semibold tracking-widest text-vnsAccent uppercase border border-vnsAccent/20 bg-vnsAccent/5 px-4 py-1.5 rounded-full"
          >
            Premium Accommodations
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 12, delay: 0.15 }}
            className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-vnsText-primary leading-[1.15]"
          >
            Your Premium Living Space
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 14, delay: 0.3 }}
            className="font-body text-sm sm:text-base text-vnsText-secondary max-w-2xl leading-relaxed"
          >
            All-inclusive comfortable living with transparent pricing, individual study spaces, and split AC units in all sharing options.
          </motion.p>
        </div>
      </section>

      {/* 2. ROOM OPTIONS (Light Sand Background, Staggered Off-White Cards) - LIGHT */}
      <section className="py-20 bg-vnsLight text-vnsDark border-t border-vnsDark/10">
        <div className="max-width-container mx-auto px-5 lg:px-12">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {ROOMS_DATA.map((room) => (
              <motion.div 
                key={room.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                className="bg-vnsSurface border border-vnsBorder rounded-vns overflow-hidden group hover:border-vnsAccent/40 transition-all duration-300 flex flex-col shadow-lg cursor-default"
              >
                {/* Photo Container */}
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Price badge overlay */}
                  <div className="absolute top-4 left-4 bg-vnsBg/90 border border-vnsAccent/30 text-vnsText-primary px-3.5 py-1.5 rounded-vns shadow-md">
                    <p className="font-heading text-[10px] text-vnsAccent font-bold uppercase tracking-wider leading-none">Starting AC Rent</p>
                    <p className="font-heading text-lg font-bold text-vnsText-primary leading-none mt-1">₹{room.price}<span className="text-xs font-normal text-vnsText-secondary font-body">/mo</span></p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow gap-5">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-heading text-2xl font-bold text-vnsText-primary group-hover:text-vnsAccent transition-colors">{room.name}</h3>
                    <p className="font-body text-xs text-vnsText-secondary leading-relaxed">{room.description}</p>
                  </div>

                  {/* Rent Matrix Comparison */}
                  <div className="bg-vnsBg border border-vnsBorder rounded-vns p-4 flex justify-between items-center shadow-inner text-vnsText-primary">
                    <div>
                      <span className="font-body text-[9px] text-vnsAccent uppercase font-bold tracking-wider">AC Rent</span>
                      <p className="font-heading text-lg font-bold text-vnsText-primary mt-0.5">₹{room.price}<span className="text-xs font-normal text-vnsText-secondary font-body">/mo</span></p>
                    </div>
                    <div className="w-[1px] h-8 bg-vnsBorder"></div>
                    <div className="text-right">
                      <span className="font-body text-[9px] text-vnsText-secondary uppercase font-bold tracking-wider">Non-AC Rent</span>
                      <p className="font-heading text-lg font-bold text-vnsText-primary mt-0.5">₹{room.nonAcPrice}<span className="text-xs font-normal text-vnsText-secondary font-body">/mo</span></p>
                    </div>
                  </div>

                  {/* Inclusions list */}
                  <div className="flex flex-col gap-3">
                    <h4 className="font-heading font-bold text-vnsText-primary text-xs uppercase tracking-wider border-b border-vnsBorder/40 pb-1.5">Room Inclusions</h4>
                    <ul className="flex flex-col gap-2">
                      {room.features.map((feat, idx) => (
                        <li key={idx} className="flex gap-2 items-center text-xs text-vnsText-secondary">
                          <Check className="w-3.5 h-3.5 text-vnsAccent shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* WhatsApp Action */}
                  <button 
                    onClick={() => handleWhatsAppInquiry(room.name)}
                    className="w-full flex items-center justify-center gap-2 bg-vnsBg hover:bg-vnsCardHover text-vnsText-primary py-3.5 rounded-vns border border-vnsBorder hover:border-vnsAccent transition-all duration-300 font-heading text-xs font-semibold uppercase tracking-wider mt-auto"
                  >

                    <MessageCircle className="w-4 h-4 text-vnsAccent fill-current" />
                    <span>Inquire Now</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 3. INCLUDED WITH EVERY STAY (Deep Chocolate Background, Inclusions & Billing) - DARK */}
      <section className="py-20 bg-vnsBg text-vnsText-primary border-y border-vnsBorder">
        <div className="max-width-container mx-auto px-5 lg:px-12">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-2">
            <span className="font-heading text-xs font-semibold uppercase tracking-widest text-vnsAccent">Campus Transparency</span>
            <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-vnsText-primary">
              Rent Breakdown & Policies
            </h2>
            <p className="font-body text-xs text-vnsText-secondary leading-relaxed mt-1">
              We maintain absolute transparency. Here is exactly what is covered in your monthly rent and what is billed separately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Included Box (Slides left) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={leftSlideVariants}
              whileHover={{ y: -3, scale: 1.01 }}
              className="bg-vnsSurface border border-vnsBorder rounded-vns p-8 flex flex-col gap-5 shadow-sm transition-all duration-300"
            >
              <h4 className="font-heading font-bold text-vnsText-primary text-lg uppercase tracking-wider border-b border-vnsBorder/40 pb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-vnsAccent" />
                Included In Rent
              </h4>
              <ul className="flex flex-col gap-3 text-xs text-vnsText-secondary">
                <li className="flex gap-3 items-center">
                  <span className="w-2 h-2 rounded-full bg-vnsAccent shrink-0"></span>
                  <span><strong>3 Homestyle Meals Daily</strong> (Breakfast, Lunch, Dinner served hot)</span>
                </li>
                <li className="flex gap-3 items-center">
                  <span className="w-2 h-2 rounded-full bg-vnsAccent shrink-0"></span>
                  <span><strong>High-Speed WiFi</strong> (100 Mbps campus-wide connection)</span>
                </li>
                <li className="flex gap-3 items-center">
                  <span className="w-2 h-2 rounded-full bg-vnsAccent shrink-0"></span>
                  <span><strong>Daily Housekeeping</strong> (Rooms and washrooms cleaned daily)</span>
                </li>
                <li className="flex gap-3 items-center">
                  <span className="w-2 h-2 rounded-full bg-vnsAccent shrink-0"></span>
                  <span><strong>Hot Water & Laundry</strong> (24/7 geysers and weekly laundry cycles)</span>
                </li>
                <li className="flex gap-3 items-center">
                  <span className="w-2 h-2 rounded-full bg-vnsAccent shrink-0"></span>
                  <span><strong>RO Drinking Water</strong> (Industrial filtration cooler on each floor)</span>
                </li>
              </ul>
            </motion.div>

            {/* Excluded Box (Slides right) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={rightSlideVariants}
              whileHover={{ y: -3, scale: 1.01 }}
              className="bg-vnsSurface border border-vnsBorder rounded-vns p-8 flex flex-col gap-5 shadow-sm transition-all duration-300"
            >
              <h4 className="font-heading font-bold text-vnsText-primary text-lg uppercase tracking-wider border-b border-vnsBorder/40 pb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-vnsAccent" />
                Not Included (Extra)
              </h4>
              <div className="flex flex-col gap-4">
                <p className="font-body text-xs text-vnsText-secondary leading-relaxed">
                  <strong>Room Electricity Consumption:</strong> For fairness, all rooms feature an independent digital sub-meter. Common area electricity is covered by us, but you pay only for the units consumed in your specific room.
                </p>
                <div className="bg-vnsBg/50 border border-vnsBorder p-4 rounded-vns">
                  <h5 className="font-heading font-semibold text-xs text-vnsAccent uppercase tracking-wider">Why we do this:</h5>
                  <p className="font-body text-[11px] text-vnsText-secondary leading-relaxed mt-1">
                    This stops students who don't use AC from subsidizing the bills of students who leave ACs running 24/7. It encourages energy saving and guarantees fair pricing.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 4. COMPARE ROOM OPTIONS (Light Sand Background, Clean Row Highlights) - LIGHT */}
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

        {/* Responsive Table Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto overflow-x-auto rounded-vns border border-vnsDark/10 shadow-xl"
        >
          <table className="w-full text-left border-collapse bg-vnsText-primary font-body text-xs text-vnsDark/80 min-w-[600px]">
            <thead>
              <tr className="bg-vnsLight/80 border-b border-vnsDark/15 text-vnsDark font-heading uppercase text-[10px] tracking-widest">
                <th className="p-5">Metric</th>
                <th className="p-5">Triple Sharing</th>
                <th className="p-5">Double Sharing</th>
                <th className="p-5">Single Occupancy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-vnsDark/10">
              <tr className="hover:bg-vnsDark/5 transition-colors duration-150">
                <td className="p-5 font-semibold text-vnsDark">AC Rent (Monthly)</td>
                <td className="p-5">₹6,500</td>
                <td className="p-5">₹8,500</td>
                <td className="p-5">₹12,000</td>
              </tr>
              <tr className="hover:bg-vnsDark/5 transition-colors duration-150">
                <td className="p-5 font-semibold text-vnsDark">Non-AC Rent (Monthly)</td>
                <td className="p-5">₹5,500</td>
                <td className="p-5">₹7,200</td>
                <td className="p-5">₹10,000</td>
              </tr>
              <tr className="hover:bg-vnsDark/5 transition-colors duration-150">
                <td className="p-5 font-semibold text-vnsDark">Privacy Level</td>
                <td className="p-5">Shared (3 Residents)</td>
                <td className="p-5">Moderate (2 Residents)</td>
                <td className="p-5">High (Private Room)</td>
              </tr>
              <tr className="hover:bg-vnsDark/5 transition-colors duration-150">
                <td className="p-5 font-semibold text-vnsDark">Study Desk</td>
                <td className="p-5">Personal desk per resident</td>
                <td className="p-5">Personal desk per resident</td>
                <td className="p-5">Executive desk & workspace</td>
              </tr>
              <tr className="hover:bg-vnsDark/5 transition-colors duration-150">
                <td className="p-5 font-semibold text-vnsDark">Wardrobe Size</td>
                <td className="p-5">Personal locker cabinet</td>
                <td className="p-5">Personal locker cabinet</td>
                <td className="p-5">Double-door steel wardrobe</td>
              </tr>
              <tr className="hover:bg-vnsDark/5 transition-colors duration-150">
                <td className="p-5 font-semibold text-vnsDark">AC Unit type</td>
                <td className="p-5">Split AC (1.5 Ton)</td>
                <td className="p-5">Split AC (1.5 Ton)</td>
                <td className="p-5">Split AC (1.0 Ton)</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
        </div>
      </section>

      {/* 5. VIEW GALLERY CTA (Deep Chocolate/Glow Banner) - DARK */}
      <section className="py-16 bg-gradient-to-br from-vnsSurface to-vnsBg border-t border-vnsBorder relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.15] pointer-events-none"></div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textEntranceVariants}
          className="max-width-container mx-auto px-5 lg:px-12 text-center flex flex-col items-center gap-6 relative z-10 max-w-5xl"
        >
          <div className="w-12 h-12 rounded-full bg-vnsAccent/10 border border-vnsAccent/30 flex items-center justify-center shrink-0">
            <Image className="w-6 h-6 text-vnsAccent" />
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight text-vnsText-primary leading-tight">
            Want to See More of the VNS Environment?
          </h2>
          <p className="font-body text-xs sm:text-sm text-vnsText-secondary leading-relaxed max-w-xl">
            Browse high-resolution photographs of our study areas, dining room gatherings, biometric gates, and festival celebrations.
          </p>

          {/* 3 Preview Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl my-4">
            <div className="h-48 rounded-vns overflow-hidden border border-vnsBorder/40 shadow-lg relative group">
              <img src={lobbyImg} alt="Lobby Area" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-3 left-3 bg-vnsBg/90 backdrop-blur-sm border border-vnsAccent/30 px-3 py-1 rounded-vns text-[10px] text-vnsText-primary font-heading font-semibold shadow-sm">
                Reception Lobby
              </div>
            </div>
            <div className="h-48 rounded-vns overflow-hidden border border-vnsBorder/40 shadow-lg relative group">
              <img src={holiImg} alt="Holi Celebration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-3 left-3 bg-vnsBg/90 backdrop-blur-sm border border-vnsAccent/30 px-3 py-1 rounded-vns text-[10px] text-vnsText-primary font-heading font-semibold shadow-sm">
                Holi Celebration
              </div>
            </div>
            <div className="h-48 rounded-vns overflow-hidden border border-vnsBorder/40 shadow-lg relative group">
              <img src={diningImg} alt="Dining Area" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-3 left-3 bg-vnsBg/90 backdrop-blur-sm border border-vnsAccent/30 px-3 py-1 rounded-vns text-[10px] text-vnsText-primary font-heading font-semibold shadow-sm">
                Dining Hall
              </div>
            </div>
          </div>

          <Link 
            to="/gallery"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-vnsAccent to-[#D4A853] hover:from-vnsAccent hover:to-[#C29546] text-vnsBg px-8 py-3.5 rounded-vns font-heading font-bold text-sm tracking-wider hover:scale-105 active:scale-95 transition-all shadow-lg uppercase"
          >
            Explore Photo Gallery
            <ArrowRight className="w-4 h-4 text-vnsBg" />
          </Link>
        </motion.div>
      </section>

      {/* 6. HOW TO CONFIRM YOUR STAY (Light Sand Background, Timeline Step-by-Step) - LIGHT */}
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
            {timelineSteps.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="bg-vnsText-primary border border-vnsDark/10 rounded-vns p-6 flex flex-col gap-4 relative shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-heading font-extrabold text-2xl text-vnsDark/15 leading-none">{item.step}</span>
                    <div className="w-9 h-9 rounded-full bg-vnsLight/60 border border-vnsDark/5 flex items-center justify-center text-vnsDark shadow-inner">
                      <IconComponent className="w-4 h-4 text-vnsDark" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-vnsDark uppercase tracking-wider">{item.title}</h4>
                    <p className="font-body text-xs text-vnsDark/70 mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION (Deep Chocolate Background) - DARK */}
      <section className="py-20 bg-vnsBg border-t border-vnsBorder relative overflow-hidden">
        <div className="max-width-container mx-auto px-5 lg:px-12 text-center flex flex-col items-center gap-6 relative z-10 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textEntranceVariants}
            className="flex flex-col items-center gap-6"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-vnsText-primary leading-tight">
              Ready to Lock Your Accommodation?
            </h2>
            <p className="font-body text-xs sm:text-sm text-vnsText-secondary leading-relaxed max-w-xl">
              Give your son a secure, clean, and disciplined environment close to Parul University and Sumandeep Vidyapeeth. Secure your configurations today.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto">
              <button 
                onClick={() => handleWhatsAppInquiry("General Room Inquiry")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-vnsAccent to-[#D4A853] hover:from-[#C9933A] hover:to-[#B6842F] text-vnsBg px-8 py-3.5 rounded-vns font-heading text-sm font-semibold tracking-wider hover:scale-105 active:scale-95 transition-all shadow-md uppercase"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Book A Visit</span>
              </button>
              <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent hover:bg-vnsBg/30 text-vnsText-primary px-8 py-3.5 rounded-vns border border-vnsText-primary/20 transition-colors uppercase font-heading text-sm font-semibold tracking-wider"
              >
                <Phone className="w-4 h-4 text-vnsAccent" />
                <span>Call Warden Uncle</span>
              </a>
            </div>
            <p className="font-body text-[10px] text-vnsText-secondary uppercase tracking-widest mt-2 animate-pulse">
              ⚠️ Limited Seats remaining for the upcoming semester
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
