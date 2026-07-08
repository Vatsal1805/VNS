import { motion } from 'framer-motion';
import DynamicIcon from '../DynamicIcon';

export default function FoodMessTimings({ 
  thaliImg, 
  foodTimings, 
  whatWeOffer 
}) {
  return (
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
              Our in-house mess serves nutritious, home-style vegetarian meals prepared fresh every day. We source fresh, local ingredients and maintain the highest cleanliness standards — from warm breakfast to healthy dinners, every meal is designed to feel like home cooking and keep students energised and focused.
            </p>

            {/* Time Clocks 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4">
              {foodTimings.map((meal, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="bg-vnsSurface border border-vnsBorder rounded-vns p-5 flex flex-col gap-3 items-start hover:border-vnsAccent/30 hover:shadow-md transition-all duration-300 shadow-sm cursor-default"
                >
                  <DynamicIcon name={meal.icon} className="w-5 h-5 text-vnsAccent" />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-vnsText-primary uppercase tracking-wider">{meal.title}</h4>
                    <p className="font-body text-xs text-vnsText-secondary mt-1">{meal.time}</p>
                  </div>
                </motion.div>
              ))}
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
                {whatWeOffer.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-vnsAccent shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
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
                  Clean & Healthy Mess
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
