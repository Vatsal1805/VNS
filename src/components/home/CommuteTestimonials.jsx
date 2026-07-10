import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Phone } from 'lucide-react';
import DynamicIcon from '../DynamicIcon';
import CountUp from '../CountUp';

export default function CommuteTestimonials({ 
  contactInfo, 
  googleRating, 
  googleReviews, 
  commuteLandmarks, 
  leftSlideVariants, 
  rightSlideVariants 
}) {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % googleReviews.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [googleReviews]);

  return (
    <section className="py-20 bg-vnsLight text-vnsDark border-t border-vnsDark/10">
      <div className="max-width-container mx-auto px-5 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Location Portal (7/12 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          
          {/* Header */}
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
          
          {/* Live Clickable Google Map */}
          <a 
            href={contactInfo.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full h-[320px] rounded-vns overflow-hidden border border-vnsDark/10 shadow-md group cursor-pointer"
          >
            <iframe
              title="VNS Hostel Location Map"
              width="100%"
              height="100%"
              style={{ border: 0, pointerEvents: 'none' }}
              loading="lazy"
              src="https://maps.google.com/maps?q=VNS%20Boys%20Hostel,%20Waghodia%20Road,%20Vadodara,%20Gujarat&t=&z=15&ie=UTF8&iwloc=&output=embed"
            ></iframe>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
            <div className="absolute top-3 left-3 bg-vnsBg/90 backdrop-blur-sm border border-vnsAccent/30 px-3 py-1 rounded-vns text-[10px] text-vnsText-primary font-heading font-semibold shadow-sm transition-transform group-hover:scale-105">
               VNS Boys Hostel Location
            </div>
            <div className="absolute bottom-3 right-3 bg-vnsAccent text-vnsBg px-3.5 py-1.5 rounded-vns text-[10px] font-heading font-bold shadow-md transition-all group-hover:scale-105 group-hover:bg-vnsBtnHover flex items-center gap-1">
               Open in Google Maps ↗
            </div>
          </a>

          {/* Landmark Cards 2x2 Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={leftSlideVariants}
            className="grid grid-cols-2 gap-4"
          >
            {commuteLandmarks.map((landmark) => {
              return (
                <div
                  key={landmark.index}
                  className="group p-5 rounded-vns border border-vnsDark/10 bg-vnsText-primary/60 flex flex-col gap-3 transition-all duration-200 shadow-sm hover:border-vnsDark hover:bg-vnsText-primary/80 hover:translate-y-[-2px] hover:shadow-md cursor-default select-none"
                >
                  <DynamicIcon 
                    name={landmark.icon} 
                    className="w-6 h-6 text-vnsDark/60 group-hover:text-vnsDark transition-colors duration-200" 
                  />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-vnsDark leading-tight">{landmark.name}</h4>
                    <p className="font-body text-xs text-vnsDark/60 mt-1 font-semibold">{landmark.distance}</p>
                  </div>
                </div>
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
                <CountUp value={googleRating.score} />★ Google Ratings
              </h4>
              <p className="font-body text-xs text-vnsDark/60 mt-1.5 font-semibold">
                Based on <CountUp value={googleRating.reviewsCount} />+ verified student reviews
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
                    "{googleReviews[currentReviewIndex].review}"
                  </p>
                </div>
                <div className="border-t border-vnsDark/5 pt-3.5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-vnsLight/60 border border-vnsDark/10 flex items-center justify-center font-heading font-extrabold text-xs text-vnsDark shadow-inner">
                    {googleReviews[currentReviewIndex].name.split(' ').map(n=>n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs text-vnsDark">{googleReviews[currentReviewIndex].name}</h4>
                    <p className="font-body text-[10px] text-vnsDark/60 mt-0.5">{googleReviews[currentReviewIndex].college}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Call Us button */}
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex items-center justify-center gap-3 bg-vnsDark hover:bg-[#4E2813] text-[#F5EDD8] py-4 rounded-vns shadow-lg font-heading font-bold tracking-wider text-sm uppercase transition-all duration-200 hover:scale-[1.01]"
          >
            <Phone className="w-4 h-4 text-vnsAccent" />
            <span>Call Us</span>
          </a>

        </motion.div>
      </div>
    </section>
  );
}
