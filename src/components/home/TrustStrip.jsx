import { motion } from 'framer-motion';
import { Wifi, Shield, MapPin, Users, Star, Award } from 'lucide-react';
import CountUp from '../CountUp';

export default function TrustStrip({ googleRating }) {
  return (
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
              <CountUp value={googleRating.score} suffix="★" />
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
  );
}
