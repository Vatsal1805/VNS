import BentoCard from '../BentoCard';
import { MapPin, Users, Shield, Award, Check } from 'lucide-react';

export default function BentoSection({ 
  bentoCommute, 
  celebrationTags, 
  valueInclusions 
}) {
  return (
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
          {/* Card 1: Location */}
          <BentoCard className="md:col-span-2 text-vnsText-primary">
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
              {bentoCommute.map((item, idx) => (
                <div key={idx} className="bg-vnsBg border border-vnsBorder rounded-vns p-3 text-center shadow-sm">
                  <p className="font-heading font-extrabold text-xs text-vnsText-primary leading-none">{item.dist}</p>
                  <p className="font-body text-[10px] font-bold text-vnsText-secondary mt-1">{item.name}</p>
                  <p className="font-body text-[9px] text-vnsAccent uppercase font-bold tracking-tight mt-0.5">{item.time}</p>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Card 2: Community */}
          <BentoCard className="md:col-span-1 text-vnsText-primary">
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
              {celebrationTags.map((tag, idx) => (
                <span key={idx} className="bg-vnsAccent/10 border border-vnsAccent/20 text-vnsAccent font-heading text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* Card 3: Safety */}
          <BentoCard className="md:col-span-1 text-vnsText-primary">
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

          {/* Card 4: Value */}
          <BentoCard className="md:col-span-2 text-vnsText-primary">
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
                  {valueInclusions.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
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
  );
}
