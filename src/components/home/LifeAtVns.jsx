import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function LifeAtVns({ 
  lobbyImg, 
  sportsImg, 
  holiImg, 
  diningImg, 
  communityHighlights 
}) {
  return (
    <section id="life-at-vns" className="pt-8 pb-20 bg-vnsLight text-vnsDark scroll-mt-20">
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
          {/* Left Col: Vertical Sports Image */}
          <div className="lg:col-span-4 h-96 rounded-vns overflow-hidden border border-vnsDark/10 shadow-md hidden lg:block">
            <img 
              src={sportsImg} 
              alt="Students playing sports at VNS" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Middle Col: Stack of 2 Images (Holi & Dining) */}
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

          {/* Right Col: Activities Checklist */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-4 py-2">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-vnsDark border-b border-vnsDark/10 pb-2 mb-2">Our Community Highlights</h4>
            <ul className="flex flex-col gap-4">
              {communityHighlights.map((activity, idx) => (
                <li key={idx} className="flex gap-3 items-center text-sm font-semibold text-vnsDark/80">
                  <CheckCircle className="w-5 h-5 text-vnsDark/80 shrink-0" />
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
